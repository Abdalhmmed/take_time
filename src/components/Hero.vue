<template>
  <section class="hero container py-5">
    <div class="row align-items-center">
      <div class="col-md-7 fs-4">
        <h5 style="font-weight: 600;">مجرد وقت</h5>
        <h1 class="take-time">Take Time</h1>
        <p>
          منصّة تساعدك على بناء وتنظيم خططك اليومية، الشهرية، والسنوية لتحقيق أهدافك بخطوات بسيطة وواضحة.
        </p>
        <div class="hero-buttons mt-3 d-flex gap-2 flex-wrap">
          <a href="#" class="btn btn-primary btn-lg">سجّل الآن</a>
          <a href="#contact" class="btn btn-outline-purple btn-outline-light btn-lg">تواصل معنا</a>
        </div>
      </div>

      <div class="col-md-5 d-flex justify-content-center">
        <div class="d-grid gap-3 w-100">
          <div class="v-card" style="background: linear-gradient(180deg,#7c2bd9,#5b21b6);">
            <div class="icon-wrapper">
              <i class="bi bi-calendar-check-fill"></i>
            </div>
            <div class="content">
              <div class="title">أهداف يومية واضحة</div>
              <div class="desc">قسّم هدفك لمهام صغيرة تبدأ اليوم.</div>
            </div>
          </div>

          <div class="v-card" style="background: linear-gradient(180deg,#b35ebc,#d05be8);">
            <div class="icon-wrapper">
              <i class="bi bi-graph-up"></i>
            </div>
            <div class="content">
              <div class="title">تقارير شهرية ذكية</div>
              <div class="desc">تابع تقدمك وتعرف على نقاط التحسين.</div>
            </div>
          </div>

          <div class="v-card" style="background: linear-gradient(180deg,#a86fe2,#9958da);">
            <div class="icon-wrapper">
              <i class="bi bi-clipboard2-check"></i>
            </div>
            <div class="content">
              <div class="title accent-text">إنجاز مهامك بسهولة</div>
              <div class="desc">تنظيم مهام الدراسة والرياضة بشكل عملي.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 3.2rem 1rem;
}

.hero-left h5 {
  color: rgba(255,255,255,0.65);
  margin-bottom: 0.35rem;
  text-align: left;
  font-weight: 600;
  font-size: 1.2rem;
}

.take-time {
  font-weight: 900;
  font-size: clamp(2.8rem, 8vw, 5rem);
  line-height: 0.88;
  background: linear-gradient(90deg, var(--purple-light, #c7a3ff) 28%, var(--purple-mid, #5b21b6) 58%, var(--purple-dark, #4a138f) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 12px 28px rgba(75,20,140,0.25);
  margin-bottom: 0.45rem;
}

.lead-desc {
  color: rgba(255,255,255,0.92);
  font-size: 1.05rem;
  margin-top: 0.8rem;
}

.hero-buttons .btn {
  min-width: 140px;
  border-radius: 0.6rem;
  font-weight: 700;
}

.btn-primary {
  background: linear-gradient(90deg, #9b6cff, #7b3cf0);
  border: none;
  color: #fff;
}

.btn-outline-purple {
  background: transparent;
  border: 1.6px solid rgba(123,60,240,0.8);
  color: var(--purple-light, #c7a3ff);
}

/* Vertical cards */
.v-card {
  border-radius: 1rem;
  padding: 1.2rem;
  height: 140px;
  display: flex;
  gap: 1rem;
  align-items: center;
  box-shadow: 0 10px 28px rgba(33,13,77,0.45);
  transition: transform .28s ease, box-shadow .28s ease;
  border: 1px solid rgba(255,255,255,0.02);
  overflow: hidden;
  color: #fff;
}

.v-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 22px 44px rgba(91,33,182,0.28);
}

.v-card .icon-wrapper {
  min-width: 64px;
  min-height: 64px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.1);
  border-radius: 0.8rem;
  font-size: 1.5rem;
  box-shadow: inset 0 -6px 12px rgba(0,0,0,0.25);
}

.v-card .content {
  flex: 1;
  text-align: right;
}

.v-card .title {
  font-weight: 800;
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.v-card .desc {
  color: rgba(255,255,255,0.82);
  font-size: 0.95rem;
}

.accent-text {
  color: #d7b9ff;
  font-weight: 800;
}

/* Responsive */
@media (max-width: 767px) {
  .hero-left h5, .lead-desc {
    text-align: center;
  }
  .v-card {
    height: 120px;
  }
}
</style>
