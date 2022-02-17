<template>
  <div id="app">
    <page-header></page-header>

    <main class="container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>

    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from './components/Header.vue';
import PageFooter from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
  },
  setup() {},
});
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
