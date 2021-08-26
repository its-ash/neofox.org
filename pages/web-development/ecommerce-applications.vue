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
                ECOMMERCE
                <br>
                <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Internet of Things">APPLICATION</span></h1>
              <p class="para-desc text-light-dark">Neofox, as the best web-based business portable application
                advancement organization, fabricates strong on-request internet business applications to assemble your
                business. Our online business application improvement administrations are exceptionally solid and of
                elite quality.
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
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <p class="py-5 h5 line-15 text-dark">
              With a group of specialists, we create the best ever portable applications to help your online business.
              <br> Web-based business versatile applications have gotten a significant mode for deals.
              <br>They are assisting organizations with broadening their reach and interface with clients around the
              world.
              <br> So the
              interest for web-based business application advancement is fundamentally high in this day and age.
            </p>
          </div>
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
          <div class="col-md-7 col-12">
            <h3 class="py-5 h3 line-15 text-dark">
              Our long stretches of involvement with versatile application advancement is a guarantee to convey the best
              items for our clients. We have cut our name in the business among the best eCommerce application
              designers.
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
              The applications we intended for our esteemed customers will draw an image of how great we are at getting
              along our positions. We utilize the furthest down the line advancements to construct applications that
              empower our customers to remain on top of things. In case you are searching for a solid organization to
              make an online business application for your business, reach out to us.
            </h3>
          </div>
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-12">
            <h2 class="py-5 h2 line-15 text-dark">
              Trust our accomplished full-stack software engineers with Fullstack based E-commerce business improvement
              to fabricate and convey superior online retail facades for any business.
            </h2>
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
