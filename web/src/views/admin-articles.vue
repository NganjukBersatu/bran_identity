<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useArticles } from '../composables/useArticles.js'
import { useAdminAuth } from '../composables/useAdminAuth.js'

const router = useRouter()
const { articles, addArticle, updateArticle, deleteArticle } = useArticles()
const { logout } = useAdminAuth()

const categories = ['Technology', 'Software Development', 'Business', 'Tips & Insight']

function emptyForm() {
  return {
    title: '',
    category: categories[0],
    excerpt: '',
    image: '',
    readTime: '5 min read',
    content: ''
  }
}

const form = ref(emptyForm())
const showForm = ref(false)

// null = mode "tambah artikel baru", angka = mode "edit artikel dengan id ini"
const editingId = ref(null)

function resetForm() {
  form.value = emptyForm()
  editingId.value = null
}

function openCreateForm() {
  resetForm()
  showForm.value = true
}

function openEditForm(article) {
  editingId.value = article.id
  form.value = {
    title: article.title,
    category: article.category,
    excerpt: article.excerpt,
    image: article.image,
    readTime: article.readTime,
    // gabungkan lagi array paragraf jadi teks per baris supaya bisa diedit di textarea
    content: (article.content || []).join('\n')
  }
  showForm.value = true
  closeMenu()
}

function closeForm() {
  showForm.value = false
  resetForm()
}

function handleSubmit() {
  const payload = {
    title: form.value.title,
    category: form.value.category,
    excerpt: form.value.excerpt,
    image: form.value.image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85',
    readTime: form.value.readTime,
    // setiap baris baru di textarea jadi satu paragraf,
    // sama seperti format di data/articles.js
    content: form.value.content
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
  }

  if (editingId.value) {
    updateArticle(editingId.value, payload)
  } else {
    addArticle(payload)
  }

  closeForm()
}

function handleDelete(id) {
  closeMenu()
  if (confirm('Hapus artikel ini?')) {
    deleteArticle(id)
  }
}

function handleLogout() {
  logout()
  router.push('/admin/login')
}

/* ---------- menu titik tiga (Edit / Hapus) per baris artikel ---------- */
const openMenuId = ref(null)

function toggleMenu(id) {
  openMenuId.value = openMenuId.value === id ? null : id
}

function closeMenu() {
  openMenuId.value = null
}

// klik di luar menu manapun otomatis menutup menu yang sedang terbuka
function handleClickOutside(event) {
  if (!event.target.closest('.row-menu')) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <main class="admin-page">
    <div class="admin-container">

      <header class="admin-header">
        <div>
          <span class="eyebrow">Admin Panel</span>
          <h1>Kelola Artikel Blog</h1>
        </div>
        <button class="btn btn-outline" @click="handleLogout">Keluar</button>
      </header>

      <div class="admin-toolbar">
        <p>{{ articles.length }} artikel total</p>
        <button class="btn btn-primary" @click="showForm ? closeForm() : openCreateForm()">
          {{ showForm ? 'Tutup form' : '+ Tambah Artikel' }}
        </button>
      </div>

      <!-- FORM TAMBAH / EDIT ARTIKEL -->
      <form v-if="showForm" @submit.prevent="handleSubmit" class="article-form">
        <h2 class="form-title">
          {{ editingId ? 'Edit Artikel' : 'Tambah Artikel Baru' }}
        </h2>

        <label>
          Judul Artikel
          <input v-model="form.title" type="text" required placeholder="Judul artikel..." />
        </label>

        <label>
          Kategori
          <select v-model="form.category" required>
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
        </label>

        <label>
          Ringkasan (excerpt)
          <textarea v-model="form.excerpt" rows="2" required placeholder="Ringkasan singkat artikel..."></textarea>
        </label>

        <label>
          URL Gambar
          <input v-model="form.image" type="url" placeholder="https://..." />
        </label>

        <label>
          Estimasi waktu baca
          <input v-model="form.readTime" type="text" placeholder="5 min read" />
        </label>

        <label>
          Isi Artikel (satu paragraf per baris)
          <textarea v-model="form.content" rows="6" required placeholder="Paragraf pertama...&#10;Paragraf kedua...&#10;dst."></textarea>
        </label>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary">
            {{ editingId ? 'Simpan Perubahan' : 'Simpan Artikel' }}
          </button>
          <button type="button" class="btn btn-outline" @click="closeForm">Batal</button>
        </div>
      </form>

      <!-- LIST ARTIKEL -->
      <div class="article-table">
        <div v-for="a in articles" :key="a.id" class="article-row">
          <router-link :to="`/blog/${a.id}`" class="row-thumb-link" title="Lihat artikel">
            <img :src="a.image" :alt="a.title" class="row-thumb" />
          </router-link>
          <div class="row-info">
            <span class="row-category">{{ a.category }}</span>
            <strong>{{ a.title }}</strong>
            <span class="row-date">{{ a.date }} · {{ a.readTime }}</span>
          </div>

          <div class="row-menu">
            <button
              class="menu-trigger"
              type="button"
              @click.stop="toggleMenu(a.id)"
              :aria-expanded="openMenuId === a.id"
              aria-label="Menu artikel"
            >⋮</button>

            <div v-if="openMenuId === a.id" class="menu-dropdown">
              <button type="button" class="menu-item" @click="openEditForm(a)">
                Edit
              </button>
              <button type="button" class="menu-item menu-item-danger" @click="handleDelete(a.id)">
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped>
.admin-page {
  --color-red: #EB2B0C;
  --color-deep-orange: #E75119;
  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-secondary: #5F5E5A;
  --color-border: #E5E3DC;
  --font-heading: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;

  min-height: 100vh;
  padding: 120px 24px 40px;
  background: var(--color-bg);
}

.admin-container { max-width: 860px; margin: 0 auto; }

.admin-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-border);
}

