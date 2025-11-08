<script setup>

</script>

<template>

    <section id="about" class="py-5">
      <div class="container">
        <h2 class="section-heading mb-5">من نــحــن</h2>
        <div class="row align-items-center">

          <div class="col-md-6 mb-4 mb-md-0">
            <div class="p-3 text-center text-md-start">
              <h3 style="color:var(--purple-light); font-weight:800; margin-bottom:1rem;">
                رؤيتنا ورسالتنا
              </h3>
              <p style="color:rgba(255,255,255,0.85); font-size:1.05rem; line-height:1.8;">
                <strong>Take Time</strong> هو أكثر من مجرد منصة، إنه رفيقك الذكي لتنظيم الوقت وتحقيق الأهداف.
                صُمم لمساعدتك في بناء خططك اليومية والأسبوعية والشهرية، بطريقة تجمع بين البساطة
                والتحفيز والإحصاءات الدقيقة.
              </p>
              <p style="color:rgba(255,255,255,0.7); font-size:1.02rem;">
                نحن نؤمن أن النجاح لا يأتي من الحظ، بل من التخطيط والاستمرارية.
                ومن هنا، نمنحك الأدوات التي تجعل من كل دقيقة استثمارًا في مستقبلك.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex justify-content-center">
            <div class="about-img-wrapper" 
                 style="position:relative; overflow:hidden; border-radius:1.2rem; box-shadow:0 0 40px rgba(123,60,240,0.25);">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                   alt="about image" 
                   class="img-fluid"
                   style="border-radius:1.2rem; filter:brightness(0.9) saturate(1.2) contrast(1.05);">
              <div class="about-overlay" 
                   style="position:absolute; inset:0; background:linear-gradient(135deg, rgba(91,33,182,0.35), rgba(9,7,17,0.65)); mix-blend-mode:soft-light;">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

</template>

<style scoped>

.section-heading {
  font-weight:900;
  font-size:1.8rem;
  letter-spacing: -0.01em;
  text-align:center;
  margin-bottom:1.6rem;
  background: linear-gradient(90deg,var(--purple-light), var(--purple-mid));
  -webkit-background-clip:text;
  background-clip:text;
  -webkit-text-fill-color:transparent;
}

#about h3 {
  color: var(--purple-light);
  font-weight: 800;
  margin-bottom: 1rem;
}

#about p {
  color: rgba(255,255,255,0.85);
  font-size: 1.05rem;
  line-height: 1.8;
}

#about p:last-child {
  color: rgba(255,255,255,0.7);
  font-size: 1.02rem;
}

.about-img-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 1.2rem;
  box-shadow: 0 0 40px rgba(123,60,240,0.25);
}

.about-img-wrapper img {
  border-radius: 1.2rem;
  filter: brightness(0.9) saturate(1.2) contrast(1.05);
}

.about-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(91,33,182,0.35), rgba(9,7,17,0.65));
  mix-blend-mode: soft-light;
}

</style>