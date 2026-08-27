<template>
  <div class="bi-page">

    <!-- ================= HERO ================= -->
    <section class="bi-hero" id="beranda">
      <div class="container bi-hero__inner">
        <span class="eyebrow reveal">
          <span class="eyebrow__dot"></span>
          Studio Produk Digital
        </span>

        <h1 class="bi-hero__title reveal" style="transition-delay:.08s">
          <span class="bi-hero__title-line">Produk digital yang dirancang untuk</span>
          <span class="bi-hero__title-accent">pertumbuhan bisnis Anda</span>
        </h1>

        <p class="bi-hero__desc reveal" style="transition-delay:.16s">
          Kami merancang website, aplikasi, dan sistem internal yang lahir dari
          kebutuhan nyata bisnis Anda — bukan template yang dipaksakan agar
          terlihat serupa.
        </p>

        <div class="bi-hero__actions reveal" style="transition-delay:.24s">
          <router-link to="/contact" class="btn btn-primary">
            Mulai Proyek Anda
            <span class="btn__arrow">→</span>
          </router-link>
          <a href="#testimoni" class="btn btn-secondary">Baca Cerita Klien</a>
        </div>
      </div>
    </section>

    <!-- ================= STATS ================= -->
    <section class="bi-stats">
      <div class="container bi-stats__row">
        <div
          v-for="(s, i) in stats"
          :key="s.label"
          class="bi-stat reveal"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <span class="bi-stat__num">{{ s.num }}</span>
          <span class="bi-stat__label">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <!-- ================= TESTIMONIAL ================= -->
    <section class="bi-testi" id="testimoni">
      <div class="container">
        <div class="bi-testi__head">
          <span class="eyebrow eyebrow--plain reveal">Cerita Klien</span>
          <h2 class="bi-testi__title reveal" style="transition-delay:.08s">Cerita dari Klien Kami</h2>
          <p class="bi-testi__desc reveal" style="transition-delay:.16s">
            Kepercayaan dibangun dari hasil kerja, bukan janji. Berikut cerita
            mereka setelah bekerja sama dengan kami.
          </p>

          <button
            type="button"
            class="btn btn-primary bi-testi__cta reveal"
            style="transition-delay:.22s"
            @click="openModal"
          >
            Bagikan Ulasan Anda
            <span class="btn__arrow">→</span>
          </button>
        </div>

        <div class="bi-grid">
          <article
            v-for="(t, i) in testimonials"
            :key="t.id"
            class="bi-card"
            :class="{ reveal: !isNew(t.id), 'is-visible': isNew(t.id) }"
            :style="{ transitionDelay: isNew(t.id) ? '0s' : `${(i % 4) * 0.08}s` }"
          >
            <div class="bi-card__header">
              <img
                v-if="t.photo"
                :src="t.photo"
                :alt="t.name"
                class="bi-card__avatar"
              />
              <div
                v-else
                class="bi-card__avatar bi-card__avatar--initials"
                :style="{ background: getAvatarColor(t.name) }"
              >
                {{ getInitials(t.name) }}
              </div>

              <div class="bi-card__who">
                <strong>{{ t.name }}</strong>
                <span>{{ t.role }}, {{ t.company }}</span>
              </div>
            </div>

            <div class="bi-card__meta">
              <div class="bi-card__stars" :aria-label="`Rating ${t.rating} dari 5`">
                <span
                  v-for="n in 5"
                  :key="n"
                  class="bi-star"
                  :class="{ 'bi-star--off': n > t.rating }"
                >★</span>
              </div>
              <span class="bi-card__time">{{ formatTime(t.createdAt) }}</span>
            </div>

            <p class="bi-card__quote">{{ t.quote }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= CTA ================= -->
    <section class="bi-cta reveal">
      <div class="container bi-cta__inner">
        <span class="cta-small">LET'S WORK TOGETHER</span>
        <h2>Siap menjadi cerita sukses berikutnya?</h2>
        <p>Ceritakan kebutuhan Anda, dan mari mulai diskusi awal tanpa biaya.</p>
        <router-link to="/contact" class="btn btn-cta">
          Diskusikan Proyek Anda
          <span>→</span>
        </router-link>
      </div>
    </section>

    <!-- ================= MODAL FORM ULASAN ================= -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isModalOpen"
          class="bi-modal-overlay"
          @click.self="closeModal"
        >
          <div class="bi-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div class="bi-modal__header">
              <div>
                <h3 id="modal-title" class="bi-modal__title">Bagikan Ulasan Anda</h3>
                <p class="bi-modal__subtitle">Bagikan rating dan cerita pengalaman Anda bersama kami.</p>
              </div>
              <button type="button" class="bi-modal__close" aria-label="Tutup" @click="closeModal">×</button>
            </div>

            <form class="bi-form" @submit.prevent="submitTestimonial">
              <div class="bi-form__row">
                <div class="bi-form__group">
                  <label for="name">Nama Lengkap</label>
                  <input id="name" v-model.trim="form.name" type="text" placeholder="Contoh: Adrian Tan" required autofocus />
                </div>
                <div class="bi-form__group">
                  <label for="role">Jabatan / Role</label>
                  <input id="role" v-model.trim="form.role" type="text" placeholder="Contoh: Co-Founder" required />
                </div>
              </div>

              <div class="bi-form__group">
                <label for="company">Perusahaan / Brand</label>
                <input id="company" v-model.trim="form.company" type="text" placeholder="Contoh: FlashCart" required />
              </div>

              <div class="bi-form__group">
                <label>Foto Profil (opsional)</label>
                <div class="bi-form__photo">
                  <div class="bi-form__photo-preview">
                    <img v-if="form.photo" :src="form.photo" alt="Preview foto" />
                    <div
                      v-else
                      class="bi-form__photo-placeholder"
                      :style="form.name ? { background: getAvatarColor(form.name) } : {}"
                    >
                      {{ form.name ? getInitials(form.name) : '?' }}
                    </div>
                  </div>
                  <div class="bi-form__photo-actions">
                    <input
                      ref="photoInputRef"
                      type="file"
                      accept="image/*"
                      class="bi-form__photo-input"
                      @change="handlePhotoChange"
                    />
                    <button type="button" class="btn btn-secondary bi-form__photo-btn" @click="photoInputRef?.click()">
                      {{ form.photo ? 'Ganti Foto' : 'Pilih Foto' }}
                    </button>
                    <button
                      v-if="form.photo"
                      type="button"
                      class="bi-form__photo-remove"
                      @click="removePhoto"
                    >
                      Hapus Foto
                    </button>
                  </div>
                </div>
                <p class="bi-form__photo-hint">JPG/PNG, maks 1MB. Kalau tidak diisi, kami pakai avatar inisial.</p>
                <p v-if="photoError" class="bi-form__error">{{ photoError }}</p>
              </div>

              <div class="bi-form__group">
                <label>Rating</label>
                <div class="bi-form__stars" role="radiogroup" aria-label="Pilih rating">
                  <button
                    v-for="n in 5"
                    :key="n"
                    type="button"
                    class="bi-form-star"
                    :class="{ 'bi-form-star--active': n <= (hoverRating || form.rating) }"
                    :aria-label="`${n} bintang`"
                    @click="form.rating = n"
                    @mouseenter="hoverRating = n"
                    @mouseleave="hoverRating = 0"
                  >★</button>
                </div>
                <p class="bi-form__rating-text">
                  {{ form.rating ? `${form.rating} dari 5 bintang` : 'Pilih rating Anda' }}
                </p>
              </div>

              <div class="bi-form__group">
                <label for="quote">Ulasan / Cerita Anda</label>
                <textarea
                  id="quote"
                  v-model.trim="form.quote"
                  rows="4"
                  placeholder="Ceritakan pengalaman Anda bekerja sama dengan kami..."
                  required
                ></textarea>
              </div>

              <div class="bi-form__actions">
                <button type="submit" class="btn btn-primary" :disabled="!canSubmit">
                  Kirim Ulasan
                  <span class="btn__arrow">→</span>
                </button>
                <button type="button" class="btn btn-secondary" @click="closeModal">Batal</button>
              </div>

              <p v-if="formSuccess" class="bi-form__success">Terima kasih! Ulasan Anda berhasil ditambahkan.</p>
              <p v-if="formError" class="bi-form__error">{{ formError }}</p>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useTestimonials } from '../composables/useTestimonials.js'

