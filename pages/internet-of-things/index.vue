<template>
  <div class="position-relative bg-white w-100 py-5">
    <section class="container h-100-center">
      <div class="row align-items-center">
        <div class="col-md-6 col-12">
          <img src="/img/iot/index.jpg" class="w-100">
        </div>
        <div class="col-md-6 col-12">
          <h1 class="font-6 line-8 text-dark text-end py-4">
            Neofox
            <br>
            <span class="text-warning line">IOT</span>
            <br>
            Solution
          </h1>
          <h2 class="line-10 font-1 text-end">Everything can be automated, Neofox make them.</h2>
        </div>
      </div>
    </section>

    <TechList
      :items="['mqtt.svg','aws.svg','google-cloud.svg', 'Azure.svg' ,'webhooks.svg', 'hadoop.svg','platformio.svg']"></TechList>
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <h2 class="title text-uppercase">Iot Solutions by NeoFox</h2>
            <p class="text-muted para-desc mb-0">
              Precise solutions depend on factors from location to data usage, and whether the device is static,
              mobile, local, or international</p>
          </div><!--end col-->
        </div><!--end row-->

        <div class="row">
          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <NuxtLink :to="{name: 'internet-of-things-artificial-intelligent'}"
                      class="card rounded hover-shadow p-3 bg-light border-0">
              <div class="card-body p-0 content">
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60"
                     viewBox="0 0 32 32">
                  <path
                    d="M30,19H26V15H24v9H8V8l9-.0009V6H13V2H11V6H8A2.002,2.002,0,0,0,6,8v3H2v2H6v6H2v2H6v3a2.0023,2.0023,0,0,0,2,2h3v4h2V26h6v4h2V26h3a2.0027,2.0027,0,0,0,2-2V21h4Z"/>
                  <path d="M21,21H11V11H21Zm-8-2h6V13H13Z"/>
                  <path d="M31,13H29A10.0117,10.0117,0,0,0,19,3V1A12.0131,12.0131,0,0,1,31,13Z"/>
                  <path d="M26,13H24a5.0059,5.0059,0,0,0-5-5V6A7.0085,7.0085,0,0,1,26,13Z"/>
                </svg>
                <h2 class="text-danger">AI/ML for IoT</h2>
                <p class="para text-muted mb-0">AI, which is considered as the cerebrum of AIoT.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <NuxtLink :to="{name: 'internet-of-things-m2m-platforms'}"
                      class="card rounded hover-shadow p-3 bg-light border-0">
              <div class="card-body p-0 content">
                <svg width="60" height="60" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    d="M22,26H20V17.76l-3.23,3.88a1,1,0,0,1-1.54,0L12,17.76V26H10V15a1,1,0,0,1,.66-.94,1,1,0,0,1,1.11.3L16,19.44l4.23-5.08a1,1,0,0,1,1.11-.3A1,1,0,0,1,22,15Z"
                    transform="translate(0)"/>
                  <path d="M4.16,14.65l-3-1.75a.76.76,0,1,0-.76,1.32L3.4,16a.76.76,0,1,0,.76-1.31Z"
                        transform="translate(0)"/>
                  <path d="M8.29,10.52a.73.73,0,0,0,1,.27.75.75,0,0,0,.28-1l-1.74-3a.76.76,0,1,0-1.32.76Z"
                        transform="translate(0)"/>
                  <path d="M16,9a.76.76,0,0,0,.76-.76V4.76a.76.76,0,1,0-1.52,0V8.25A.76.76,0,0,0,16,9Z"
                        transform="translate(0)"/>
                  <path
                    d="M22.68,10.79a.75.75,0,0,0,.37.11.76.76,0,0,0,.66-.38l1.75-3a.76.76,0,0,0-1.32-.76l-1.74,3A.75.75,0,0,0,22.68,10.79Z"
                    transform="translate(0)"/>
                  <path d="M31.9,13.18a.76.76,0,0,0-1-.28l-3,1.75A.76.76,0,0,0,28.6,16l3-1.74A.77.77,0,0,0,31.9,13.18Z"
                        transform="translate(0)"/>
                </svg>
                <h2 class="text-danger">M2M Platform</h2>
                <p class="para text-muted mb-0">Right solutions structure based on the requirements.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <NuxtLink :to="{name: 'internet-of-things-connectivity'}"
                      class="card rounded hover-shadow p-3 bg-light border-0">
              <div class="card-body p-0 content">

                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32">
                  <path
                    d="M20,14h8a2.0023,2.0023,0,0,0,2-2V4a2.0023,2.0023,0,0,0-2-2H20a2.0023,2.0023,0,0,0-2,2H9A2.0023,2.0023,0,0,0,7,6v4H4a2.0023,2.0023,0,0,0-2,2v8a2.0023,2.0023,0,0,0,2,2H6v4a2.0023,2.0023,0,0,0,2,2H18a2.0023,2.0023,0,0,0,2,2h8a2.0023,2.0023,0,0,0,2-2V20a2.0023,2.0023,0,0,0-2-2H20a2.0023,2.0023,0,0,0-2,2v6H8V22h4a2.0023,2.0023,0,0,0,2-2V12a2.0023,2.0023,0,0,0-2-2H9V6h9v6A2.0023,2.0023,0,0,0,20,14Zm0,14V24h8v4Zm8-8,0,2H20V20ZM4,20V16h8v4Zm8.0005-6H4V12h8ZM20,12V8h8v4Zm8-8,0,2H20V4Z"/>
                </svg>

                <h2 class="text-danger">Connectivity for IOT</h2>
                <p class="para text-muted mb-0">When it comes to connecting the Internet of Things.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <NuxtLink :to="{name: 'internet-of-things-cloud-computing'}"
                      class="card rounded hover-shadow p-3 bg-light border-0">
              <div class="card-body p-0 content">
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32">
                  <rect x="28" y="18" width="2" height="10"/>
                  <rect x="24" y="14" width="2" height="14"/>
                  <rect x="20" y="22" width="2" height="6"/>
                  <path
                    d="M22.175,10,23.76,8.7339A9.9522,9.9522,0,0,0,17.89,5.1816,10.0025,10.0025,0,0,0,6.17,13.1152,7.5054,7.5054,0,0,0,.0544,21.4087,7.6843,7.6843,0,0,0,7.7692,28H16V26H7.6945a5.632,5.632,0,0,1-5.6023-4.4858,5.5064,5.5064,0,0,1,4.4339-6.4307l1.3486-.2441.2139-1.11a8.206,8.206,0,0,1,6.7426-6.6426,7.9666,7.9666,0,0,1,3.0137.13A7.8037,7.8037,0,0,1,22.175,10Z"
                    transform="translate(0)"/>
                </svg>
                <h2 class="text-danger">IoT Cloud Computing</h2>
                <p class="para text-muted mb-0">Connectivity, security, scalability at ease.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <NuxtLink :to="{name: 'internet-of-things-data-management'}"
                      class="card rounded hover-shadow p-3 bg-light border-0">
              <div class="card-body p-0 content">

                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="60">
                  <path
                    d="M10.06,17.88A4.25,4.25,0,0,0,11,18a4,4,0,0,0,2.23-.68l3.22,2.87a3.88,3.88,0,0,0-.2,3.17A4,4,0,1,0,22.62,19l2.54-5.09a3.78,3.78,0,0,0,2.91-.53A4,4,0,1,0,23.38,13l-2.54,5.09A3.86,3.86,0,0,0,20,18a4,4,0,0,0-2.23.68l-3.22-2.87a3.88,3.88,0,0,0,.2-3.17A4,4,0,1,0,8.3,16.93L4,25V2H2V28a2,2,0,0,0,2,2H30V28H4.67ZM26,8a2,2,0,1,1-2,2A2,2,0,0,1,26,8ZM22,22a2,2,0,1,1-2-2A2,2,0,0,1,22,22ZM11,12a2,2,0,1,1-2,2A2,2,0,0,1,11,12Z"/>
                </svg>
                <h2 class="text-danger">Data Management</h2>
                <p class="para text-muted mb-0">Track, monitor, and manage the devices to ensure work.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <NuxtLink :to="{name: 'internet-of-things-app-development'}"
                      class="card rounded hover-shadow p-3 bg-light border-0">
              <div class="card-body p-0 content">
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="60">
                  <path d="M16,18H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H16a2,2,0,0,1,2,2V16A2,2,0,0,1,16,18ZM6,6V16H16V6Z"
                        transform="translate(0 0)"/>
                  <path d="M26,12v4H22V12h4m0-2H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V12a2,2,0,0,0-2-2Z"
                        transform="translate(0 0)"/>
                  <path d="M26,22v4H22V22h4m0-2H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2Z"
                        transform="translate(0 0)"/>
                  <path d="M16,22v4H12V22h4m0-2H12a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2Z"
                        transform="translate(0 0)"/>
                </svg>
                <h2 class="text-danger">App Development</h2>
                <p class="para text-muted mb-0">Build Native, web, hybrid on the OS of your choice.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 pt-2">
            <NuxtLink :to="{name: 'internet-of-things-end-to-end'}"
                      class="card rounded hover-shadow p-3 bg-light border-0">
              <div class="card-body p-0 content">

                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="60">
                  <path
                    d="M26,22a3.86,3.86,0,0,0-2,.57l-3.09-3.1a6,6,0,0,0,0-6.94L24,9.43A3.86,3.86,0,0,0,26,10a4,4,0,1,0-4-4,3.86,3.86,0,0,0,.57,2l-3.1,3.09a6,6,0,0,0-6.94,0L9.43,8A3.86,3.86,0,0,0,10,6a4,4,0,1,0-4,4,3.86,3.86,0,0,0,2-.57l3.09,3.1a6,6,0,0,0,0,6.94L8,22.57A3.86,3.86,0,0,0,6,22a4,4,0,1,0,4,4,3.86,3.86,0,0,0-.57-2l3.1-3.09a6,6,0,0,0,6.94,0L22.57,24A3.86,3.86,0,0,0,22,26a4,4,0,1,0,4-4ZM26,4a2,2,0,1,1-2,2A2,2,0,0,1,26,4ZM4,6A2,2,0,1,1,6,8,2,2,0,0,1,4,6ZM6,28a2,2,0,1,1,2-2A2,2,0,0,1,6,28Zm10-8a4,4,0,1,1,4-4A4,4,0,0,1,16,20Zm10,8a2,2,0,1,1,2-2A2,2,0,0,1,26,28Z"
                    transform="translate(0 0)"/>
                </svg>
                <h2 class="text-danger">End to End IoT</h2>
                <p class="para text-muted mb-0">Big data, Insight, Management Efficiency.</p>
              </div>
            </NuxtLink>
          </div>
        </div><!--end row-->
      </div><!--end container-->
    </section>
    <FaqContainer title="IOT" :faq="FAQ"></FaqContainer>
    <!--    <BlogGrid></BlogGrid>-->
  </div>
</template>

<script>
import FaqContainer from "~/components/faq/FaqContainer";
import {bootstrap} from "@/plugins/script.client";
import TechList from "@/components/Blocks/TechList";
import {SEO} from "@/plugins/MetaTags";
import {iot_faq} from "@/utils/questions";
import BlogGrid from "@/components/Blog/BlogGrid";

export default {
  name: "internet-of-things",
  components: {FaqContainer, TechList, BlogGrid},
  head: SEO(
    "IT Services, Digital Solutions, Technology Consulting : NEOFOX",
    "Data Science, IoT, Software Development, Web Development",
    "We merge imagination and technology to help brands grow in the age of digital transformation",
    "Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart",
    "",
    iot_faq,
  ),
  data: () => ({FAQ: iot_faq}),
  mounted() {
    bootstrap();
  }
}
</script>

<style lang="scss">
@import "assets/scss/variables";

.hover-shadow {

  &:hover {
    .svg-icon {
      transform: scale(1.2);
      filter: drop-shadow(2px 2px 4px #eaeaea);
    }
  }

  .svg-icon {
    fill: #0a53be;
    transition-duration: 500ms;
  }
}

</style>
