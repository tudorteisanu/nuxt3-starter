<template>
  <div>
    <div>
      <Counter />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
	layout: 'custom',
	middleware: 'auth',
});
</script>
