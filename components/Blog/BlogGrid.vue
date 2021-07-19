<template>
  <section class="d-table w-100 position-relative bg-white">
    <div class="container">
      <h2>Know More </h2>
      <div class="row">
        <div v-for="post in posts" :key="post.id" class="col-lg-3 col-md-4 px-2 my-3">
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
    this.posts = await getPosts({limit: 4, page: 1});
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

