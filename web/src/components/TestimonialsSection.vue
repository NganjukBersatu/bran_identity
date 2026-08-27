<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const testimonials = ref([
  {
    quote: 'Sprint pertama sempat meleset seminggu karena scope kami sendiri yang berubah. Tim Brand Identity jujur soal itu.',
    name: 'Adrian Tan',
    role: 'Co-Founder, FlashCart',
    rating: 5,
    photo: '/testimoni/adriantan.jpg',
  },
  {
    quote: 'Conversion rate naik dari 1,8% ke 3,4% dalam dua bulan setelah landing page baru live. Nyata dan bisa diaudit.',
    name: 'Nadia Puspita',
    role: 'Head of Growth, Vitalis Health',
    rating: 5,
    photo: '/testimoni/nadiapuspita.jpg',
  },
  {
    quote: 'Dokumentasi API-nya rapi. Ada satu endpoint yang sempat diperbaiki, sisanya solid dan responsif.',
    name: 'Marcus Hale',
    role: 'CTO, NexaMarket',
    rating: 4,
    photo: '/testimoni/marcushale.jpg',
  },
])

function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function onPhotoError(event) {
  event.target.style.display = 'none'
}

let observer = null

onMounted(() => {
  const els = document.querySelectorAll('.testimonials .reveal')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )

  els.forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section class="testimonials section">
    <div class="container">
      <span class="eyebrow reveal">Testimoni</span>
      <h2 class="reveal" style="transition-delay:.08s">Apa Kata Klien Kami</h2>

      <div class="testimonials__grid">
        <article
          v-for="(t, i) in testimonials"
          :key="t.name"
          class="testimonial-card reveal"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <span class="testimonial-card__quotemark">&ldquo;</span>

          <div class="testimonial-card__rating" :aria-label="`Rating ${t.rating} dari 5`">
            <span
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{ 'star--off': n > t.rating }"
            >★</span>
          </div>

          <p class="testimonial-card__quote">{{ t.quote }}</p>

          <div class="testimonial-card__footer">
            <div class="testimonial-card__avatar">
              <img
                v-if="t.photo"
                :src="t.photo"
                :alt="t.name"
                class="testimonial-card__avatar-img"
                loading="lazy"
                @error="onPhotoError"
              />
              <span class="testimonial-card__avatar-fallback">{{ getInitials(t.name) }}</span>
            </div>
            <div class="testimonial-card__who">
              <strong>{{ t.name }}</strong>
              <span>{{ t.role }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="testimonials__more reveal">
        <router-link to="/testimoni" class="btn-more">
          Lihat Selengkapnya
          <span>→</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  --color-yellow: #FCEF92;
  --color-orange: #FB9F37;
  --color-deep-orange: #E75119;
  --color-red: #EB2B0C;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-secondary: #5F5E5A;
  --color-border: #E5E3DC;
  --font-heading: 'Sora', sans-serif;

  padding: 75px 0;
}

.testimonials * {
  box-sizing: border-box;
}

.text-center {
  text-align: center;
}

/* ===== Entrance animation ===== */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  will-change: opacity, transform;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.testimonials .eyebrow {
  display: block;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--color-deep-orange);
  margin-bottom: 8px;
}

.testimonials h2 {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(25px, 3vw, 32px);
  color: var(--color-text);
  margin: 0 0 42px;
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.testimonial-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 27px 23px 21px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.6s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 35px -24px rgba(26, 26, 26, 0.3);
}

.testimonial-card__quotemark {
  position: absolute;
  top: 7px;
  left: 17px;
  font-family: Georgia, serif;
  font-size: 50px;
  font-weight: 700;
  color: var(--color-orange);
  opacity: 0.32;
  line-height: 1;
}

.testimonial-card__rating {
  display: flex;
  gap: 2px;
  margin-top: 6px;
}

.star {
  color: var(--color-orange);
  font-size: 13px;
}
.star--off {
  color: var(--color-border);
}

.testimonial-card__quote {
  position: relative;
  z-index: 1;
  font-size: 13.5px;
  line-height: 1.75;
  color: var(--color-text);
  flex-grow: 1;
}

.testimonial-card__footer {
  display: flex;
  align-items: center;
  gap: 11px;
  padding-top: 13px;
  border-top: 1px solid var(--color-border);
}

/* ===== Avatar ===== */
.testimonial-card__avatar {
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--color-text);
  color: var(--color-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  border: 2px solid var(--color-surface);
  box-shadow: 0 0 0 1.5px var(--color-orange);
}

.testimonial-card__avatar-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.testimonial-card__avatar-fallback {
  position: relative;
  z-index: 0;
}

.testimonial-card__who {
  display: flex;
  flex-direction: column;
  font-size: 11px;
}
.testimonial-card__who strong {
  font-family: var(--font-heading);
  color: var(--color-deep-orange);
  font-size: 12px;
}
.testimonial-card__who span {
  color: var(--color-text-secondary);
}

.testimonials__more {
  display: flex;
  justify-content: center;
  margin-top: 34px;
}

.btn-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 9px;
  border: 1px solid var(--color-red);
  color: var(--color-red);
  background: transparent;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.btn-more span {
  transition: transform 0.2s ease;
}

.btn-more:hover {
  background: var(--color-red);
  color: #fff;
  transform: translateY(-2px);
}

.btn-more:hover span {
  transform: translateX(3px);
}

/* ===== Tablet ===== */
@media (max-width: 900px) {
  .testimonials__grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* ===== Mobile ===== */
@media (max-width: 600px) {
  .testimonials {
    padding: 60px 0;
  }
  .testimonials h2 {
    font-size: 20px;
    margin-bottom: 24px;
  }
  .eyebrow {
    font-size: 9px;
  }

  .testimonials__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .testimonial-card {
    padding: 20px 16px 16px;
    border-radius: 12px;
  }

  .testimonial-card__quotemark {
    font-size: 36px;
    top: 4px;
    left: 12px;
  }

  .testimonial-card__quote {
    font-size: 12.5px;
    line-height: 1.6;
  }

  .testimonial-card__avatar {
    width: 34px;
    height: 34px;
    font-size: 11px;
  }

  .testimonial-card__who strong {
    font-size: 11.5px;
  }
  .testimonial-card__who span {
    font-size: 10px;
  }

  .testimonials__more {
    margin-top: 24px;
  }
}
</style>