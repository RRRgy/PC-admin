import Vue from 'vue'
import Vuex from 'vuex'


import getters from './getters'

Vue.use(Vuex)

const context = require.context('./modules', false, /\.js$/)
const modules = context.keys().reduce((modules, modulePath) => {
  // './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[moduleName] = context(modulePath).default
  return modules
}, {})

// 创建store对象
const store = new Vuex.Store({

  modules,
  getters,
})

export default store
