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
                Content <br>
                <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Internet of Things">Management</span><br> System</h1>
              <p class="para-desc text-light-dark">Neofox gives a range of CMS web improvement administrations.
                Reevaluating content administration framework administrations to us is the right move in case you are
                searching for an accomplished and dependable CMS web advancement organization to assist with your
                substance the board prerequisites.

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
    <KeyFeatures :features="features" :block="3">
      <p class="h3">
        Our substance the executive's framework administrations incorporate
        <span class="line text-primary fw-bold"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Artificial intelligence">AI</span></p>
    </KeyFeatures>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h2 line-15 text-dark">
              We give a web index well disposed of CMS advancement that proficiently oversees meta labels for the
              website pages.
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
        alt: "Easy Content Management",
        title: "Easy Content Management",
        icon: "",
        text: "We work with fast and simple refreshing of your site for adding and eliminating content. We likewise give a simple meta label to the board framework."
      },
      {
        alt: "Cloud Services",
        title: "Cloud Services",
        icon: "",
        text: "We can help you construct, send, and deal with your substance the board framework in the cloud. We can assist you with dealing with your whole programming stack and framework utilizing the most recent instruments and advancements."
      },
      {
        alt: "Content Management Consulting Services",
        title: "Content Management Consulting Services",
        icon: "",
        text: "We help you design and execute your substance the executive's techniques. Our CMS counseling administrations assist you with diminishing chance to advertise, lower expenses and dangers, and gain an upper hand."
      },
      {
        alt: "Big Data Services",
        title: "Big Data Services",
        icon: "",
        text: "Our huge information and knowledge administrations give you smart and noteworthy experiences and prescient investigation to help you plan and execute viable CMS crusades. With this, you can diminish the time required for new innovation selection."
      },
      {
        alt: "Simple and Customizable UI",
        title: "Simple and Customizable UI",
        icon: "",
        text: "We give simple and helpful design of site page plans and formats. We likewise give a straightforward UI plan that doesn't expect you to enlist a software engineer to alter the substance on your site. Any non-specialized creator of content can utilize the CMS."
      },
      {
        alt: "Round-the-clock CMS Support",
        title: "Round-the-clock CMS Support",
        icon: "",
        text: "We offer customized help for your business-basic substance the executive’s framework organizations. Our special, productive, and viable blend of cycles, individuals, and innovation is consistently receptive to your necessities."
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
