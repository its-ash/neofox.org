<template>
  <section class="d-table w-100 position-relative" id="services">
    <div class="container py-5">
      <h2 class="text-center h1">Lorem ipsum dolor sit amet</h2>
      <p class="text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iusto magnam
        maxime modi
        veniam! Aspernatur cumque debitis quisquam reprehenderit soluta totam ullam voluptates? Est exercitationem harum
        itaque nisi quos temporibus!</p>
    </div>
    <div class="row p-0 m-0">
      <NuxtLink :to="{name:'data-science'}"
                class="col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark">
        <div class="position-absolute h-100">
          <picture>
            <source srcset="/img/dataScience.webp" type="image/webp">
            <source srcset="/img/dataScience.jpg" type="image/jpeg">
            <img height="388" width="600" src="/img/dataScience.jpg" alt="data-science">
          </picture>

        </div>
        <div class="row p-4 position-relative">
          <div class="col-12 py-3">
            <div class="position-absolute text-gray rajdhani t-shadow display-1 line-2">
              <span class="anim-text zero">0</span><span class="anim-text">1</span>
            </div>
            <small class="position-absolute explore-feature">EXPLORE THE FEATURE</small>
          </div>
          <div class="col-12 py-3 display-3 line-9 h5 data-science">
            Data <br> Science <br> Services
          </div>
          <div class="col-12">
            <small class="display-4 small-2 line">know more</small>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="{name: 'internet-of-things'}"
                class="col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark">
        <div class="position-absolute h-100">
          <picture>
            <source srcset="/img/iot.webp" type="image/webp">
            <source srcset="/img/iot.jpg" type="image/jpeg">
            <img height="370" width="600" src="/img/iot.jpg" alt="iot">
          </picture>
        </div>
        <div class="row p-4 position-relative">
          <div class="col-12 py-3">
            <div class="position-absolute text-gray rajdhani t-shadow display-1 line-2">
              <span class="anim-text zero">0</span><span class="anim-text">2</span>
            </div>
            <small class="position-absolute explore-feature">EXPLORE THE FEATURE</small>
          </div>
          <div class="col-12 py-3 display-3 line-9 h4 iot">
            Internet <br> Of <br> Things
          </div>
          <div class="col-12">
            <small class="display-4 small-2 line">know more</small>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="{name: 'web-development'}"
                class="col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark">
        <div class="position-absolute h-100">
          <picture>
            <source srcset="/img/iot.webp" type="image/webp">
            <source srcset="/img/iot.jpg" type="image/jpeg">
            <img height="370" width="600" src="/img/iot.jpg" alt="web-development">
          </picture>
        </div>
        <div class="row p-4 position-relative">
          <div class="col-12 py-3">
            <div class="position-absolute text-gray rajdhani t-shadow display-1 line-2">
              <span class="anim-text zero">0</span><span class="anim-text">3</span>
            </div>
            <small class="position-absolute explore-feature">EXPLORE THE FEATURE</small>
          </div>
          <div class="col-12 py-3 display-3 line-9 h4 web-app">
            Web <br> App <br> Design
          </div>
          <div class="col-12">
            <small class="display-4 small-2 line">know more</small>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="{name: 'mobile-development'}"
                class="col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark">
        <div class="position-absolute h-100">
          <picture>
            <source srcset="/img/mobile.jpg.webp" type="image/webp">
            <source srcset="/img/mobile.jpg" type="image/jpeg">
            <img height="381" width="600" src="/img/mobile.jpg" alt="mobile-development">
          </picture>
        </div>
        <div class="row p-4 position-relative">
          <div class="col-12 py-3">
            <div class="position-absolute text-gray rajdhani t-shadow display-1 line-2">
              <span class="anim-text zero">0</span><span class="anim-text">4</span>
            </div>
            <small class="position-absolute explore-feature">EXPLORE THE FEATURE</small>
          </div>
          <div class="col-12 py-3 display-3 line-9 h4 mobile-app">
            Mobile<br>App<br>Develop
          </div>
          <div class="col-12">
            <small class="display-4 small-2 line">know more</small>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="{name: 'digital-marketing'}"
                class="col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark">
        <div class="position-absolute h-100">
          <picture>
            <source srcset="/img/digital-market.jpg.webp" type="image/webp">
            <source srcset="/img/digital-market.jpg" type="image/jpeg">
            <img height="400" width="600" src="/img/digital-market.jpg" alt="digital-marketing">
          </picture>
        </div>
        <div class="row p-4 position-relative">
          <div class="col-12 py-3">
            <div class="position-absolute text-gray rajdhani t-shadow display-1 line-2">
              <span class="anim-text zero">0</span><span class="anim-text">5</span>
            </div>
            <small class="position-absolute explore-feature">EXPLORE THE FEATURE</small>
          </div>
          <div class="col-12 py-3 display-3 line-10 h4 digital-market">
            Digital <br> Market <br> Agency
          </div>
          <div class="col-12">
            <small class="display-4 small-2 line">know more</small>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="{name: 'design-studio'}"
                class="col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark">
        <div class="position-absolute h-100">
          <picture>
            <source srcset="/img/graphic-design.jpg.webp" type="image/webp">
            <source srcset="/img/graphic-design.jpg" type="image/jpeg">
            <img height="384" width="600" src="/img/graphic-design.jpg" alt="design-studio">
          </picture>
        </div>
        <NuxtLink :to="{name:'design-studio'}" class="row p-4 position-relative text-dark">
          <div class="col-12 py-3">
            <div class="position-absolute text-gray rajdhani t-shadow display-1 line-2">
              <span class="anim-text zero">0</span><span class="anim-text">6</span>
            </div>
            <small class="position-absolute explore-feature">EXPLORE THE FEATURE</small>
          </div>
          <div class="col-12 py-3 display-3 line-10 h4 graphic-design">
            Graphic <br> Design <br> Studio
          </div>
          <div class="col-12">
            <small class="display-4 small-2 line">know more</small>
          </div>
        </NuxtLink>
      </NuxtLink>
      <NuxtLink :to="{name: 'cloud-server'}"
                class="col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark">
        <div class="position-absolute h-100">
          <picture>
            <source srcset="/img/cloud-server.jpg.webp" type="image/webp">
            <source srcset="/img/cloud-server.jpg" type="image/jpeg">
            <img height="400" width="600" src="/img/cloud-server.jpg" alt="cloud-server">
          </picture>
        </div>
        <div class="row p-4 position-relative">
          <div class="col-12 py-3">
            <div class="position-absolute text-gray rajdhani t-shadow display-1 line-2">
              <span class="anim-text zero">0</span><span class="anim-text">7</span>
            </div>
            <small class="position-absolute explore-feature">EXPLORE THE FEATURE</small>
          </div>
          <div class="col-12 py-3 display-3 line-10 h4 cloud-server">
            Cloud <br> Server <br>Solution
          </div>
          <div class="col-12">
            <small class="display-4 small-2 line">know more</small>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="{name: 'dev-ops'}"
                class="col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark">
        <div class="position-absolute h-100">
          <picture>
            <source srcset="/img/dev-ops.jpg.webp" type="image/webp">
            <source srcset="/img/dev-ops.jpg" type="image/jpeg">
            <img height="404" width="600" src="/img/dev-ops.jpg" alt="dev-ops">
          </picture>
        </div>
        <div class="row p-4 position-relative">
          <div class="col-12 py-3">
            <div class="position-absolute text-gray rajdhani t-shadow display-1 line-2">
              <span class="anim-text zero">0</span><span class="anim-text">8</span>
            </div>
            <small class="position-absolute explore-feature">EXPLORE THE FEATURE</small>
          </div>
          <div class="col-12 py-3 display-3 line-10 h4 dev-ops">
            DEV <br> OPS <br> Solution
          </div>
          <div class="col-12">
            <small class="display-4 small-2 line">know more</small>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexService"
}
</script>


