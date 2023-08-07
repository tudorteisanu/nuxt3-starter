<template>
  <div>
    <div>
      <Counter />
    </div>
    <pre>
    {{ data }}
  </pre>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom',
  middleware: 'auth'
})

const { data } = await useFetch('/api/v1/hello')

</script>
