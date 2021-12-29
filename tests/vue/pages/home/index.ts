import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

function incrementValue() {
  this.addValue(1);
}

export default Vue.extend({
  data: () => ({ msg: 'This is page 1' }),
  computed: {
    ...mapGetters('app', ['value']),
  },
  methods: {
    incrementValue,
    ...mapActions('app', ['addValue']),
  },
});
