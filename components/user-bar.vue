<template>
  <div class="user-bar">
    <img src="/jpg/default-avatar.jpg" class="avatar" width="42" height="42" alt="Default Avatar Image">
    <div class="user-info">
      <span class="user-name">Roberto Carlos da Silva</span>
      <span class="user-code uppercase" @click="myAccount">Cód. Único: 1289821-9</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    myAccount () {
      this.$router.push('/my-account')
    }
  }
}
</script>

<style scoped>
.user-bar {
  display: flex;
  margin: 15px -15px 0 -15px;
  padding: 15px;
}

.user-bar:hover {
  background:rgba(255, 255, 255, .1);
}

.avatar {
  margin-right: 12px;
  border-radius: 21px;
}

.user-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user-name {
  font-size: 16px;
  margin-bottom: 5px;
}

.user-code {
  font-size: 12px;
  opacity: .5;
}
</style>
