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
  async asyncData ({ store }) {
    await store.dispatch('newsAction')
  },
  data: () => ({
    latestNewsSize: 5,
    page: 1
  }),
  computed: {
    news () {
      return this.$store.getters.newsGetter
    },
    perPage () {
      return this.$store.getters.newsPerPageGetter
    },
    latestNews () {
      return this.news.slice(0, this.latestNewsSize)
    },
    getCurrentPageNews () {
      return this.news.slice(this.perPage * (this.page - 1), this.perPage * this.page)
    },
    length () {
      return this.news.length / this.perPage
    }
  }
}
</script>
