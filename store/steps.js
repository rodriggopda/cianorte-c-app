export const state = () => ({
  step: {
    current: '/login',
    nextRoute: '/register/about-you'
  }
})

export const mutations = {
  changeRoute (state, payload) {
    state.step = payload
  }
}
