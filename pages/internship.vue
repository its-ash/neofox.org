<template>
  <section>
    <section class="h-100-center bg-light w-100">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="title-heading text-center">
              <div class="alert alert-pills" role="alert">
                <span class="badge rounded-pill bg-success me-1">Start</span>
                <span class="content"> Fill internship <span class="text-primary">application</span> now !</span>
              </div>
              <h1 class="heading mb-3">Neofox Internship Programme</h1>
              <p class="para-desc mx-auto text-muted">While you work with us you feel we are in the right place & right
                time.</p>
              <form class="rounded p-4 mt-4 bg-white">
                <div class="row text-start d-flex justify-content-center">
                  <div class="col-md-5 col-11 py-1">
                    <input v-model="fullName"
                           @input="checkInputString"
                           maxlength="30"
                           type="text" class="form-control" required placeholder="Full Name">
                  </div>
                  <div class="col-md-5 col-11 py-1">
                    <input v-model="mobileNumber" @input="checkInputNumber" min="10" max="10" type="text"
                           pattern="\d{10}"
                           class="form-control" required placeholder="Mobile Number">
                  </div>
                </div><!--end row-->
                <div class="row d-flex justify-content-center py-5">

                  <div class="col-11 py-1">
                    <div class="row d-flex justify-content-center align-items-center">
                      <div v-for="item in programmingLanguages"
                           @click="selectLanguage(item)"
                           :ref="'language'+item.name"
                           class="col-xl-2 col-lg-3 col-5 py-1">
                        <div class="card hover-shadow border-0 rounded-4 "
                             :class="{'bg-primary text-white': item.name === courseName, 'bg-light': item.name !== courseName}">
                          <div class="card-head h4 rajdhani">
                            <span v-if="item.shortName">{{ item.shortName.toUpperCase() }}</span>
                            <span v-else>{{ item.name.toUpperCase() }}</span>
                          </div>
                          <div class="card-body p-md-3 p-1">
                            <img :src="makeImagePath(item.name)"
                                 :alt="item.name" class="d-inline col-md-8 col-4">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--         ai         -->
                  <div class="col-11 pt-5" v-if="aiList.length > 0">
                    <div class="row d-flex align-items-center">
                      <h3 class="text-start">
                        <span class="btn btn-success text-uppercase">{{ language }} AI Courses</span>
                      </h3>
                      <div v-for="item in aiList"
                           @click="featuredCourse = item"
                           class="col-xl-2 col-lg-3 col-5 py-1">
                        <div class="card hover-shadow border-0 rounded-4 "
                             :class="{'text-white bg-success': item === featuredCourse, 'bg-light': item !== featuredCourse}">
                          <div class="card-head h6 rajdhani">
                            {{ item.toUpperCase() }}
                          </div>
                          <div class="card-body p-md-3 p-1">
                            <img :src="makeImagePath(item)"
                                 :alt="item" class="d-inline col-md-8 col-4">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--        web          -->
                  <div class="col-11 py-5" v-if="webList.length > 0">
                    <h3 class="text-start">
                      <span class="btn btn-danger text-uppercase">{{ language }} web Courses</span>
                    </h3>
                    <div class="row d-flex align-items-center">
                      <div v-for="item in webList"
                           @click="featuredCourse = item"
                           class="col-xl-2 col-lg-3 col-5 py-1">
                        <div class="card hover-shadow border-0 rounded-4"
                             :class="{'bg-success text-white': item === featuredCourse, 'bg-light': item !== featuredCourse}">
                          <div class="card-head h6 rajdhani">
                            {{ item.toUpperCase() }}
                          </div>
                          <div class="card-body p-md-3 p-1">
                            <img :src="makeImagePath(item)"
                                 :alt="item" class="d-inline col-md-8 col-4">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--        ui          -->
                  <div class="col-11 py-5" v-if="uiList.length > 0">
                    <h3 class="text-start ">
                      <span class="btn btn-success border-0 text-uppercase">
                       {{ language }} web Courses
                      </span>
                    </h3>
                    <div class="row d-flex align-items-center">
                      <div v-for="item in uiList"
                           @click="featuredCourse = item"
                           class="col-xl-2 col-lg-3 col-5 py-1">
                        <div class="card hover-shadow border-0 rounded-4"
                             :class="{'bg-success text-white': item === featuredCourse, 'bg-light': item !== featuredCourse}">
                          <div class="card-head h6 rajdhani">
                            {{ item.toUpperCase() }}
                          </div>
                          <div class="card-body p-md-3 p-1">
                            <img :src="makeImagePath(item)"
                                 :alt="item" class="d-inline col-md-8 col-4">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row py-1 justify-content-center">
                  <div class="row d-flex justify-content-center align-items-center">
                    <img :src="makeImagePath(courseName)"
                         :alt="courseName" class="d-inline col-md-2 col-4">
                    <span class="d-block font-5 col-md-2">+</span>
                    <img :src="makeImagePath(featuredCourse)"
                         :alt="featuredCourse" class="d-inline col-md-2 col-4">
                  </div>
                  <div class="col-md-4 mt-4 pt-5" v-if="featuredCourse !== ''">
                    <div class="d-grid">
                      <input type="submit" id="search" name="search" class="searchbtn btn text-white fw-bold"
                             value="Submit" style="background-color: #00b4d8">
                    </div>
                  </div>
                </div>
              </form>
              <p class="text-muted mb-0 mt-4"><span class="text-dark">Keywords :</span> Web Developer, Web Designer, Php
                Developer, IOS Developer, etc...</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
  </section>
