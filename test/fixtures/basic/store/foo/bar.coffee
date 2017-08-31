module.exports =
  state: =>
    baz: 'Vuex Nested Modules'

  getters:
    baz: (state)->
      state.baz