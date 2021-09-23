<template>
  <input
    :type="type"
    :class="`field ${customClass}`"
    :placeholder="placeholder ? placeholder : 'Placeholder padrão'" />
</template>

<script>
export default {
  props: {
    type: String,
    customClass: Array,
    placeholder: String
  }
}
</script>

<style scoped>
input.field {
  display: flex;
  width: 100%;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #efefef;
}

.border-none {
  border: none;
}

.border-transparent {
  border: 1px solid transparent;
}

.background-transparent {
  background: transparent;
}
</style>
