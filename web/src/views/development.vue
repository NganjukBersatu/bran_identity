<script setup>
/*
  Halaman detail layanan: Development
  Tema visual: device mockup showcase (laptop + tablet + phone) + tech stack grid.
  Tanpa warna gelap/hitam pada background — murni dari palet:
    #FCEF91 - krem kuning
    #FB9E3A - oranye muda
    #E6521F - oranye bakar (aksen utama)
    #EA2F14 - merah (penekanan)
*/
import { ref, onMounted } from 'vue'

const techStack = [
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
]

const features = [
  { no: '01', title: 'Clean Code Architecture', desc: 'Struktur kode rapi, terdokumentasi, dan mudah di-maintain jangka panjang.' },
  { no: '02', title: 'Update Berkala', desc: 'Progress dilaporkan tiap sprint, bukan menunggu produk jadi baru dikabari.' },
  { no: '03', title: 'Testing Menyeluruh', desc: 'Unit test dan QA dijalankan sebelum fitur dianggap selesai.' },
  { no: '04', title: 'Skalabel dari Awal', desc: 'Dibangun agar siap menampung pertumbuhan pengguna dan fitur baru.' },
]

const stats = [
  { value: '80+', label: 'Aplikasi dibangun' },
  { value: '99.9%', label: 'Uptime rata-rata' },
  { value: '2–8', label: 'Minggu per fase' },
]

