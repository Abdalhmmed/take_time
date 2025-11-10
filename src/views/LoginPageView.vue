<script setup>
import { useUserStore } from '@/store/UsersStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()

const UsersStore = useUserStore();

const email = ref('');
const password = ref('');
const errorMsg = ref('');

async function Loging() {
  try {
    if (email.value && password.value) {
      const user = await UsersStore.fetchUserByLogin(email.value, password.value);
      if (user && user.id) {
        localStorage.setItem('userID', user.id);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userEmail', user.email);
        router.push({ name: 'MainPage' })
        errorMsg.value = ''; 
      } else {
        errorMsg.value = 'بيانات تسجيل الدخول غير صحيحة';
      }
    } else {
      errorMsg.value = 'الرجاء إدخال البريد الإلكتروني وكلمة المرور';
    }
  } catch (err) {
    errorMsg.value = "هناك خطأ، حاول مرة أخرى";
    console.error('Error during login:', err);
  }
}
</script>

<template>
  <div class="auth-wrap">
    <div class="auth-card" role="main" aria-label="صفحة تسجيل الدخول وإنشاء حساب">
      <section class="auth-form" aria-label="نموذج المصادقة">
        <ul class="nav nav-pills mb-3" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" type="button" role="tab" aria-selected="true">
              تسجيل الدخول
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" type="button" role="tab" aria-selected="false" disabled>
              إنشاء حساب (معطل)
            </button>
          </li>
        </ul>

        <form id="loginForm" novalidate @submit.prevent="Loging">
          <div class="mb-3">
            <label for="loginEmail" class="form-label">البريد الإلكتروني</label>
            <input id="loginEmail" type="email" v-model="email" class="form-control" placeholder="name@example.com" required>
          </div>

          <div class="mb-3">
            <label for="loginPassword" class="form-label">كلمة المرور</label>
            <input id="loginPassword" type="password" v-model="password" class="form-control" placeholder="••••••••" required>
          </div>

          <button type="submit" class="btn btn-primary-grad btn-lg w-100">دخول</button>
        </form>

        <p v-if="errorMsg" style="color: #f66; margin-top: 1rem;">{{ errorMsg }}</p>
      </section>
    </div>
  </div>
</template>


<style scoped>
  :root {
    --purple-dark: #4a138f;
    --purple-light: #c7a3ff;
    --accent-1: #7c2bd9;
  }

  body, html {
    margin: 0; padding: 0; height: 100%;
    font-family: 'Cairo', sans-serif;
    background: linear-gradient(180deg, #07060a 0%, #0f0d15 100%);
    color: #e8e6ee;
  }

  .auth-wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .auth-card {
    width: 100%;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 24px 60px rgba(6, 5, 15, 0.75);
  }

  .nav-pills .nav-link {
    border-radius: 0.6rem;
    padding: 0.6rem 0.9rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.88);
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.03);
    cursor: default;
  }

  .nav-pills .nav-link.active {
    background: linear-gradient(90deg, var(--accent-1), var(--purple-dark));
    color: #fff;
    box-shadow: 0 10px 28px rgba(91, 33, 182, 0.18);
  }

  .form-label {
    font-weight: 700;
    color: rgba(255, 255, 255, 0.88);
  }

  .form-control {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.04);
    color: #fff;
    border-radius: 0.6rem;
    padding: 0.65rem 0.75rem;
  }

  .form-control::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  .btn-primary-grad {
    background: linear-gradient(90deg, #9b6cff, #7b3cf0);
    border: none;
    color: #fff;
    padding: 0.6rem 1rem;
    border-radius: 0.7rem;
    font-weight: 800;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
