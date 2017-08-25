<template lang="pug">
p {{ name }}
</template>
  
<script lang="coffee">
module.exports =
  asyncData: ->
    new Promise (resolve)->
      window.setTimeout ->
        resolve name: 'Nuxt.js'
      , 10
      return
</script>
