<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useArticles } from '../composables/useArticles.js'
import { useAdminAuth } from '../composables/useAdminAuth.js'
import { useTestimonials } from '../composables/useTestimonials.js'

const router = useRouter()
const { articles, addArticle, updateArticle, deleteArticle } = useArticles()
const { logout } = useAdminAuth()

/* ===== TAB: 'artikel' | 'testimoni' ===== */
const activeTab = ref('artikel')

function setTab(tab) {
  activeTab.value = tab
  closeMenu()
  closeForm()
  closeTestiForm() // dipakai untuk tutup form Edit kalau sedang terbuka
}

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

/* ---------- menu titik tiga (dipakai artikel & testimoni) ---------- */
const openMenuId = ref(null)

function toggleMenu(id) {
  openMenuId.value = openMenuId.value === id ? null : id
}

function closeMenu() {
  openMenuId.value = null
}

function handleClickOutside(event) {
  if (!event.target.closest('.row-menu')) {
    closeMenu()
  }
}

/* ===== KELOLA TESTIMONI ===== */
// Sumber data yang SAMA dengan halaman testimoni publik — apapun yang
// ditambah/diubah/dihapus di sini langsung tercermin di halaman publik.
const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useTestimonials()

function emptyTestiForm() {
  return {
    name: '',
    role: '',
    company: '',
    photo: '',
    rating: 5,
    quote: ''
  }
}

const testiForm = ref(emptyTestiForm())
const showTestiForm = ref(false)
const editingTestiId = ref(null)
const testiHoverRating = ref(0)

const canSubmitTesti = computed(() => {
  return (
    testiForm.value.name.trim().length >= 2 &&
    testiForm.value.role.trim().length >= 2 &&
    testiForm.value.company.trim().length >= 2 &&
    testiForm.value.rating >= 1 &&
    testiForm.value.quote.trim().length >= 10
  )
})

function resetTestiForm() {
  testiForm.value = emptyTestiForm()
  editingTestiId.value = null
  testiHoverRating.value = 0
}

function openEditTestiForm(t) {
  editingTestiId.value = t.id
  testiForm.value = {
    name: t.name,
    role: t.role,
    company: t.company,
    photo: t.photo || '',
    rating: t.rating,
    quote: t.quote
  }
  showTestiForm.value = true
  closeMenu()
}

function closeTestiForm() {
  showTestiForm.value = false
  resetTestiForm()
}

function submitTestiForm() {
  if (!canSubmitTesti.value) return

  const payload = {
    name: testiForm.value.name.trim(),
    role: testiForm.value.role.trim(),
    company: testiForm.value.company.trim(),
    photo: testiForm.value.photo.trim() || null,
    rating: testiForm.value.rating,
    quote: testiForm.value.quote.trim()
  }

  if (editingTestiId.value) {
    updateTestimonial(editingTestiId.value, payload)
  } else {
    addTestimonial(payload)
  }

  closeTestiForm()
}

function handleDeleteTesti(id) {
  closeMenu()
  if (confirm('Hapus ulasan ini?')) {
    deleteTestimonial(id)
  }
}

