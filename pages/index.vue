<template>
  <v-row>
    <v-col>
      <latest-news-component :news="latestNews" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    news: null,
    latestNewsSize: 5
  }),
  async fetch () {
    this.news = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.API_KEY}`)
      .then(res => res.json())
  },
  computed: {
    latestNews () {
      return this.news.articles.slice(0, this.latestNewsSize)
    }
  }
}
</script>
