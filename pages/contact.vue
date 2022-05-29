<template>
  <section class="bg-white">
    <div class="container py-5 mt-60">
      <div class="row align-items-center py-5">
        <div class="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
          <div class="card border-0">
            <div class="card-body py-5">
              <h4 class="card-title">Get In Touch !</h4>
              <div class="custom-form mt-3">
                <form method="post" name="myForm">
                  <p class="mb-0 text-danger">Error C</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Your Name <span class="text-danger">*</span></label>
                        <input name="name" type="text" class="form-control bg-light" placeholder="Name :">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Your Email <span class="text-danger">*</span></label>
                        <div class="form-icon position-relative">
                          <i data-feather="mail" class="fea icon-sm icons"></i>
                          <input v-model="emailID" name="email" id="email" type="email" class="form-control bg-light"
                                 placeholder="Email :">
                        </div>
                      </div>
                    </div><!--end col-->
                    <div class="col-12">
                      <div class="mb-3">
                        <label class="form-label">Subject</label>
                        <input name="subject" id="subject" class="form-control bg-light" placeholder="subject :">
                      </div>
                    </div><!--end col-->

                    <div class="col-12">
                      <div class="mb-3">
                        <label class="form-label">Comments <span class="text-danger">*</span></label>
                        <textarea name="comments" id="comments" rows="4" class="form-control bg-light"
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
                        <button type="submit" id="submit" name="send" class="btn btn-primary">
                          Send Message
                        </button>
                      </div>
                    </div><!--end col-->
                  </div><!--end row-->
                </form>
              </div><!--end custom-form-->
            </div>
          </div>
        </div><!--end col-->
        <div class="col-lg-6 col-12 justify-content-center">
          <div class="title-heading">
            <h1 class="heading line-10">Lorem Ipsum is simply lorem Ipsum has</h1>
            <p class="text-dark">Lorem Ipsum is simply<span class="text-primary fw-bold"> dummy text</span> of the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s,</p>
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
                  <a href="tel:+152534-468-854" class="text-success line">+152 534-468-854</a>
                </div>
                <div class="px-2">
                  <small class="text-dark">BUSINESS</small>
                  <a href="tel:+152534-468-854" class="text-success line">+152 534-468-854</a>
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
  }),
  mounted() {
    this.a = Math.floor(Math.random() * 10);
    this.b = Math.floor(Math.random() * 10);
    if (this.$route.params['email']) this.emailID = this.$route.params['email'];
  },
  computed: {}

}
</script>

<style scoped>

</style>
