<template>

</template>

<script>
import {getPosts} from '@/api/posts';


export default {
  name: "BlogTop",
  data: ()=>({
    posts: undefined
  }),
  async asyncData() {
    const posts = await getPosts();
    return {posts: posts}
  },
  mounted() {
    console.log(this.posts);
  }
}
</script>

<style scoped>

</style>
