<template>
  <div class="col-lg-3 col-md-6 mt-4 pt-2"
       :class="{'col-lg-4 col-md-6 mt-4 pt-2':block === 3,}"
  >
    <div class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
      <div class="icons text-primary text-center">
        <img src="/svg/icons/Delete%20User.svg" class="d-block rounded h3 mb-0 w-25" alt="">
      </div>
      <div class="card-body p-0 mt-4">
        <h3 class="title h5 text-dark" v-if="title">{{ title }}</h3>
        <p class="text-muted mt-2" v-if="text">{{ text }}</p>
      </div>
    </div>
  </div><!--end col-->
</template>

<script>
export default {
  props: ['icon', 'alt', 'title', 'text', 'block'],
  name: "KeyFeatureCard"
}
</script>

<style scoped>

</style>
