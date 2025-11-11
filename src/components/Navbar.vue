<script setup>
import { onMounted, ref } from 'vue';


const user = ref({});

function loginuser(){
  if (localStorage.getItem("userID")){
    user.value = {
      id: localStorage.getItem("userID") || null,
      name: localStorage.getItem("userName") || null, 
      email: localStorage.getItem("userEmail") || null
    }
  }
}

function logout(){
  localStorage.clear();
  location.reload();
}

onMounted(() => {
    loginuser()
  }
)

</script>


<template>
  <nav class="navbar">
    <div class="container d-flex align-items-center justify-content-between">
      <div v-if="!user.id" class="nav-left">
        <a class="btn btn-outline-interact btn-sm" href="#about">من نحن</a>
        <a class="btn btn-outline-interact btn-sm" href="#achievements">إنجازاتنا</a>
        <a class="btn btn-outline-interact btn-sm" href="#contact">تواصل معنا</a>
      </div>

      <div v-else-if="user.id" class="nav-left">
        <router-link :to="{ name: 'HomePage' }" class="btn btn-outline-interact btn-sm" href="#about"> صفحة المهام</router-link>
        <router-link :to="{ name: 'MainPage' }" class="btn btn-outline-interact btn-sm" href="#achievements">الصفحة الرائيسية</router-link>
        <router-link :to="{ name: 'HomePage' }" class="btn btn-outline-interact btn-sm" href="#contact"> الاعدادات</router-link>
      </div>

      <div class="nav-center">
        <router-link :to="{ name: 'HomePage' }"a class="navbar-brand brand-decor" href="#">Take Time</router-link>
      </div>

      <div v-if="!user.id" class="nav-right">
        <router-link :to="{ name: 'Loging' }" class="btn btn-outline-interact btn-sm me-2">تسجيل دخول</router-link>
        <router-link :to="{ name: 'Loging' }" class="btn btn-sign">إنشاء حساب</router-link>
      </div>

      <div v-if="user.id" class="nav-right">
        <button  @click="logout()" class="btn btn-outline-interact btn-sm me-2" > تسجيل الخروج  </button>
        <router-link :to="{ name: 'HomePage' }" class="btn btn-sign"> {{ user.name }} </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00));
  border-bottom: 1px solid rgba(255,255,255,0.03);
  padding: .75rem 1rem;
  position: relative;
  font-family: 'Cairo', sans-serif;
  color: #e8e6ee;
}

.nav-left, .nav-right {
  display: flex;
  gap: .6rem;
  align-items: center;
}

.nav-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}

.nav-center .navbar-brand {
  pointer-events: auto;
}

.brand-decor {
  font-weight: 900;
  font-size: 1.35rem;
  letter-spacing: -0.02em;
  background: linear-gradient(90deg, var(--purple-light, #c7a3ff) 30%, var(--purple-dark, #4a138f) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 6px 18px rgba(75, 20, 140, 0.18);
}

.btn-outline-interact {
  border: 1.6px solid rgba(123,60,240,0.28);
  color: rgba(255,255,255,0.9);
  background: transparent;
  transition: transform .18s ease, background .18s ease, border-color .18s ease;
  font-size: 0.8rem;
  padding: 0.25rem 0.7rem;
  border-radius: 4px;
}
.btn-outline-interact:hover {
  transform: translateY(-3px);
  background: rgba(91,33,182,0.06);
  border-color: rgba(123,60,240,0.6);
}

.btn-sign {
  background: linear-gradient(90deg, #9b6cff, #7b3cf0);
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
  border-radius: 6px;
  transition: transform .18s;
}
.btn-sign:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(123,60,240,0.18);
}

@media (max-width: 767px) {
  .nav-center {
    position: static;
    transform: none;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
