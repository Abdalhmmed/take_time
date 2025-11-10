<script setup>
import { ref } from 'vue';

const TaskAction = ref(false)
const Taskbut = ref(false)

function Task(){
    if (!TaskAction.value){
        TaskAction.value = true
        Taskbut.value.style.background = "linear-gradient(90deg, #9665fd, #5519c7)";
    } else if (TaskAction.value) {
        TaskAction.value = false
        Taskbut.value.style.background = "linear-gradient(90deg, #09080c, #171617)";
    }
}
</script>

<template>
    <div class="task-item">
        <div class="task-meta">
            <div class="title">عنوان المهمة</div>
            <div class="sub">تفاصيل قصيرة عن المهمة</div>
        </div>
        <button @click="Task()" class="task-action" ref="Taskbut" title="تأكيد تنفيذ المهمة" aria-label="تأكيد تنفيذ المهمة" aria-pressed="false">
            <i v-if="TaskAction" class="bi bi-check-lg"></i>
        </button>
    </div>
</template>

<style scoped>
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
  background: linear-gradient(180deg,#09080c, #171617);
  color: #cac0cb;
  border: none;
}
</style>