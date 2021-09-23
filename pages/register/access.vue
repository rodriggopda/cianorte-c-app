<template>
  <div class="content">
    <h1>Falta pouco...</h1>
    <p>Preencha o seu número de telefone ou entre usando as redes sociais.</p>
    <form class="form" autocomplete="off">
      <h2 class="mb-20 uppercase font-small font-500">Entre usando:</h2>
      <div class="field select">
        <label for="credential"></label>
        <input type="text" class="rounded-full" id="credential" placeholder="Telefone/WhatsApp" v-model="access.phoneNumber">
      </div>
      <div class="field">
        <label for="credential"></label>
        <input type="text" class="rounded-full" id="credential" placeholder="Seu melhor email" v-model="access.email">
      </div>
      <div class="field">
        <label for="credential"></label>
        <input type="text" class="rounded-full" id="credential" placeholder="Digite uma senha" v-model="access.password">
      </div>
      <div class="mt-20">
          <h2 class="mb-20 uppercase font-small font-500">Entre com as redes sociais:</h2>
          <div class="double-buttons">
            <button type="button" class="rounded-full uppercase font-small font-500">Google</button>
            <button type="button" class="rounded-full uppercase font-small font-500">Facebook</button>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'register',
  data () {
    return {
      access: {
        phoneNumber: '',
        email: '',
        password: ''
      }
    }
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

.mt-30 {
  margin-top: 30px;
}

.mt-20 {
  margin-top: 20px;
}

.mb-20 {
  margin-bottom: 20px;
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
