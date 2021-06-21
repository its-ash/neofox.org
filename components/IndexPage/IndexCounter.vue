<template>
  <section class="bg-white d-table w-100 position-relative py-5">
    <div class="container py-3">
      <h2 class="text-center h1">Lorem ipsum dolor sit amet</h2>
      <p class="text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iusto magnam
        maxime modi
        veniam! Aspernatur cumque debitis quisquam reprehenderit soluta totam ullam voluptates? Est exercitationem harum
        itaque nisi quos temporibus!</p>

    </div>
    <div class="row p-0 m-0 bg-white py-5 my-5 text-center">
      <div class="col-md-3 col-6 position-relative row p-0 m-0">
        <div class="col-12 position-absolute font-size h1 line-2 pb-4">
          <span v-for="digit in projects.toString().split('')" class="anim-text rajdhani">{{ digit }}</span>
        </div>
        <small class="col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1">optimizing</small>
        <h3 class="telex col-12 p-0 m-0 line-1 pt-3">PROJECTS</h3>
      </div>
      <div class="col-md-3 col-6 position-relative row p-0 m-0">
        <div class="col-12 position-absolute font-size h1 line-2 pb-4">
          <span v-for="digit in projects.toString().split('')" class="anim-text rajdhani">{{ digit }}</span>
        </div>
        <small class="col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1">optimizing</small>
        <h3 class="telex col-12 p-0 m-0 line-1 pt-3">PROJECTS</h3>
      </div>
      <div class="col-md-3 col-6 position-relative row p-0 m-0 mt-md-0 mt-5">
        <div class="col-12 position-absolute font-size h1 line-2 pb-4">
          <span v-for="digit in projects.toString().split('')" class="anim-text rajdhani">{{ digit }}</span>
        </div>
        <small class="col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1">optimizing</small>
        <h3 class="telex col-12 p-0 m-0 line-1 pt-3">PROJECTS</h3>
      </div>
      <div class="col-md-3 col-6 position-relative row p-0 m-0 mt-md-0 mt-5">
        <div class="col-12 position-absolute font-size h1 line-2 pb-4">
          <span v-for="digit in projects.toString().split('')" class="anim-text rajdhani">{{ digit }}</span>
        </div>
        <small class="col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1">optimizing</small>
        <h3 class="telex col-12 p-0 m-0 line-1 pt-3">PROJECTS</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexCounter",
  data: () => ({
    projects: 130,
    totalProjects: 300,
    projectTimeInterval: undefined,
    clients: 0,
    totalClients: 100,
    clientsTimeInterval: undefined,
  }),
  mounted() {
    this.projectTimeInterval = setInterval(() => {
      this.projects += 1;
      if (this.projects === this.totalProjects) clearInterval(this.projectTimeInterval)
    }, 2000)
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/_variables.scss";

.font-size {
  font-size: calc(100px + 2vw) !important;
}

.projects {
  color: $warning !important;
}

.clients {
  color: lighten($primary, 15%) !important;
}

.anim-text {
  animation-duration: 0ms !important;
}
</style>
