<template>
  <div class="col-lg-3 col-md-6 mt-4 pt-2">
    <div class="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
      <div class="icons text-primary text-center">
        <img src="/svg/icons/Delete%20User.svg" class="d-block rounded h3 mb-0 w-25" alt="">
      </div>
      <div class="card-body p-0 mt-4">
        <a href="javascript:void(0)" class="title h5 text-dark">Modular</a>
        <p class="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
        <a href="javascript:void(0)" class="text-primary read-more">Read More <i
          class="uil uil-angle-right-b"></i></a>
        <i class="uil uil-layer-group text-primary full-img"></i>
      </div>
    </div>
  </div><!--end col-->
</template>

<script>
export default {
  props: ['icon', 'alt', 'title', 'text'],
  name: "KeyFeatureCard"
}
</script>

<style scoped>

</style>
