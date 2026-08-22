<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminAuth } from '../composables/useAdminAuth.js'

const router = useRouter()
const { login } = useAdminAuth()

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

function handleSubmit() {
  errorMessage.value = ''

  const success = login(
    username.value.trim(),
    password.value
  )

  if (success) {
    isLoading.value = true
    router.replace('/admin')
  } else {
    errorMessage.value = 'Username atau password salah.'
  }
}
</script>

<template>
  <main class="admin-login-page">

    <div class="login-wrapper">

      <!-- =========================
           BAGIAN KIRI
      ========================== -->
      <section class="login-left">

        <!-- dekorasi -->
        <div class="left-decoration-circle"></div>

        <div class="left-content">

          <!-- ADMIN LABEL -->
          <div class="admin-label">
            <span class="admin-icon">&gt;</span>
            <span>ADMIN PANEL</span>
          </div>

          <!-- TITLE -->
          <h1>
            Kelola konten<br />
            lebih mudah.
          </h1>

          <!-- DESCRIPTION -->
          <p class="left-description">
            Masuk ke dashboard untuk mengelola artikel,
            kategori, dan konten blog.
          </p>

        </div>

        <!-- =========================
             LAPTOP
        ========================== -->
        <div class="laptop">

          <div class="laptop-screen">

            <div class="dashboard-mini">

              <div class="mini-title">
                <span></span>
                Dashboard
              </div>

              <div class="mini-body">

                <div class="mini-sidebar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div class="mini-content">

                  <div class="mini-chart">
                    <div class="chart-line"></div>
                  </div>

                  <div class="mini-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div class="laptop-base"></div>

        </div>

      </section>


      <!-- =========================
           BAGIAN KANAN
      ========================== -->
      <section class="login-right">

        <div class="form-container">

          <!-- EYEBROW -->
          <span class="eyebrow">
            ADMIN PANEL
          </span>

          <!-- TITLE -->
          <h2>
            Masuk ke Panel Blog
          </h2>

          <p class="subtitle">
            Login untuk mengelola artikel blog.
          </p>


          <!-- =========================
               FORM LOGIN
          ========================== -->
          <form
            class="login-form"
            @submit.prevent="handleSubmit"
          >

            <!-- USERNAME -->
            <label class="form-group">

              <span>Username</span>

              <input
                v-model="username"
                type="text"
                placeholder="Masukkan username"
                autocomplete="username"
                required
              />

            </label>


            <!-- PASSWORD -->
            <label class="form-group">

              <span>Password</span>

              <input
                v-model="password"
                type="password"
                placeholder="Masukkan password"
                autocomplete="current-password"
                required
              />

            </label>


            <!-- OPTIONS -->
            <div class="login-options">

              <label class="remember">

                <input
                  type="checkbox"
                />

                <span>Ingat saya</span>

              </label>

              <button
                type="button"
                class="forgot"
              >
                Lupa password?
              </button>

            </div>


            <!-- ERROR -->
            <p
              v-if="errorMessage"
              class="error-text"
            >
              {{ errorMessage }}
            </p>


            <!-- BUTTON -->
            <button
              type="submit"
              class="login-button"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Memuat...' : 'Masuk' }}
            </button>

          </form>


          <!-- =========================
               ADMIN INFO
          ========================== -->
          <div class="admin-info">

            <div class="info-line">

              <span></span>

              <small>
                Akses khusus administrator
              </small>

              <span></span>

            </div>

            <p>
              Halaman ini hanya dapat diakses oleh pengguna
              yang memiliki hak administrator.
            </p>

          </div>

        </div>

      </section>

    </div>

  </main>
</template>


<style scoped>

/* =====================================================
   FONT
===================================================== */

.admin-login-page {
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 35px 24px;

  background: #fafafa;

  font-family: 'Inter', sans-serif;
  color: #1a1a1a;

  overflow-x: hidden;
}


/* =====================================================
   WRAPPER UTAMA
===================================================== */

