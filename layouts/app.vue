<template>
  <div class="application">
    <app-bar></app-bar>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  middleware ({ redirect }) {
    if (!localStorage.getItem('auth')) {
      redirect('/login')
    }
  }
}
</script>