function getInitials(name) {
  if (!name) return '?'
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function formatTestiTime(ts) {
  if (!ts) return ''
  const d = new Date(ts)
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
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

      <!-- HEADER -->
      <header class="admin-header">
        <div>
          <span class="eyebrow">Admin Panel</span>
          <h1>Dashboard Admin</h1>
        </div>
        <button class="btn btn-outline" @click="handleLogout">Keluar</button>
      </header>

      <!-- TABS -->
      <nav class="admin-tabs">
        <button
          type="button"
          class="admin-tab"
          :class="{ 'admin-tab--active': activeTab === 'artikel' }"
          @click="setTab('artikel')"
        >
          Artikel
          <span class="admin-tab__count">{{ articles.length }}</span>
        </button>
        <button
          type="button"
          class="admin-tab"
          :class="{ 'admin-tab--active': activeTab === 'testimoni' }"
          @click="setTab('testimoni')"
        >
          Testimoni
          <span class="admin-tab__count">{{ testimonials.length }}</span>
        </button>
      </nav>

      <!-- ================= TAB: ARTIKEL ================= -->
      <div v-if="activeTab === 'artikel'">
        <div class="admin-toolbar">
          <p>{{ articles.length }} artikel total</p>
          <button class="btn btn-primary" @click="showForm ? closeForm() : openCreateForm()">
            {{ showForm ? 'Tutup form' : '+ Tambah Artikel' }}
          </button>
        </div>

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
                <button type="button" class="menu-item" @click="openEditForm(a)">Edit</button>
                <button type="button" class="menu-item menu-item-danger" @click="handleDelete(a.id)">Hapus</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= TAB: TESTIMONI ================= -->
      <div v-if="activeTab === 'testimoni'">
        <div class="admin-toolbar">
          <p>{{ testimonials.length }} ulasan total · penambahan ulasan baru dilakukan lewat halaman testimoni publik</p>
        </div>

        <form v-if="showTestiForm" @submit.prevent="submitTestiForm" class="article-form">
          <h2 class="form-title">Edit Testimoni</h2>

          <div class="testi-form-grid">
            <label>
              Nama Lengkap
              <input v-model.trim="testiForm.name" type="text" required placeholder="Contoh: Adrian Tan" />
            </label>

            <label>
              Jabatan / Role
              <input v-model.trim="testiForm.role" type="text" required placeholder="Contoh: Co-Founder" />
            </label>
          </div>

          <label>
            Perusahaan / Brand
            <input v-model.trim="testiForm.company" type="text" required placeholder="Contoh: FlashCart" />
          </label>

          <label>
            URL Foto (opsional — kosongkan untuk pakai avatar inisial)
            <input v-model.trim="testiForm.photo" type="url" placeholder="https://... atau /testimoni/namafile.jpg" />
          </label>

          <div v-if="testiForm.photo" class="testi-photo-preview">
            <img :src="testiForm.photo" :alt="testiForm.name" />
            <span>Preview foto</span>
          </div>

          <label>
            Rating
            <div class="bi-form__stars" role="radiogroup" aria-label="Pilih rating">
              <button
                v-for="n in 5"
                :key="n"
                type="button"
                class="bi-form-star"
                :class="{ 'bi-form-star--active': n <= (testiHoverRating || testiForm.rating) }"
                :aria-label="`${n} bintang`"
                @click="testiForm.rating = n"
                @mouseenter="testiHoverRating = n"
                @mouseleave="testiHoverRating = 0"
              >★</button>
            </div>
          </label>

          <label>
            Ulasan / Cerita
            <textarea v-model.trim="testiForm.quote" rows="4" required placeholder="Ceritakan pengalaman klien bekerja sama dengan kami..."></textarea>
          </label>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" :disabled="!canSubmitTesti">
              Simpan Perubahan
            </button>
            <button type="button" class="btn btn-outline" @click="closeTestiForm">Batal</button>
          </div>
        </form>

        <div class="article-table">
          <div v-if="testimonials.length === 0" class="empty-state">
            Belum ada ulasan.
          </div>

          <div v-for="t in testimonials" :key="t.id" class="article-row testi-row">
            <div class="testi-avatar">
              <img v-if="t.photo" :src="t.photo" :alt="t.name" />
              <span v-else class="testi-initials">{{ getInitials(t.name) }}</span>
            </div>

            <div class="row-info">
              <strong>{{ t.name }}</strong>
              <span class="row-date">{{ t.role }}, {{ t.company }} · {{ formatTestiTime(t.createdAt) }}</span>
              <p class="testi-quote">{{ t.quote }}</p>
              <span class="testi-stars">{{ '★'.repeat(t.rating || 0) }}{{ '☆'.repeat(5 - (t.rating || 0)) }}</span>
            </div>

            <div class="row-menu">
              <button
                class="menu-trigger"
                type="button"
                @click.stop="toggleMenu('testi-' + t.id)"
                :aria-expanded="openMenuId === 'testi-' + t.id"
                aria-label="Menu ulasan"
              >⋮</button>

              <div v-if="openMenuId === 'testi-' + t.id" class="menu-dropdown">
                <button type="button" class="menu-item" @click="openEditTestiForm(t)">Edit</button>
                <button type="button" class="menu-item menu-item-danger" @click="handleDeleteTesti(t.id)">
                  Hapus
                </button>
              </div>
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
  --color-orange: #FB9F37;
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
  margin-bottom: 24px;
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

h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 26px;
  font-weight: 600;
}

/* ===== TABS ===== */
.admin-tabs {
  display: flex;
  gap: 6px;
  margin-bottom: 24px;
  padding: 4px;
  background: #f0efeb;
  border-radius: 12px;
  width: fit-content;
}

.admin-tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: none;
  border-radius: 9px;
  background: transparent;
  color: var(--color-text-secondary);
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background .2s ease, color .2s ease, box-shadow .2s ease;
}