// Sumber data testimoni sekarang dibagi dengan admin dashboard lewat
// composable ini, jadi testimoni yang ditambah di sini (atau di admin)
// langsung muncul di kedua tempat.
const { testimonials, addTestimonial } = useTestimonials()

const stats = [
  { num: '120+', label: 'Proyek selesai' },
  { num: '68%', label: 'Klien kembali lagi' },
  { num: '4.9/5', label: 'Rating rata-rata' }
]

// ID testimoni yang baru saja ditambahkan di sesi ini, supaya langsung
// tampil (skip animasi scroll-reveal) tanpa perlu disimpan ke data itu sendiri.
const newIds = ref(new Set())
function isNew(id) {
  return newIds.value.has(id)
}

function getInitials(name) {
  if (!name) return '?'
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const avatarColors = [
  '#E75119', '#EB2B0C', '#FB9F37', '#D97706',
  '#059669', '#0284C7', '#7C3AED', '#DB2777'
]

function getAvatarColor(name) {
  if (!name) return avatarColors[0]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return avatarColors[Math.abs(hash) % avatarColors.length]
}

const isModalOpen = ref(false)
const form = ref({ name: '', role: '', company: '', photo: '', rating: 0, quote: '' })
const hoverRating = ref(0)
const formSuccess = ref(false)
const formError = ref('')

const photoInputRef = ref(null)
const photoError = ref('')
const MAX_PHOTO_BYTES = 1024 * 1024 // 1MB

function handlePhotoChange(event) {
  photoError.value = ''
  const file = event.target.files?.[0]
  if (!file) return

  if (!file.type.startsWith('image/')) {
    photoError.value = 'File harus berupa gambar (JPG/PNG).'
    event.target.value = ''
    return
  }
  if (file.size > MAX_PHOTO_BYTES) {
    photoError.value = 'Ukuran foto maksimal 1MB.'
    event.target.value = ''
    return
  }

  const reader = new FileReader()
  reader.onload = () => {
    form.value.photo = reader.result
  }
  reader.onerror = () => {
    photoError.value = 'Gagal membaca file foto, coba foto lain.'
  }
  reader.readAsDataURL(file)
}

function removePhoto() {
  form.value.photo = ''
  photoError.value = ''
  if (photoInputRef.value) photoInputRef.value.value = ''
}

const canSubmit = computed(() => {
  return (
    form.value.name.length >= 2 &&
    form.value.role.length >= 2 &&
    form.value.company.length >= 2 &&
    form.value.rating >= 1 &&
    form.value.quote.length >= 20
  )
})

function openModal() {
  isModalOpen.value = true
  formSuccess.value = false
  formError.value = ''
  photoError.value = ''
}

function closeModal() {
  isModalOpen.value = false
  setTimeout(() => {
    form.value = { name: '', role: '', company: '', photo: '', rating: 0, quote: '' }
    hoverRating.value = 0
    formSuccess.value = false
    formError.value = ''
    photoError.value = ''
    if (photoInputRef.value) photoInputRef.value.value = ''
  }, 280)
}

function submitTestimonial() {
  formError.value = ''
  formSuccess.value = false

  if (!canSubmit.value) {
    formError.value = 'Mohon lengkapi semua field dan berikan rating minimal 1 bintang. Ulasan minimal 20 karakter.'
    return
  }

  const newItem = addTestimonial({
    name: form.value.name,
    role: form.value.role,
    company: form.value.company,
    photo: form.value.photo || null,
    rating: form.value.rating,
    quote: form.value.quote
  })

  newIds.value.add(newItem.id)
  formSuccess.value = true

  setTimeout(() => closeModal(), 1400)
}

function formatTime(timestamp) {
  if (!timestamp) return ''
  const diff = Date.now() - timestamp
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'baru saja'
  if (minutes < 60) return `${minutes} menit lalu`
  if (hours < 24) return `${hours} jam lalu`
  if (days < 7) return `${days} hari lalu`
  if (days < 30) return `${Math.floor(days / 7)} minggu lalu`
  if (days < 365) return `${Math.floor(days / 30)} bulan lalu`
  return `${Math.floor(days / 365)} tahun lalu`
}

watch(isModalOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

let observer = null

function setupObserver() {
  if (observer) observer.disconnect()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  nextTick(() => {
    document.querySelectorAll('.bi-page .reveal:not(.is-visible)').forEach((el) => {
      observer.observe(el)
    })
  })
}

onMounted(() => setupObserver())

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  document.body.style.overflow = ''
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap');

.bi-page {
  --color-yellow: #FCEF92;
  --color-orange: #FB9F37;
  --color-deep-orange: #E75119;
  --color-red: #EB2B0C;
  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-secondary: #5F5E5A;
  --color-border: #E5E3DC;
  --font-heading: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;
  --container-width: 1160px;
  --navbar-height: 80px;
  --navbar-height-mobile: 64px;
  min-height: 100vh;
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
}
.bi-page * { box-sizing: border-box; }
.bi-page h1, .bi-page h2, .bi-page h3, .bi-page h4 {
  font-family: var(--font-heading);
  font-weight: 600;
  margin: 0;
  line-height: 1.25;
}
.bi-page p { margin: 0; }
.container {
  width: min(var(--container-width), calc(100% - 48px));
  margin: 0 auto;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .6s ease, transform .6s ease;
}
.reveal.is-visible,
.bi-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 19px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  white-space: nowrap;
  transition: transform .2s ease, opacity .2s ease, box-shadow .2s ease;
}
.btn:hover { transform: translateY(-2px); }
.btn:disabled { opacity: .55; cursor: not-allowed; transform: none; }
.btn-primary {
  background: var(--color-red);
  color: white;
  box-shadow: 0 9px 20px rgba(235, 43, 12, .16);
}
.btn-primary:hover:not(:disabled) { opacity: .93; }
.btn__arrow { transition: transform .2s ease; }
.btn-primary:hover:not(:disabled) .btn__arrow { transform: translateX(3px); }
.btn-secondary {
  background: white;
  color: var(--color-text);
  border: 1px solid var(--color-border);
}
.btn-secondary:hover { border-color: var(--color-red); color: var(--color-red); }
.btn-cta { background: white; color: var(--color-red); padding: 11px 20px; }
.btn-cta:hover { opacity: .92; }

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 10px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--color-deep-orange);
  margin-bottom: 12px;
  padding: 5px 11px 5px 8px;
  border-radius: 999px;
  background: rgba(251, 159, 55, .12);
}
.eyebrow__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-red);
  box-shadow: 0 0 0 3px rgba(235, 43, 12, .12);
}
.eyebrow--plain {
  background: none;
  padding: 0;
  margin-bottom: 10px;
  font-size: 11px;
  letter-spacing: .1em;
}

