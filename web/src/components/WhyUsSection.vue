<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const points = [
  'Berpengalaman mengerjakan berbagai jenis project digital',
  'Tim developer & desainer yang responsif',
  'Proses kerja transparan dari awal hingga akhir',
]

const sectionRef = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  // Fallback untuk browser yang tidak support IntersectionObserver
  if (typeof IntersectionObserver === 'undefined') {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // Setelah muncul, observer dihentikan
        // supaya animasi tidak berulang ketika scroll naik-turun
        observer.disconnect()
      }
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <section
    id="tentang"
    ref="sectionRef"
    class="whyus section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="container whyus__inner">

      <!-- TEXT -->
      <div class="whyus__text">
        <p class="eyebrow">Kenapa Memilih Kami</p>

        <h2>
          Partner teknologi yang mengerti kebutuhan bisnis Anda
        </h2>

        <ul class="whyus__list">
          <li
            v-for="(point, i) in points"
            :key="i"
            :style="{ '--delay': `${i * 0.12}s` }"
          >
            <span class="whyus__number">
              {{ i + 1 }}
            </span>

            <span class="whyus__point-text">
              {{ point }}
            </span>
          </li>
        </ul>
      </div>

      <!-- IMAGE -->
      <div class="whyus__photo">
        <img
          src="/team/team-2.jpg"
          alt="Foto tim kami"
          loading="lazy"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =====================================================
   WHY US
===================================================== */

.whyus {
  overflow: hidden;
}

.whyus__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 64px;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
}


/* =====================================================
   TEXT
===================================================== */

.whyus__text {
  min-width: 0;

  opacity: 0;
  transform: translateX(-45px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.whyus.is-visible .whyus__text {
  opacity: 1;
  transform: translateX(0);
}

.whyus__text h2 {
  max-width: 600px;

  margin: 8px 0 28px;

  font-family: var(--font-heading);
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.2;
  letter-spacing: -0.02em;
}


/* =====================================================
   LIST
===================================================== */

.whyus__list {
  list-style: none;

  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 18px;
}

.whyus__list li {
  display: flex;
  align-items: flex-start;
  gap: 14px;

  font-size: 15px;
  line-height: 1.6;

  opacity: 0;
  transform: translateY(18px);
  will-change: opacity, transform;

  transition:
    opacity 0.6s ease var(--delay),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) var(--delay);
}

.whyus.is-visible .whyus__list li {
  opacity: 1;
  transform: translateY(0);
}


/* =====================================================
   NUMBER
===================================================== */

.whyus__number {
  flex: 0 0 30px;

  width: 30px;
  height: 30px;

  border-radius: 50%;

  background: var(--color-yellow);
  color: var(--color-deep-orange);

  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1px;

  opacity: 0;
  transform: scale(0.5);

  transition:
    opacity 0.5s ease var(--delay),
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) var(--delay),
    background-color 0.3s ease;
}

.whyus.is-visible .whyus__number {
  opacity: 1;
  transform: scale(1);
}

.whyus__list li:hover .whyus__number {
  transform: scale(1.08);
}


/* =====================================================
   IMAGE
===================================================== */

.whyus__photo {
  min-width: 0;
  overflow: hidden;
  border-radius: var(--radius);

  opacity: 0;
  transform: translateX(45px) scale(0.97);

  transition:
    opacity 0.9s ease 0.15s,
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
}

.whyus.is-visible .whyus__photo {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.whyus__photo img {
  width: 100%;
  height: auto;

  aspect-ratio: 4 / 3;

  display: block;

  object-fit: cover;

  border-radius: var(--radius);

  transition: transform 0.5s ease;
}

/* Fallback untuk browser tanpa support aspect-ratio */
@supports not (aspect-ratio: 4 / 3) {
  .whyus__photo {
    position: relative;
    padding-top: 75%; /* 4:3 */
  }

  .whyus__photo img {
    position: absolute;
    inset: 0;
    height: 100%;
  }
}

.whyus__photo:hover img {
  transform: scale(1.03);
}


/* =====================================================
   LARGE DESKTOP
===================================================== */

@media (min-width: 1200px) {
  .whyus__inner {
    gap: 80px;
  }
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 900px) {
  .whyus__inner {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
    gap: 36px;
  }

  .whyus__text h2 {
    font-size: 28px;
    margin-bottom: 22px;
  }

  .whyus__list {
    gap: 15px;
  }

  .whyus__list li {
    font-size: 14px;
    gap: 11px;
  }

  .whyus__number {
    flex-basis: 28px;
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 700px) {
  .whyus__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .whyus__text {
    transform: translateY(30px);
  }

  .whyus.is-visible .whyus__text {
    transform: translateY(0);
  }

  .whyus__photo {
    order: -1;
    transform: translateY(30px) scale(0.98);
  }

  .whyus.is-visible .whyus__photo {
    transform: translateY(0) scale(1);
  }

  .whyus__text h2 {
    font-size: clamp(25px, 7vw, 32px);
    line-height: 1.25;
    margin: 7px 0 22px;
  }

  .whyus__list {
    gap: 14px;
  }

  .whyus__list li {
    font-size: 14px;
    line-height: 1.5;
  }

  .whyus__number {
    flex: 0 0 28px;

    width: 28px;
    height: 28px;

    font-size: 12px;
  }

  .whyus__photo img {
    aspect-ratio: 16 / 10;
  }
}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 480px) {
  .whyus__inner {
    gap: 26px;
  }

  .whyus__text h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .whyus__list {
    gap: 12px;
  }

  .whyus__list li {
    font-size: 13px;
    gap: 10px;
  }

  .whyus__number {
    flex: 0 0 26px;

    width: 26px;
    height: 26px;

    font-size: 11px;
  }

  .whyus__photo img {
    aspect-ratio: 4 / 3;
  }
}


/* =====================================================
   EXTRA SMALL MOBILE
===================================================== */

@media (max-width: 380px) {
  .whyus__inner {
    gap: 20px;
  }

  .whyus__text h2 {
    font-size: 21px;
    margin-bottom: 16px;
  }

  .whyus__list li {
    font-size: 12.5px;
    gap: 8px;
  }

  .whyus__number {
    flex: 0 0 24px;
    width: 24px;
    height: 24px;
    font-size: 10.5px;
  }
}


/* =====================================================
   LANDSCAPE / SHORT VIEWPORT
===================================================== */

@media (max-height: 480px) and (orientation: landscape) {
  .whyus__inner {
    gap: 24px;
  }

  .whyus__photo img {
    aspect-ratio: 16 / 9;
  }
}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {
  .whyus__text,
  .whyus__photo,
  .whyus__list li,
  .whyus__number {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .whyus__photo img,
  .whyus__number {
    transition: none;
  }
}
</style>