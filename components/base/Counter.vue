<template>
  <v-container>
    <v-btn size="small" @click="decrement()">
      -
    </v-btn>
    <span class="mx-2">
      {{ count }}
    </span>
    <v-btn size="small" @click="increment()">
      +
    </v-btn>
  </v-container>
</template>

<script setup>
const { count, increment, decrement } = useCounter();
</script>
