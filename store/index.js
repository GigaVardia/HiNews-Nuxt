export const state = () => ({
  news: null,
  appSettings: {
    mainNewsDisplayType: 'grid',
    newsPerPage: 10
  }
})

export const mutations = {
  newsMutator (state, payload) {
    state.news = payload
  },
  newsPerPageMutator (state, payload) {
    state.appSettings.newsPerPage = payload
  },
  mainNewsDisplayTypeMutator (state, payload) {
    state.appSettings.mainNewsDisplayType = payload
  }
}

export const actions = {
  async newsAction ({ commit }) {
    const news = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.API_KEY}`)
      .then(res => res.json())
    commit('newsMutator', news.articles)
  },
  newsPerPageAction ({ commit }, payload) {
    commit('newsPerPageMutator', payload)
  },
  mainNewsShowTypeGridAction ({ commit }) {
    commit('mainNewsDisplayTypeMutator', 'grid')
  },
  mainNewsShowTypeListAction ({ commit }) {
    commit('mainNewsDisplayTypeMutator', 'list')
  }
}

export const getters = {
  newsGetter (state) {
    return state.news
  },
  newsPerPageGetter (state) {
    return state.appSettings.newsPerPage
  },
  mainNewsDisplayTypeGetter (state) {
    return state.appSettings.mainNewsDisplayType
  }
}
