<template>
  <section class="position-relative bg-white">
    <!-- Hero Start -->
    <section class="bg-light w-100 h-100-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12">
            <div class="title-heading">
              <NuxtLink class="badge rounded-pill text-light-dark" :to="{name: 'internet-of-things'}">
                Internet Of Things
              </NuxtLink>
              <h1 class="fw-bold mt-2 mb-3">
                Machine <span class="text-primary">to</span> Machine
              </h1>
              <p class="text-light-dark noto-sans fw-light">We work with you to select the right solutions and
                commercial structure
                based on the specific requirements of your application – ensuring that your devices communicate <span
                  class="text-danger">securely</span>
                and <span class="text-success">reliably</span>.</p>


              <div class="mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary me-2">Get Started</a>
                <a href="javascript:void(0)" class="btn btn-outline-primary">Documentation</a>
              </div>
              <p class="text-muted mb-0 mt-3">Current Version: v3.0.0</p>
            </div>
          </div><!--end col-->

          <div class="col-md-6">
            <img src="/svg/flow-chart/iot-m2m.svg" class="img-fluid d-block mx-auto" alt="">
          </div><!--end col-->
        </div><!--end row-->
      </div> <!--end container-->
    </section><!--end section-->
    <!-- Partners start -->
    <TechList
      :items="[ 'openvpn.svg', 'ssh.svg', 'wireguard.svg']"></TechList>
    <!-- Partners End -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <!-- Hero End -->
    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Key Features</h4>
              <p class="text-light-dark para-desc">
                Precise solutions depend on factors from location to data usage, and whether the device is static,
                mobile, local, or international. We also consider the deployment scale and duration as well as the
                importance of being ‘always on’, which can be essential for mission-critical applications.
              </p>
            </div>
          </div><!--end col-->
        </div><!--end row-->

        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
              <div class="icons text-primary text-center">
                <i class="uil uil-layer-group d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark">Modular</a>
                <p class="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                <a href="javascript:void(0)" class="text-primary read-more">Read More <i
                  class="uil uil-angle-right-b"></i></a>
                <i class="uil uil-layer-group text-primary full-img"></i>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
              <div class="icons text-primary text-center">
                <i class="uil uil-airplay d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark">Responsive</a>
                <p class="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                <a href="javascript:void(0)" class="text-primary read-more">Read More <i
                  class="uil uil-angle-right-b"></i></a>
                <i class="uil uil-airplay text-primary full-img"></i>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
              <div class="icons text-primary text-center">
                <i class="uil uil-focus-target d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark">Customizable</a>
                <p class="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                <a href="javascript:void(0)" class="text-primary read-more">Read More <i
                  class="uil uil-angle-right-b"></i></a>
                <i class="uil uil-focus-target text-primary full-img"></i>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
              <div class="icons text-primary text-center">
                <i class="uil uil-expand-arrows d-block rounded h3 mb-0"></i>
              </div>
              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark">Scalable</a>
                <p class="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                <a href="javascript:void(0)" class="text-primary read-more">Read More <i
                  class="uil uil-angle-right-b"></i></a>
                <i class="uil uil-expand-arrows text-primary full-img"></i>
              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h6 class="text-primary">Quickstart</h6>
              <h4 class="title mb-4">Awesome isn't it? Let's dive in!</h4>
              <p class="para-desc mx-auto text-muted mb-0">Start working with <span class="text-primary fw-bold">Landrick</span>
                that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
  </section>
</template>

<script>
import TechList from "@/components/TechList";
import {bootstrap} from "@/plugins/script.client";

export default {
  components: {TechList},
  mounted() {
    bootstrap();
  }
}
</script>

<style scoped>

</style>
