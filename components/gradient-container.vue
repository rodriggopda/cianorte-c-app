<template>
  <div :class="`container ${fullHeight ? 'full-height' : ''}`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fullHeight: Boolean
  }
}
</script>

<style scoped>
.container {
  /* background: linear-gradient(152.41deg, #014D89 22.18%, #001451 97.61%); */
  padding: 15px;
  color: #fff;
}

.full-height {
  min-height: 100vh;
}
</style>
