<template>
  <div class="container py-5">
    <div class="row pt-5">
      <div class="col-12">
        <div class="section-title mb-4 pb-2">
          <h2 class="title mb-4">Key Features</h2>
          <div class="text-light-dark mb-0 para-desc">
            <slot></slot>
          </div>
        </div>
      </div><!--end col-->
    </div><!--end row-->
    <div class="row align-items-center">
      <KeyFeatureCard v-for="item in features"
                      :block="block"
                      :alt="item.title"
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
    },
    block: {
      type: Number,
      default: 4
    }
  },
  name: "KeyFeatures",
  components: {KeyFeatureCard}
}
</script>

<style scoped>

</style>
