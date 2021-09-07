<template>
  <section class="d-table w-100 position-relative bg-white py-5">
    <div class="container py-5">
      <div class="row align-items-center mb-4 pb-2">
        <div class="col-lg-6">
          <div class="section-title text-center text-lg-start">
            <NuxtLink :to="{name: 'blog'}" class="text-primary">Blog</NuxtLink>
            <h4 class="title mb-4 mb-lg-0">Reads Our Latest <br> News &amp; Blog</h4>
          </div>
        </div><!--end col-->

        <div class="col-lg-6">
          <div class="section-title text-center text-lg-start">
            <p class="text-muted mb-0 mx-auto para-desc">
              Our mission is to help the customer reach new heights of <span class="text-success fw-bold">success</span>
              while rejoicing the increase in sales and enhanced online traffic inflow.
            </p>
          </div>
        </div><!--end col-->
      </div>
      <div class="row">
        <div v-for="post in posts" :key="post.id" class="col-lg-4 col-md-6 px-2 my-3">
          <BlogCard :post="post"></BlogCard>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-end py-5 line-25">
          <NuxtLink :to="{name:'blog'}" class="text-right mx-4 line">Read More ></NuxtLink>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {getPosts} from '@/api/posts';
import BlogCard from "@/components/Blog/BlogCard";

export default {
  name: "BlogLatest",
  components: {BlogCard},
  data: () => ({posts: undefined}),
  fetchOnServer: false,
  async fetch() {
    this.posts = await getPosts({limit: 6, page: 1});
  },
  mounted() {
  }
}
</script>


<style lang="scss" scoped>
.post {
  &:hover {
    &::before, &::after {
      background: #fefefe !important;
    }
  }
}
</style>

