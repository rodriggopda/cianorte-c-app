<template>
  <div>
    Minha Conta
    <button @click="logout">
      Desconectar
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('auth')
      if (!localStorage.getItem('auth')) {
        this.$router.push('/')
      }
    }
  }
}
</script>
