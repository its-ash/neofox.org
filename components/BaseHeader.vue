<template>
  <header id="top-nav" class="top-nav default-scroll sticky bg-white">
    <div class="container align-items-center">
      <!-- Logo container-->
      <NuxtLink class="logo" :to="{name:'index'}">
        <img src="/img/logo.png" height="30" class="logo-light-mode" alt="Neofox">
        <img src="/img/logo.png" height="210" class="logo-dark-mode" alt="Neofox">
      </NuxtLink>
      <div class="float-end">
        <NuxtLink :to="{name:'contact'}" class="d-block text-primary pt-4 fw-bold line">Contact</NuxtLink>
      </div><!--end login button-->
      <!-- End Logo container-->
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>
      <div id="navigation">
        <!-- Navigation Menu-->
        <ul class="navigation-menu">
          <li>
            <NuxtLink :to="{name:'index'}" class="sub-menu-item fw-bold">Home</NuxtLink>
          </li>
          <li class="has-submenu parent-parent-menu-item">
            <NuxtLink :to="{ name: 'index',hash:'#services'}" class="fw-bold">Services</NuxtLink>
            <span class="menu-arrow"></span>
            <ul class="submenu">
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'internet-of-things'}" class="fw-bold"> Iot Solution</NuxtLink>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <NuxtLink :to="{name: 'internet-of-things-artificial-intelligent'}" class="sub-menu-item">AI for IoT
                      Devices
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{name: 'internet-of-things-m2m-platforms'}" class="sub-menu-item">M2M platforms
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{name: 'internet-of-things-connectivity'}" class="sub-menu-item">Connectivity
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{name: 'internet-of-things-cloud-computing'}" class="sub-menu-item">Cloud computing
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{name: 'internet-of-things-data-management'}" class="sub-menu-item">Data management
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{name: 'internet-of-things-app-development'}" class="sub-menu-item">Application
                      development
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{name: 'internet-of-things-device-management'}" class="sub-menu-item">Device
                      management
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'data-science'}" class="fw-bold"> Data Science</NuxtLink>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li><a href="" class="sub-menu-item">Predictive Analytics</a></li>
                  <li><a href="" class="sub-menu-item">Statistical Modeling</a></li>
                  <li><a href="" class="sub-menu-item">Machine Learning</a></li>
                  <li><a href="" class="sub-menu-item">Data Engineering</a></li>
                  <li><a href="" class="sub-menu-item">Decision Optimization</a></li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'web-development'}" class="fw-bold"> Web Solution</NuxtLink>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li><a href="" class="sub-menu-item">Full-Stack Web Development</a></li>
                  <li><a href="" class="sub-menu-item">Ecommerce Applications</a></li>
                  <li><a href="" class="sub-menu-item">Custom Web Applications</a></li>
                  <li><a href="" class="sub-menu-item">Content Management Systems</a></li>
                  <li><a href="" class="sub-menu-item">Web Support and Maintenance</a></li>
                  <li><a href="" class="sub-menu-item">QA & Testing</a></li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'mobile-development'}" class="fw-bold"> Mobile Solution</NuxtLink>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li><a href="" class="sub-menu-item"></a></li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'digital-marketing'}" class="fw-bold"> Digital Marketing</NuxtLink>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li><a href="" class="sub-menu-item">Search Engine Optimization</a></li>
                  <li><a href="" class="sub-menu-item">Social Media Marketing</a></li>
                  <li><a href="" class="sub-menu-item">Content Marketing</a></li>
                  <li><a href="" class="sub-menu-item">Email Marketing</a></li>
                  <li><a href="" class="sub-menu-item">Mobile Marketing</a></li>
                  <li><a href="" class="sub-menu-item">Marketing Analytics</a></li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'design-studio'}" class="fw-bold"> Design Studio</NuxtLink>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li><a href="" class="sub-menu-item">Product design</a></li>
                  <li><a href="" class="sub-menu-item">Branding design</a></li>
                  <li><a href="" class="sub-menu-item">Website design</a></li>
                  <li><a href="" class="sub-menu-item">App design</a></li>
                  <li><a href="" class="sub-menu-item">Print design</a></li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'cloud-server'}" class="fw-bold">Cloud Solution</NuxtLink>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li><a href="" class="sub-menu-item">Domain/Hosting/CDN</a></li>
                  <li><a href="" class="sub-menu-item">Server/Load balancer</a></li>
                  <li><a href="" class="sub-menu-item">Microservices</a></li>
                  <li><a href="" class="sub-menu-item">Database</a></li>
                  <li><a href="" class="sub-menu-item">Security (DDoS)</a></li>
                  <li><a href="" class="sub-menu-item">Business Email</a></li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <NuxtLink :to="{name:'dev-ops'}" class="fw-bold"> Dev/Ops</NuxtLink>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li><a href="" class="sub-menu-item">Source Control</a></li>
                  <li><a href="" class="sub-menu-item">Configuration Management</a></li>
                  <li><a href="" class="sub-menu-item">Continuous Integration</a></li>
                  <li><a href="" class="sub-menu-item">Automated Testing</a></li>
                  <li><a href="" class="sub-menu-item">Continuous Delivery</a></li>
                  <li><a href="" class="sub-menu-item">Infrastructure as Code</a></li>
                  <li><a href="" class="sub-menu-item">Monitoring and Logging</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-submenu parent-menu-item">
            <a href="" class="fw-bold">Docs</a>
            <span class="menu-arrow"></span>
            <ul class="submenu">
              <li><a href="" class="sub-menu-item">Documentation</a></li>
              <li><a href="" class="sub-menu-item">Changelog</a></li>
              <li><a href="" class="sub-menu-item">Components</a></li>
              <li><a href="" class="sub-menu-item">Widget</a></li>
            </ul>
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
  name: "BaseHeader"
}
</script>

<style scoped>

</style>
