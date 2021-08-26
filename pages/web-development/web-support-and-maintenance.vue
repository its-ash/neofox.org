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
                WEB SUPPORT <br>
                <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Internet of Things">AND</span><br> MANAGEMENT</h1>
              <p class="para-desc text-light-dark">Additionally, as a full-administration computerized promoting
                organization, we offer turnkey answers for boosting your site's presentation.
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
      <p class="h3">
        To start growing
        <span class="line text-primary fw-bold"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Artificial intelligence">online</span>
      </p>
      <p> Here's a portion of what's incorporated with Neofox's Website Management Services include</p>
    </KeyFeatures>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h2 line-15 text-dark">
              Are you prepared to take a plunge into website maintenance?
              <NuxtLink :to="{name:'contact'}">Reach us</NuxtLink>
              online to talk with an accomplished
              specialist from our site support group about keeping your site fit as a fiddle nonstop.
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
      {
        alt: "A stunning new look",
        title: "A stunning new look",
        icon: "",
        text: "Our fashioners will give your image an expert glance that stands apart from the opposition."
      },
      {
        alt: "A convincing new story",
        title: "A convincing new story",
        icon: "",
        text: "Our marketing specialists work with you to make an exceptional message that associates with your intended interest group."
      },
      {
        alt: "Positioning on Google",
        title: "Positioning on Google",
        icon: "",
        text: "Our creation group guarantees your site goes live with the most recent prescribed procedures for web indexes."
      },
      {
        alt: "Everything cooperating",
        title: "Everything cooperating",
        icon: "",
        text: "Our group ensures all your business instruments are coordinated into your site so it works the manner in which you need."
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
