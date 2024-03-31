<script setup lang="ts">
import test from "@/components/test.vue";
definePageMeta({
  layout: "custome",
});
</script>
<template>
  <div>avvv</div>
  <nuxt-link
    :to="{
      name: 'id',
      params: {
        id: 1,
      },
    }"
    >1111111111</nuxt-link
  >
  <test />
</template>