.admin-tab:hover {
  color: var(--color-text);
}

.admin-tab--active {
  background: var(--color-surface);
  color: var(--color-text);
  box-shadow: 0 2px 8px rgba(26, 26, 26, 0.08);
}

.admin-tab__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  background: rgba(26, 26, 26, 0.06);
  font-size: 11px;
  font-weight: 700;
}

.admin-tab--active .admin-tab__count {
  background: rgba(235, 43, 12, 0.12);
  color: var(--color-red);
}

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

label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-secondary);
}

input, select, textarea {
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 13.5px;
  color: var(--color-text);
  resize: vertical;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--color-red);
}

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
.btn:disabled { opacity: .55; cursor: not-allowed; transform: none; }
.btn-primary { background: var(--color-red); color: #fff; align-self: flex-start; }
.btn-primary:hover:not(:disabled) { opacity: .93; }
.btn-outline {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  flex-shrink: 0;
}
.btn-outline:hover {
  border-color: var(--color-red);
  color: var(--color-red);
}

.article-table {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

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

.row-thumb {
  width: 64px;
  height: 48px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  display: block;
}

.row-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 13px;
  min-width: 0;
}
.row-info strong {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.35;
}
.row-category {
  color: var(--color-deep-orange);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}
.row-date {
  color: var(--color-text-secondary);
  font-size: 11px;
}

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

/* Testimoni: form fields */
.testi-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.testi-photo-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: var(--color-text-secondary);
  margin-top: -4px;
}
.testi-photo-preview img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--color-border);
}
.bi-form__stars { display: flex; gap: 4px; }
.bi-form-star {
  background: none;
  border: none;
  font-size: 24px;
  color: var(--color-border);
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
  transition: color .15s ease, transform .15s ease;
}
.bi-form-star:hover,
.bi-form-star--active {
  color: var(--color-orange);
  transform: scale(1.1);
}

/* Testimoni: list row */
.testi-row {
  grid-template-columns: 48px 1fr auto;
  align-items: flex-start;
}

.testi-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: #E75119;
  display: flex;
  align-items: center;
  justify-content: center;
}
.testi-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.testi-initials {
  color: #fff;
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 700;
}
.testi-quote {
  margin: 4px 0 0;
  font-size: 12.5px;
  color: var(--color-text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.45;
}
.testi-stars {
  font-size: 12px;
  color: #FB9F37;
  margin-top: 2px;
}
.empty-state {
  padding: 24px;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 13px;
  border: 1px dashed var(--color-border);
  border-radius: 10px;
}

@media (max-width: 768px) {
  .admin-page { padding: 100px 16px 32px; }
}

@media (max-width: 640px) {
  .testi-form-grid { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .admin-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  h1 { font-size: 21px; }

  .admin-tabs { width: 100%; }
  .admin-tab { flex: 1; justify-content: center; }

  .admin-toolbar { flex-direction: column; align-items: flex-start; gap: 10px; }
  .admin-toolbar .btn { align-self: stretch; text-align: center; }

  .form-actions { flex-direction: column; align-items: stretch; }
  .form-actions .btn { align-self: stretch; text-align: center; }

  .article-row {
    grid-template-columns: 56px 1fr auto;
    padding: 12px 14px;
  }
  .testi-row { grid-template-columns: 44px 1fr auto; }
  .row-thumb { width: 56px; height: 44px; }
  .row-info { font-size: 12.5px; }
  .row-info strong { font-size: 13px; }
}

@media (max-width: 400px) {
  .admin-page { padding: 92px 12px 28px; }
  .article-row { padding: 10px 12px; column-gap: 10px; }
  .row-thumb { width: 50px; height: 40px; }
}
</style>