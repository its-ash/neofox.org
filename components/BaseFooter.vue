<template>
  <section id="footer">
    <footer>
      <div class="container pt-5 mt-5 text-success">
        <div class="row py-5">
          <div class="col-lg-4 col-md-6 col-md-4 col-10 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="" class="logo-footer">
              <img src="/img/logo.png " class="w-100 h-auto" width="964" height="210" alt="Neofox Logo">
            </a>
            <p class="mt-4">
              We merge creative minds and innovation to help brands grow in an age of digital
              transformation.</p>
          </div><!--end col-->
          <div class="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h3 class="footer-head h3 text-secondary">Company</h3>
            <ul class="list-unstyled footer-list mt-4 rajdhani">
              <li class="py-1">
                <NuxtLink class="text-gray display-4 line" :to="{name: 'about'}">About us</NuxtLink>
              </li>
              <li class="py-1">
                <NuxtLink class="text-gray display-4 line" :to="{ name: 'index',hash:'#services'}">Services</NuxtLink>
              </li>
              <li class="py-1">
                <NuxtLink class="text-gray display-4 line" :to="{name: 'internship'}">Internship</NuxtLink>
              </li>
              <li class="py-1">
                <NuxtLink class="text-gray display-4 line" :to="{name: 'projects'}">Project</NuxtLink>
              </li>
              <li class="py-1">
                <NuxtLink class="text-gray display-4 line" :to="{name: 'blog'}">Blog</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h3 class="footer-head h3 text-warning">Links</h3>
            <ul class="list-unstyled footer-list mt-4 rajdhani">
              <li class="py-1">
                <NuxtLink class="text-gray display-4 line" :to="{name: 'terms-conditions'}">Terms & Condition</NuxtLink>
              </li>
              <li class="py-1">
                <NuxtLink class="text-gray display-4 line" :to="{name: 'terms-policy'}">Private Policy</NuxtLink>
              </li>
              <li class="py-1">
                <NuxtLink class="text-gray display-4 line" :to="{name: 'terms-cookies'}">Cookies Policy</NuxtLink>
              </li>
            </ul>
          </div>
        </div><!--end row-->
        <div class="row pb-5 d-flex justify-content-center">
          <div class="col-md-4 col-10">
            <h3 class="footer-head h6 text-gray">Follow Us</h3>
            <div class="row social-icon">
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+linkedinIcon.hex}"
                   v-html="linkedinIcon.svg"></div>
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+instagramIcon.hex}"
                   v-html="instagramIcon.svg"></div>
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+twitterIcon.hex}"
                   v-html="twitterIcon.svg"></div>
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+facebookIcon.hex}"
                   v-html="facebookIcon.svg"></div>
            </div>
          </div>
          <div class="col-md-4 col-10">
            <h3 class="footer-head h6 text-gray">Know More</h3>
            <div class="row social-icon">
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+dribbleIcon.hex}"
                   v-html="dribbleIcon.svg"></div>
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+behanceIcon.hex}"
                   v-html="behanceIcon.svg"></div>
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+figmaIcon.hex}"
                   v-html="figmaIcon.svg"></div>
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+pinterestIcon.hex}"
                   v-html="pinterestIcon.svg"></div>
            </div>
          </div>
          <div class="col-md-4 col-10">
            <h3 class="footer-head h6 text-gray">Also On</h3>
            <div class="row social-icon">
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#fefefe'}"
                   v-html="githubIcon.svg"></div>
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+fiverrIcon.hex}"
                   v-html="fiverrIcon.svg"></div>
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+freelancerIcon.hex}"
                   v-html="freelancerIcon.svg"></div>
              <div class="col-lg-2 col-md-3 col-3 p-lg-3 p-md-3 p-4" :style="{fill:'#'+upworkIcon.hex}"
                   v-html="upworkIcon.svg"></div>
            </div>
          </div>
        </div><!--end col-->
      </div><!--end container-->
    </footer><!--end footer-->
  </section>
</template>

<script>

const facebookIcon = require('simple-icons/icons/facebook');
const dribbleIcon = require('simple-icons/icons/dribbble');
const behanceIcon = require('simple-icons/icons/behance');
const pinterestIcon = require('simple-icons/icons/pinterest');
const githubIcon = require('simple-icons/icons/github');
const fiverrIcon = require('simple-icons/icons/fiverr');
const freelancerIcon = require('simple-icons/icons/freelancer');
const figmaIcon = require('simple-icons/icons/figma');
const instagramIcon = require('simple-icons/icons/instagram');
const linkedinIcon = require('simple-icons/icons/linkedin');
const twitterIcon = require('simple-icons/icons/twitter');
const upworkIcon = require('simple-icons/icons/upwork');
// const facebookIcon = require('simple-icons/icons/facebook');

export default {
  name: "BaseFooter",
  data: () => ({
    facebookIcon, dribbleIcon,
    behanceIcon, pinterestIcon,
    fiverrIcon, freelancerIcon,
    githubIcon, figmaIcon,
    linkedinIcon, instagramIcon,
    twitterIcon, upworkIcon
  }),
}
</script>

<style scoped lang="scss">
section {
  min-height: 100vh;
  background-image: url("/img/footer.jpg.webp");
  background-size: cover;

  footer {
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
  }
}

.social-icon {
  div {
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
      margin-top: -10px;
    }

    &:active {
      margin-top: -10px;
      transform: scale(1.2);
    }
  }
}
</style>
