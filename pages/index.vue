<template>
  <v-row class="d-flex flex-column">
    <v-col>
      <latest-news-component :news="latestNews" />
    </v-col>
    <v-col>
      <main-articles-list-component :news="getCurrentPageNews" />
    </v-col>
    <v-col>
      <main-pagination-component :page.sync="page" :length="length" />
    </v-col>
  </v-row>
</template>

<script>
import MainArticlesListComponent from '~/components/MainArticlesListComponent/MainArticlesListComponent.vue'
import MainPaginationComponent from '~/components/MainPagination/MainPaginationComponent.vue'
export default {
  components: { MainArticlesListComponent, MainPaginationComponent },
  data: () => ({
    news: null,
    latestNewsSize: 5,
    perPage: 10,
    page: 1
  }),
  async fetch () {
    this.news = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.API_KEY}`)
      .then(res => res.json())
  },
  computed: {
    latestNews () {
      return this.news.articles.slice(0, this.latestNewsSize)
    },
    getCurrentPageNews () {
      return this.news.articles.slice(this.perPage * (this.page - 1), this.perPage * this.page)
    },
    length () {
      return this.news.articles.length / this.perPage
    }
  }
}
</script>
