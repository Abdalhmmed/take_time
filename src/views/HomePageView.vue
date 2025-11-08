<script setup> 
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Hero from '@/components/Hero.vue';
import More from '@/components/More.vue';
</script>

<template>
  <main>
    <Hero />
    <More />
    <About />
    <Contact />
  </main>
</template>

<style scoped>
main {
  font-family: 'Cairo', sans-serif;
  color: #e8e6ee;
  background: linear-gradient(180deg, var(--bg-page, #07060a) 0%, #0f0d15 100%);
}
</style>
