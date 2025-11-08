<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div dir="rtl">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
  :root {
    --purple-dark: #4a138f;
    --purple-mid:  #5b21b6;
    --purple-light:#c7a3ff;
    --card-strong: #241231;
    --card-strong-2: #391a48;
    --bg-page: #07060a;
  }

  body {
    margin: 0;
    font-family: 'Cairo', sans-serif;
    background: linear-gradient(180deg, var(--bg-page) 0%, #0f0d15 100%);
    color: #e8e6ee;
  }

  * {
    box-sizing: border-box;
  }
</style>
