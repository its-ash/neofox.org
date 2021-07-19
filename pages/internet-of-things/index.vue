<template>
  <section class="position-relative bg-white w-100 py-5">
    <div class="row py-5 px-5">
      <h1 class="font-5 line-8 col-12 p-0 m-0 text-dark text-end py-5">
        Neofox
        <br><span class="text-warning line">IOT</span><br>
        Solution</h1>
      <h2 class="text-primary col-12 line-10 font-1 text-end">Everything can be automated, Neofox make them.</h2>
    </div>
    <TechList
      :items="['aws.svg','google-cloud.svg', 'Azure.svg' ,'webhooks.svg', 'hadoop.svg','platformio.svg']"></TechList>
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">What we do ?</h4>
              <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary fw-bold">Landrick</span>
                that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->

        <div class="row">
          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                            <span class="h1 icon2 text-primary">
                                <i class="uil uil-chart-line"></i>
                            </span>
              <div class="card-body p-0 content">
                <h5>Hign Performance</h5>
                <p class="para text-muted mb-0">It is a long established fact that a reader.</p>
              </div>
              <span class="big-icon text-center">
                                <i class="uil uil-chart-line"></i>
                            </span>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                            <span class="h1 icon2 text-primary">
                                <i class="uil uil-crosshairs"></i>
                            </span>
              <div class="card-body p-0 content">
                <h5>Best Securities</h5>
                <p class="para text-muted mb-0">It is a long established fact that a reader.</p>
              </div>
              <span class="big-icon text-center">
                                <i class="uil uil-crosshairs"></i>
                            </span>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                            <span class="h1 icon2 text-primary">
                                <i class="uil uil-airplay"></i>
                            </span>
              <div class="card-body p-0 content">
                <h5>Trusted Service</h5>
                <p class="para text-muted mb-0">It is a long established fact that a reader.</p>
              </div>
              <span class="big-icon text-center">
                                <i class="uil uil-airplay"></i>
                            </span>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                            <span class="h1 icon2 text-primary">
                                <i class="uil uil-rocket"></i>
                            </span>
              <div class="card-body p-0 content">
                <h5>Info Technology</h5>
                <p class="para text-muted mb-0">It is a long established fact that a reader.</p>
              </div>
              <span class="big-icon text-center">
                                <i class="uil uil-rocket"></i>
                            </span>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                            <span class="h1 icon2 text-primary">
                                <i class="uil uil-clock"></i>
                            </span>
              <div class="card-body p-0 content">
                <h5>24/7 Support</h5>
                <p class="para text-muted mb-0">It is a long established fact that a reader.</p>
              </div>
              <span class="big-icon text-center">
                                <i class="uil uil-clock"></i>
                            </span>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                            <span class="h1 icon2 text-primary">
                                <i class="uil uil-users-alt"></i>
                            </span>
              <div class="card-body p-0 content">
                <h5>IT Management</h5>
                <p class="para text-muted mb-0">It is a long established fact that a reader.</p>
              </div>
              <span class="big-icon text-center">
                                <i class="uil uil-users-alt"></i>
                            </span>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                            <span class="h1 icon2 text-primary">
                                <i class="uil uil-file-alt"></i>
                            </span>
              <div class="card-body p-0 content">
                <h5>Certified Company</h5>
                <p class="para text-muted mb-0">It is a long established fact that a reader.</p>
              </div>
              <span class="big-icon text-center">
                                <i class="uil uil-file-alt"></i>
                            </span>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                            <span class="h1 icon2 text-primary">
                                <i class="uil uil-search"></i>
                            </span>
              <div class="card-body p-0 content">
                <h5>Data Analytics</h5>
                <p class="para text-muted mb-0">It is a long established fact that a reader.</p>
              </div>
              <span class="big-icon text-center">
                                <i class="uil uil-search"></i>
                            </span>
            </div>
          </div><!--end col-->

          <div class="col-lg-12 text-center col-md-4 mt-4 pt-2">
            <a href="javascript:void(0)" class="btn btn-primary">See more
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-arrow-right fea icon-sm">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <!-- About Start -->
      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="row align-items-center">
              <div class="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div class="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                  <div class="card-body p-0">
                    <img src="images/course/online/ab01.jpg" class="img-fluid" alt="work-image">
                    <div class="overlay-work bg-dark"></div>
                    <div class="content">
                      <a href="javascript:void(0)" class="title text-white d-block fw-bold">Web Development</a>
                      <small class="text-light">IT &amp; Software</small>
                    </div>
                  </div>
                </div>
              </div><!--end col-->

              <div class="col-lg-6 col-6">
                <div class="row">
                  <div class="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div class="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                      <div class="card-body p-0">
                        <img src="images/course/online/ab02.jpg" class="img-fluid" alt="work-image">
                        <div class="overlay-work bg-dark"></div>
                        <div class="content">
                          <a href="javascript:void(0)" class="title text-white d-block fw-bold">Michanical Engineer</a>
                          <small class="text-light">Engineering</small>
                        </div>
                      </div>
                    </div>
                  </div><!--end col-->

                  <div class="col-lg-12 col-md-12 mt-4 pt-2">
                    <div class="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                      <div class="card-body p-0">
                        <img src="images/course/online/ab03.jpg" class="img-fluid" alt="work-image">
                        <div class="overlay-work bg-dark"></div>
                        <div class="content">
                          <a href="javascript:void(0)" class="title text-white d-block fw-bold">Chartered Accountant</a>
                          <small class="text-light">C.A.</small>
                        </div>
                      </div>
                    </div>
                  </div><!--end col-->
                </div><!--end row-->
              </div><!--end col-->
            </div><!--end row-->
          </div><!--end col-->

          <div class="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
            <div class="ms-lg-4">
              <div class="section-title mb-4 pb-2">
                <h4 class="title mb-4">About Our Story</h4>
                <p class="text-muted para-desc">Start working with <span class="text-primary fw-bold">Landrick</span>
                  that can provide everything you need to generate awareness, drive traffic, connect.</p>
                <p class="text-muted para-desc mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said
                  to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more
                  or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
              </div>

              <ul class="list-unstyled text-muted">
                <li class="mb-0"><span class="text-primary h4 me-2"><i
                  class="uil uil-check-circle align-middle"></i></span>Fully Responsive
                </li>
                <li class="mb-0"><span class="text-primary h4 me-2"><i
                  class="uil uil-check-circle align-middle"></i></span>Multiple Layouts
                </li>
                <li class="mb-0"><span class="text-primary h4 me-2"><i
                  class="uil uil-check-circle align-middle"></i></span>Suits Your Style
                </li>
              </ul>

              <div class="mt-4 pt-2">
                <a href="https://1.envato.market/4n73n" target="_blank" class="btn btn-primary m-1">Read More <i
                  class="uil uil-angle-right-b align-middle"></i></a>
                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                   class="btn btn-icon btn-pills btn-primary m-1 lightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       class="feather feather-video icons">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </a><span class="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
              </div>
            </div>
          </div>
        </div><!--end row-->
      </div><!--end container-->
    </section>
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h6 class="text-primary">Work Process</h6>
              <h4 class="title mb-4">How do we works ?</h4>
              <p class="text-muted para-desc mx-auto mb-0">Start working with <span class="text-primary fw-bold">Landrick</span>
                that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->

        <div class="row">
          <div class="col-md-4 mt-4 pt-2">
            <div class="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
              </div>

              <div class="card-body">
                <h5 class="text-dark">Discussion</h5>
                <p class="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have
                  originated</p>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
            <div class="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-airplay d-block rounded h3 mb-0"></i>
              </div>

              <div class="card-body">
                <h5 class="text-dark">Strategy &amp; Testing</h5>
                <p class="text-muted mb-0">Generators convallis odio, vel pharetra quam malesuada vel. Nam porttitor
                  malesuada.</p>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
            <div class="card features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-image-check d-block rounded h3 mb-0"></i>
              </div>

              <div class="card-body">
                <h5 class="text-dark">Reporting</h5>
                <p class="text-muted mb-0">Internet Proin tempus odio, vel pharetra quam malesuada vel. Nam porttitor
                  malesuada.</p>
              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section>
    <FaqContainer></FaqContainer>
  </section>
</template>

<script>
import FaqContainer from "~/components/faq/FaqContainer";
import {bootstrap} from "@/plugins/script.client";
import TechList from "@/components/Blocks/TechList";

export default {
  name: "internet-of-things",
  components: {FaqContainer, TechList},
  data: () => ({}),
  mounted() {
    bootstrap();
  }
}
</script>

<style lang="scss">
@import "assets/scss/variables";

</style>
