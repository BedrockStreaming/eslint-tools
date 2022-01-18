<template lang="html">
  <div class="page">
    <h1>This is the home page</h1>
    <div>
      <button @click="incrementValue">Increment value</button>
      <button @click="decrementValue">Increment value</button>
      <span>{{ increment }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Footer',
  setup() {
    const increment = ref(0);

    const incrementValue = () => {
      increment.value += 1;
    };
    const decrementValue = () => {
      increment.value -= 1;
    };

    return {
      increment,
      incrementValue,
      decrementValue,
    };
  },
};
</script>
