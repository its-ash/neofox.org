<template>
  <main>
    <client-only>
      <BaseHeader class="front-2"></BaseHeader>
      <Nuxt class="front-1 position-relative mt-4"/>
      <BaseFooter class="back-1"></BaseFooter>
    </client-only>
  </main>
</template>

<script>
import BaseHeader from "~/components/BaseHeader";
import BaseFooter from "~/components/BaseFooter";

export default {
  components: {BaseHeader, BaseFooter}
}
</script>

<style>
html, body {
  overflow-x: hidden;
}
</style>
