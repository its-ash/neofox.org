<template>
  <section class="position-relative bg-white">
    <section class="bg-light w-100 h-100-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 order-md-1 order-2">
            <div class="title-heading">
              <NuxtLink class="badge rounded-pill text-light-dark " :to="{name: 'internet-of-things'}">
                Internet Of Things
              </NuxtLink>
              <h1 class="fw-bold mt-2 mb-3 line-10 text-uppercase">
                Make your
                <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="TimeSeries, Event, Log, Structure, Non-Structure">data </span>management simple and
                accessible.</h1>
              <p class="para-desc text-light-dark">The Internet of Things (IoT) device management enables users to
                track, monitor, and manage the devices to ensure these work properly and securely after deployment.
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
    </section>
    <TechList :items="techItems"></TechList>
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <KeyFeatures :features="features">
      <p>
        The devices to ensure these work properly and securely after deployment. It is important to protect data from
        unauthorized access and tampering. We provide you the best data management services.
      </p>
    </KeyFeatures>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h2 line-15 text-dark">
              Perceive, aggregate, and change data from your IoT sources into asset-based data structures.
            </h3>
          </div>
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
        </div>
      </div>
    </section>
    <FaqContainer :faq="FAQ" title="Faq"></FaqContainer>
    <BlogGrid></BlogGrid>
  </section>
</template>

<script>
import {bootstrap} from "@/plugins/script.client";
import FaqContainer from "~/components/faq/FaqContainer";
import KeyFeatures from "@/components/Blocks/KeyFeatures";
import TechList from "@/components/Blocks/TechList";
import BlogGrid from "@/components/Blog/BlogGrid";
import {SEO} from "@/plugins/MetaTags";
import {iot_faq} from "~/utils/questions";
import {iot_ai_tech_list} from "~/utils/tech_list";

export default {
  components: {TechList, FaqContainer, KeyFeatures, BlogGrid},
  head: SEO('a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'),
  data: () => ({
    techItems: iot_ai_tech_list,
    features: [
      {alt: "", title: "", icon: "", text: ""}
    ],
    FAQ: iot_faq
  }),
  mounted() {
    bootstrap();
  }
}
</script>

<style scoped>

</style>
