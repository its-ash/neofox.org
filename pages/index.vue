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
  head: SEO(
    "IT Services, Digital Solutions, Technology Consulting : NEOFOX",
    "Data Science, IoT, Software Development, Web Development",
    "We merge imagination and technology to help brands grow in the age of digital transformation",
    "Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart",
  ),
  name: 'index',
  components: {IndexHero, IndexService, IndexCounter, BlogLatest},
  data: () => ({}),
}
</script>
