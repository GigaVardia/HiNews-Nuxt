<template>
  <v-sheet height="100%" color="transparent">
    <v-row>
      <v-col
        v-for="article in news"
        :key="`main-articles-${article.title}`"
        cols="3"
      >
        <v-card>
          <v-card-title>
            {{ article.title }}
          </v-card-title>

          <v-card-text>
            <nuxt-link to="/">
              <v-img
                :src="article.urlToImage"
                :lazy-src="article.urlToImage"
                :alt="article.title"
                max-height="430"
                max-width="600"
              />
            </nuxt-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'MainArticlesListComponent',
  props: {
    news: {
      type: Array,
      default: null,
      reqired: true
    }
  }
}
</script>

<style>

</style>
