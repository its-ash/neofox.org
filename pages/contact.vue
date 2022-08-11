<template>
  <section class="bg-white">
    <div class="container py-5 mt-60">
      <div class="row align-items-center py-5">
        <div v-if="messageSent" class="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1 py-5 my-5">
          <h2 class="card-title py-5 my-5">Thanks, <br> We will get back to you ASAP!</h2>
        </div>
        <div v-else class="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
          <div class="card border-0">
            <div class="card-body py-5">
              <h4 class="card-title">Get In Touch !</h4>
              <div class="custom-form mt-3">
                <p class="mb-0 text-danger">{{ error }}</p>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Your Name <span class="text-danger">*</span></label>
                      <input v-model="form._632008566" name="name" type="text" class="form-control bg-light"
                             placeholder="Name :">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Your Email <span class="text-danger">*</span></label>
                      <div class="form-icon position-relative">
                        <i data-feather="mail" class="fea icon-sm icons"></i>
                        <input v-model="form._1068597459" name="email" id="email" type="email"
                               class="form-control bg-light"
                               placeholder="Email :">
                      </div>
                    </div>
                  </div><!--end col-->
                  <div class="col-12">
                    <div class="mb-3">
                      <label class="form-label">Subject</label>
                      <input v-model="form._1306600102" name="subject" id="subject" class="form-control bg-light"
                             placeholder="subject :">
                    </div>
                  </div><!--end col-->

                  <div class="col-12">
                    <div class="mb-3">
                      <label class="form-label">Comments <span class="text-danger">*</span></label>
                      <textarea v-model="form._1872559828" name="comments" rows="4"
                                class="form-control bg-light"
                                placeholder="Message :"></textarea>

                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="pb-2 px-2 row" v-if="a+b!==total">
                      <div class="col h5"> {{ a }} + {{ b }} = {{ total }}</div>
                      <div class="col-auto rajdhani">SlideME</div>
                      <input min="0" max="20" type="range" v-model.number="total" class="form-range col">
                    </div>
                    <div class="d-grid" v-else>
                      <button @click="submitForm" name="send" class="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </div><!--end col-->
                </div><!--end row-->
              </div><!--end custom-form-->
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12 justify-content-center">
          <div class="title-heading">
            <h1 class="heading line-10">Just a call away</h1>
            <p class="text-dark">Feel free to ask or get <span class="text-primary fw-bold">help</span></p>
            <div class="d-flex w-100 contact-detail align-items-center mt-3">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                     class="feather feather-mail fea icon-m-md text-dark me-3">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="flex-1 content">
                <h5 class="title fw-bold mb-0">Email</h5>
                <a href="mailto:we@neofox.org" class="text-success line px-3">we@neofox.org</a>
              </div>
            </div>
            <div class="d-flex contact-detail align-items-center mt-3">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="feather feather-phone fea icon-m-md text-dark me-3">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="flex-1 content">
                <h5 class="title fw-bold mb-0">Phone</h5>
                <div class="px-2">
                  <small class="text-dark">BUSINESS</small>
                  <a href="tel:+919549742939" class="text-success line fw-bold">+91 954974 9426</a>

                </div>
                <div class="px-2">
                  <small class="text-dark">BUSINESS</small>
                  <a href="tel:+919694978266" class="text-success line fw-bold">+91 969497 2939</a>
                </div>
              </div>
            </div>
          </div>
        </div><!--end row-->
      </div>
    </div>
  </section>

</template>

<script>
import {SEO} from "@/plugins/MetaTags";

export default {
  name: "contact",
  head: SEO(
    "IT Services, Digital Solutions, Technology Consulting : NEOFOX",
    "Data Science, IoT, Software Development, Web Development",
    "We merge imagination and technology to help brands grow in the age of digital transformation",
    "Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart",
    "",
    "",
    "",
  ),
  data: () => ({
    a: 0,
    b: 0,
    total: 0,
    emailID: '',
    form: {_632008566: "", _1068597459: "", _1306600102: "", _1872559828: ""},
    messageSent: false,
  }),
  mounted() {
    this.a = Math.floor(Math.random() * 10);
    this.b = Math.floor(Math.random() * 10);
    if (this.$route.params['email']) this.emailID = this.$route.params['email'];
  },
  methods: {
    submitForm() {
      const data = {
        "fbzx": 6424017248062223410,
        pageHistory: 0,
        _: 1659882025328
      };
      Object.entries(this.form).map(([key, value]) => {
        data['entry.' + key.replace("_", "")] = value;
      });
      const submitUrl = new URL('https://docs.google.com/forms/d/e/1FAIpQLSee05JeJVJiirracdMp5IkWjTtz3wtFyWGzJN9ceqUpyHK4UA/formResponse');
      Object.entries(data).map(([key, value]) => {
        submitUrl.searchParams.append(key, value.toString());
      });

      this.$axios.get(submitUrl.href, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8'
        }
      }).then(() => {
        this.messageSent = true;
      });
    }
  },
  computed: {
    error() {
      if (this.form._632008566.length < 1) return "* Please fill this form";
      if (this.form._632008566.length < 2) return "Please enter your name";
      if (this.form._1068597459.length < 2) return "Please enter your email";
      if (this.form._1872559828.length < 2) return "Please enter some info.";
    }
  }
}
</script>

<style scoped>

</style>