<style scoped lang="scss">
@import "assets/scss/variables";


.display-3 {
  font-size: 2.4rem !important;
}

section {
  background-color: white;
}

.hover-background {
  img {
    transition: all .5s cubic-bezier(.31, .29, .05, .96);
    object-fit: cover;
    width: 0;
    height: 100%;
  }

  &:hover {
    .display-3 {
      text-shadow: rgba(17, 12, 46, 0.5) 0 48px 100px 0 !important;
      width: auto;
    }

    color: $gray-300 !important;

    .data-science {
      color: $warning;
    }

    .iot {
      color: #41ead4;
    }

    .mobile-app {
      color: #adf7b6;
    }

    .web-app {
      color: #ff99c8;
    }

    .digital-market {
      color: #00d9f5;
    }

    .graphic-design {
      color: #ff0099;
    }

    .cloud-server {
      color: #49ffc5;
    }

    .dev-ops {
      color: #bfff49;
    }

    .explore-feature {
      left: -0.8rem !important;
    }

    .zero {
      display: none !important;
    }

    .rajdhani {
      transition: all 50ms ease-in;
      font-size: 12em !important;
      text-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
      right: 0 !important;
    }

    small {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px;
      color: $info !important;
      font-weight: bold;
    }

    img {
      width: 100%;
    }
  }
}

@media only screen and(max-width: 800px) {
  .hover-background {
    //padding: 20px !important;

    .display-3 {
      text-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    }

    color: $gray-300 !important;

    .data-science {
      color: $warning;
    }

    .iot {
      color: #41ead4;
    }

    .mobile-app {
      color: #adf7b6;
    }

    .web-app {
      color: #ff99c8;
    }

    .digital-market {
      color: #00d9f5;
    }

    .graphic-design {
      color: #ff0099;
    }

    .cloud-server {
      color: #49ffc5;
    }

    .dev-ops {
      color: #bfff49;
    }

    .explore-feature {
      left: -0.8rem !important;
    }


    .zero {
      display: none !important;
    }

    .rajdhani {
      display: none !important;
      top: 0 !important;
      transition: all 50ms ease-in;
      font-size: 12em !important;
      text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    small {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px;
      color: $info !important;
      font-weight: bold;
    }

    img {
      width: 100%;
    }
  }
}
</style>