const isVisible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { isVisible.value = true })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' })

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="development">

    <!-- HERO -->
    <section class="hero">
      <div class="hero__mesh" aria-hidden="true">
        <div class="mesh__orb mesh__orb--1"></div>
        <div class="mesh__orb mesh__orb--2"></div>
        <div class="mesh__grid"></div>
      </div>

      <div class="hero__inner">
        <div class="hero__text" :class="{ 'is-visible': isVisible }">
          <span class="hero__badge">
            <span class="hero__badge-dot"></span>
            Layanan · 03
          </span>
          <h1>
            Satu Kode,<br />
            Siap di <span>Semua Layar</span>.
          </h1>
          <p>
            Website dan aplikasi yang kami bangun didesain responsif sejak awal —
            tampil rapi dan konsisten baik di desktop, tablet, maupun ponsel.
          </p>
          <div class="hero__actions">
            <router-link to="/#kontak" class="btn btn--primary">
              Mulai Development <span>→</span>
            </router-link>
            <a href="#tech-stack" class="btn btn--outline">Lihat Teknologi</a>
          </div>
        </div>

        <!-- DEVICE MOCKUP SHOWCASE -->
        <div class="hero__showcase" :class="{ 'is-visible': isVisible }">
          <div class="showcase__glow" aria-hidden="true"></div>

          <div class="editor__badge editor__badge--1">
            <span class="editor__badge-dot editor__badge-dot--green"></span>
            Responsive Ready
          </div>
          <div class="editor__badge editor__badge--2">
            <span class="editor__badge-dot editor__badge-dot--orange"></span>
            Auto Deploy
          </div>

          <!-- LAPTOP -->
          <div class="device device--laptop">
            <div class="laptop__screen">
              <div class="mockpage__topbar">
                <span class="mockpage__dot mockpage__dot--red"></span>
                <span class="mockpage__dot mockpage__dot--yellow"></span>
                <span class="mockpage__dot mockpage__dot--green"></span>
                <span class="mockpage__url">yourapp.com</span>
              </div>
              <div class="mockpage__body">
                <div class="mockpage__nav">
                  <span class="mockpage__logo"></span>
                  <span class="mockpage__navitem"></span>
                  <span class="mockpage__navitem"></span>
                  <span class="mockpage__navitem"></span>
                  <span class="mockpage__navbtn"></span>
                </div>
                <div class="mockpage__hero">
                  <div class="mockpage__herotext">
                    <span class="mockpage__bar mockpage__bar--wide"></span>
                    <span class="mockpage__bar mockpage__bar--mid"></span>
                    <span class="mockpage__bar mockpage__bar--btn"></span>
                  </div>
                  <div class="mockpage__herocards">
                    <span class="mockpage__card"></span>
                    <span class="mockpage__card"></span>
                    <span class="mockpage__card"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="laptop__base"></div>
          </div>

          <!-- TABLET -->
          <div class="device device--tablet">
            <div class="tablet__screen">
              <div class="mockpage__navmini">
                <span class="mockpage__logo mockpage__logo--sm"></span>
                <span class="mockpage__navitem mockpage__navitem--sm"></span>
              </div>
              <span class="mockpage__bar mockpage__bar--wide"></span>
              <span class="mockpage__bar mockpage__bar--mid"></span>
              <div class="mockpage__herocards mockpage__herocards--stack">
                <span class="mockpage__card"></span>
                <span class="mockpage__card"></span>
              </div>
            </div>
          </div>

          <!-- PHONE -->
          <div class="device device--phone">
            <div class="phone__notch"></div>
            <div class="phone__screen">
              <div class="mockpage__navmini mockpage__navmini--sm">
                <span class="mockpage__logo mockpage__logo--sm"></span>
              </div>
              <span class="mockpage__bar mockpage__bar--wide"></span>
              <span class="mockpage__bar mockpage__bar--short"></span>
              <span class="mockpage__card mockpage__card--full"></span>
              <span class="mockpage__card mockpage__card--full"></span>
            </div>
          </div>

          <div class="showcase__shadow" aria-hidden="true"></div>
        </div>
      </div>

      <div class="hero__stats reveal">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat__value">{{ s.value }}</span>
          <span class="stat__label">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <!-- TECH STACK -->
    <section id="tech-stack" class="tech">
      <div class="section-head reveal">
        <span class="eyebrow eyebrow--dark">Teknologi</span>
        <h2>Tools yang Kami Kuasai</h2>
        <p>Dipilih berdasarkan kebutuhan project, bukan sekadar ikut tren.</p>
      </div>

      <div class="tech__grid">
        <div
          class="tech-card reveal"
          v-for="(t, i) in techStack"
          :key="t.name"
          :style="{ transitionDelay: (i * 0.07) + 's' }"
        >
          <span class="tech-card__category">{{ t.category }}</span>
          <h3>{{ t.name }}</h3>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <div class="section-head reveal">
        <span class="eyebrow eyebrow--dark">Kenapa Kami</span>
        <h2>Development yang Bisa Anda Percaya</h2>
      </div>

      <div class="features__grid">
        <div
          class="feature-card reveal"
          v-for="(f, i) in features"
          :key="f.no"
          :style="{ transitionDelay: (i * 0.1) + 's' }"
        >
          <span class="feature-card__no">{{ f.no }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta__decoration cta__decoration--1" aria-hidden="true"></div>
      <div class="cta__decoration cta__decoration--2" aria-hidden="true"></div>
      <div class="cta__content reveal">
        <span class="eyebrow eyebrow--onred">Siap Mulai?</span>
        <h2>Mari Bangun Produk Anda Bersama</h2>
        <p>Diskusikan kebutuhan teknis Anda, tim development kami siap membantu dari nol.</p>
        <router-link to="/#kontak" class="btn btn--white">
          Konsultasi Gratis <span>→</span>
        </router-link>
      </div>
    </section>

  </div>
</template>

<style scoped>
.development {
  --cream: #FCEF91;
  --orange-light: #FB9E3A;
  --orange: #E6521F;
  --red: #EA2F14;
  --ink: #202020;
  color: var(--ink);
  overflow-x: hidden;
  background: #fffaf0;
}

.eyebrow {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 14px;
}
.eyebrow--dark { color: var(--red); }
.eyebrow--onred { color: #fff5df; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  font-size: 14.5px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
}
.btn span { transition: transform 0.2s ease; }
.btn:hover span { transform: translateX(3px); }

.btn--primary {
  background: linear-gradient(100deg, var(--orange-light), var(--red));
  color: #fff;
  box-shadow: 0 14px 30px rgba(234, 47, 20, 0.32);
}
.btn--primary:hover { transform: translateY(-3px); }

.btn--outline {
  background: #fff;
  color: var(--ink);
  border: 1.5px solid rgba(230, 82, 31, 0.25);
}
.btn--outline:hover { border-color: var(--orange); color: var(--orange); }

.btn--white {
  background: #fff;
  color: var(--red);
  box-shadow: 0 14px 30px rgba(0,0,0,0.15);
}
.btn--white:hover { transform: translateY(-3px); }

/* ---------- HERO (terang, tanpa hitam) ---------- */
.hero {
  position: relative;
  overflow: hidden;
  padding: 160px clamp(20px, 6vw, 80px) 0;
  background: linear-gradient(160deg, var(--cream) 0%, #fff3cf 45%, #ffe6c2 100%);
}

.hero__mesh { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.mesh__orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.5; }
.mesh__orb--1 { width: 420px; height: 420px; top: -160px; left: -120px; background: radial-gradient(circle, var(--orange-light), transparent 70%); }
.mesh__orb--2 { width: 380px; height: 380px; top: -100px; right: -140px; background: radial-gradient(circle, var(--red), transparent 70%); opacity: 0.28; }
.mesh__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(230,82,31,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(230,82,31,0.05) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(ellipse 70% 60% at 60% 20%, #000 30%, transparent 75%);
}

.hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 50px;
  align-items: center;
  max-width: 1220px;
  margin: 0 auto;
  padding-bottom: 130px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(230, 82, 31, 0.2);
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 24px;
}
.hero__badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--orange);
  box-shadow: 0 0 0 4px rgba(230,82,31,0.18);
}