.bi-hero {
  padding-top: calc(var(--navbar-height) + 88px);
  padding-bottom: 76px;
  text-align: center;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}
.bi-hero__inner {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bi-hero__title {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 720px;
  margin-bottom: 22px;
}
.bi-hero__title-line {
  font-size: clamp(26px, 3.2vw, 34px);
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.3px;
  color: var(--color-text-secondary);
}
.bi-hero__title-accent {
  font-size: clamp(34px, 4.6vw, 48px);
  font-weight: 800;
  line-height: 1.14;
  letter-spacing: -1.4px;
  background: linear-gradient(90deg, var(--color-deep-orange), var(--color-red));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.bi-hero__desc {
  max-width: 560px;
  font-size: 15px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: 32px;
}
.bi-hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
.bi-hero .btn-primary,
.bi-hero .btn-secondary {
  padding: 13px 24px;
  font-size: 14px;
}

.bi-stats {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}
.bi-stats__row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 27px 0;
}
.bi-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  text-align: center;
  border-right: 1px solid var(--color-border);
}
.bi-stat:last-child { border-right: none; }
.bi-stat__num {
  font-family: var(--font-heading);
  font-size: 25px;
  font-weight: 700;
  color: var(--color-deep-orange);
}
.bi-stat__label {
  font-size: 12px;
  color: var(--color-text-secondary);
}

