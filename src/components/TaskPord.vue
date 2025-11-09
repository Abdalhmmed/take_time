<script setup>

</script>

<template>
     <div class="container-fluid app-wrap">
      <div class="row gx-4" style="min-height:70vh;">
        <div class="col-lg-4 mb-3">
          <div class="summary-card h-100">
            <div class="congrats">
              <div class="text">
                <h3>أحسنت</h3>
                <p>لقد أنهيت كل المهام لهذا اليوم</p>
              </div>
              <div class="badge-circle">1 / 1</div>
            </div>

            <div>
              <div class="section-title mb-2">أدوات سريعة</div>
              <div class="quick-grid">
                <div class="quick-item">
                  <i class="bi bi-clipboard2-check-fill"></i>
                  <span>المهم الشهرية</span>
                </div>
                <div class="quick-item">
                  <i class="bi bi-plus-square-fill"></i>
                  <span>اضافة مهمة جديدة</span>
                </div>
                <div class="quick-item">
                  <i class="bi bi-bar-chart-line-fill"></i>
                  <span>تقييم الأداء</span>
                </div>
                <div class="quick-item">
                  <i class="bi bi-calendar"></i>
                  <span>المهم السنوية</span>
                </div>
              </div>
            </div>

            <div class="mt-auto text-center" style="font-size:.9rem; color: #6335aa;">
              لوحة شخصية — نظّم وقتك بخطوات بسيطة
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="row g-3 h-100">
            <div class="col-md-6">
              <div class="tasks-card">
                <div class="tasks-header">
                  <div>المهام اليومية</div>
                  <div class="section-title">اليوم</div>
                </div>

                <div class="task-list mt-sm">
                  <div class="task-item">
                    <div class="task-meta">
                      <div class="title">عنوان المهمة</div>
                      <div class="sub">تفاصيل قصيرة عن المهمة</div>
                    </div>
                    <button class="task-action" title="الحالة">
                      <i class="bi bi-check-lg"></i>
                    </button>
                  </div>

                  <div class="task-item">
                    <div class="task-meta">
                      <div class="title">مراجعة المحاضرات</div>
                      <div class="sub">مراجعة فصل الخوارزميات — 1 ساعة</div>
                    </div>
                    <button class="task-action" title="الحالة">
                      <i class="bi bi-clock"></i>
                    </button>
                  </div>

                  <div class="task-item">
                    <div class="task-meta">
                      <div class="title">حل واجب البرمجة</div>
                      <div class="sub">استخدام Vue و Pinia</div>
                    </div>
                    <button class="task-action" title="الحالة">
                      <i class="bi bi-play-fill"></i>
                    </button>
                  </div>
                </div>

                <div class="d-flex justify-content-end mt-2">
                  <button class="btn btn-sm btn-outline-light">عرض الكل</button>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="tasks-card">
                <div class="tasks-header">
                  <div>المهام الشهرية</div>
                  <div class="section-title">هذا الشهر</div>
                </div>

                <div class="task-list mt-sm">
                  <div class="task-item">
                    <div class="task-meta">
                      <div class="title">تخطيط المشروع</div>
                      <div class="sub">تفصيل خطوات المشروع النهائي</div>
                    </div>
                    <button class="task-action" title="الحالة">
                      <i class="bi bi-pencil"></i>
                    </button>
                  </div>

                  <div class="task-item">
                    <div class="task-meta">
                      <div class="title">تحديث السيرة الذاتية</div>
                      <div class="sub">إضافة خبرات التدريب الصيفي</div>
                    </div>
                    <button class="task-action" title="الحالة">
                      <i class="bi bi-person-check"></i>
                    </button>
                  </div>

                  <div class="task-item">
                    <div class="task-meta">
                      <div class="title">قائمة امتحانات</div>
                      <div class="sub">تجهيز جدول مراجعة قبل الامتحانات</div>
                    </div>
                    <button class="task-action" title="الحالة">
                      <i class="bi bi-calendar-event"></i>
                    </button>
                  </div>
                </div>

                <div class="d-flex justify-content-end mt-2">
                  <button class="btn btn-sm btn-outline-light">عرض الكل</button>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="tasks-card d-flex align-items-center justify-content-between">
                <div>
                  <div class="fw-bold">موجز إنجازاتك</div>
                  <div style="color: #865cc4;">مهام مكتملة: <strong>12</strong> — معدل الالتزام: <strong>78%</strong></div>
                </div>
                <div class="text-end">
                  <button class="btn btn-sm fs-5" style="background:linear-gradient(90deg,var(--accent-1),var(--accent-2)); color:#fff;">تقرير الشهر</button>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div> 
    </div> 
