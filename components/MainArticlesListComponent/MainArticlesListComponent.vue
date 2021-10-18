<template>
  <v-sheet height="100%" color="transparent">
    <v-row>
      <v-col
        v-for="article in news"
        :key="`main-articles-${article.title}`"
        cols="3"
      >
        <v-card width="430" height="360">
          <v-card-title>
            <nuxt-link
              :to="{ name: 'articles-article', params: { article: article.title }}"
              class="text-decoration-none"
            >
              {{ article.title }}
            </nuxt-link>
          </v-card-title>

          <v-card-text>
            <nuxt-link :to="{ name: 'articles-article', params: { article: article.title }}">
              <v-img
                :src="article.urlToImage"
                :lazy-src="article.urlToImage"
                :alt="article.title"
                width="390"
                height="220"
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
