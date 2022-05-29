<template>
  <section class="position-relative bg-white">
    <section class="bg-light w-100 h-100-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 order-md-1 order-2">
            <div class="title-heading">
              <NuxtLink class="badge rounded-pill text-light-dark " :to="{name: 'cloud-server'}">
                Cloud Computing
              </NuxtLink>
              <h1 class="fw-bold mt-2 mb-3 line-10 text-uppercase">
                IaaS :
                <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Space, Computing, Ram">Infrastructure</span> as a Service</h1>
              <p class="para-desc text-light-dark">A vendor provides clients pay-as-you-go access to storage,
                networking, servers, and other computing resources in the cloud.
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
    <div class="container mt-100 mt-60">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6">
          <img src="images/illustrator/youtube-media.svg" alt="">
        </div><!--end col-->

        <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title ms-lg-5">
            <h2 class="title mb-4">Clear IaaS to get you going </h2>
            <ul class="list-unstyled">
              <li class="mb-2">
                <span class="fw-bold text-success">➜</span>
                Unsurprising and clear charging
              </li>
              <li class="mb-2">
                <span class="fw-bold text-success">➜</span>
                Offering 1 Click App Install, Managed Kubernetes, Managed Databases, and that's only the tip of the
                iceberg
              </li>
              <li class="mb-2">
                <span class="fw-bold text-success">➜</span>
                IPv6, private systems administration, and observing at no extra expense
              </li>
              <li class="mb-0">
                <span class="fw-bold text-success">➜</span>
                14 server farms deliberately situated all throughout the planet
              </li>
            </ul>
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h2 line-15 text-dark">
              Amazing execution and improvement on estimating Industry-driving cost to execution
            </h3>
            <ul class="list-unstyled">
              <li class="mb-2">
                <span class="fw-bold text-success">➜</span>
                Unsurprising expenses and charging
              </li>
              <li class="mb-2">
                <span class="fw-bold text-success">➜</span>
                Enhanced figure types
              </li>
            </ul>
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
import {cloud_faq, iot_faq} from "~/utils/questions";
import {iot_ai_tech_list} from "~/utils/tech_list";

export default {
  components: {TechList, FaqContainer, KeyFeatures, BlogGrid},
  head: SEO(
    "Infrastructure as a Service : NEOFOX",
    "IaaS",
    "We merge imagination and technology to help brands grow in the age of digital transformation",
    "Neofox,Jaipur,Rajasthan,IaaS,Infrastructure as a Service,CLoud Computing,Industrial Solution,Solution,Smart",
    "",
    "",
    "",
  ),
  data: () => ({
    techItems: iot_ai_tech_list,
    features: [
      {alt: "", title: "BOOM", icon: "", text: "DOOM"}
    ],
    FAQ: cloud_faq
  }),
  mounted() {
    bootstrap();
  }
}
</script>

<style scoped>

</style>
