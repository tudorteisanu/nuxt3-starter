<template>
  <v-container>
    <v-btn size="small" data-test="counter-decrement" @click="decrement()">
      -
    </v-btn>
    <span class="mx-2" data-test="counter-value">
      {{ count }}
    </span>
    <v-btn size="small" data-test="counter-increment" @click="increment()">
      +
    </v-btn>
  </v-container>
</template>

<script setup>
const { count, increment, decrement } = useCounter();
</script>
