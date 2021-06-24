<template>
  <div class="post">
    <NuxtLink :to="{name: 'blog-slug', params:{'slug': post.slug}}" class="row d-flex m-0 bg-white front-10">
      <img :src="post.feature_image" class="w-100 col-12 p-0 m-0 post-image" :alt="post.title">
      <div class="bg-light col-12 d-flex px-2 py-1 front-10 align-items-center flex-wrap shadow-sm" style="min-height: 80px;">
        <small class="text-dark roboto-slab w-100">{{ post.updated_at | date }}</small>
        <h3 class="line-10 h6 text-dark w-100">{{ post.title }}</h3>
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

