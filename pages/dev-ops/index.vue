<template>
  <section class="position-relative bg-light">
    <section class="h-100-center w-100 bg-white">
      <div class="container">
        <div class="title-heading text-center position-relative">
          <img src="/img/devops/dev-ops.svg" alt="DEV-OPS" class="w-100 pt-5">
          <h1 class="title-dark font-1 text-primary">
            <NuxtLink :to="{name: 'index'}">NEOFOX</NuxtLink>
            <NuxtLink :to="{name: 'dev-ops'}" class="text-success">DEV-OPS</NuxtLink>
          </h1>
        </div>
      </div><!--end col-->
    </section>
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>

    <div class="section py-5 container mt-5">
      <h2>
        <span class="line text-danger" data-bs-toggle="tooltip" data-bs-placement="top"
              title="Space, Computing, Ram">Speed up</span>
        your cloud tasks</h2>
      <p class="para-desc text-dark">Speed up your cloud tasks and jobs by limiting expenses, increment
        productivity, and accelerate the delivery of the board cycle with our DevOps counseling administrations.
        Convey applications at the speed of business with Neofox's extensive DevOps administrations.
      </p>
      <div class="row">
        <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
          <div class="card explore-feature border-0 rounded text-center bg-white">
            <div class="card-body">
              <div class="icon rounded-circle shadow-lg d-inline-block">
                <img src="/svg/tech/gitlab.svg" class="avatar avatar-md-sm" alt="NEOFOX GITLAB">
              </div>
              <div class="content mt-3">
                <h6 class="mb-0">
                  <NuxtLink :to="{name: 'dev-ops', hash:'#GITLAB'}" class="title text-dark">Gitlab</NuxtLink>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
          <div class="card explore-feature border-0 rounded text-center bg-white">
            <div class="card-body">
              <div class="icon rounded-circle shadow-lg d-inline-block">
                <img src="/svg/tech/juju.svg" class="avatar avatar-md-sm" alt="NEOFOX CONFIGURATION MANAGEMENT">
              </div>
              <div class="content mt-3">
                <h6 class="mb-0">
                  <NuxtLink :to="{name: 'dev-ops', hash: '#CONFIGURATION_MANAGEMENT'}" class="title text-dark">
                    Configuration Management
                  </NuxtLink>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
          <div class="card explore-feature border-0 rounded text-center bg-white">
            <div class="card-body">
              <div class="icon rounded-circle shadow-lg d-inline-block">
                <img src="/svg/tech/github-octocat.svg" class="avatar avatar-md-sm" alt="CONTINUOUS INTEGRATION">
              </div>
              <div class="content mt-3">
                <h6 class="mb-0">
                  <NuxtLink :to="{name: 'dev-ops'}" class="title text-dark">Continuous Integration</NuxtLink>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
          <div class="card explore-feature border-0 rounded text-center bg-white">
            <div class="card-body">
              <div class="icon rounded-circle shadow-lg d-inline-block">
                <img src="/svg/tech/cucumber.svg" class="avatar avatar-md-sm" alt="NEOFOX AUTOMATED TESTING">
              </div>
              <div class="content mt-3">
                <h6 class="mb-0">
                  <NuxtLink :to="{name: 'dev-ops', hash: '#AUTOMATED_TESTING'}" class="title text-dark">Automated
                    Testing
                  </NuxtLink>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
          <div class="card explore-feature border-0 rounded text-center bg-white">
            <div class="card-body">
              <div class="icon rounded-circle shadow-lg d-inline-block">
                <img src="/svg/tech/circleci.svg" class="avatar avatar-md-sm" alt="NEOFOX CONTINUOUS DELIVERY">
              </div>
              <div class="content mt-3">
                <h6 class="mb-0">
                  <NuxtLink :to="{name: 'dev-ops', hash: '#CONTINUOUS_DELIVERY'}" class="title text-dark">Continuous
                    Delivery
                  </NuxtLink>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
          <div class="card explore-feature border-0 rounded text-center bg-white">
            <div class="card-body">
              <div class="icon rounded-circle shadow-lg d-inline-block">
                <img src="/svg/tech/terraform-icon.svg" class="avatar avatar-md-sm" alt="NEOFOX INFRASTRUCTURE AS CODE">
              </div>
              <div class="content mt-3">
                <h6 class="mb-0">
                  <NuxtLink :to="{name: 'dev-ops', hash: '#INFRASTRUCTURE_AS_CODE'}" class="title text-dark">
                    Infrastructure as Code
                  </NuxtLink>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section" id="GITLAB">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h2 class="text-gray font-3"><span class="line">Gitlab</span></h2>
            <h3 class="py-2 h3 line-12 text-dark">
              Accelerate present-day DevOps. Convey speed with assurance, security without compensation, and detectable
              quality into DevOps accomplishment.
            </h3>
            <p> With GitLab, you get a DevOps stage passed on as a singular application—one interface, one conversation
              string, one data store, zero cerebral agonies.</p>
          </div>
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="CONFIGURATION_MANAGEMENT">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
          <div class="col-md-7 col-12">
            <h2 class="text-gray font-3"><span class="line">Configuration management</span></h2>
            <h3 class="py-2 h3 line-13 text-dark">
              Configuration management
              is significant in DevOps on the grounds that it assists you with mechanizing, in
              any case, drawn-out undertakings and permits an association to expand nimbleness. </h3>
            <p>
              Also, the board upholds DevOps comprehensively, and it's generally settled upon that arrangement of the
              executives is vital for DevOps, rather than being simply one more part of the interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="CONTINUOUS_INTEGRATION">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h2 class="text-gray font-3 line-10"><span class="line">Continuous integration</span></h2>
            <h3 class="py-2 h3 line-15 text-dark">
              Continuous integration automates software development workflows, reduces costs, and ensures code quality.
            </h3>
            <p>Continuous Integration works by pushing little code lumps to your application's codebase facilitated in a
              Git store, and to each push, run a pipeline of contents to fabricate, test, and approve the code changes
              prior to blending them into the primary branch.</p>
          </div>
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="AUTOMATED_TESTING">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
          <div class="col-md-7 col-12">
            <h2 class="text-gray font-3"><span class="line"> Automated testing</span></h2>
            <h3 class="py-2 h3 line-12 text-dark">
              Automated testing in DevOps. DevOps makes testing a common duty of the whole group, while test
              computerization empowers engineers to dispatch code changes rapidly with high trust in the quality.
            </h3>
            <p>
              A test automation architect ought to be educated in different regions, including application usefulness,
              the basic specialized scene, test mechanization instruments, and how to make scripts corresponding with
              improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="CONTINUOUS_DELIVERY">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-12">
            <h2 class="text-gray font-3"><span class="line">Continuous Delivery</span></h2>
            <h3 class="py-2 h3 line-13 text-dark">
              Continuous delivery is the second piece of CI conveyance, or CI/CD, a
              training that empowers application improvement groups to deliver steady code changes to create rapidly and
              routinely. </h3>
            <p>With CD, advancement groups can construct, test, and deliver programming quicker and all the more often.
              Subsequently, they can diminish the expense, time, and hazard of conveying each change.
            </p>
          </div>
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="INFRASTRUCTURE_AS_CODE">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-5 d-none d-md-block">
            <img src="/images/illustrator/app.svg" class="w-100" alt="">
          </div>
          <div class="col-md-7 col-12">
            <h2 class="text-gray font-3"><span class="line">Infrastructure as Code</span></h2>
            <h3 class="py-2 h3 line-13 text-dark">
              <span class="line text-success" data-bs-toggle="tooltip" data-bs-placement="top"
                    title="Infrastructure as Code">IaC</span>
              is the administration of foundation (organizations, virtual machines, load
              balancers, and association geography) in an engaging model, utilizing the equivalent forming as DevOps
              group utilizes for source code. </h3>
            <p>
              Infrastructure as Code (IaC) robotizes the provisioning of the framework, empowering your association to
              create, convey, and scale cloud applications with more noteworthy speed, less risk, and diminished
              expense.
            </p>
          </div>
        </div>
      </div>
    </section>

    <TechList :items="techItems"></TechList>
    <FaqContainer :faq="FAQ" title="Faq"></FaqContainer>
    <BlogGrid></BlogGrid>
  </section>
</template>

<script>
import FaqContainer from "@/components/faq/FaqContainer";
import BlogGrid from "@/components/Blog/BlogGrid";
import TechList from "@/components/Blocks/TechList";
import {iot_ai_tech_list} from "@/utils/tech_list";
import {cloud_faq} from "@/utils/questions";

export default {
  name: "dev-ops",
  components: {FaqContainer, BlogGrid, TechList},
  data: () => ({
    techItems: iot_ai_tech_list,
    features: [
      {alt: "", title: "BOOM", icon: "", text: "DOOM"}
    ],
    FAQ: cloud_faq
  }),
}
</script>

<style lang="scss">

</style>
