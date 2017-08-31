<template lang="pug">
p {{ name }}
</template>

<script lang="coffee">
module.exports =
  asyncData: ->
    new Promise (resolve)=>
      setTimeout =>
        resolve name: 'Nuxt.js'
        return
      , 10
      return
</script>