.login-wrapper {
  position: relative;

  width: 880px;
  max-width: 100%;

  height: 480px;
  min-height: 480px;

  display: grid;
  grid-template-columns: 400px 480px;

  overflow: hidden;

  border-radius: 16px;

  background: #ffffff;

  box-shadow:
    0 20px 50px rgba(26, 26, 26, 0.10);
}


/* =====================================================
   BAGIAN KIRI
===================================================== */

.login-left {
  position: relative;

  width: 400px;
  height: 480px;

  padding: 28px 26px;

  box-sizing: border-box;

  overflow: hidden;

  background:
    linear-gradient(
      145deg,
      #fcef92 0%,
      #fb9f37 100%
    );
}


/* =====================================================
   BENTUK PUTIH MIRING
===================================================== */

.login-left::after {
  content: '';

  position: absolute;

  z-index: 1;

  top: -35px;
  right: -65px;

  width: 105px;
  height: 560px;

  background: #ffffff;

  transform: rotate(8deg);
}


/* =====================================================
   LINGKARAN DEKORASI
===================================================== */

.left-decoration-circle {
  position: absolute;

  z-index: 0;

  width: 95px;
  height: 95px;

  right: 28px;
  top: 158px;

  border-radius: 50%;

  background: rgba(231, 81, 25, 0.17);
}


/* lingkaran kecil kiri bawah */
.login-left::before {
  content: '';

  position: absolute;

  z-index: 0;

  width: 75px;
  height: 75px;

  left: -18px;
  bottom: -28px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.22);
}


/* =====================================================
   CONTENT KIRI
===================================================== */

.left-content {
  position: relative;

  z-index: 3;

  width: 100%;
}


/* =====================================================
   ADMIN LABEL
===================================================== */

.admin-label {
  display: flex;
  align-items: center;

  gap: 7px;

  color: #e75119;

  font-family: 'Sora', sans-serif;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.07em;
}


/* ICON */

.admin-icon {
  width: 21px;
  height: 21px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background: #eb2b0c;

  color: #ffffff;

  font-size: 12px;
  font-weight: 800;
}


/* =====================================================
   TITLE KIRI
===================================================== */

.login-left h1 {
  margin: 42px 0 12px;

  font-family: 'Sora', sans-serif;

  font-size: 29px;
  line-height: 1.12;

  font-weight: 600;

  letter-spacing: -0.5px;
}


/* =====================================================
   DESCRIPTION KIRI
===================================================== */

.left-description {
  width: 250px;
  max-width: 250px;

  margin: 0;

  color: #6d5439;

  font-size: 12px;

  line-height: 1.7;
}


/* =====================================================
   LAPTOP
===================================================== */

.laptop {
  position: absolute;

  z-index: 4;

  left: 28px;
  bottom: 28px;

  width: 245px;

  pointer-events: none;
}


/* =====================================================
   LAPTOP SCREEN
===================================================== */

.laptop-screen {
  width: 178px;
  height: 112px;

  margin: 0 auto;

  padding: 7px;

  box-sizing: border-box;

  border: 7px solid #292929;

  border-radius: 9px 9px 3px 3px;

  background: #1e1e1e;

  box-shadow:
    0 8px 15px rgba(0, 0, 0, 0.18);
}


/* =====================================================
   MINI DASHBOARD
===================================================== */

.dashboard-mini {
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  background: #ffffff;

  padding: 6px;
}


/* =====================================================
   MINI TITLE
===================================================== */

.mini-title {
  display: flex;
  align-items: center;

  gap: 4px;

  font-size: 5px;

  color: #333333;
}


.mini-title span {
  width: 5px;
  height: 5px;

  border-radius: 2px;

  background: #eb2b0c;
}


/* =====================================================
   MINI BODY
===================================================== */

.mini-body {
  display: flex;

  margin-top: 9px;
}


/* =====================================================
   MINI SIDEBAR
===================================================== */

