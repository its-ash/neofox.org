<template>

  <section class="bg-light py-5 d-table w-100 position-relative">
    <Loader class="py-5" v-if="$fetchState.pending"></Loader>
    <div v-else class="container py-5">
      <div class="position-relative py-3">
        <span class="rajdhani back-1 t-shadow display-1 position-absolute text-gray fw-bold anim-text top-0 line-10">NEWEST</span>
      </div>
      <h1 class="display-2 text-dark">Latest Post</h1>
      <div class="row">
        <div class="col-md-9 col-12 m-0 p-0 row d-flex justify-content-center">
          <div v-for="post in posts" :key="post.id" class="col-md-6 col-12 px-2 my-3">
            <BlogCard class="bg-light" :post="post"></BlogCard>
          </div>
          <div class="col-12 align-items-center d-flex">
            <button @click="previousPage" v-if="current > 1" aria-label="Next button"
                    class="btn text-danger border-0 fw-bold h4">←
            </button>
            <h6 class="d-inline">Page {{ current }} of 5</h6>
            <button @click="nextPage" aria-label="Next button" class="btn text-danger border-0 fw-bold h4">→</button>
          </div>
        </div>
        <div class="col-3 text-end">
          <h3 class="text-danger">Category</h3>
          <h2 class="line-8" v-for="tag in tags"><a class="line text-dark">{{ tag.name }}</a></h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {getPosts, getTags} from "@/api/posts";
import BlogCard from "@/components/Blog/BlogCard";
import Loader from "@/components/loader/Loader";

export default {
  name: "index",
  components: {BlogCard, Loader},
  data: () => ({posts: undefined, tags: undefined, current: 1}),
  async fetch() {
    const [tags, posts] = await Promise.all([
      getTags(),
      getPosts({limit: 2, page: this.current})
    ]);
    this.tags = tags;
    this.posts = posts;
  },
  methods: {
    async nextPage() {
      this.current += 1;
      this.posts = await getPosts({limit: 2, page: this.current});
    },
    async previousPage() {
      this.current -= 1;
      this.posts = await getPosts({limit: 2, page: this.current});
    }
  },
  fetchOnServer: true,
}
</script>

<style scoped>

</style>
