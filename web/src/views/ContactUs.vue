<template>
  <section class="contact-page">
    <div class="contact-container">

      <div class="contact-content">
        <span class="contact-label">CONTACT US</span>

        <h1>
          Mari Wujudkan
          <span>Ide Digitalmu</span>
        </h1>

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

          <div class="info-item">
            <div class="icon">☎</div>
            <div>
              <small>Phone</small>
              <p>+62 812 3456 7890</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">⌖</div>
            <div>
              <small>Location</small>
              <p>Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <h2>Hubungi Kami</h2>

        <form @submit.prevent>
          <div class="form-group">
            <label>Nama</label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
            />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Masukkan email Anda"
            />
          </div>

          <div class="form-group">
            <label>Pesan</label>
            <textarea
              rows="5"
              placeholder="Ceritakan kebutuhan Anda..."
            ></textarea>
          </div>

          <button type="submit">
            Kirim Pesan →
          </button>
        </form>
      </div>

    </div>
  </section>
</template>

<style scoped>
.contact-page {
  min-height: calc(100vh - 80px);
  padding: 100px 6%;
  background: #f8faf9;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.contact-label {
  color: #16a34a;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
}

.contact-content h1 {
  font-size: 48px;
  line-height: 1.15;
  margin: 18px 0;
  color: #111827;
}

.contact-content h1 span {
  display: block;
  color: #16a34a;
}

.contact-content > p {
  max-width: 520px;
  color: #6b7280;
  line-height: 1.8;
  font-size: 16px;
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

.icon {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: #dcfce7;
  color: #16a34a;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
}

.info-item small {
  color: #6b7280;
}

.info-item p {
  margin-top: 3px;
  color: #111827;
  font-weight: 600;
}

.contact-form {
  background: white;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.contact-form h2 {
  margin-bottom: 25px;
  color: #111827;
  font-size: 28px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
}

input,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-family: inherit;
  font-size: 14px;
  outline: none;
  transition: 0.2s;
}

input:focus,
textarea:focus {
  border-color: #16a34a;
}

textarea {
  resize: vertical;
}

button {
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 10px;

  background: #16a34a;
  color: white;

  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #15803d;
}

@media (max-width: 768px) {
  .contact-page {
    padding: 60px 20px;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-content h1 {
    font-size: 36px;
  }
}
</style>