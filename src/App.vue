<script setup></script>

<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid position-relative">
        <div class="nav-left d-none d-lg-flex">
          <a class="btn btn-outline-interact btn-sm" href="#about">من نحن</a>
          <a class="btn btn-outline-interact btn-sm" href="#achievements">إنجازاتنا</a>
        </div>

        <div class="nav-center">
          <a class="navbar-brand brand-decor brand-decor--nav" href="#">Take Time</a>
        </div>

        <div class="nav-right ms-auto">
          <button class="btn btn-outline-interact btn-sm d-none d-lg-inline">تواصل معنا</button>
          <button class="btn btn-outline-interact btn-sm me-2">تسجيل دخول</button>
          <button class="btn btn-sign">إنشاء حساب</button>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navCollapse"></div>
      </div>
    </nav>

    <section class="hero container">
      <div class="row align-items-center">
        <div class="col-md-7 hero-left">
          <h5 class="text-secondary">مجرد وقت</h5>
          <h1 class="take-time">Take Time</h1>
          <p class="lead-desc">
            منصّة تساعدك على بناء وتنظيم خططك اليومية، الشهرية، والسنوية لتحقيق أهدافك بخطوات بسيطة وواضحة.
          </p>

          <div class="hero-buttons mt-3 d-flex gap-2 flex-wrap">
            <a href="#" class="btn btn-primary btn-lg">سجّل الآن</a>
            <a href="#contact" class="btn btn-outline-purple btn-outline-light btn-lg">تواصل معنا</a>
          </div>
        </div>

        <div class="col-md-5 d-flex justify-content-center">
          <div class="d-grid gap-3 w-100">
            <div class="v-card">
              <div class="icon-wrapper" style="background: linear-gradient(180deg,#7c2bd9,#5b21b6);">
                <i class="bi bi-target"></i>
              </div>
              <div class="content">
                <div class="title">أهداف يومية واضحة</div>
                <div class="desc">قسّم هدفك لمهام صغيرة تبدأ اليوم.</div>
              </div>
            </div>

            <div class="v-card">
              <div class="icon-wrapper" style="background: linear-gradient(180deg,#ff7ab6,#d05be8);">
                <i class="bi bi-graph-up"></i>
              </div>
              <div class="content">
                <div class="title">تقارير شهرية ذكية</div>
                <div class="desc">تابع تقدمك وتعرف على نقاط التحسين.</div>
              </div>
            </div>

            <div class="v-card">
              <div class="icon-wrapper" style="background: linear-gradient(180deg,#4ad3ff,#4ab1d9); color:#061226;">
                <i class="bi bi-check2-circle"></i>
              </div>
              <div class="content">
                <div class="title accent-text">إنجاز مهامك بسهولة</div>
                <div class="desc">تنظيم مهام الدراسة والرياضة بشكل عملي.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features container">
      <h2 class="section-heading">مجرد وقت</h2>

      <div class="features-grid">
        <div class="feature-tall">
          <div class="feature-inner">
            <div class="feature-icon"><i class="bi bi-clock-history"></i></div>
            <div class="feature-title">تنظيم الوقت</div>
            <div class="feature-sub">خطة يومية مرنة واستغلال فعّال لكل دقيقة.</div>
          </div>
          <div class="shine"></div>
        </div>

        <div class="feature-tall">
          <div class="feature-inner">
            <div class="feature-icon"><i class="bi bi-trophy"></i></div>
            <div class="feature-title">المنافسة</div>
            <div class="feature-sub">تحديات تحفيزية مع قياسات تقدم واضحة.</div>
          </div>
          <div class="shine"></div>
        </div>

        <div class="feature-tall">
          <div class="feature-inner">
            <div class="feature-icon"><i class="bi bi-journal-bookmark"></i></div>
            <div class="feature-title">الدراسة</div>
            <div class="feature-sub">تنظيم وحدات التعلم وتتبع ساعات المذاكرة بسهولة.</div>
          </div>
          <div class="shine"></div>
        </div>

        <div class="feature-tall">
          <div class="feature-inner">
            <div class="feature-icon"><i class="bi bi-basket"></i></div>
            <div class="feature-title">الرياضة</div>
            <div class="feature-sub">جداول تمارين وتتبّع مستمر لتقدم اللياقة.</div>
          </div>
          <div class="shine"></div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-5">
      <div class="container">
        <div class="text-center mb-4">
          <h2 class="section-heading">تواصل <span style="color: var(--purple-light);">مـعـنـا</span></h2>
          <p class="text-secondary" style="color:rgba(255,255,255,0.6)">يسعدنا سماعك دائمًا.</p>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="contact-card">
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">الاسم</label>
                    <input type="text" class="form-control" placeholder="اسمك الكامل">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">البريد الإلكتروني</label>
                    <input type="email" class="form-control" placeholder="name@example.com">
                  </div>
                  <div class="col-12">
                    <label class="form-label">الموضوع</label>
                    <input type="text" class="form-control" placeholder="موضوع الرسالة">
                  </div>
                  <div class="col-12">
                    <label class="form-label">الرسالة</label>
                    <textarea class="form-control" rows="5" placeholder="اكتب رسالتك هنا..."></textarea>
                  </div>

                  <div class="col-12 d-flex gap-2 justify-content-end">
                    <button type="reset" class="btn btn-outline-interact">تفريغ</button>
                    <button type="submit" class="btn btn-primary">إرسال</button>
                  </div>
                </div>
              </form>
            </div> 
          </div>
        </div>
      </div>
    </section>

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
            <p class="fw-bold" style="color:var(--purple-light)">تواصل معنا</p>
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
      :root{
        --purple-dark: #4a138f;
        --purple-mid:  #5b21b6;
        --purple-light:#c7a3ff;
        --card-strong: #241231;
        --card-strong-2: #391a48;
        --bg-page: #07060a;
      }

      *{box-sizing:border-box}
      body{
        margin:0;
        font-family: 'Cairo', sans-serif;
        background: linear-gradient(180deg, var(--bg-page) 0%, #0f0d15 100%);
        color:#e8e6ee;
      }

      .navbar{
        background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00));
        border-bottom: 1px solid rgba(255,255,255,0.03);
        padding: .75rem 1rem;
      }

      .nav-left, .nav-right{ display:flex; gap:.6rem; align-items:center; }
      .nav-center { position: absolute; left:50%; transform: translateX(-50%); pointer-events: none; }
      .brand-decor { pointer-events:auto; }

      .brand-decor {
        font-weight:900;
        font-size:1.35rem;
        letter-spacing: -0.02em;
        background: linear-gradient(90deg, var(--purple-light) 30%, var(--purple-dark) 100%);
        -webkit-background-clip:text;
        background-clip:text;
        -webkit-text-fill-color:transparent;
        text-shadow: 0 6px 18px rgba(75,20,140,0.18);
      }

      .btn-outline-interact {
        border: 1.6px solid rgba(123,60,240,0.28);
        color: rgba(255,255,255,0.9);
        background: transparent;
        transition: transform .18s ease, background .18s ease, border-color .18s ease;
      }
      .btn-outline-interact:hover{
        transform: translateY(-3px);
        background: rgba(91,33,182,0.06);
        border-color: rgba(123,60,240,0.6);
      }
      .btn-sign {
        background: linear-gradient(90deg, #9b6cff, #7b3cf0);
        border: none;
        color: #fff;
        transition: transform .18s;
      }
      .btn-sign:hover{ transform: translateY(-3px); box-shadow: 0 12px 30px rgba(123,60,240,0.18); }

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

      .hero { padding: 3.2rem 1rem; }
      .hero-left h5 { color: rgba(255,255,255,0.65); margin-bottom:.35rem; text-align:left; }

      .take-time {
        font-weight:900;
        font-size: clamp(2.8rem, 8vw, 5rem);
        line-height:0.88;
        background: linear-gradient(90deg, var(--purple-light) 28%, var(--purple-mid) 58%, var(--purple-dark) 100%);
        -webkit-background-clip:text;
        background-clip:text;
        -webkit-text-fill-color:transparent;
        text-shadow: 0 12px 28px rgba(75,20,140,0.25);
        margin-bottom: .45rem;
      }

      .lead-desc { color: rgba(255,255,255,0.92); font-size:1.05rem; margin-top:.8rem; }

      .hero-buttons .btn { min-width: 140px; border-radius:.6rem; font-weight:700; }

      .btn-primary {
        background: linear-gradient(90deg, #9b6cff, #7b3cf0);
        border:none;
      }
      .btn-outline-purple {
        background: transparent;
        border: 1.6px solid rgba(123,60,240,0.8);
        color: var(--purple-light);
      }

      .v-card {
        background: linear-gradient(180deg, var(--card-strong) 0%, var(--card-strong-2) 100%);
        border-radius: 1rem;
        padding: 1.2rem;
        height: 140px;
        display:flex;
        gap: 1rem;
        align-items:center;
        box-shadow: 0 10px 28px rgba(33,13,77,0.45);
        transition: transform .28s ease, box-shadow .28s ease;
        border: 1px solid rgba(255,255,255,0.02);
        overflow:hidden;
      }
      .v-card:hover{ transform: translateY(-8px) scale(1.02); box-shadow: 0 22px 44px rgba(91,33,182,0.28); }

      .v-card .icon-wrapper{
        min-width:64px;
        min-height:64px;
        display:grid;
        place-items:center;
        background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
        border-radius: .8rem;
        color:#fff;
        font-size:1.5rem;
        box-shadow: inset 0 -6px 12px rgba(0,0,0,0.25);
      }
      .v-card .content {
        flex:1;
        text-align:right;
      }
      .v-card .title { font-weight:800; color:#fff; font-size:1.05rem; margin-bottom:.25rem; }
      .v-card .desc { color: rgba(255,255,255,0.82); font-size:.95rem; }

      .accent-text { color: #d7b9ff; font-weight:800; }

      .features-grid { display:grid; grid-template-columns: repeat(1,1fr); gap:1.1rem; }
      @media(min-width:768px){ .features-grid { grid-template-columns: repeat(4,1fr); } }

      .feature-tall {
        height: 260px;
        border-radius: 1rem;
        background: linear-gradient(180deg,#2a1636,#3b1f53);
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        padding:1.2rem;
        transition: transform .6s cubic-bezier(.2,.9,.25,1), box-shadow .3s;
        perspective:1200px;
        position:relative;
        overflow:hidden;
      }
      .feature-inner {
        transform-style:preserve-3d;
        transition: transform .6s;
        width:100%; height:100%;
        display:flex; align-items:center; justify-content:center; flex-direction:column;
      }
      .feature-icon {
        width:74px; height:74px; border-radius:14px; display:grid; place-items:center; margin-bottom:.6rem;
        background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
        font-size:1.6rem; box-shadow: inset 0 -6px 12px rgba(0,0,0,0.25);
      }
      .feature-title { font-size:1.2rem; font-weight:900; margin-bottom:.35rem; }
      .feature-sub { color: rgba(255,255,255,0.86); max-width:85%; }

      .feature-tall:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 30px 60px rgba(59,31,95,0.28); }
      .feature-tall:hover .shine { transform: translateX(0%); opacity:1; }

      .shine {
        content:"";
        position:absolute;
        inset:0;
        background: linear-gradient(120deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.00) 80%);
        transform: translateX(-120%);
        transition: transform .8s ease, opacity .5s;
        opacity:0;
        pointer-events:none;
      }

      .contact-card {
        background: linear-gradient(180deg, #0b0812 0%, #0f0d15 100%);
        border-radius: 1rem;
        padding: 1.6rem;
        box-shadow: 0 12px 28px rgba(6,5,15,0.7);
        border: 1px solid rgba(255,255,255,0.03);
      }

      .form-control {
        background: #0a0710; 
        border: 1px solid rgba(255,255,255,0.04);
        color: rgba(230,230,235,0.95);
        transition: box-shadow .18s, border-color .18s;
      }
      .form-control:focus {
        background: #0a0710; 
        border-color: rgba(123,60,240,0.85);
        box-shadow: 0 8px 24px rgba(91,33,182,0.12);
        color: #fff;
      }
      ::placeholder { color: rgba(255,255,255,0.44); }
      label { color: rgba(255,255,255,0.82); }

      footer {
        padding:2rem 1rem;
        background: linear-gradient(180deg, #06050a, #090618);
        border-top:1px solid rgba(255,255,255,0.03);
        color: rgba(255,255,255,0.75);
      }
      .footer-grid { display:flex; flex-direction:column; gap:1rem; align-items:center; justify-content:center; }
      @media(min-width:768px){ .footer-grid { flex-direction:row; justify-content:space-between; align-items:flex-start; } }
      .footer-left { text-align:center; }
      .footer-left h5 { color:var(--purple-light); margin-bottom:.4rem; font-weight:900; }
      .footer-contact p { margin:.15rem 0; color: rgba(255,255,255,0.75); }

      @media(max-width:767px){
        .nav-center{ position:static; transform:none; text-align:center; margin:0 auto; }
        .hero-left h5, .lead-desc { text-align:center; }
        .v-card{ height:120px; }
        .feature-tall{ height:220px; }
      }
</style>