</template>

<style scoped>
        :root {
  --purple-dark: #4a138f;
  --purple-mid:  #5b21b6;
  --purple-light:#c7a3ff;
  --card-strong: #141017;
  --card-strong-2:#2a1636;
  --accent-1: #7c2bd9;
  --accent-2: #5b21b6;
  --muted: rgba(255,255,255,0.75);
}

* {
  box-sizing: border-box;
}

body {
  margin:0;
  font-family: 'Cairo', sans-serif;
  background: linear-gradient(180deg,#07060a 0%, #0f0d15 100%);
  color: #e8e6ee;
  min-height:100vh;
}

.app-wrap { padding: 2rem; }

.summary-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius: 1.4rem;
  padding: 1.25rem;
  border: 1px solid rgba(255,255,255,0.03);
  height: 100%;
  display:flex;
  flex-direction:column;
  gap:1.25rem;
}

.congrats {
  border-radius: 1.6rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
  overflow:hidden;
  padding: 1rem;
  gap:1rem;
  background: linear-gradient(90deg,#3be442, #138b0f);
  box-shadow: 0 12px 30px rgba(196,30,74,0.14);
}

.congrats .text h3 {
  font-size:1.9rem;
  margin:0;
  font-weight:900;
  color:#fff;
}

.congrats .text p {
  margin:0;
  color: rgba(255,255,255,0.92);
}

.badge-circle {
  width:64px;
  height:64px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background: rgba(255,255,255,0.12);
  color:#fff;
  font-weight:700;
  font-size:1rem;
  border: 3px solid rgba(255,255,255,0.12);
}

.quick-grid {
  display:grid;
  grid-template-columns: repeat(2,1fr);
  gap: .9rem;
}

/* ------------------ QUICK ITEM ------------------ */
.quick-item {
  position: relative;
  background: linear-gradient(180deg, #241231, #391a48);
  border-radius: .9rem;
  padding: 1rem;
  height: 9.5rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  box-shadow: 0 10px 24px rgba(33,13,77,0.45);
  border: 1px solid rgba(255,255,255,0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.quick-item::before {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255,255,255,0.15) 45%,
      rgba(255,255,255,0.4) 50%,
      rgba(255,255,255,0.15) 55%,
      transparent 100%
  );
  transform: rotate(25deg);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.quick-item:hover::before {
  animation: shine 1.2s forwards;
  opacity: 1;
}

@keyframes shine {
  from { transform: translateX(-150%) rotate(25deg); }
  to   { transform: translateX(150%) rotate(25deg); }
}

.quick-item:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 0 25px rgba(180,110,255,0.35);
}

.quick-item i {
  font-size:1.55rem;
  margin-bottom:.6rem;
  color:#fff;
  z-index: 1;
}

.quick-item span {
  font-weight:700;
  color:#fff;
  z-index: 1;
}

/* ------------------ TASKS ------------------ */
.tasks-card {
  background: linear-gradient(180deg, var(--card-strong), var(--card-strong-2));
  border-radius: 1rem;
  padding: .8rem;
  height:100%;
  display:flex;
  flex-direction:column;
  gap:.9rem;
  border: 1px solid rgba(255,255,255,0.03);
}

.tasks-header {
  background: linear-gradient(90deg,var(--purple-light), var(--purple-mid));
  color: transparent;
  -webkit-background-clip:text;
  background-clip:text;
  -webkit-text-fill-color:transparent;
  font-weight:900;
  font-size:1.25rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.task-list {
  overflow:auto;
  max-height: 22rem;
  display:flex;
  flex-direction:column;
  gap:.5rem;
  padding-right:.2rem;
}

.task-item {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius:.7rem;
  padding:.6rem .9rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:.8rem;
  border: 1px solid rgba(255,255,255,0.02);
}

.task-meta { text-align:right; }

.task-meta .title {
  font-weight:800;
  color:#fff;
}

.task-meta .sub {
  color: rgba(255,255,255,0.78);
  font-size:.92rem;
}

.task-action {
  width:42px;
  height:42px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background: linear-gradient(180deg,#ffd6e8, #ff9acb);
  color: #2b0630;
  border: none;
}

.section-title {
  font-weight:900;
  font-size:1.05rem;
  color:var(--purple-light);
}

.mt-sm { margin-top:.6rem; }

@media (max-width: 767px){
  .congrats .text h3 { font-size:1.35rem; }
  .badge-circle { width:56px; height:56px; }
  .quick-item { height:8.3rem; }
  .task-list { max-height: 16rem; }
}


</style>