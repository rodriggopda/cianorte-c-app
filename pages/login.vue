<template>
  <gradient-container fullHeight>
    <div class="top-content">
      <h1 class="brand">C-APP</h1>
      <div class="form-login">
        <h2 class="mb-20px uppercase font-small font-500">Faça Login Usando:</h2>
        <div class="field">
          <label for="credential"></label>
          <input type="text" class="rounded-top" id="credential" placeholder="Email ou CPF" v-model="user.credential">
        </div>
        <div class="field">
          <label for="password"></label>
          <input type="password" class="rounded-bottom" id="password" placeholder="Senha" v-model="user.password">
        </div>
        <button class="form-button rounded-full uppercase font-small font-500" type="button" @click="login">Entrar</button>
        <div class="mt-30">
          <h2 class="mb-20px uppercase font-small font-500">Ou utilize:</h2>
          <div class="double-buttons">
            <button type="button" class="rounded-full uppercase font-small font-500">Google</button>
            <button type="button" class="rounded-full uppercase font-small font-500">Facebook</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <p>Ainda não possui cadastro?</p>
      <nuxt-link class="button-link rounded-full uppercase font-small underline-off font-500" tag="a" :to="step.nextRoute">Cadastre-se Agora</nuxt-link>
    </div>
  </gradient-container>
</template>

<script>
export default {
  data () {
    return {
      user: {
        credential: '',
        password: ''
      }
    }
  },
  computed: {
    step () {
      return this.$store.state.steps.step
    }
  },
  mounted () {
    const payload = { current: this.$route.path, nextRoute: '/register/about-you' }
    this.$store.commit('steps/changeRoute', payload)
  },
  methods: {
    login () {
      localStorage.setItem('auth', true)
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.bottom-content {
  padding: 15px;
  text-align: center;
}

.brand {
  text-align: center;
  margin: 15% 0;
}

.form-login {
  padding: 15px;
}

.mt-30 {
  margin-top: 30px;
}

.mb-20px {
  margin-bottom: 20px;
}

.field input {
  width: 100%;
  background: rgba(255,255,255,.1);
  border: none;
  padding: 15px;
  margin-bottom: 2px;
  color: #fff;
}

.field input::placeholder {
  color: #fff;
  letter-spacing: 0.02em;
}

.form-button {
  display: block;
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  background: #fff;
  text-align: center;
  color: #3A4D84;
  border: none;
}

.double-buttons {
  display: flex;
  justify-content: space-between;
}

.double-buttons button {
  width: calc(50% - 5px);
  padding: 15px;
  border: none;
}

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
