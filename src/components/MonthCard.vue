<script setup>
import { computed } from 'vue'

const props = defineProps({
  month: Object,
  isActive: Boolean
})

const isThemonth = computed(() => {
  const today = new Date()
  return (
    props.month.year == today.getFullYear() &&
    props.month.num == (today.getMonth() + 1)
  )
})

</script>

<template>
    <div
    class="month-item"
    :class="{ active: isActive, themonth: isThemonth }"
    >
        {{ month.name }}
    </div>
</template>

<style scoped>
    .month-item {
        display: flex;
        background: linear-gradient(180deg, #251738, #381e4f);
        border-radius: 0.9rem;
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        transition: all .3s ease;
        font-weight: 600;
        border: 1px solid rgba(255, 255, 255, 0.05);
        height: 3rem;
        align-items: center;
        justify-content: center;
    }

    .month-item:hover{
        background: linear-gradient(180deg,  #9b6cff40, #7b3cf03d);
        color: #fff;
        transform: scale(1.05);
    }

    .month-item.themonth {
        background: linear-gradient(180deg, #460cc4, #33098e);
        color: #fff;
        font-weight: bold;
    }

    .month-item.active {
        background: linear-gradient(180deg,  #9b6cff, #7b3cf0);
        color: #fff;
        transform: scale(1.05);
    }

</style>