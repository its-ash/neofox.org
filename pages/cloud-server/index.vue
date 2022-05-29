<template>
  <section class="position-relative bg-light">

    <!-- Hero Start -->
    <section class="h-100-center w-100 bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12">
            <div class="title-heading">
              <NuxtLink class="badge rounded-pill text-light-dark " :to="{name: 'index'}">
                NEOFOX
              </NuxtLink>
              <h1 class="fw-bold mt-2 mb-3 line-10 text-uppercase">
                Complete <br>
                <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Space, Computing, Ram">Cloud</span>
                <br>Solution</h1>
              <p class="para-desc text-muted">We construct our reliable Cloud on four central standards - Security,
                Privacy, Compliance, and Transparency. We give the best mechanization-driven arrangements that
                assistance in quick cloud onboarding. </p>
              <div class="mt-4 pt-2">
                <NuxtLink :to="{name:'contact'}" class="btn btn-primary me-2">Get Started</NuxtLink>
                <a href="#FAQS" class="btn btn-outline-primary">FAQ</a>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <img src="/images/digital/about.png" class="img-fluid d-block mx-auto" alt="">
          </div><!--end col-->
        </div><!--end row-->
      </div> <!--end container-->
    </section><!--end section-->


    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <!-- Hero End -->


    <KeyFeatures :features="features" :block="3">
      <p class="h5">
        We will in general exchange Secured-center to Windows Server and edge gadgets to help limit hazards from
        microcode weaknesses and progressed malware in IoT and a half and half cloud conditions.
      </p>
    </KeyFeatures>
    <section class="section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h3 class="py-5 h2 line-15 text-dark">
              To make a more secure world approved by computerized change, we tend to deal with your data solidly and in
              consistence with protection and legitimate necessities.
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

    <div class="container py-5">
      <div class="row justify-content-center py-5">
        <div class="col-12 text-center">
          <div class="section-title">
            <h4 class="title mb-4">Want to be among the first to find out?</h4>
            <p class="text-muted para-desc mx-auto">
              Accelerate your cloud exercises and obligations by restricting costs, increase the usefulness, and speed
              up the conveyance of the leader’s cycle <br> with
              <NuxtLink :to="{name:'index'}" class="text-primary fw-bold">NEOFOX</NuxtLink>
              DevOps administrations.
            </p>

            <div class="subcribe-form mt-4 pt-2">
              <form @submit.prevent @submit="contact">
                <div class="">
                  <input v-model="email" type="email" id="email" name="email" class="border bg-white rounded-pill"
                         required
                         placeholder="Email Address">
                  <button type="submit" class="btn btn-pills btn-primary">Get Started</button>
                </div>
              </form>
            </div>
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div>

  </section>
</template>

<script>
import KeyFeatures from "@/components/Blocks/KeyFeatures";
import BlogGrid from "@/components/Blog/BlogGrid";
import FaqContainer from "@/components/faq/FaqContainer";
import {SEO} from "@/plugins/MetaTags";

export default {
  name: "cloud-server",
  head: SEO(
    "Cloud Solution : NEOFOX",
    "Cloud Solution",
    "We merge imagination and technology to help brands grow in the age of digital transformation",
    "Neofox,Jaipur,Rajasthan,India,Digital Ocean,Mqtt,Machine Learning,Cloud,Industrial Cloud Solution,Solution,Smart",
    "",
    "",
    "",
  ),
  data: () => ({
    email: '',
    features: [
      {
        alt: "SAAS",
        title: "SAAS",
        icon: "",
        text: "SAAS or Software As A Service is a model delivering software on a subscription basis. It is all cloud-based and hence, you can access the software using your web browser on desktop or mobile."
      },
      {
        alt: "IAAS",
        title: "IAAS",
        icon: "",
        text: "A vendor provides clients pay-as-you-go access to storage, networking, servers, and other computing resources in the cloud."
      },
      {
        alt: "SAAS",
        title: "SAAS",
        icon: "",
        text: "A service provider offers access to a cloud-based environment in which users can build and deliver applications. The provider supplies the underlying infrastructure."
      }
    ],
  }),
  components: {KeyFeatures, FaqContainer, BlogGrid},
  methods: {
    contact() {
      this.$router.push({name: 'contact', params: {email: this.email}})
    }
  },
}
</script>

<style scoped>

</style>
