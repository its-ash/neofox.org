<template>
  <div class="post">
    <NuxtLink :to="{name: 'blog-slug', params:{'slug': post.slug}}" class="row d-flex m-0 bg-white front-10 ">
      <img :src="post.feature_image" class="w-100 col-12 p-0 m-0 post-image" :alt="post.title">
      <div class="col-12 d-flex px-2 py-1 front-10 align-items-center flex-wrap" style="min-height: 100px;background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);">
        <small class="text-white roboto-slab w-100">{{ post.updated_at | date }}</small>
        <h3 class="line-10 h5 text-dark w-100">{{ post.title }}</h3>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ['post']
}
</script>

