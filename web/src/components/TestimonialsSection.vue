<script setup>
const testimonials = [
  {
    quote: 'Timnya sangat komunikatif dan hasil kerjanya sesuai ekspektasi kami.',
    name: 'Nama Klien',
    role: 'Jabatan, Nama Perusahaan',
    rating: 5,
  },
  {
    quote: 'Proses pengerjaan cepat, rapi, dan selalu update progress ke kami.',
    name: 'Nama Klien Kedua',
    role: 'Jabatan, Nama Perusahaan',
    rating: 5,
  },
  {
    quote: 'Sangat membantu bisnis kami tumbuh lewat solusi digital yang tepat.',
    name: 'Nama Klien Ketiga',
    role: 'Jabatan, Nama Perusahaan',
    rating: 4,
  },
]

function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
</script>

<template>
  <section class="testimonials section">
    <div class="container">
      <p class="eyebrow text-center">Testimoni</p>
      <h2 class="text-center">Apa Kata Klien Kami</h2>

      <div class="testimonials__grid">
        <div class="testimonial-card" v-for="t in testimonials" :key="t.name">
          <svg class="testimonial-card__quote-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.17 6C4.87 6 3 7.87 3 10.17c0 2.3 1.87 4.17 4.17 4.17.4 0 .78-.06 1.15-.16C7.8 16.6 6.2 18.1 4.2 18.6c-.4.1-.6.53-.4.9.15.28.5.4.8.32 3.2-.8 5.6-3.6 5.6-7.15V10.2C10.2 7.87 8.9 6 7.17 6zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 2.3 1.87 4.17 4.17 4.17.4 0 .78-.06 1.15-.16-.52 2.42-2.12 3.92-4.12 4.42-.4.1-.6.53-.4.9.15.28.5.4.8.32 3.2-.8 5.6-3.6 5.6-7.15V10.2C20.2 7.87 18.9 6 17.17 6z" />
          </svg>

          <div class="testimonial-card__rating">
            <svg
              v-for="n in 5"
              :key="n"
              viewBox="0 0 24 24"
              :fill="n <= t.rating ? 'currentColor' : 'none'"
              stroke="currentColor"
              stroke-width="1.5"
              class="star"
            >
              <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.1 1.1-6.47L2.6 9.35l6.5-.95L12 2.5z" />
            </svg>
          </div>

          <p class="testimonial-card__quote">"{{ t.quote }}"</p>

          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">{{ getInitials(t.name) }}</div>
            <div class="testimonial-card__author-text">
              <strong>{{ t.name }}</strong>
              <span>{{ t.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials h2 {
  font-size: 28px;
  margin: 8px 0 40px;
}

.text-center {
  text-align: center;
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  position: relative;
  background: var(--color-yellow, #fde68a);
  border-radius: var(--radius, 16px);
  padding: 32px 28px 28px;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
}

.testimonial-card__quote-icon {
  width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.15);
  margin-bottom: 8px;
}

.testimonial-card__rating {
  display: flex;
  gap: 3px;
  margin-bottom: 14px;
}

.star {
  width: 16px;
  height: 16px;
  color: #ea580c;
}

.testimonial-card__quote {
  font-family: var(--font-heading, inherit);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #1a1a1a;
  margin-bottom: 24px;
  flex-grow: 1;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.testimonial-card__avatar {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #1a1a1a;
  color: #fde68a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
}

.testimonial-card__author-text {
  display: flex;
  flex-direction: column;
}

.testimonial-card__author-text strong {
  font-size: 14.5px;
  color: #1a1a1a;
}

.testimonial-card__author-text span {
  font-size: 12.5px;
  color: var(--color-text-secondary, #6b5f45);
}

/* Tablet: 2 kolom */
@media (max-width: 900px) {
  .testimonials__grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Mobile: tetap 2 kolom, diperkecil supaya tidak terlalu besar */
@media (max-width: 600px) {
  .testimonials h2 { font-size: 20px; margin: 6px 0 24px; }
  .eyebrow { font-size: 12px; }

  .testimonials__grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .testimonial-card {
    padding: 14px 12px 12px;
    border-radius: 12px;
  }

  .testimonial-card__quote-icon {
    width: 20px;
    height: 20px;
    margin-bottom: 4px;
  }

  .testimonial-card__rating { gap: 2px; margin-bottom: 8px; }
  .star { width: 11px; height: 11px; }

  .testimonial-card__quote {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .testimonial-card__author {
    gap: 8px;
    padding-top: 10px;
  }

  .testimonial-card__avatar {
    width: 30px;
    height: 30px;
    font-size: 11px;
  }

  .testimonial-card__author-text strong { font-size: 11.5px; }
  .testimonial-card__author-text span { font-size: 10px; }
}
</style>