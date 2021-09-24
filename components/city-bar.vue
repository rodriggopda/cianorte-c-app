<template>
  <div class="city-bar">
    <img src="/png/city-shild-icon.png" class="city-icon" width="34" height="40" alt="City Shild Icon">
    <div class="info">
      <span class="mayor">Marco Antonio Franzato</span>
      <span class="function uppercase">Prefeito</span>
    </div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15 16L19 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15 8L19 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<style scoped>
.city-bar {
  background: #fff;
  margin: 0 -15px -15px -15px;
  padding: 10px 15px;
  color: #000;
  display: flex;
  align-items: center;
}

.city-icon {
  margin-left: 4px;
  margin-right: 15px;
}

.info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.mayor {
  font-size: 16px;
  margin-bottom: 5px;
}

.function {
  font-size: 12px;
  color: #8C8C8C;
}
</style>
