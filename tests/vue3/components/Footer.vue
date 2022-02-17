<template>
  <footer class="footer">
    <div class="content">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <div class="copyright">
      <span>©{{ copyrightYear }} Bedrock Streaming</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    const copyrightYear = ref(new Date().getFullYear());

    return { copyrightYear };
  },
});
</script>
