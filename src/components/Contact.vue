<script setup>

</script>

<template>

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

.contact-card {
  background: linear-gradient(180deg, #221d2f 0%, #0f0d15 100%);
  border-radius: 1rem;
  padding: 1.6rem;
  box-shadow: 0 12px 28px rgba(6,5,15,0.7);
  border: 1px solid rgba(255,255,255,0.03);
}

.form-control {
  background: #ac76ff57; 
  border: 1px solid rgba(255,255,255,0.04);
  color: rgba(230,230,235,0.95);
  transition: box-shadow .18s, border-color .18s;
}
.form-control:focus {
  border-color: rgba(123,60,240,0.85);
  box-shadow: 0 8px 24px rgba(91,33,182,0.12);
  color: #fff;
}
::placeholder {
  color: rgba(255,255,255,0.44); 
}

label {
  color: rgba(255,255,255,0.82);
}

.text-secondary {
  color: rgba(255,255,255,0.6);
}

.btn-outline-interact {
  border: 1.6px solid rgba(123,60,240,0.28);
  color: rgba(255,255,255,0.9);
  background: transparent;
  transition: transform .18s ease, background .18s ease, border-color .18s ease;
}
.btn-outline-interact:hover {
  transform: translateY(-3px);
  background: rgba(91,33,182,0.06);
  border-color: rgba(123,60,240,0.6);
}

.btn-primary {
  background: linear-gradient(90deg, #9b6cff, #7b3cf0);
  border:none;
  color: #fff;
  transition: transform .18s;
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(123,60,240,0.18);
}

</style>