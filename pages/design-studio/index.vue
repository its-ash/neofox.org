<template>
  <section class="position-relative bg-white py-5">
    <section class="d-table w-100 design-studio-hero py-5">
      <div class="w-100 p-0 m-0">
        <div class="row position-relative align-items-center p-0 m-0">
          <div class="title-heading studio-home">
            <h1 class="font-10 line-8 text-white">Present Your Work With <span class="text-warning">NEOFOX</span> Studio
            </h1>

            <div class="text-right">
              <p class="para-desc text-white roboto-slab text-uppercase">Launch your campaign and benefit from our
                expertise on designing and
                managing conversion centered bootstrap v5 html page.</p>
            </div>
          </div>
        </div><!--end row-->
      </div><!--end container-->
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h2 class=" mb-4">Work Process</h2>
              <p class=" para-desc mx-auto mb-0">Start working with <span class="text-primary fw-bold">Landrick</span>
                that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->

        <div class="row">
          <div class="col-md-4 mt-4 pt-2">
            <div class="card work-process border-0 rounded shadow">
              <div class="card-body">
                <h4 class="title">Discuss The Project</h4>
                <p class="text-muted para">The most well-known dummy text is the 'Lorem Ipsum', which is said to have
                  originated in the 16th century.</p>
                <ul class="list-unstyled d-flex justify-content-between mb-0 mt-2">
                  <li class=" h1 mb-0 fw-bold text-gray">Step 01.</li>
                </ul>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-4 mt-4 pt-2">
            <div class="card work-process border-0 rounded shadow">
              <div class="card-body">
                <h4 class="title">Develop & Elaborate</h4>
                <p class="text-muted para">The most well-known dummy text is the 'Lorem Ipsum', which is said to have
                  originated in the 16th century.</p>
                <ul class="list-unstyled d-flex justify-content-between mb-0 mt-2">
                  <li class="h1 mb-0 fw-bold text-gray">Step 02.</li>
                </ul>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-4 mt-4 pt-2">
            <div class="card work-process border-0 rounded shadow">
              <div class="card-body">
                <h4 class="title">Final Approvement</h4>
                <p class="text-muted para">The most well-known dummy text is the 'Lorem Ipsum', which is said to have
                  originated in the 16th century.</p>
                <ul class="list-unstyled d-flex justify-content-between mb-0 mt-2">
                  <li class=" h1 mb-0 fw-bold text-gray">Step 03.</li>
                </ul>
              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div>
    </section>
    <section>
      <div class="container mt-100 pt-50">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Our Latest Projects</h4>
              <p class="text-muted para-desc mx-auto mb-0">Start working with <span class="text-primary fw-bold">Landrick</span>
                that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->

        <div class="row d-flex align-items-baseline">
          <div class="col-md-4 col-12 m-0 p-0 position-relative design-images" v-for="(i,_) in 7" :key="i">
            <picture @click="showImage($event,i)">
              <source :srcset="`img/mockup/${i}.webp`" type="image/webp">
              <source :srcset="`img/mockup/${i}.jpg`" type="image/jpeg">
              <img :src="`img/mockup/${i}.jpg`" alt="Alt Text!" class="img-fluid">
            </picture>
            <div class="position-absolute front-10 top-0 design-images-detail">
              <h4 class="display-2 t-shadow pt-5 px-3 line-5 text-white-50">Lorem {{ i }}</h4>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section>
    <div v-if="!hideImage" class="img-viewer text-center pt-5">
      <div class="d-flex justify-content-center align-items-center pt-5">
        <img style="height: 85vmin" class="rounded" :src="selectedImage" alt="">
        <div @click="closeFullscreen()"
             class="d-md-block d-none m-4 position-absolute pt-5 top-0 end-0 fw-bold text-primary display-2 close-button">
          ×
        </div>
        <div @click="closeFullscreen()"
             class="d-md-none d-block  btn btn-primary m-4 position-absolute bottom-0 mb-5 fw-bold text-primary w-75 display-4 close-button">
          close
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "design-studio",
  data: () => ({
    selectedImage: undefined,
    hideImage: true
  }),
  methods: {
    showImage(el, name) {
      this.openFullscreen();
      this.selectedImage = `img/mockup/${name}-large.webp`;
      this.hideImage = false;
    },

    openFullscreen: function () {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }

    },
    closeFullscreen: function () {
      this.hideImage = true;
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

    }
  }
}
</script>

<style lang="scss">
@keyframes simple-anim {
  0% {
  }
  100% {

    filter: hue-rotate(180deg);
  }
}

.text-background {
  background: url("/img/design-studio/hero-3.jpg") no-repeat;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: simple-anim ease-in-out 4s infinite alternate-reverse;
}

@keyframes animate-background {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {

    filter: hue-rotate(180deg);
  }
}


.img-viewer {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100000;
  top: 0;
  border: 0;
  right: 0;
  left: 0;
  background-color: #000;
}

.design-studio-hero {
  height: 100vmin;
  background: url('/img/design-studio/hero-3.jpg') center;
  background-size: cover;
  animation: animate-background ease-in-out 4s infinite alternate-reverse;
}


.design-images {
  img {
    object-fit: cover;
    transition: all ease-in-out 200ms;
    min-height: 400px;
  }

  &:hover {
    img {
      filter: grayscale(0) brightness(110%);
    }

    .design-images-detail {
      transition: all ease-in-out 200ms;
      display: none;
    }
  }
}

.close-button {
  &:hover {
    transition: all ease-in-out 300ms;
    cursor: pointer;
    transform: scale(1.3);
  }
}

.card {
  background-color: rgba(255, 255, 255, 0.2);
}

</style>