.bi-testi { padding: 75px 0; }
.bi-testi__head {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 42px;
}
.bi-testi__title {
  font-size: clamp(25px, 3vw, 32px);
  margin-bottom: 10px;
}
.bi-testi__desc {
  color: var(--color-text-secondary);
  font-size: 14px;
  margin-bottom: 28px;
}
.bi-testi__cta { margin-top: 8px; }

.bi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.bi-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 18px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform .2s ease, box-shadow .2s ease, opacity .6s ease;
}
.bi-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 35px -24px rgba(26, 26, 26, .3);
}
.bi-card__header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.bi-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.bi-card__avatar--initials {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
  user-select: none;
}
.bi-card__who {
  display: flex;
  flex-direction: column;
  font-size: 11px;
  min-width: 0;
}
.bi-card__who strong {
  font-family: var(--font-heading);
  color: var(--color-deep-orange);
  font-size: 12.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bi-card__who span {
  color: var(--color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bi-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.bi-card__stars { display: flex; gap: 2px; }
.bi-star { color: var(--color-orange); font-size: 13px; line-height: 1; }
.bi-star--off { color: var(--color-border); }
.bi-card__time {
  font-size: 11px;
  color: var(--color-text-secondary);
  white-space: nowrap;
}
.bi-card__quote {
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-text);
  flex: 1;
}

.bi-cta {
  width: min(var(--container-width), calc(100% - 48px));
  margin: 0 auto 70px;
  border-radius: 20px;
  background: linear-gradient(120deg, var(--color-red), var(--color-deep-orange) 60%, var(--color-orange));
  padding: 50px 30px;
}
.bi-cta__inner {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
}
.cta-small {
  color: var(--color-yellow);
  font-family: var(--font-heading);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
}
.bi-cta__inner h2 {
  font-size: clamp(23px, 3vw, 30px);
  color: white;
}
.bi-cta__inner p {
  color: rgba(255,255,255,.84);
  font-size: 13px;
  margin-bottom: 9px;
}

.bi-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26, 26, 26, 0.48);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}
.bi-modal {
  background: var(--color-surface);
  border-radius: 16px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px 26px 26px;
  box-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.25);
}
.bi-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 22px;
}
.bi-modal__title { font-size: 18px; margin-bottom: 4px; }
.bi-modal__subtitle { font-size: 13px; color: var(--color-text-secondary); }
.bi-modal__close {
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 0 4px;
}
.bi-modal__close:hover { color: var(--color-red); }

