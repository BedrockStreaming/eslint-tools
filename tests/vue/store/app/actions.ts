import { ActionContext } from 'vuex';
import { MutationTypes, AppState } from '../type-defs';

function addValue({ commit, dispatch, state }: ActionContext<AppState, any>, value: number): void {
  if (value && value > 0) {
    commit(MutationTypes.ADD_VALUE, value);
    if (state.value > 10) {
      dispatch('resetValue');
    }
  }
}

function resetValue({ commit }: any): void {
  commit(MutationTypes.RESET_VALUE);
}

export default {
  addValue,
  resetValue,
};
