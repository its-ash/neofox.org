<template>
  <header id="top-nav" class="top-nav default-scroll sticky bg-white">
    <div class="container align-items-center">
      <!-- Logo container-->
      <NuxtLink class="logo" :to="{name:'index'}">
        <img src="/img/logo.png" height="30" class="logo-light-mode" alt="Neofox">
        <img src="/img/logo.png" height="210" class="logo-dark-mode" alt="Neofox">
      </NuxtLink>
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a class="navbar-toggle" id="isToggle" @click="toggleMenu">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>
      <div class="float-end pt-3">
        <NuxtLink :to="{name:'contact'}" class="btn btn-primary d-block text-primaryfw-bold line">Contact</NuxtLink>
      </div><!--end login button-->
      <!-- End Logo container-->

      <div ref="navigation" id="navigation">
        <!-- Navigation Menu-->
        <ul class="navigation-menu">
          <li>
            <NuxtLink :to="{name:'index'}" class="sub-menu-item fw-bold">Home</NuxtLink>
          </li>
          <li class="has-submenu parent-parent-menu-item">
            <NuxtLink v-on:click.native="openThis('iot')" :to="{ name: 'index',hash:'#services'}" class="fw-bold">
              Solution
            </NuxtLink>
            <span class="menu-arrow"></span>
            <ul class="submenu" ref="iot">
              <li class="has-submenu parent-menu-item">
                <!--                v-on:click.native="openThis('iot-ai')"-->
                <NuxtLink :to="{name:'internet-of-things'}" class="fw-bold">
                  Iot Solution
                </NuxtLink>
                <!--                <span class="submenu-arrow"></span>-->
                <!--                <ul class="submenu" ref="iot-ai">-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'internet-of-things-artificial-intelligent'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      AI for IoT Devices-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'internet-of-things-m2m-platforms'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      M2M platforms-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'internet-of-things-connectivity'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Connectivity-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'internet-of-things-cloud-computing'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Cloud computing-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'internet-of-things-data-management'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Data management-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'internet-of-things-app-development'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Application development-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'internet-of-things-end-to-end'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      End to End Solution-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                </ul>-->
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'data-science'}" class="fw-bold"> Data Science</NuxtLink>
                <!--                <span class="submenu-arrow"></span>-->
                <!--                <ul class="submenu">-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'data-science-predictive-analytics'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Predictive Analytics-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'data-science-statistical-modeling'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Statistical Modeling-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->

                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'data-science-machine-learning'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Machine Learning-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->

                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'data-science-data-engineering'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Data Engineering-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->

                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'data-science-decision-optimization'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Decision Optimization-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                </ul>-->
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name: 'web-development-full-stack-web-development'}" class="fw-bold"> Web Solution
                </NuxtLink>
                <!--                <span class="submenu-arrow"></span>-->
                <!--                <ul class="submenu">-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'web-development-full-stack-web-development'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Full-Stack Web Development-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'web-development-ecommerce-applications'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Ecommerce Applications-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'web-development-custom-web-applications'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Custom Web Applications-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'web-development-content-management-systems'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Content Management Systems-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'web-development-web-support-and-maintenance'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      Web Support and Maintenance-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                  <li>-->
                <!--                    <NuxtLink-->
                <!--                      v-on:click.native="toggleMenu"-->
                <!--                      :to="{name: 'web-development-qa-and-testing'}"-->
                <!--                      class="sub-menu-item">-->
                <!--                      QA & Testing-->
                <!--                    </NuxtLink>-->
                <!--                  </li>-->
                <!--                </ul>-->
              </li>
              <!--              <li class="has-submenu parent-menu-item">-->
              <!--                <NuxtLink :to="{name:'mobile-development'}" class="fw-bold"> Mobile Solution</NuxtLink>-->
              <!--                <span class="submenu-arrow"></span>-->
              <!--                <ul class="submenu">-->
              <!--                  <NuxtLink-->
              <!--                    v-on:click.native="toggleMenu"-->
              <!--                    :to="{name: 'mobile-development-flutter'}"-->
              <!--                    class="sub-menu-item">-->
              <!--                    Flutter-->
              <!--                  </NuxtLink>-->
              <!--                  <NuxtLink-->
              <!--                    v-on:click.native="toggleMenu"-->
              <!--                    :to="{name: 'mobile-development-react-native'}"-->
              <!--                    class="sub-menu-item">-->
              <!--                    React Native-->
              <!--                  </NuxtLink>-->
              <!--                </ul>-->
              <!--              </li>-->
              <!--              <li class="has-submenu parent-menu-item">-->
              <!--                <NuxtLink :to="{name:'cloud-server'}" class="fw-bold">Cloud Solution</NuxtLink>-->
              <!--                <span class="submenu-arrow"></span>-->
              <!--                <ul class="submenu">-->
              <!--                  <NuxtLink :to="{name:'cloud-server-saas'}" class="fw-bold">SaaS</NuxtLink>-->
              <!--                  <NuxtLink :to="{name:'cloud-server-iaas'}" class="fw-bold">IaaS</NuxtLink>-->
              <!--                  <NuxtLink :to="{name:'cloud-server-paas'}" class="fw-bold">PaaS</NuxtLink>-->
              <!--                  &lt;!&ndash;                  <li><a href="" class="sub-menu-item">Domain/Hosting/CDN</a></li>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <li><a href="" class="sub-menu-item">Domain/Hosting/CDN</a></li>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <li><a href="" class="sub-menu-item">Domain/Hosting/CDN</a></li>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <li><a href="" class="sub-menu-item">Domain/Hosting/CDN</a></li>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <li><a href="" class="sub-menu-item">Server/Load balancer</a></li>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <li><a href="" class="sub-menu-item">Microservices</a></li>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <li><a href="" class="sub-menu-item">Database</a></li>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <li><a href="" class="sub-menu-item">Security (DDoS)</a></li>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <li><a href="" class="sub-menu-item">Business Email</a></li>&ndash;&gt;-->
              <!--                </ul>-->
              <!--              </li>-->
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'digital-marketing'}" class="fw-bold"> Digital Marketing</NuxtLink>
                <!--                <span class="submenu-arrow"></span>-->
                <!--                <ul class="submenu">-->
                <!--                  <li><a href="" class="sub-menu-item">Search Engine Optimization</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Social Media Marketing</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Content Marketing</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Email Marketing</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Mobile Marketing</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Marketing Analytics</a></li>-->
                <!--                </ul>-->
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'design-studio'}" class="fw-bold"> Design Studio</NuxtLink>
                <!--                <span class="submenu-arrow"></span>-->
                <!--                <ul class="submenu">-->
                <!--                  <li><a href="" class="sub-menu-item">Product design</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Branding design</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Website design</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">App design</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Print design</a></li>-->
                <!--                </ul>-->
              </li>

              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'dev-ops'}" class="fw-bold">Dev/Ops</NuxtLink>
                <!--                <span class="submenu-arrow"></span>-->
                <!--                <ul class="submenu">-->
                <!--                  <li><a href="" class="sub-menu-item">Gitlab</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Configuration Management</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Continuous Integration</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Automated Testing</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Continuous Delivery</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Infrastructure as Code</a></li>-->
                <!--                  <li><a href="" class="sub-menu-item">Monitoring and Logging</a></li>-->
                <!--                </ul>-->
              </li>
            </ul>
          </li>
          <!--          <li class="has-submenu parent-menu-item">-->
          <!--            <a href="" class="fw-bold">Docs</a>-->
          <!--            <span class="menu-arrow"></span>-->
          <!--            <ul class="submenu">-->
          <!--              <li><a href="" class="sub-menu-item">Documentation</a></li>-->
          <!--              <li><a href="" class="sub-menu-item">Changelog</a></li>-->
          <!--              <li><a href="" class="sub-menu-item">Components</a></li>-->
          <!--              <li><a href="" class="sub-menu-item">Widget</a></li>-->
          <!--            </ul>-->
          <!--          </li>-->
          <li>
            <NuxtLink :to="{name:'about'}" class="sub-menu-item fw-bold">About</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{name:'blog'}" class="sub-menu-item fw-bold">Blog</NuxtLink>
          </li>
        </ul><!--end navigation menu-->
      </div><!--end navigation-->
    </div><!--end container-->
  </header>
</template>

<script>
export default {
  name: "BaseHeader",
  methods: {
    toggleMenu() {
      this.$refs.navigation.classList.toggle('d-block')
    },
    openThis(name) {
      this.$refs[name].classList.toggle('open');
    }
  },
  watch: {
    '$route.path'(path) {
      this.$refs.navigation.classList.remove('d-block')
    }
  }
}
</script>

<style scoped>

</style>
