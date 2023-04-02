import { createStore } from 'vuex'
import login from './login/login'

import { IRootState } from './type'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age: 18,
      height: '180'
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
