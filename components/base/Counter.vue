<template>
  <v-container>
    <v-btn size="small" data-test="counter-decrement" icon @click="decrement()">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <span class="mx-2" data-test="counter-value">
      {{ count }}
    </span>
    <v-btn size="small" data-test="counter-increment" icon @click="increment()">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script setup>
const { count, increment, decrement } = useCounter();
</script>
