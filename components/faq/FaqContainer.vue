<template>
  <section>
    <svg class="text-light back-1 top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
      <path fill="currentColor" fill-opacity="1"
            d="M0,0L60,16C120,32,240,64,360,74.7C480,85,600,75,720,58.7C840,43,960,21,1080,32C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
    <div class="bg-light">
      <div itemscope itemtype="https://schema.org/FAQPage" class="container">
        <h2 class="d-inline"> {{ title }} ::</h2>
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <FaqQuestion :data="faq"></FaqQuestion>
          </div>
          <div class="col-md-5 d-md-block d-none">
          </div>
        </div>
        <div class="d-flex align-items-center py-3">
          <NuxtLink :to="{name: 'FAQ'}" class="h6 d-inline text-info p-2">more →</NuxtLink>
        </div>
      </div>
    </div>
    <svg class="text-light back-1 top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
      <path fill="currentColor" fill-opacity="1"
            d="M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,117.3C840,107,960,53,1080,53.3C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
  </section>
</template>

<script>
import FaqQuestion from "~/components/faq/FaqQuestion";

export default {
  name: "FaqContainer",
  props: ['questions', 'title', 'images', 'faq'],
  data: () => ({
  }),
  components: {
    FaqQuestion
  }
}
</script>

<style scoped>

</style>
