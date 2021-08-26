<template>
  <section class="position-relative bg-light">
    <section class="w-100 h-100-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-7 order-1 order-md-2">
            <div class="title-heading mt-4 ms-lg-5">
              <h1 class="heading mb-3 line-12">
                Remarkable
                <span class="text-primary">Advertising</span> agencies with the abilities to help you with everything
                progressed.
              </h1>
              <p class="para-desc text-muted h3">We go for assortment over sum, and quality results are passed on by
                essentially the best people. </p>
              <div class="mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary m-1">Learn More <i
                  class="uil uil-angle-right-b"></i></a>
                <a href="#" data-type="youtube" data-id="yba7hPeTSjk"
                   class="btn btn-icon btn-pills btn-primary m-1 lightbox"><i data-feather="video"
                                                                              class="icons"></i></a><span
                class="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <img src="/images/illustrator/working_with_computer.svg" class="img-fluid" alt="">
          </div>
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->

    <KeyFeatures :features="features">
      <p>
        Digital marketing is the promotion of products/services via various
        <span class="line text-primary fw-bold"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Artificial intelligence">forms</span> of electronic media,
        mainly based on the internet.
      </p>

    </KeyFeatures>

    <div class="container py-5">
      <div class="row align-items-center py-5">
        <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title me-lg-5">
            <h4 class="title mb-4 line-13">WHY DO SMALL BUSINESSES NEED SOCIAL MEDIA MARKETING PACKAGES?</h4>
            <p>Let us look at some of the perfect reasons why small business needs social media
              marketing packages:</p>
            <ul class="list-unstyled text-muted">
              <li class="mb-0 text-dark">
                <span class="text-primary fw-bold h5 me-2">·</span>Find new and genuine customers
              </li>
              <li class="mb-0 text-dark">
                <span class="text-primary fw-bold h5 me-2">·</span>To spread the word about your products and services
              </li>
              <li class="mb-0 text-dark">
                <span class="text-primary fw-bold h5 me-2">·</span>For better Brand recognition & Trusting in your
                business.
              </li>
              <li class="mb-0 text-dark">
                <span class="text-primary fw-bold h5 me-2">·</span>Advertise your business, products or services
              </li>
              <li class="mb-0 text-dark">
                <span class="text-primary fw-bold h5 me-2">·</span>Create a community and loyal following
              </li>
              <li class="mb-0 text-dark">
                <span class="text-primary fw-bold h5 me-2">·</span>It’s good for SEO
              </li>
            </ul>
            <NuxtLink :to="{name: 'contact'}" class="mt-3 h6 text-primary">Find Out More <i
              class="uil uil-angle-right-b"></i></NuxtLink>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 order-1 order-md-2">
          <img src="/images/illustrator/app_development_SVG.svg" alt="">
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->

    <!-- CTA Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title title-dark text-dark mb-4">Who We Are?</h4>
              <p class="para-dark para-desc mx-auto h4 noto-sans">
                "We develop systems, make huge substance and measure everything to ensure that we offer the sum of our
                clients ROI, whether or not you're the newbie or an arrangement name in your industry".
              </p>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- CTA End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->
  </section>
</template>

<script>
import KeyFeatures from "@/components/Blocks/KeyFeatures";
import {iot_ai_tech_list} from "@/utils/tech_list";
import {iot_faq} from "@/utils/questions";

export default {
  name: "digital-market-agency",
  components: {KeyFeatures},
  data: () => ({
    techItems: iot_ai_tech_list,
    features: [
      {
        title: "Secure Potential",
        text: "It helps secure potential customers and broadens your client base.It allows you to communicate with your customers on a one-on-one basis.\n",
        icon: ""
      },
      {
        title: "Create A Presence",
        text: "It helps you create a presence on social media with unique and relevant content.", icon: ""
      },
      {
        title: "Posting and Boosting",
        text: "Experts take care of your social media activities such as posting and boosting.", icon: ""
      },
      {
        title: "Creates Awareness",
        text: "It creates awareness about your product/services. Uniform content across channels helps maintain a brand identity.",
        icon: ""
      },
    ],
    FAQ: iot_faq
  }),
}
</script>

<style scoped>

</style>