</template>

<script>
export default {
  name: "internship",
  data: () => ({
    mobileNumber: '',
    fullName: '',
    courseName: 'python',
    featuredCourse: '',
    programmingLanguages: [
      {
        "name": "python",
        "ai": ["pytorch", "tensorflow"],
        "mobile": [],
        "ui": [],
        "web": ["django", "flask"],
      },
      {
        "name": "javascript",
        "shortName": "js",
        "ai": [],
        "mobile": ["ionic"],
        "desktop": ["electron"],
        "ui": ["vue", "angular", "react"],
        "web": ["nodejs", "deno"],
      },
      {
        "name": "go",
        "ai": ["tensorflow"],
        "mobile": [],
        "ui": [],
        "web": ["gin", "fasthhtp"],
      },
      {
        "name": "php",
        "ai": [],
        "mobile": [],
        "ui": [],
        "web": ["laravel", "codeigniter"],
      },
      {
        "name": "scala",
        "ai": ["pyspark"],
        "mobile": [],
        "ui": [],
        "web": ["play"],
      },
      {
        "name": "dart",
        "ai": [],
        "mobile": ["flutter"],
        "ui": ["flutter"],
        "web": [],
      },
    ],
    educationList: ["M.Tech", "MCA", "M.Com", "M.Sc", "B.Tech", "BCA", "B.Sc", "Other"],
    languageNameList: ["python", "javascript", "go", "php", "scala"],
  }),
  computed: {
    aiList() {
      const name = this.programmingLanguages.find(x => x.name === this.courseName);
      return name['ai'];
    },
    webList() {
      const name = this.programmingLanguages.find(x => x.name === this.courseName);
      return name['web'];
    },
    uiList() {
      const name = this.programmingLanguages.find(x => x.name === this.courseName);
      return name['ui'];
    }
  },
  methods: {
    checkInputNumber() {
      this.mobileNumber = this.mobileNumber.replace(/\D/i, '');
      this.mobileNumber = this.mobileNumber.slice(0, 10);
    },
    checkInputString() {
      this.fullName = this.fullName.replace(/[^a-z ]/i, '');
    },
    makeImagePath(name) {
      return "/svg/tech/" + name + '.svg';
    },
    selectLanguage(name) {
      this.courseName = name.name;
      this.featuredCourse = '';
    },
  }
}
</script>

<style scoped>
input, option, select, a {
  font-size: 1.2em;
  font-weight: 600;
}


a {
  cursor: pointer !important;
}
</style>
