import Vue from 'vue';
import PageHeader from '../../components/header/index.vue';
import PageFooter from '../../components/footer/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
  },
  data: () => ({ msg: 'This is page 1' }),
});