.bi-form { display: flex; flex-direction: column; gap: 16px; }
.bi-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.bi-form__group { display: flex; flex-direction: column; gap: 6px; }
.bi-form__group label {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text);
  font-family: var(--font-heading);
}
.bi-form__group input,
.bi-form__group textarea {
  border: 1px solid var(--color-border);
  border-radius: 9px;
  padding: 10px 12px;
  font-family: var(--font-body);
  font-size: 13.5px;
  color: var(--color-text);
  background: #fff;
  outline: none;
  resize: vertical;
  width: 100%;
}
.bi-form__group input:focus,
.bi-form__group textarea:focus {
  border-color: var(--color-orange);
  box-shadow: 0 0 0 3px rgba(251, 159, 55, .18);
}
.bi-form__photo {
  display: flex;
  align-items: center;
  gap: 14px;
}
.bi-form__photo-preview {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid var(--color-border);
}
.bi-form__photo-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.bi-form__photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-border);
  color: #fff;
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 700;
}
.bi-form__photo-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.bi-form__photo-input { display: none; }
.bi-form__photo-btn {
  padding: 8px 14px;
  font-size: 12.5px;
}
.bi-form__photo-remove {
  background: none;
  border: none;
  color: var(--color-red);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}
.bi-form__photo-remove:hover { text-decoration: underline; }
.bi-form__photo-hint {
  font-size: 11px;
  color: var(--color-text-secondary);
  margin-top: 6px;
}

.bi-form__stars { display: flex; gap: 4px; }
.bi-form-star {
  background: none;
  border: none;
  font-size: 26px;
  color: var(--color-border);
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
  transition: color .15s ease, transform .15s ease;
}
.bi-form-star:hover,
.bi-form-star--active {
  color: var(--color-orange);
  transform: scale(1.12);
}
.bi-form__rating-text {
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-top: 2px;
}
.bi-form__actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 4px;
}
.bi-form__success {
  font-size: 13px;
  color: #1a7a3a;
  background: #e8f7ee;
  padding: 10px 14px;
  border-radius: 8px;
}
.bi-form__error {
  font-size: 13px;
  color: #b42318;
  background: #fef3f2;
  padding: 10px 14px;
  border-radius: 8px;
}

.modal-enter-active,
.modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-active .bi-modal,
.modal-leave-active .bi-modal { transition: transform 0.25s ease, opacity 0.25s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-from .bi-modal,
.modal-leave-to .bi-modal {
  opacity: 0;
  transform: translateY(16px) scale(0.97);
}

@media (max-width: 1100px) {
  .bi-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .bi-hero__inner { max-width: 640px; }
}
@media (max-width: 640px) {
  .container { width: min(100% - 30px, var(--container-width)); }
  .bi-hero {
    padding-top: calc(var(--navbar-height-mobile) + 60px);
    padding-bottom: 52px;
  }
  .bi-hero__title-line { font-size: 19px; }
  .bi-hero__title-accent { font-size: 27px; }
  .bi-hero__desc { font-size: 13px; }
  .bi-stats__row { padding: 22px 0; }
  .bi-stat__num { font-size: 20px; }
  .bi-stat__label { font-size: 9px; }
  .bi-testi { padding: 60px 0; }
  .bi-grid { grid-template-columns: 1fr; }
  .bi-form__row { grid-template-columns: 1fr; }
  .bi-modal { padding: 22px 18px 20px; max-height: 92vh; }
  .bi-cta { width: calc(100% - 30px); padding: 40px 22px; margin-bottom: 50px; }
}
@media (max-width: 430px) {
  .bi-hero { padding-top: calc(var(--navbar-height-mobile) + 44px); }
  .bi-hero__title-line { font-size: 17px; }
  .bi-hero__title-accent { font-size: 24px; }
  .bi-hero__actions { width: 100%; }
  .bi-hero__actions .btn { width: 100%; }
}
</style>