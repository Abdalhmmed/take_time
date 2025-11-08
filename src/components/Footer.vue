<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-left">
          <h5>Take Time</h5>
          <p class="footer-contact">تم تصميمه من: عبدالحيمد دعبان</p>
          <p class="footer-contact">الموقع: عدن</p>
          <p class="footer-contact">المكتب مفتوح: 8ص - 9م</p>
        </div>

        <div class="footer-center text-center">
          <p class="fw-bold" style="color: var(--purple-light)">تواصل معنا</p>
          <p class="footer-contact">الهاتف: 778123807</p>
          <p class="footer-contact">الإيميل: abudett65@gamil.com</p>
        </div>

        <div class="footer-right text-end">
          <p class="footer-contact">© 2025 Take Time — كل الحقوق محفوظة</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 2rem 1rem;
  background: linear-gradient(180deg, #06050a, #090618);
  border-top: 1px solid rgba(255,255,255,0.03);
  color: rgba(255,255,255,0.75);
  font-family: 'Cairo', sans-serif;
  font-size: 0.9rem;
}

.footer-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .footer-grid {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.footer-left {
  text-align: center;
}

.footer-left h5 {
  color: var(--purple-light, #c7a3ff);
  margin-bottom: 0.4rem;
  font-weight: 900;
}

.footer-contact {
  margin: 0.15rem 0;
  color: rgba(255,255,255,0.75);
}

.footer-center {
  font-family: 'Cairo', sans-serif;
}

.footer-right {
  text-align: end;
}
</style>
