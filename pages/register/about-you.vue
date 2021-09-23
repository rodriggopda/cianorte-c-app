<template>
  <div class="content">
    <h1>Sobre Você</h1>
    <p>Insira alguns dados, queremos lhe
      conhecer melhor.</p>
    <form class="form" autocomplete="off">
      <div class="field">
        <label for="credential"></label>
        <input type="text" class="rounded-full" id="credential" placeholder="Nº Cartão Cidadão" v-model="about.citizen_card_number">
      </div>
      <div class="field">
        <label for="credential"></label>
        <input type="text" class="rounded-full" id="credential" placeholder="CPF" v-model="about.cpf">
      </div>
      <div class="field">
        <label for="credential"></label>
        <input type="text" class="rounded-full" id="credential" placeholder="Seu nome completo" v-model="about.full_name">
      </div>
      <div class="field">
        <label for="credential"></label>
        <input type="text" class="rounded-full" id="credential" placeholder="Data de nascimento" v-model="about.birth_date">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 3V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 3V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 11H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 15H8V17H10V15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="field select">
        <label for="credential"></label>
        <input
          type="text"
          class="rounded-full"
          id="credential"
          placeholder="Sexo"
          v-model="about.gender"
          readonly>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'register',
  data () {
    return {
      about: {
        citizen_card_number: '',
        cpf: '',
        full_name: '',
        birth_date: '',
        gender: ''
      }
    }
  },
  mounted () {
    const payload = { current: this.$route.path, nextRoute: '/register/address' }
    this.$store.commit('steps/changeRoute', payload)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}

.content h1 {
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
}

.content p {
  margin-top: 5px;
  font-size: 16px;
  opacity: .5;
  height: 60px;
  font-weight: 300;
  margin-bottom: 40px;
}

.field {
  position: relative;
}

.field.select {
  cursor: pointer;
}

.field input {
  width: 100%;
  background: rgba(255,255,255,.1);
  border: none;
  padding: 15px;
  margin-bottom: 10px;
  color: #fff;
}

.field svg {
  position: absolute;
  right: 15px;
  top: 10px;
}

.field input::placeholder {
  color: #fff;
  letter-spacing: 0.02em;
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
