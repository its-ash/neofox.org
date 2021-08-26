<template>
  <section class="position-relative bg-white">
    <section class="bg-light w-100 h-100-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 order-md-1 order-2">
            <div class="title-heading">
              <NuxtLink class="badge rounded-pill text-light-dark " :to="{name: 'data-science'}">
                Data Science
              </NuxtLink>
              <h1 class="fw-bold mt-2 mb-3 line-10 text-uppercase">
                Decision <br>
                <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Internet of Things">Optimization</span> <br> Solution <br>
              </h1>
              <p class="para-desc text-light-dark h4">Change business decision-making with amazing optimization
                solutions</p>

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
        <span class="line text-primary fw-bold"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Artificial intelligence">AI</span>
      </p>
      <p> Its general decision impact illustrating, propagation, and improvement techniques license you to discover
        better business decision frameworks that harmony compromises between cost, peril, and prize, while in like
        manner figuring in money related and monetary circumstances.</p>
    </KeyFeatures>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h3 line-13 text-dark">
              Neofox decision optimization addresses a group of enhancement software that conveys prescriptive
              investigation abilities to empower associations to settle on better choices and convey further developed
              business results.

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
      {alt: "", title: "BOOM", icon: "", text: "DOOM"}
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
