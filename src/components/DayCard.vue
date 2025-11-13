<script setup>
import { useTaskStore } from '@/store/TasksStore';
import { onMounted, ref, computed, watch } from 'vue';

const TaskStore = useTaskStore()

const props = defineProps({
  date: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const tasks = ref([])

const dayNumber = computed(() => new Date(props.date).getDate())

const isToday = computed(() => {
  const today = new Date()
  const d = new Date(props.date)

  if (d.getMonth() !== today.getMonth() || d.getFullYear() !== today.getFullYear()) {
    return false
  }

  return d.getDate() === today.getDate()
})

const loadTasks = async () => {
  const userId = localStorage.getItem("userID")
  if (!userId) return
  const result = await TaskStore.fetchTaskDayByUserId(userId, props.date)
  tasks.value = result || []
}

onMounted(loadTasks)

watch(() => props.date, loadTasks)
</script>



<template>
  <div class="day" :class="{ active: isActive, today: isToday }">
    <div class="day-number">{{ dayNumber }}</div>

    <div v-if="tasks.length > 0" class="task-count">
      {{ tasks.length }} مهام
    </div>
  </div>
</template>


<style scoped>
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
  justify-content: center;
  cursor: pointer;
}


.day:hover {
    transform: scale(1.08);
    background: linear-gradient(180deg,  #9b6cff45, #7b3cf03e);
    color: #fff;
}

.day.today {
    background: linear-gradient(180deg,  #460cc4, #33098e);
    color: #fff;
    font-weight: bold;
}

.day.active {
  background: linear-gradient(180deg, #9b6cff, #7b3cf0);
  color: #fff;
  transform: scale(1.05);
}

.day-number {
  font-size: 1.4rem;
}

.task-count {
  font-size: 0.9rem;
  color: #ffffff;
  margin-top: 4px;
}
</style>