.hero__text {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
}
.hero__text.is-visible { opacity: 1; transform: translateY(0); }

.hero__text h1 {
  font-size: clamp(30px, 4.2vw, 48px);
  font-weight: 800;
  line-height: 1.16;
  margin: 0 0 20px;
  letter-spacing: -0.02em;
  color: var(--ink);
}
.hero__text h1 span { color: var(--orange); }

.hero__text p {
  font-size: 15.5px;
  line-height: 1.75;
  color: #5b4a2a;
  margin: 0 0 32px;
  max-width: 460px;
}

.hero__actions { display: flex; gap: 14px; flex-wrap: wrap; }

/* ---------- DEVICE SHOWCASE ---------- */
.hero__showcase {
  position: relative;
  height: 420px;
  perspective: 1600px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero__showcase.is-visible { opacity: 1; transform: translateY(0); }

.showcase__glow {
  position: absolute;
  inset: -40px;
  background: radial-gradient(circle at 50% 45%, rgba(251,158,58,0.35), transparent 65%);
  filter: blur(30px);
  z-index: 0;
}

.showcase__shadow {
  position: absolute;
  left: 50%;
  bottom: 6px;
  width: 78%;
  height: 34px;
  transform: translateX(-50%);
  background: radial-gradient(ellipse, rgba(180, 90, 30, 0.28), transparent 72%);
  filter: blur(6px);
  z-index: 0;
}

.device { position: absolute; z-index: 2; }

/* Laptop */
.device--laptop {
  left: 50%;
  top: 6px;
  width: 480px;
  transform: translateX(-50%) rotateX(6deg) rotateY(-8deg);
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}
.hero__showcase:hover .device--laptop { transform: translateX(-50%) rotateX(3deg) rotateY(-5deg); }

.laptop__screen {
  border-radius: 12px 12px 4px 4px;
  overflow: hidden;
  background: #fff;
  border: 6px solid #2a2015;
  box-shadow: 0 40px 60px rgba(150, 80, 20, 0.28);
}
.laptop__base {
  height: 14px;
  margin: 0 -14px;
  border-radius: 0 0 10px 10px;
  background: linear-gradient(180deg, #3a2c1c, #241a10);
  box-shadow: 0 10px 18px rgba(0,0,0,0.2);
}
.laptop__base::after {
  content: "";
  display: block;
  width: 70px;
  height: 4px;
  margin: 0 auto;
  border-radius: 0 0 6px 6px;
  background: #4a3a26;
}

/* Tablet */
.device--tablet {
  left: -14px;
  bottom: -6px;
  width: 168px;
  transform: rotateZ(-6deg);
  filter: drop-shadow(0 22px 30px rgba(150, 80, 20, 0.22));
}
.tablet__screen {
  aspect-ratio: 3 / 4;
  padding: 14px 10px;
  border-radius: 16px;
  background: #fff;
  border: 5px solid #2a2015;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Phone */
.device--phone {
  right: -6px;
  bottom: -18px;
  width: 116px;
  transform: rotateZ(7deg);
  filter: drop-shadow(0 22px 30px rgba(150, 80, 20, 0.24));
}
.phone__notch {
  width: 34px;
  height: 6px;
  margin: 0 auto -6px;
  border-radius: 0 0 8px 8px;
  background: #2a2015;
  position: relative;
  z-index: 3;
}
.phone__screen {
  aspect-ratio: 9 / 18.5;
  padding: 16px 8px 10px;
  border-radius: 22px;
  background: #fff;
  border: 5px solid #2a2015;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* Mock content inside screens */
.mockpage__topbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 12px;
  background: #f6f1e6;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.mockpage__dot { width: 7px; height: 7px; border-radius: 50%; }
.mockpage__dot--red { background: #ff5f57; }
.mockpage__dot--yellow { background: #febc2e; }
.mockpage__dot--green { background: #28c840; }
.mockpage__url {
  margin-left: 8px;
  font-size: 9.5px;
  color: #a08f6f;
  font-family: 'Courier New', monospace;
}

.mockpage__body { padding: 14px 18px 20px; }
.mockpage__nav {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.mockpage__logo {
  width: 20px; height: 20px; border-radius: 6px;
  background: linear-gradient(135deg, var(--orange-light), var(--red));
}
.mockpage__navitem {
  width: 34px; height: 6px; border-radius: 4px;
  background: #ecdfc2;
}
.mockpage__navitem:last-of-type { margin-left: auto; }
.mockpage__navbtn {
  width: 46px; height: 16px; border-radius: 999px;
  background: linear-gradient(100deg, var(--orange-light), var(--red));
  margin-left: 8px;
}

.mockpage__hero { display: flex; justify-content: space-between; gap: 14px; }
.mockpage__herotext { display: flex; flex-direction: column; gap: 8px; padding-top: 6px; }
.mockpage__bar { display: block; height: 8px; border-radius: 5px; background: #ecdfc2; }
.mockpage__bar--wide { width: 130px; height: 12px; background: #e3c37e; }
.mockpage__bar--mid { width: 95px; }
.mockpage__bar--short { width: 60px; }
.mockpage__bar--btn {
  width: 62px; height: 14px; margin-top: 6px; border-radius: 999px;
  background: linear-gradient(100deg, var(--orange-light), var(--red));
}

.mockpage__herocards { display: flex; flex-direction: column; gap: 8px; }
.mockpage__herocards--stack { margin-top: 4px; }
.mockpage__card {
  width: 92px; height: 22px; border-radius: 8px;
  background: #fdf6e3;
  border: 1px solid rgba(230, 82, 31, 0.16);
}
.mockpage__card--full { width: 100%; height: 30px; }

.mockpage__navmini { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
.mockpage__navmini--sm { margin-bottom: 8px; }
.mockpage__logo--sm { width: 14px; height: 14px; border-radius: 4px; }
.mockpage__navitem--sm { width: 26px; height: 5px; }

.editor__badge {
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  background: #fff;
  font-size: 12.5px;
  font-weight: 800;
  color: var(--ink);
  box-shadow: 0 14px 30px rgba(0,0,0,0.15);
}
.editor__badge--1 { top: -6px; left: -6px; }
.editor__badge--2 { bottom: 92px; right: -10px; }
.editor__badge-dot { width: 8px; height: 8px; border-radius: 50%; }
.editor__badge-dot--green { background: #2e9e5b; box-shadow: 0 0 0 4px rgba(46,158,91,0.2); }
.editor__badge-dot--orange { background: var(--orange); box-shadow: 0 0 0 4px rgba(230,82,31,0.2); }

/* ---------- SCROLL REVEAL (seluruh halaman) ---------- */
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.75s ease, transform 0.75s ease;
}
.reveal.is-revealed { opacity: 1; transform: translateY(0); }

/* Stats floating strip */
.hero__stats {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 760px;
  margin: 0 auto;
  transform: translateY(40%);
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(230, 82, 31, 0.16);
  overflow: hidden;
}
.hero__stats.reveal { opacity: 0; transform: translateY(calc(40% + 30px)); }
.hero__stats.reveal.is-revealed { opacity: 1; transform: translateY(40%); }
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 28px 10px;
  border-right: 1px solid rgba(0,0,0,0.06);
}
.stat:last-child { border-right: none; }
.stat__value {
  font-size: clamp(22px, 2.8vw, 28px);
  font-weight: 800;
  background: linear-gradient(100deg, var(--orange), var(--red));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat__label { font-size: 12.5px; color: #777; font-weight: 600; }

/* ---------- SECTION HEAD ---------- */
.section-head { text-align: center; max-width: 580px; margin: 0 auto 52px; }
.section-head h2 { font-size: clamp(24px, 3.2vw, 34px); font-weight: 800; margin: 0 0 12px; line-height: 1.25; }
.section-head p { font-size: 15px; color: #666; margin: 0; }

/* ---------- TECH STACK ---------- */
.tech { padding: 190px clamp(20px, 6vw, 80px) 110px; }

.tech__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  max-width: 1000px;
  margin: 0 auto;
}

.tech-card {
  padding: 26px 22px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(230, 82, 31, 0.12);
  box-shadow: 0 8px 22px rgba(180, 120, 40, 0.06);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.tech-card:hover {
  transform: translateY(-5px);
  border-color: var(--orange-light);
  box-shadow: 0 16px 34px rgba(239, 91, 35, 0.15);
}
.tech-card__category {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--orange);
  margin-bottom: 10px;
}
.tech-card h3 { margin: 0; font-size: 16px; font-weight: 800; }

/* ---------- FEATURES ---------- */
.features { padding: 110px clamp(20px, 6vw, 80px); background: var(--cream); }

.features__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  max-width: 1180px;
  margin: 0 auto;
}

.feature-card {
  padding: 28px 22px;
  border-radius: 16px;
  background: #fffdf5;
  border: 1px solid rgba(230, 82, 31, 0.15);
}
.feature-card__no { display: inline-block; font-size: 24px; font-weight: 800; color: var(--orange-light); margin-bottom: 14px; }
.feature-card h3 { font-size: 15.5px; font-weight: 800; margin: 0 0 8px; }
.feature-card p { font-size: 13px; line-height: 1.6; color: #5b4a2a; margin: 0; }

/* ---------- CTA (gradasi orange/red, tanpa hitam) ---------- */
.cta {
  position: relative;
  overflow: hidden;
  padding: 100px clamp(20px, 6vw, 80px);
  background: linear-gradient(115deg, #fcef91 0%, #ffa447 45%, #f93827 100%);
  text-align: center;
}
.cta__decoration { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.15); pointer-events: none; }
.cta__decoration--1 { width: 260px; height: 260px; left: 8%; top: -130px; }
.cta__decoration--2 { width: 220px; height: 220px; right: 10%; bottom: -120px; }

.cta__content { position: relative; z-index: 2; max-width: 600px; margin: 0 auto; }
.cta__content h2 { font-size: clamp(24px, 3.4vw, 36px); font-weight: 800; margin: 0 0 14px; color: #201409; }
.cta__content p { margin: 0 0 32px; font-size: 14.5px; color: rgba(32,20,9,0.75); line-height: 1.7; }

/* ---------- RESPONSIVE ---------- */
@media (max-width: 950px) {
  .hero__inner { grid-template-columns: 1fr; padding-bottom: 90px; }
  .hero__showcase { max-width: 480px; margin: 40px auto 0; height: 380px; }
  .hero__stats { grid-template-columns: repeat(3, 1fr); }
  .tech__grid { grid-template-columns: repeat(2, 1fr); }
  .features__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 650px) {
  .hero { padding: 120px 20px 0; }
  .hero__actions { flex-direction: column; }
  .hero__showcase { height: 320px; }
  .device--laptop { width: 320px; }
  .device--tablet { width: 120px; left: -8px; }
  .device--phone { width: 84px; right: -4px; }
  .hero__stats { transform: translateY(30%); border-radius: 16px; }
  .hero__stats.reveal.is-revealed { transform: translateY(30%); }
  .tech { padding: 150px 20px 80px; }
  .features { padding: 70px 20px; }
  .tech__grid, .features__grid { grid-template-columns: 1fr; }
  .editor__badge--1, .editor__badge--2 { font-size: 11px; padding: 7px 12px; }
}
</style>