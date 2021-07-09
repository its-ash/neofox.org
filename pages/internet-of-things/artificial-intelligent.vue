<template>
  <section class="position-relative bg-white">
    <!-- Hero Start -->
    <section class="bg-light w-100 h-100-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 order-md-1 order-2">
            <div class="title-heading">
              <NuxtLink class="badge rounded-pill text-light-dark " :to="{name: 'internet-of-things'}">
                Internet Of Things
              </NuxtLink>
              <h1 class="fw-bold mt-2 mb-3 line-10 text-uppercase">
                Artificial intelligence <br> of
                <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Internet of Things">Things</span></h1>
              <p class="para-desc text-light-dark">The fundamental explanation for consolidating AI with IoT is, while
                IoT
                gadgets effectively collect all the information and moving it to normally cloud or whatever other space
                where information can be aggregated through the web.
              </p>

              <div class="mt-4 pt-2">
                <NuxtLink :to="{name:'contact'}" class="btn btn-primary me-2">Get Started</NuxtLink>
                <a href="#FAQS" class="btn btn-outline-primary">FAQ</a>
              </div>
              <!--              <p class="text-muted mb-0 mt-3">Current Version: v3.0.0</p>-->
            </div>
          </div><!--end col-->

          <div class="col-md-6 order-md-2 order-1">
            <img src="/svg/flow-chart/iot-ai.svg" class="img-fluid d-block mx-auto"
                 alt="neofox artificial intelligent in iot">
          </div><!--end col-->
        </div><!--end row-->
      </div> <!--end container-->
    </section><!--end section-->
    <!-- Partners start -->
    <TechList
      :items="['pytorch.svg', 'tensorflow.svg','python.svg','neo4j.svg','opencv.svg', 'pyspark.svg']"></TechList>
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
              <h2 class="title mb-4">Key Features</h2>
              <p class="text-light-dark mb-0 para-desc">
                The central clarification for merging
                <span class="line text-primary fw-bold" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Artificial intelligence">AI</span>
                with IoT is, while
                IoT devices adequately gather all the data and moving it to ordinarily cloud or whatever other space
                where data can be amassed through the web. </p>
              <p class="text-light-dark mb-0 para-desc">AI, which is considered as the frontal cortex of A IoT is
                what truly helps in unique and reenacting the machines to act or respond.</p>
            </div>

          </div><!--end col-->
        </div><!--end row-->

        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
              <div class="icons text-primary text-center">
                <img src="/svg/icons/Delete%20User.svg" class="d-block rounded h3 mb-0 w-25" alt="">
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

      <div class="container pt-5">
        <div class="row d-flex align-items-center pt-5">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h2 line-15 text-dark">
              AI, which is considered as the cerebrum of AIoT is
              the thing that really helps in dynamic and recreating the machines to act or react.
            </h3>
          </div>
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
        </div>
      </div>
      <FaqContainer :title="'Faq'"></FaqContainer>


      <!--      <div class="container py-5 bg-gray" id="FAQS">-->
      <!--        <div class="row py-5">-->
      <!--          <h2>FAQs</h2>-->
      <!--          <div class="col-7">-->
      <!--            <FAQ :data="faq"></FAQ>-->
      <!--          </div>-->
      <!--          <div class="offset-1 col-4">-->
      <!--            <img src="/images/illustrator/app_development_SVG.svg" class="w-100" alt="">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

    </section><!--end section-->
    <!-- End -->
  </section>
</template>

<script>
import TechList from "@/components/TechList";
import {bootstrap} from "@/plugins/script.client";
import FaqContainer from "~/components/faq/FaqContainer";

export default {
  components: {TechList, FaqContainer},
  data: () => ({}),
  mounted() {
    bootstrap();
  }
}
</script>

<style scoped>

</style>
