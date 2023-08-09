<template>
  <div>
    <div>
      <Counter />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
	middleware: 'auth',
});
useHead({
	title: 'Home',
});
</script>
