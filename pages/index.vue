<script setup>
definePageMeta({
	layout: 'default',
	middleware: ['auth'],
});
useHead({
	title: 'Home',
});
</script>

<template>
  <div>
    <div>
      <Counter />
    </div>
  </div>
</template>