.eyebrow {
  display: inline-block;
  margin-bottom: 6px;
  color: var(--color-deep-orange);
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .09em;
  text-transform: uppercase;
}

h1 { margin: 0; font-family: var(--font-heading); font-size: 26px; font-weight: 600; }

.admin-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 13px;
  color: var(--color-text-secondary);
}

.article-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 30px;
  padding: 24px;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--color-surface);
}

.form-title {
  margin: 0 0 2px;
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
}

label { display: flex; flex-direction: column; gap: 6px; font-size: 12px; font-weight: 600; color: var(--color-text-secondary); }

input, select, textarea {
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 13.5px;
  color: var(--color-text);
  resize: vertical;
}

input:focus, select:focus, textarea:focus { outline: none; border-color: var(--color-red); }

.form-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-heading);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity .2s ease, transform .2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: var(--color-red); color: #fff; align-self: flex-start; }
.btn-primary:hover { opacity: .93; }
.btn-outline { background: transparent; border: 1px solid var(--color-border); color: var(--color-text); flex-shrink: 0; }
.btn-outline:hover { border-color: var(--color-red); color: var(--color-red); }

.article-table { display: flex; flex-direction: column; gap: 10px; }

.article-row {
  display: grid;
  grid-template-columns: 64px 1fr auto;
  align-items: center;
  gap: 14px;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-surface);
}

.row-thumb-link {
  display: block;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity .2s ease;
}
.row-thumb-link:hover { opacity: .8; }

.row-thumb { width: 64px; height: 48px; object-fit: cover; border-radius: 6px; flex-shrink: 0; display: block; }

.row-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 13px;
  min-width: 0; /* penting: biar teks bisa wrap/truncate, tidak mendorong kolom lain */
}
.row-info strong {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.35;
}
.row-category { color: var(--color-deep-orange); font-size: 10px; font-weight: 700; text-transform: uppercase; }
.row-date { color: var(--color-text-secondary); font-size: 11px; }

/* ===== Menu titik tiga (Edit / Hapus) ===== */
.row-menu {
  position: relative;
  flex-shrink: 0;
}

.menu-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: transparent;
  color: var(--color-text-secondary);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: background .2s ease, border-color .2s ease, color .2s ease;
}
.menu-trigger:hover,
.menu-trigger[aria-expanded="true"] {
  border-color: var(--color-red);
  color: var(--color-red);
  background: rgba(235, 43, 12, .06);
}

.menu-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  min-width: 140px;
  padding: 6px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-surface);
  box-shadow: 0 12px 28px rgba(26, 26, 26, .12);
}

.menu-item {
  padding: 9px 12px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 13px;
  text-align: left;
  cursor: pointer;
  transition: background .15s ease, color .15s ease;
}
.menu-item:hover { background: rgba(26, 26, 26, .05); }
.menu-item-danger { color: var(--color-red); }
.menu-item-danger:hover { background: rgba(235, 43, 12, .08); }

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .admin-page { padding: 100px 16px 32px; }
}

@media (max-width: 560px) {
  .admin-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  h1 { font-size: 21px; }

  .admin-toolbar { flex-direction: column; align-items: flex-start; gap: 10px; }
  .admin-toolbar .btn { align-self: stretch; text-align: center; }

  .form-actions { flex-direction: column; align-items: stretch; }
  .form-actions .btn { align-self: stretch; text-align: center; }

  .article-row {
    grid-template-columns: 56px 1fr auto;
    padding: 12px 14px;
  }
  .row-thumb { width: 56px; height: 44px; }
  .row-info { font-size: 12.5px; }
  .row-info strong { font-size: 13px; }
  .menu-dropdown { min-width: 130px; }
}

@media (max-width: 400px) {
  .admin-page { padding: 92px 12px 28px; }
  .article-row { padding: 10px 12px; column-gap: 10px; }
  .row-thumb { width: 50px; height: 40px; }
}
</style>