.mini-sidebar {
  width: 28px;

  display: flex;
  flex-direction: column;

  gap: 6px;
}


.mini-sidebar i {
  display: block;

  width: 14px;
  height: 4px;

  border-radius: 3px;

  background: #fcef92;
}


/* =====================================================
   MINI CONTENT
===================================================== */

.mini-content {
  flex: 1;

  padding-left: 5px;
}


/* =====================================================
   MINI CHART
===================================================== */

.mini-chart {
  position: relative;

  width: 100%;
  height: 38px;

  border-radius: 4px;

  background: #fafafa;

  border: 1px solid #f1f1f1;

  overflow: hidden;
}


/* garis chart */

.chart-line {
  position: absolute;

  left: 12px;
  right: 12px;

  top: 22px;

  height: 1px;

  background: #eb2b0c;

  transform: rotate(-5deg);
}


/* =====================================================
   MINI BUTTONS
===================================================== */

.mini-buttons {
  display: flex;

  gap: 4px;

  margin-top: 8px;
}


.mini-buttons span {
  flex: 1;

  height: 13px;

  border-radius: 3px;

  background: #fcef92;
}


/* =====================================================
   LAPTOP BASE
===================================================== */

.laptop-base {
  width: 240px;
  height: 9px;

  margin: 0 auto;

  border-radius: 0 0 12px 12px;

  background: #747474;

  box-shadow:
    0 4px 7px rgba(0, 0, 0, 0.10);
}


/* =====================================================
   BAGIAN KANAN
===================================================== */

.login-right {
  width: 480px;
  height: 480px;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  padding: 42px 48px;

  background: #ffffff;
}


/* =====================================================
   FORM CONTAINER
===================================================== */

.form-container {
  width: 100%;
  max-width: 320px;

  margin: 0 auto;
}


/* =====================================================
   EYEBROW
===================================================== */

.eyebrow {
  display: block;

  margin-bottom: 10px;

  color: #e75119;

  font-family: 'Sora', sans-serif;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}


/* =====================================================
   TITLE KANAN
===================================================== */

.login-right h2 {
  margin: 0 0 6px;

  font-family: 'Sora', sans-serif;

  font-size: 24px;
  line-height: 1.25;

  font-weight: 600;

  letter-spacing: -0.4px;
}


/* =====================================================
   SUBTITLE
===================================================== */

.subtitle {
  margin: 0 0 28px;

  color: #5f5e5a;

  font-size: 12px;

  line-height: 1.5;
}


/* =====================================================
   FORM
===================================================== */

.login-form {
  display: flex;
  flex-direction: column;

  gap: 16px;
}


/* =====================================================
   FORM GROUP
===================================================== */

.form-group {
  display: flex;
  flex-direction: column;

  gap: 7px;

  color: #333333;

  font-size: 11px;
  font-weight: 600;
}


/* =====================================================
   INPUT
===================================================== */

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  height: 42px;

  box-sizing: border-box;

  padding: 0 12px;

  border: 1px solid #e5e3dc;

  border-radius: 8px;

  outline: none;

  font-family: 'Inter', sans-serif;

  font-size: 12px;

  color: #1a1a1a;

  background: #ffffff;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}


.login-form input[type="text"]::placeholder,
.login-form input[type="password"]::placeholder {
  color: #aaa7a0;
}


.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
  border-color: #eb2b0c;

  box-shadow:
    0 0 0 3px rgba(235, 43, 12, 0.08);
}


/* =====================================================
   OPTIONS
===================================================== */

.login-options {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: -4px;
}


/* =====================================================
   REMEMBER
===================================================== */

.remember {
  display: flex !important;

  flex-direction: row !important;

  align-items: center;

  gap: 6px !important;

  margin: 0;

  color: #777777 !important;

  font-size: 10px !important;

  font-weight: 400 !important;

  cursor: pointer;
}


