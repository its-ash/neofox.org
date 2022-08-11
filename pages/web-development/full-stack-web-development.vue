<template>
  <section class="position-relative bg-white">
    <section class="bg-light w-100 h-100-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 order-md-1 order-2">
            <div class="title-heading">
              <NuxtLink class="badge rounded-pill text-light-dark " :to="{name: 'web-development'}">
                web development
              </NuxtLink>
              <h1 class="fw-bold mt-2 mb-3 line-10 text-uppercase">
                <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Internet of Things">FULL STACK</span><br>WEB DEVELOPMENT</h1>
              <p class="para-desc text-light-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
                aspernatur, consequatur error eum ipsam itaque maiores nemo nihil non nostrum numquam obcaecati optio
                placeat quam rem similique ut voluptate.
              </p>

              <div class="mt-4 pt-2">
                <NuxtLink :to="{name:'contact'}" class="btn btn-primary me-2">Get Started</NuxtLink>
                <a href="#FAQS" class="btn btn-outline-primary">FAQ</a>
              </div>
              <!--              <p class="text-muted mb-0 mt-3">Current Version: v3.0.0</p>-->
            </div>
          </div><!--end col-->

          <div class="col-md-6 order-md-2 order-1">
            <img src="/img/web/fullStack.svg" class="img-fluid d-block mx-auto"
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
    <KeyFeatures :features="features" :block="3">
      <p class="h3">
        Layers Of Full Stack Web Application
        <span class="line text-primary fw-bold"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Artificial intelligence">Development</span>
      </p>
      <p>
        Any full-stack web application has three fundamental segments in particular - front end, back end layer and
        DevOps. A portion of the web projects needn't bother with a front end since they just give an API.
      </p>
    </KeyFeatures>
    <!--    <section class="section">-->
    <!--      <div class="container">-->
    <!--        <div class="row d-flex align-items-center">-->
    <!--          <div class="col-md-7 col-12">-->
    <!--            <h3 class="py-5 h2 line-15 text-dark">-->
    <!--              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, architecto aspernatur atque,-->
    <!--              consequuntur debitis doloremque explicabo harum illo in iste labore maxime molestiae perferendis-->
    <!--              repudiandae veniam vitae voluptates? Unde, veniam?-->
    <!--            </h3>-->
    <!--          </div>-->
    <!--          <div class="col-5 d-none d-md-block">-->
    <!--            <img src="/images/illustrator/app.svg" class="w-100" alt="">-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <!--    <FaqContainer :faq="FAQ" title="Faq"></FaqContainer>-->
    <!--    <BlogGrid></BlogGrid>-->
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
      {
        title: "Front End Layer",
        icon: "",
        text: "It utilizes three advances for an astonishing encounter for the clients. HTML for the site structure, CSS for making style and Javascript for making the rationale."
      },
      {
        title: "Back End Layer",
        icon: "",
        text: "The backend layer alludes to every one of the segments which work on the worker. A backend assumes the liability of all the business rationale and putting away items into the data sets."
      },
      {
        title: "Planning DevOps",
        icon: "",
        text: "Conveying applications, increasing or down the framework are dealt with by the designers. Full-stack designers are additionally answerable for making and dealing with the backend data sets."
      }
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
