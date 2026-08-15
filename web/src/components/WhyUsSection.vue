<script setup>
const points = [
  'Berpengalaman mengerjakan berbagai jenis project digital',
  'Tim developer & desainer yang responsif',
  'Proses kerja transparan dari awal hingga akhir',
]
</script>

<template>
  <section id="tentang" class="whyus section">
    <div class="container whyus__inner">
      <div class="whyus__text">
        <p class="eyebrow">Kenapa Memilih Kami</p>
        <h2>Partner teknologi yang mengerti kebutuhan bisnis Anda</h2>

        <ul class="whyus__list">
          <li v-for="(point, i) in points" :key="i">
            <span class="whyus__number">{{ i + 1 }}</span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>

      <div class="whyus__photo">
        <img src="/team/team-2.jpg" alt="Foto tim kami" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.whyus__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.whyus__text h2 { font-size: 28px; margin: 8px 0 24px; }
.whyus__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 18px; }
.whyus__list li { display: flex; align-items: center; gap: 12px; font-size: 15px; }
.whyus__number {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-yellow);
  color: var(--color-deep-orange);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.whyus__photo img {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius);
  display: block;
  object-fit: cover;
}

@media (max-width: 768px) {
  .whyus__inner { grid-template-columns: 1fr; }
  .whyus__photo { order: -1; }
}
</style>