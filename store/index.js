export const state = () => ({
  acceptedPrivacy: null,
})

export const mutations = {
  set(state, value) {
    state.acceptedPrivacy = value
    this.$storage.setLocalStorage('accept-privacy', value)
  },
}
