<template>
  <section class="position-relative bg-white">
    <section class="bg-light w-100 h-100-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 order-md-1 order-2">
            <div class="title-heading">
              <NuxtLink :to="{name: 'mobile-development'}" class="badge rounded-pill text-light-dark ">
                Mobile Development
              </NuxtLink>
              <h1 class="fw-bold mt-2 mb-3 line-10 text-uppercase">
                <span class="line text-danger" data-bs-placement="top" data-bs-toggle="tooltip"
                      title="Internet of Things">REACT</span><br> NATIVE</h1>
              <p class="para-desc text-light-dark">
                React Native is the first framework that completely fulfills the promise of cross-platform native app
                development. Although it’s fairly recent, it’s been already successfully utilized by companies and
                startups of various sizes and from different industries.</p>

              <div class="mt-4 pt-2">
                <NuxtLink :to="{name:'contact'}" class="btn btn-primary me-2">Get Started</NuxtLink>
                <a class="btn btn-outline-primary" href="#FAQS">FAQ</a>
              </div>
              <!--              <p class="text-muted mb-0 mt-3">Current Version: v3.0.0</p>-->
            </div>
          </div><!--end col-->

          <div class="col-md-6 order-md-2 order-1">
            <img alt="neofox artificial intelligent in iot" class="img-fluid d-block mx-auto"
                 src="/svg/flow-chart/iot-ai.svg">
          </div><!--end col-->
        </div><!--end row-->
      </div> <!--end container-->
    </section>
    <TechList :items="techItems"></TechList>
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg fill="none" viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <KeyFeatures :features="features">
      <p>
        <span class="line text-primary fw-bold"
              data-bs-placement="top"
              data-bs-toggle="tooltip"
              title="Artificial intelligence">AI</span></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem ea expedita explicabo facilis fugiat
        id maxime natus obcaecati odio, officiis perspiciatis possimus qui quibusdam repellat repellendus repudiandae
        rerum similique?</p>
    </KeyFeatures>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h2 line-15 text-dark">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi ducimus facere incidunt magnam
              numquam, odio optio quaerat veniam. Aliquid aut cum dolor dolorum earum ex hic modi odio voluptatem.
            </h3>
          </div>
          <div class="col-5 d-none d-md-block">
            <img alt="" class="w-100" src="/images/illustrator/app.svg">
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
