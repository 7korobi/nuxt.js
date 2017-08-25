import Vue from 'vue'
import Vuex from 'vuex'

Vue.use Vuex

module.exports =
  state: =>
    counter: 1

  mutations:
    increment: (state)->
      state.counter++