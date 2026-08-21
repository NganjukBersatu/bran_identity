<script setup>
import { ref } from 'vue'

const WHATSAPP_NUMBER = '6283838438195'
const WHATSAPP_DISPLAY = '+62 838-3843-8195'

const form = ref({
  nama: '',
  email: '',
  telepon: '',
  pesan: ''
})

const kirimPesan = () => {
  if (
    !form.value.nama ||
    !form.value.email ||
    !form.value.telepon ||
    !form.value.pesan
  ) {
    alert('Silakan lengkapi semua data terlebih dahulu.')
    return
  }

  const text = `Halo Bran Identity, saya ingin bertanya/berkonsultasi:

Nama: ${form.value.nama}
Email: ${form.value.email}
Telepon: ${form.value.telepon}
Pesan: ${form.value.pesan}`

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

  window.location.href = whatsappUrl
}
</script>

<template>
  <section class="contact-page">
    <div class="container">

      <div class="page-title">
        <span class="eyebrow">GET IN TOUCH</span>
        <h1>Contact Us</h1>
      </div>

      <div class="contact-container">

        <div class="contact-content">
          <span class="contact-label">CONTACT US</span>

          <h2>
            Mari Wujudkan
            <span>Ide Digitalmu</span>
          </h2>

          <p>
            Punya ide, pertanyaan, atau ingin bekerja sama?
            Tim kami siap membantu mewujudkan solusi digital
            yang sesuai dengan kebutuhan bisnis Anda.
          </p>

          <div class="contact-info">
            <div class="info-item">
              <div class="icon">✉</div>
              <div>
                <small>Email</small>
                <p>hello@branidentity.com</p>
              </div>
            </div>

            <a
              :href="`https://wa.me/${WHATSAPP_NUMBER}`"
              target="_blank"
              rel="noopener noreferrer"
              class="info-item info-item-link"
            >
              <div class="icon">☎</div>
              <div>
                <small>Phone / WhatsApp</small>
                <p>{{ WHATSAPP_DISPLAY }}</p>
              </div>
            </a>

            <a href="https://www.google.com/maps/place/Indonesia" target="_blank" rel="noopener noreferrer" class="info-item info-item-link">
              <div class="icon">⌖</div>
              <div>
                <small>Location</small>
                <p>Indonesia</p>
              </div>
            </a>
          </div>
        </div>

        <div class="contact-form">
          <h3>Hubungi Kami</h3>

          <form @submit.prevent="kirimPesan">

            <div class="form-group">
              <label>Nama</label>
              <input
                v-model="form.nama"
                type="text"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div class="form-group">
              <label>Telepon</label>
              <input
                v-model="form.telepon"
                type="tel"
                placeholder="Masukkan nomor telepon Anda"
              />
            </div>

            <div class="form-group">
              <label>Pesan</label>
              <textarea
                v-model="form.pesan"
                placeholder="Ceritakan kebutuhan Anda..."
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">
              Kirim Pesan →
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

/* =========================================================
   VARIABLES — didefinisikan lokal karena style ini scoped
========================================================= */

.contact-page {
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
  --radius: 12px;
}

.contact-page {
  min-height: calc(100vh - 80px);
  padding: 100px 6%;
  background: var(--color-bg);
  font-family: var(--font-body);
  color: var(--color-text);
}

.contact-page * {
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
}

.eyebrow {
  display: inline-block;
  color: var(--color-deep-orange);
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.page-title {
  text-align: center;
  margin-bottom: 60px;
}

.page-title .eyebrow {
  display: inline-block;
  margin-bottom: 10px;
}

.page-title h1 {
  font-family: var(--font-heading);
  font-size: 44px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
}

.contact-container {
  max-width: var(--container-width);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.contact-label {
  color: var(--color-deep-orange);
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
}

.contact-content h2 {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 40px;
  line-height: 1.15;
  margin: 18px 0;
  color: var(--color-text);
}

.contact-content h2 span {
  display: block;
  color: var(--color-red);
}

.contact-content > p {
  max-width: 520px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  font-size: 16px;
  margin: 0;
}

.contact-info {
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.info-item-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  border-radius: var(--radius);
  padding: 6px;
  margin: -6px;
  transition: background 0.2s;
}

.info-item-link:hover {
  background: rgba(251, 159, 55, 0.08);
}

.info-item-link:hover .icon {
  background: var(--color-deep-orange);
  color: #fff;
}

.info-item-link:hover p {
  color: var(--color-deep-orange);
}

.icon {
  width: 45px;
  height: 45px;
  border-radius: var(--radius);
  background: rgba(251, 159, 55, 0.15);
  color: var(--color-deep-orange);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  flex-shrink: 0;
  transition: 0.2s;
}

.info-item small {
  color: var(--color-text-secondary);
  font-size: 12px;
}

.info-item p {
  margin: 3px 0 0;
  color: var(--color-text);
  font-weight: 600;
  transition: 0.2s;
}

.contact-form {
  background: var(--color-surface);
  padding: 35px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
}

.contact-form h3 {
  font-family: var(--font-heading);
  font-weight: 600;
  margin: 0 0 25px;
  color: var(--color-text);
  font-size: 26px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--color-text-secondary);
  font-family: var(--font-heading);
  font-size: 13px;
}

input,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  font-family: var(--font-body);
  font-size: 14px;
  outline: none;
  transition: 0.2s;
  background: var(--color-bg);
  color: var(--color-text);
}

input::placeholder,
textarea::placeholder {
  color: #A5A39C;
}

input:focus,
textarea:focus {
  border-color: var(--color-red);
}

textarea {
  min-height: 110px;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  margin-top: 4px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-height: 50px;
  padding: 12px 22px;

  border: 0;
  border-radius: var(--radius);

  background: var(--color-red);
  color: #fff;

  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: transform .2s ease, background .2s ease;
}

.submit-btn:hover {
  background: var(--color-deep-orange);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-page {
    padding: 60px 20px;
  }

  .page-title h1 {
    font-size: 32px;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-content h2 {
    font-size: 32px;
  }
}
</style>