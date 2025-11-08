<template>
  <section class="features container py-5">
    <h2 class="section-heading mb-4 centered-title">مجرد وقت</h2>

    <div class="features-grid">
      <div class="feature-tall feature-time">
        <div class="feature-inner">
          <div class="feature-icon"><i class="bi bi-clock-history"></i></div>
          <div class="feature-title">تنظيم الوقت</div>
          <div class="feature-sub">خطة يومية مرنة واستغلال فعّال لكل دقيقة.</div>
        </div>
        <div class="shine"></div>
      </div>

      <div class="feature-tall feature-competition">
        <div class="feature-inner">
          <div class="feature-icon"><i class="bi bi-trophy"></i></div>
          <div class="feature-title">المنافسة</div>
          <div class="feature-sub">تحديات تحفيزية مع قياسات تقدم واضحة.</div>
        </div>
        <div class="shine"></div>
      </div>

      <div class="feature-tall feature-study">
        <div class="feature-inner">
          <div class="feature-icon"><i class="bi bi-journal-bookmark"></i></div>
          <div class="feature-title">الدراسة</div>
          <div class="feature-sub">تنظيم وحدات التعلم وتتبع ساعات المذاكرة بسهولة.</div>
        </div>
        <div class="shine"></div>
      </div>

      <div class="feature-tall feature-sport">
        <div class="feature-inner">
          <div class="feature-icon"><i class="bi bi-fire"></i></div>
          <div class="feature-title">الرياضة</div>
          <div class="feature-sub">جداول تمارين وتتبّع مستمر لتقدم اللياقة.</div>
        </div>
        <div class="shine"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.2rem;
}

@media(min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.centered-title {
  text-align: center;
  font-weight: 900;
  font-size: 2rem;
  letter-spacing: 0.02em;
  color: var(--purple-light);
  margin-bottom: 2rem;
}

.feature-tall {
  height: 260px;
  border-radius: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.4rem;
  transition: transform .6s cubic-bezier(.2,.9,.25,1), box-shadow .3s;
  perspective: 1200px;
  position: relative;
  overflow: hidden;
  font-family: 'Cairo', sans-serif;
  box-shadow: 0 8px 24px rgba(91,33,182,0.35);
}

/* ألوان خلفيات مختلفة لكل بطاقة */
.feature-time {
  background: linear-gradient(135deg, #6a44ff, #4a138f);
}
.feature-competition {
  background: linear-gradient(135deg, #e040fb, #7b3cf0);
}
.feature-study {
  background: linear-gradient(135deg, #7b3cf0, #4a138f);
}
.feature-sport {
  background: linear-gradient(135deg, #ff5c8d, #a80f4c);
}

.feature-tall:hover {
  transform: translateY(-12px) scale(1.04);
  box-shadow: 0 35px 65px rgba(123,60,240,0.45);
}

.feature-inner {
  transform-style: preserve-3d;
  transition: transform .6s;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.feature-icon {
  width: 74px;
  height: 74px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  margin-bottom: 0.6rem;
  background: rgba(255,255,255,0.2);
  font-size: 1.7rem;
  box-shadow: inset 0 -6px 12px rgba(0,0,0,0.25);
  color: #fff;
  transition: background 0.3s ease;
}

.feature-tall:hover .feature-icon {
  background: rgba(255,255,255,0.35);
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 900;
  margin-bottom: 0.45rem;
  text-shadow: 0 2px 6px rgba(0,0,0,0.3);
}

.feature-sub {
  color: rgba(255,255,255,0.9);
  max-width: 85%;
  font-weight: 600;
  line-height: 1.3;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.shine {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 80%);
  transform: translateX(-120%);
  transition: transform .8s ease, opacity .5s;
  opacity: 0;
  pointer-events: none;
}

.feature-tall:hover .shine {
  transform: translateX(0%);
  opacity: 1;
}
</style>
