import { ref } from 'vue'

// =========================================================
// PERINGATAN:
// Username & password di sini disimpan di kode frontend,
// jadi TIDAK aman untuk production (bisa dilihat siapa saja
// yang membuka source code di browser).
//
// Ini cukup untuk demo/kebutuhan tugas sekarang. Kalau nanti
// sudah ada backend, ganti isi function login() di bawah ini
// dengan pemanggilan API (contoh ada di komentar dalam fungsi).
// =========================================================

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
}

const STORAGE_KEY = 'bi_admin_auth'

const isLoggedIn = ref(sessionStorage.getItem(STORAGE_KEY) === 'true')

function login(username, password) {
  // --- versi sekarang (tanpa backend) ---
  const isValid =
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password

  // --- kalau nanti sudah ada backend, ganti jadi seperti ini: ---
  // const res = await fetch('/api/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ username, password })
  // })
  // const isValid = res.ok

  if (isValid) {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    isLoggedIn.value = true
  }

  return isValid
}

function logout() {
  sessionStorage.removeItem(STORAGE_KEY)
  isLoggedIn.value = false
}

export function useAdminAuth() {
  return { isLoggedIn, login, logout }
}