<template>
  <div class="container py-5">
    <div class="row pt-5">
      <div class="col-12">
        <div class="section-title mb-4 pb-2">
          <h2 class="title mb-4">Key Features</h2>
          <div class="text-light-dark mb-0 para-desc">
            <slot>
              <p>
                The central clarification for merging
                <span class="line text-primary fw-bold"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Artificial intelligence">AI</span>
                with IoT is, while
                IoT devices adequately gather all the data and moving it to ordinarily cloud or whatever other space
                where data can be amassed through the web. </p>
              <p>AI, which is considered as the frontal cortex of A IoT is
                what truly helps in unique and reenacting the machines to act or respond.</p>
            </slot>
          </div>
        </div>
      </div><!--end col-->
    </div><!--end row-->
    <div class="row align-items-center">
      <KeyFeatureCard v-for="item in features"
                      :alt="item.alt"
                      :title="item.title"
                      :icon="item.icon"
                      :text="item.text"
                      :key="item.title|slug"
      ></KeyFeatureCard>
    </div><!--end row-->
  </div>
</template>

<script>
import KeyFeatureCard from "@/components/Blocks/KeyFeatureCard";

export default {
  props: {
    features: {
      type: Array,
      required: true
    }
  },
  name: "KeyFeatures",
  components: {KeyFeatureCard}
}
</script>

<style scoped>

</style>