.remember input[type="checkbox"] {
  width: 13px !important;
  height: 13px !important;

  margin: 0;

  padding: 0;

  accent-color: #eb2b0c;

  cursor: pointer;
}


/* =====================================================
   FORGOT PASSWORD
===================================================== */

.forgot {
  border: none;

  background: transparent;

  color: #eb2b0c;

  font-family: 'Inter', sans-serif;

  font-size: 10px;

  cursor: pointer;

  padding: 0;
}


.forgot:hover {
  text-decoration: underline;
}


/* =====================================================
   ERROR
===================================================== */

.error-text {
  margin: -7px 0 0;

  color: #eb2b0c;

  font-size: 11px;

  line-height: 1.4;
}


/* =====================================================
   LOGIN BUTTON
===================================================== */

.login-button {
  width: 100%;
  height: 43px;

  border: none;

  border-radius: 8px;

  background: #eb2b0c;

  color: #ffffff;

  font-family: 'Sora', sans-serif;

  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}


.login-button:hover {
  background: #d92509;

  transform: translateY(-1px);

  box-shadow:
    0 6px 15px rgba(235, 43, 12, 0.18);
}


.login-button:active {
  transform: translateY(0);
}


.login-button:disabled {
  opacity: 0.7;

  cursor: not-allowed;

  transform: none;

  box-shadow: none;
}


/* =====================================================
   ADMIN INFO
===================================================== */

.admin-info {
  margin-top: 27px;

  text-align: center;
}


/* =====================================================
   INFO LINE
===================================================== */

.info-line {
  display: flex;
  align-items: center;

  gap: 8px;

  color: #b0ada7;
}


.info-line span {
  flex: 1;

  height: 1px;

  background: #e5e3dc;
}


.info-line small {
  font-size: 7px;

  white-space: nowrap;
}


/* =====================================================
   INFO TEXT
===================================================== */

.admin-info p {
  width: 100%;
  max-width: 260px;

  margin: 10px auto 0;

  color: #999999;

  font-size: 8px;

  line-height: 1.5;
}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 900px) {

  .admin-login-page {
    padding: 30px 20px;
  }

  .login-wrapper {
    width: 100%;
    max-width: 880px;
  }

}


@media (max-width: 750px) {

  .admin-login-page {
    min-height: 100vh;

    padding: 25px 16px;

    align-items: flex-start;
  }


  .login-wrapper {
    width: 100%;

    height: auto;
    min-height: 0;

    display: grid;

    grid-template-columns: 1fr;

    border-radius: 16px;
  }


  /* KIRI */

  .login-left {
    width: 100%;
    height: 300px;

    min-height: 300px;

    padding: 28px 26px;
  }


  .login-left::after {
    display: none;
  }


  .login-left h1 {
    margin-top: 30px;

    font-size: 27px;
  }


  .left-description {
    max-width: 280px;
  }


  .laptop {
    left: 50%;
    bottom: 18px;

    transform: translateX(-50%) scale(0.85);

    transform-origin: center bottom;
  }


  .left-decoration-circle {
    right: 20px;
    top: 80px;
  }


  /* KANAN */

  .login-right {
    width: 100%;
    height: auto;

    min-height: 430px;

    padding: 40px 28px;
  }


  .form-container {
    max-width: 400px;
  }

}


@media (max-width: 480px) {

  .admin-login-page {
    padding: 16px 12px;
  }


  .login-wrapper {
    border-radius: 14px;
  }


  .login-left {
    height: 275px;
    min-height: 275px;

    padding: 24px 22px;
  }


  .login-left h1 {
    margin-top: 28px;

    font-size: 25px;
  }


  .left-description {
    width: 220px;

    font-size: 11px;
  }


  .laptop {
    transform: translateX(-50%) scale(0.72);
  }


  .login-right {
    padding: 34px 22px;
  }


  .login-right h2 {
    font-size: 22px;
  }


  .subtitle {
    margin-bottom: 24px;
  }

}


</style>