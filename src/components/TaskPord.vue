<script setup>
import { useTaskStore } from '@/store/TasksStore';
import TheTask from './TheTask.vue';
import { onMounted, ref } from 'vue';

const TaskStore = useTaskStore();
const dayTask = ref('')
const monthTask = ref('')

const ComplestedDayTask = ref(0)
const ComplestedMonthTask = ref(0)
const MonthPercentage = ref(0)


const congrats = ref('')
const MainText = ref('')
const SideText = ref('')

onMounted( async () =>{

  const id = localStorage.getItem("userID")
  console.log("id: ", id)
  const date = new Date()

  dayTask.value = await TaskStore.fetchTaskDayByUserId(id,date)
  monthTask.value = await TaskStore.fetchTaskMonthByUserId(id,date)

  ComplestedDayTask.value = dayTask.value.filter(task => task.confirm === true)
  ComplestedMonthTask.value = monthTask.value.filter(task => task.confirm === true)

  if (ComplestedDayTask.value.length != dayTask.value.length){
    congrats.value.style.background = "linear-gradient(90deg,#2b1538, #461769)";
    MainText.value = "تبقاء القليل";
    SideText.value = "الا تنساء اكمل المهام لهذا اليوم";
  } else {
    congrats.value.style.background = "linear-gradient(90deg,#3be442, #138b0f)";
    MainText.value = "احسنت";
    SideText.value = "لقد أنهيت كل المهام لهذا اليوم";
  }

  MonthPercentage.value = ((ComplestedMonthTask.value.length / monthTask.value.length ) * 100)  

  console.log("day: ", dayTask.value);
  console.log("month: ", monthTask.value);
})
</script>

<template>
  <div class="container-fluid app-wrap">
    <div class="row gx-4" style="min-height:70vh;">
      <div class="col-lg-4 mb-3">
        <div class="summary-card h-100">
          <div class="congrats" ref="congrats">
            <div class="text">
              <h3>{{ MainText }}</h3>
              <p>{{ SideText }}</p>
            </div>
            <div class="badge-circle">{{ ComplestedDayTask.length }} / {{ dayTask.length }}</div>
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
                <div v-if="TaskStore.loading"></div>

                <TheTask v-else v-for="task in dayTask" :key="task.id" :task="task" />
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
                <div v-if="TaskStore.loading"></div>

                <TheTask v-else v-for="task in monthTask" :key="task.id" :task="task" />
              </div>

              <div class="d-flex justify-content-end mt-2">
                <button class="btn btn-sm btn-outline-light">عرض الكل</button>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="tasks-card d-flex align-items-center justify-content-between p-3">
              <div class="d-flex align-items-center">
                <div class="me-3 icon-wrap" aria-hidden="true">
                  <i class="bi bi-check-circle-fill"></i>
                </div>

                <div class="info">
                  <div class="fw-bold title">موجز إنجازاتك</div>

                  <div class="subtitle mt-1">
                    مهام مكتملة: <strong>{{ ComplestedMonthTask.length }}</strong>
                    — معدل الالتزام: <strong>{{ MonthPercentage.toFixed(2) }}%</strong>
                  </div>

                  <div
                    class="progress mt-2"
                    role="progressbar"
                    :aria-valuenow="MonthPercentage"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar" :style="{ width: MonthPercentage + '%' }"></div>
                  </div>
                </div>
              </div>

              <div class="text-end">
                <button type="button" class="btn btn-sm report-btn">
                  تقرير الشهر <i class="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>

        </div> 
      </div>
    </div> 
  </div>
</template>

<style scoped>

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
  background: linear-gradient(90deg,#2b1538, #461769);
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

.quick-item {
  position: relative;
  background: linear-gradient(180deg, #2412316e, #391a487a);
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

.tasks-card {
  background: linear-gradient(180deg, #2412316e, #391a487a);
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

.tasks-card.d-flex {
  padding: 1rem 1.25rem;
  gap: 1rem;
}

.icon-wrap {
  width: 50px;
  height: 50px;
  background: linear-gradient(90deg, #9b6cff, #7b3cf0);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: white;
  font-size: 1.5rem;
}

.info .title {
  font-weight: 900;
  font-size: 1.25rem;
  color: white;
}

.info .subtitle {
  color: #c2a7ff;
  font-weight: 600;
  font-size: 1rem;
}

.progress {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  height: 12px;
  width: 180px;
  overflow: hidden;
}

.progress-bar {
  background: linear-gradient(90deg, #9b6cff5f, #7b3cf0);
  height: 100%;
  transition: width 0.3s ease-in-out;
  border-radius: 1rem 0 0 1rem;
}

.text-end .btn.report-btn {
  background: linear-gradient(90deg, #9b6cff, #7b3cf0);
  color: #fff;
  font-weight: 700;
  border: none;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
}

</style>