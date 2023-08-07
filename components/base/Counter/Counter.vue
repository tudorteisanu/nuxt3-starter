<template>
    <div class="counter">
        <button @click="decrement()"> - </button>
        <span>
            {{ count }}
        </span>
        <button @click="increment()"> + </button>
    </div>
</template>

<script setup>
const { count, increment, decrement } = useCounter();
</script>