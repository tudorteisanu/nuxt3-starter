<script setup>
definePageMeta({
	middleware: ['auth'],
});
useHead({
	title: 'Home',
});
</script>

<template>
  <div>
    <div>
      <h1>Home page</h1>
    </div>
  </div>
</template>
