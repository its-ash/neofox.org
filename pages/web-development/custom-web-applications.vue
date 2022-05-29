<template>
  <section class="position-relative bg-white">
    <section class="bg-light w-100 h-100-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 order-md-1 order-2">
            <div class="title-heading">
              <NuxtLink :to="{name: 'web-development'}" class="badge rounded-pill text-light-dark ">
                web development
              </NuxtLink>
              <h1 class="fw-bold mt-2 mb-3 line-10 text-uppercase">
                Custom
                <br>
                <span class="line text-danger" data-bs-placement="top" data-bs-toggle="tooltip"
                      title="Internet of Things">Web </span><br> Application</h1>
              <p class="para-desc text-light-dark">Neofox is a full-stack provider of custom web application advancement
                for market pioneers, developing and arising organizations with innovation at their center.
              </p>

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
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h4 line-15 text-dark">
              Right, when we foster custom web applications, there's no <span class="line text-primary">"one size fits all"</span>
              approach.
              There are two things
              that the whole of our custom web applications share for all goals and reason, nonetheless: they're
              incredibly
              straightforward and can be changed to oblige your unmistakable necessities.
            </h3>
          </div>
          <div class="col-5 d-none d-md-block">
            <img alt="" class="w-100" src="/images/illustrator/app.svg">
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-5 d-none d-md-block">
            <img alt="" class="w-100" src="/images/illustrator/app.svg">
          </div>
          <div class="col-md-7 col-12">
            <h3 class="py-5 h4 line-15 text-dark">
              Your amazing application will be worked inside an easy-to-use
              <span class="line text-danger" data-bs-placement="top" data-bs-toggle="tooltip"
                    title="Content Management System">CMS </span>, considering
              a quiet experience for you and some different partners. In addition, the potential results are essentially
              immense, paying little heed to how complex your necessities are.
            </h3>
          </div>

        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h4 line-15 text-dark">
              Discontinuously, there are applications that sound unimaginably baffling, yet all
              you need to make them the fact of the matter is a refined gathering of progress-trained professionals.
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
