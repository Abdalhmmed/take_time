<script setup>
import { useMonthStore } from '@/store/MonthStore';
import { onMounted, ref } from 'vue';
import MonthCard from './MonthCard.vue';
import DayCard from './DayCard.vue';

const MonthStore = useMonthStore()
const months = ref([])
const month = ref({})
const activeMonthId = ref(null)
const activeDayId = ref(null)

onMounted(async () => {
  months.value = await MonthStore.fetchMonth()

  const currentMonth = new Date().getMonth() + 1 

  const foundMonth = months.value.find(m => m.num === currentMonth)

  if (foundMonth) {
    activeMonthId.value = foundMonth.id
    month.value = await MonthStore.fetchMonthById(foundMonth.id)
  }
})

const setActiveDay = (id) => {
  activeDayId.value = id
}

const setActiveMonth = async (id) => {
  activeMonthId.value = id
  month.value = await MonthStore.fetchMonthById(id)
}
</script>

<template>
  <div class="title"> التقويم </div>

  <div class="dashboard">
    <div class="card-glass month-card">
      <h4 class="text-center mb-3">الأشهر</h4>

      <div class="months">
        <MonthCard
          v-for="m in months"
          :key="m.id"
          :month="m"
          :is-active="m.id === activeMonthId"
          @click="setActiveMonth(m.id)"
        />
      </div>
    </div>

    <div class="card-glass calendar-card">
      <div class="month-title">{{ month.name || 'اختر شهر' }} - {{ month.year }}</div>

      <div class="calendar">
        <DayCard
          v-for="day in month.days"
          :key="day"
          :date="`${month.year}-${month.num}-${day}`"
          :is-active="day === activeDayId"
          @click="setActiveDay(day)"
        />
      </div>

      <div class="note">
         أيام هذا الشهر — اختر يومك وابدأ إنجازك بخطوة صغيرة
      </div>
    </div>
  </div>
</template>

<style scoped>
    .dashboard {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: auto;
    }

    .title{
        color: #9b6cff;
        font-size: 3rem;
        text-align: center;
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-weight: 800;
    }

    .card-glass {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));        
        border: 1px solid rgba(255,255,255,0.05);
        border-radius: 1.4rem;
        backdrop-filter: blur(10px);
        padding: 1.5rem;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        color: #fff;
        height: 50rem;
    }

    .month-card {
        flex: 1;
        max-width: 280px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: auto;
    }

    .calendar-card {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .months {
        gap: .6rem;
        display: flex;
        flex-direction: column;
    }

    .calendar {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        margin-top: 1.5rem;
        height: 41rem;
    }

    .day {
        background: linear-gradient(180deg, #2412316e, #391a487a);
        border-radius: .8rem;
        text-align: center;
        padding: 12px 0;
        font-weight: 600;
        color: #ccc;
        transition: all .3s ease;
        border: 1px solid rgba(255, 255, 255, 0.04);
        height: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .month-title {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--purple-light);
        margin-bottom: .5rem;
    }

    .note {
        text-align: center;
        color: #999;
        margin-top: 1rem;
        font-size: .9rem;
    }

    @media (max-width: 768px) {
        .dashboard {
            flex-direction: column;
            align-items: center;
        }
        .calendar {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>