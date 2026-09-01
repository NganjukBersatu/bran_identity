import { ref, watch } from 'vue'
import { articles as seedArticles } from '../data/articles.js'

// =========================================================
// Artikel bawaan (seed) dari data/articles.js digabung dengan
// artikel yang ditambahkan admin lewat form, yang disimpan di
// localStorage supaya tetap ada walau halaman di-refresh.
//
// Ini simulasi database di sisi browser. Kalau nanti sudah ada
// backend + database beneran, ganti addArticle()/updateArticle()/
// deleteArticle() di bawah dengan pemanggilan API (fetch/axios ke server).
// =========================================================

const STORAGE_KEY = 'bi_admin_articles'
const seedIds = new Set(seedArticles.map((a) => a.id))

function loadStoredArticles() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('Gagal membaca artikel tersimpan:', e)
    return []
  }
}

const articles = ref([...seedArticles, ...loadStoredArticles()])

watch(
  articles,
  (value) => {
    // hanya artikel tambahan/yang sudah diubah (bukan seed asli) yang
    // disimpan ke localStorage. Kalau seed pernah diedit, dia otomatis
    // "lulus" dari seedIds check karena kita simpan berdasarkan id saja
    // — jadi kalau seed diedit, perubahan tetap tersimpan sebagai
    // override dengan id yang sama.
    const customArticles = value.filter((a) => !seedIds.has(a.id))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customArticles))
  },
  { deep: true }
)

function addArticle(newArticle) {
  const nextId =
    articles.value.length > 0
      ? Math.max(...articles.value.map((a) => a.id)) + 1
      : 1

  articles.value.unshift({
    id: nextId,
    date: new Date().toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    featured: false,
    ...newArticle
  })
}

// PERBAIKAN: function ini sebelumnya tidak ada sama sekali di file,
// padahal dipanggil dari AdminDashboard.vue (handleSubmit) saat mode
// edit — itu sebabnya muncul error "updateArticle is not a function".
function updateArticle(id, updatedFields) {
  const index = articles.value.findIndex((a) => a.id === id)
  if (index === -1) {
    console.warn(`updateArticle: artikel dengan id ${id} tidak ditemukan`)
    return
  }

  articles.value[index] = {
    ...articles.value[index],
    ...updatedFields,
    id: articles.value[index].id // id tidak boleh ikut tertimpa
  }
}

function deleteArticle(id) {
  articles.value = articles.value.filter((a) => a.id !== id)
}

export function useArticles() {
  return { articles, addArticle, updateArticle, deleteArticle }
}