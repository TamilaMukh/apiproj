export default {
  actions: {
      addImage({commit}, obj) {
          commit('nazvanieMutacii', obj);
      }
  },
  mutations: {
      nazvanieMutacii(state, obj) {
          state.favorites.push(obj)
      }
  },
  state: {
      favorites: []
  },
  getters: {
      allImages(state) {
          return state.favorites
      },
      objectsCount(state) {
        return state.favorites.length
      }
  },
}