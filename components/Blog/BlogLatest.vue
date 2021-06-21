<template>
  <section class="d-table w-100 position-relative bg-white">
    <div class="container">
      <div class="row justify-content-center text-center py-5">
        <small class="col-12 rajdhani">READ UP ON LATEST TECH NEWS</small>
        <h2 class="h1">LATEST POSTS</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi obortis ligula euismod sededesty am augue
          nisl.
        </p>
      </div>
      <div class="row">
        <div v-for="post in posts" :key="post.id" class="col-lg-4 col-md-6 px-2 my-3">
          <BlogCard :post="post"></BlogCard>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-end py-5 line-25">
          Loved the content
          <NuxtLink :to="{name:'blog'}" class="text-right mx-4">
            <span class="p btn btn-outline-success">Read More</span>
          </NuxtLink>
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
    this.posts = await getPosts({limit: 6,page:1});
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

