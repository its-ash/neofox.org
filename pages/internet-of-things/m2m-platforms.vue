<template>
  <section class="position-relative bg-white">
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
    </section>
    <TechList :items="tech_list"></TechList>
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <KeyFeatures :features="features">
      <p>
        We also consider the deployment scale and duration as well as the importance of being <span
        class="line text-primary fw-bold"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Robust and Reliable">‘always on’</span>, which can be
        essential for mission-critical applications.
        or whatever other space where data can be amassed through the web. </p>
      <p> Our expert team will work with you to build a connectivity solution that addresses your specific use case with
        scalability and seamless integration.
      </p>
    </KeyFeatures>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h2 line-15 text-dark">
              Precise solutions depend on factors from location to data usage, and whether the device is static, mobile,
              local, or international.
            </h3>
          </div>
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
        </div>
      </div>
    </section>
    <FaqContainer :faq="FAQ" title="Frequently asked questions about IoT"></FaqContainer>
    <BlogGrid></BlogGrid>
  </section>
</template>

<script>
import {bootstrap} from "@/plugins/script.client";
import TechList from "@/components/Blocks/TechList";
import {iot_faq} from "~/utils/questions";
import KeyFeatures from "~/components/Blocks/KeyFeatures";
import FaqContainer from "~/components/faq/FaqContainer";
import {iot_m2m_tech_list} from "~/utils/tech_list";

export default {
  components: {TechList, KeyFeatures, FaqContainer},
  data: () => ({
    features: [
      {alt: "", title: "boom", icon: "", text: "sdas"}
    ],
    FAQ: iot_faq,
    tech_list: iot_m2m_tech_list
  }),
  mounted() {
    bootstrap();
  }
}
</script>

<style scoped>

</style>
