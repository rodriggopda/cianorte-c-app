<template>
  <gradient-container fullHeight>
    <div class="top-content">
      <div class="header">
        <button class="back" @click="back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12H23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 12L7 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 12L7 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Voltar</span>
        </button>
        <div class="dots">
          <span class="step active"></span>
          <span class="step"></span>
          <span class="step"></span>
        </div>
      </div>
      <nuxt />
    </div>
    <div class="bottom-content">
      <nuxt-link class="button-link rounded-full uppercase font-small underline-off font-500" tag="a" :to="step.nextRoute">
        <span v-if="$route.path === '/register/access'">Confirmar</span>
        <span v-else>Próximo</span>
      </nuxt-link>
    </div>
  </gradient-container>
</template>

<script>
export default {
  layout: 'guest',
  computed: {
    step () {
      return this.$store.state.steps.step
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-content {
  padding: 15px;
}

.top-content .back {
  background: transparent;
  border: none;
  margin-top: 5px;
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.top-content .back span {
  margin-left: 15px;
  font-size: 16px;
  color: #fff;
}

.bottom-content {
  padding: 15px;
}

/* .bottom-content {
  padding: 30px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
} */

.button-link {
  display: block;
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  background: #CC353A;
  text-align: center;
  color: #fff;
}

</style>
