<template>
  <section>
    <IndexHero class="front-1"></IndexHero>
    <IndexCounter class="front-1"></IndexCounter>
    <IndexService class="front-1"></IndexService>
    <BlogLatest class="front-1"></BlogLatest>
  </section>
</template>

<script>
import IndexHero from "@/components/IndexPage/IndexHero";
import IndexService from "@/components/IndexPage/IndexService";
import IndexCounter from "@/components/IndexPage/IndexCounter";
import BlogLatest from "@/components/Blog/BlogLatest";
import {SEO} from "@/plugins/MetaTags";

export default {
  head: SEO(),
  name: 'index',
  components: {IndexHero, IndexService, IndexCounter, BlogLatest},
  data: () => ({}),
}
</script>
