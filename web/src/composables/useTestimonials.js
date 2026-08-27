import { ref } from 'vue'

// PENTING: key ini HARUS SAMA dipakai di halaman testimoni (publik)
// maupun di admin dashboard, supaya keduanya baca/tulis data yang sama.
const STORAGE_KEY = 'bi-testimonials-v3'

// Simpan foto di public/testimoni/ dengan nama PERSIS seperti di bawah
// (huruf kecil semua, tanpa spasi). Kalau file fotonya belum ada,
// biarkan kosong ('') — otomatis jatuh ke avatar inisial.
const defaultTestimonials = [
  {
    id: 1,
    name: 'Adrian Tan',
    role: 'Co-Founder',
    company: 'FlashCart',
    photo: '/testimoni/adriantan.jpg',
    rating: 5,
    quote: 'Sprint pertama sempat meleset seminggu karena scope kami sendiri yang berubah. Tim Brand Identity jujur soal itu daripada diam-diam mengejar deadline dengan kualitas seadanya.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 60
  },
  {
    id: 2,
    name: 'Nadia Puspita',
    role: 'Head of Growth',
    company: 'Vitalis Health',
    photo: '/testimoni/nadiapuspita.jpg',
    rating: 5,
    quote: 'Conversion rate naik dari 1,8% ke 3,4% dalam dua bulan setelah landing page baru live. Bukan angka fantastis, tapi nyata dan bisa kami audit sendiri.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 90
  },
  {
    id: 3,
    name: 'Marcus Hale',
    role: 'CTO',
    company: 'NexaMarket',
    photo: '/testimoni/marcushale.jpg',
    rating: 4,
    quote: 'Dokumentasi API-nya rapi, tapi ada satu endpoint yang harus kami minta perbaiki dua kali. Sisanya solid dan tim mereka responsif soal itu.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30
  },
  {
    id: 4,
    name: 'Salsabila Rahma',
    role: 'Marketing Manager',
    company: 'EduForge',
    photo: '/testimoni/salsabilarahma.jpg',
    rating: 5,
    quote: 'Yang bikin beda: mereka nanya dulu siapa target audiens kami sebelum mulai desain, bukan langsung kasih moodboard generik.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 120
  },
  {
    id: 5,
    name: 'Rafi Nugraha',
    role: 'Operations Lead',
    company: 'GreenTrail',
    photo: '/testimoni/rafinugraha.jpg',
    rating: 5,
    quote: 'Tim internal kami yang paling gaptek pun bisa pakai sistem barunya tanpa training panjang. Itu ukuran sukses yang paling kami pedulikan.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 150
  },
  {
    id: 6,
    name: 'Clara Bennett',
    role: 'Founder',
    company: 'Deskly',
    photo: '/testimoni/clarabennett.jpg',
    rating: 5,
    quote: 'Dari ide di notes HP jadi MVP yang bisa dipakai investor buat demo, dalam waktu 7 minggu.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 14
  },
  {
    id: 7,
    name: 'Andika Pratama',
    role: 'Product Manager',
    company: 'RasaGo',
    photo: '/testimoni/andikapratama.jpg',
    rating: 5,
    quote: 'Alur onboarding lama bikin 40% user drop di langkah kedua. Setelah dirombak bareng tim mereka, angka itu turun jadi sekitar 15%.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 180
  },
  {
    id: 8,
    name: 'Johannes',
    role: 'Founder',
    company: 'HiveSpace',
    photo: '/testimoni/johannes.jpg',
    rating: 5,
    quote: 'Sistem booking ruang jadi satu pintu dengan pembayaran, staf kami nggak perlu lagi cek WhatsApp dan spreadsheet bergantian tiap pagi.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 21
  },
  {
    id: 9,
    name: 'Hendra Wijaya',
    role: 'IT Manager',
    company: 'Koperasi Digital',
    photo: '/testimoni/hendrawijaya.jpg',
    rating: 4,
    quote: 'Migrasi data dari sistem lama sempat molor karena data kami sendiri berantakan, tapi tim mereka sabar bantu bersihin satu per satu.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 45
  },
  {
    id: 10,
    name: 'Olivia Hart',
    role: 'Brand Manager',
    company: 'RoastLab',
    photo: '/testimoni/oliviahart.jpg',
    rating: 5,
    quote: 'Website baru kami jauh lebih cepat diakses, bahkan dari daerah dengan sinyal lemah. Pelanggan kami banyak yang notice perubahan itu.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 75
  },
  {
    id: 11,
    name: 'Sofia Reyes',
    role: 'Founder',
    company: 'Rentora',
    photo: '/testimoni/sofiareyes.jpg',
    rating: 5,
    quote: 'Fitur pencarian barangnya sekarang jauh lebih relevan. Tim mereka sempat riset dulu ke pengguna asli sebelum membangun fiturnya.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 100
  },
  {
    id: 12,
    name: 'Melati Anggraini',
    role: 'HR Manager',
    company: 'Peoplely',
    photo: '/testimoni/melatianggraini.jpg',
    rating: 4,
    quote: 'Sistem absensi barunya membantu banget, meski butuh waktu untuk tim kami terbiasa. Support mereka sigap menjawab pertanyaan kami.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 55
  }
]

function loadTestimonials() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) return parsed
    }
  } catch (e) {
    console.warn('Gagal load testimonials dari localStorage', e)
  }
  // clone supaya defaultTestimonials asli tidak ikut ter-mutasi
  return defaultTestimonials.map((t) => ({ ...t }))
}

// State singleton — dibagi oleh semua komponen yang memanggil useTestimonials()
const testimonials = ref(loadTestimonials())

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials.value))
  } catch (e) {
    console.warn('Gagal simpan testimonials ke localStorage', e)
  }
}

/**
 * Tambah testimoni baru. Dipakai baik oleh form ulasan publik
 * maupun form "Tambah Testimoni" di admin.
 * Mengembalikan item yang baru dibuat (berguna untuk animasi "isNew").
 */
function addTestimonial(data) {
  const newItem = {
    id: Date.now(),
    name: data.name,
    role: data.role,
    company: data.company,
    photo: data.photo || null,
    rating: data.rating,
    quote: data.quote,
    createdAt: Date.now()
  }
  testimonials.value = [newItem, ...testimonials.value]
  persist()
  return newItem
}

function updateTestimonial(id, data) {
  const idx = testimonials.value.findIndex((t) => t.id === id)
  if (idx === -1) return
  const updated = [...testimonials.value]
  updated[idx] = { ...updated[idx], ...data }
  testimonials.value = updated
  persist()
}

function deleteTestimonial(id) {
  testimonials.value = testimonials.value.filter((t) => t.id !== id)
  persist()
}

export function useTestimonials() {
  return {
    testimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial
  }
}