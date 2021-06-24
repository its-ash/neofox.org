<template>
  <section class="section pt-0">
    <div class="container mt-100 mt-60">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <div class="section-title mb-4 pb-2">
            <h4 class="title mb-4">
              <span class="text-primary">Landrick</span> App Showcase</h4>
            <p class="text-muted para-desc mb-0 mx-auto">Start working with <span
              class="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness,
              drive traffic, connect.</p>
          </div>
        </div><!--end col-->
      </div><!--end row-->

      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12 mt-4 pt-2 text-center">
          <ul class="nav nav-pills nav-justified flex-column flex-sm-row rounded" id="pills-tab" role="tablist">
            <li v-for="(button, index) in buttons" class="nav-item">
              <a class="nav-link rounded"
                 :class="{'active': index===0}"
                 :id="button+'_id' | slug"
                 data-bs-toggle="pill"
                 :href="'#'+ button | slug"
                 role="tab"
                 :aria-controls="button | slug"
                 aria-selected="false">
                <div class="text-center py-2">
                  <h3 class="mb-0 h5">{{ button }}</h3>
                </div>
              </a><!--end nav link-->
            </li><!--end nav item-->
          </ul><!--end nav pills-->
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-4 pt-2">
          <div class="tab-content" id="pills-tabContent">
            <div v-for="button in buttons"
                 class="tab-pane fade"
                 :id="button | slug"
                 role="tabpanel" :aria-labelledby="button+'_id' | slug">
              <div class="row align-items-center">
                <slot :name="button|slug"></slot>
              </div>    <!--end row-->
            </div><!--end teb pane-->
          </div><!--end tab content-->
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->
  </section>
</template>

<script>
export default {
  name: "ShowCase",
  props: ['buttons']
}
</script>

<style scoped>

</style>
