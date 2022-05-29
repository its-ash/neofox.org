<template>
  <section class="bg-light py-5 d-table w-100 position-relative">
    <Loader v-if="$fetchState.pending"></Loader>
    <template v-else>
      <div class="container py-5 mt-5">
        <small class="pb-5 h4">{{ post.created_at.slice(0, 10) }}</small>
        <h1 class="font-1 telex text-left line-10 text-uppercase text-wrap text-dark">{{ post.title }}</h1>
      </div>
      <div class="container py-5">
        <div class="row d-flex justify-content-center">
          <div v-html="post.html" class="col-lg-8 col-md-10 col-12"></div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>


import {getPost} from "@/api/posts";
import Loader from "@/components/loader/Loader";
import {SEO} from "@/plugins/MetaTags";

export default {
  name: "blog_slug",
  data: () => ({post: undefined}),
  components: {Loader},
  head: SEO(
    "IT Services, Digital Solutions, Technology Consulting : NEOFOX",
    "Data Science, IoT, Software Development, Web Development",
    "We merge imagination and technology to help brands grow in the age of digital transformation",
    "Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart",
    "",
    "",
    "",
  ),
  mounted() {
  },
  async fetch() {
    this.post = await getPost(this.$route.params.slug);
    console.log(this.post);
  },
  fetchOnServer: true
}
</script>

<style lang="scss">
.kg-image-card {
  text-align: center;

  img {
    width: 100%;
    height: auto !important;
  }

}
</style>
