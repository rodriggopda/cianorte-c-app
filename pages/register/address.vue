<template>
  <div class="content">
    <h1>Onde você mora?</h1>
    <p>Em qual local do municipio de Cianorte
      você reside? Preencha o seu endereço
      para te localizarmos.</p>
    <form class="form" autocomplete="off">
      <div class="field select">
        <label for="credential"></label>
        <input
          type="text"
          class="rounded-full"
          id="credential"
          placeholder="Tipo de residência"
          v-model="address.address_type"
          readonly>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="field">
        <label for="credential"></label>
        <input type="text" class="rounded-full" id="credential" placeholder="Nome da Rua ou avenida" v-model="address.street">
      </div>
      <div class="double">
        <div class="field">
          <label for="credential"></label>
          <input type="text" class="rounded-full" id="credential" placeholder="Número" v-model="address.address_number">
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="rounded-full" id="credential" placeholder="Nome da Rua ou avenida" v-model="address.number_null">
            Sem número
          </label>
        </div>
      </div>
      <div class="field">
        <label for="credential"></label>
        <input type="text" class="rounded-full" id="credential" placeholder="Bairro" v-model="address.district">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'register',
  data () {
    return {
      address: {
        address_type: '',
        street: '',
        address_number: '',
        number_null: '',
        district: ''
      }
    }
  },
  mounted () {
    const payload = { current: this.$route.path, nextRoute: '/register/access' }
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

.double {
  display: flex;
  align-items: center;
}

.double .checkbox {
  width: 100%;
  text-align: center;
}

.double .field,
.double .checkbox  {
  width: calc(50% - 5px);
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
