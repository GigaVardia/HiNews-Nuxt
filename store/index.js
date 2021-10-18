export const state = () => ({
  news: null
})

export const mutations = {
  newsMutator (state, payload) {
    state.news = payload
  }
}

export const actions = {
  async newsAction ({ commit }) {
    const news = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.API_KEY}`)
      .then(res => res.json())
    commit('newsMutator', news.articles)
  }
}

export const getters = {
  newsGetter (state) {
    return state.news
  }
}
