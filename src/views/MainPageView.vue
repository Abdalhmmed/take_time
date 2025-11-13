<script setup>
import Calendar from '@/components/Calendar.vue';
import TaskPord from '@/components/TaskPord.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted( () => { 
    if (localStorage.getItem("userID") == null){
        router.push({ name: 'HomePage' })
        localStorage.clear();
    } 
})
</script>

<template>
    <TaskPord />
    <Calendar />
</template>

<style scoped>

</style>