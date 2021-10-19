<template>
  <v-sheet height="100%" color="transparent">
    <v-row>
      <v-col
        v-for="article in news"
        :key="`main-articles-${article.title}`"
        cols="12"
        md="4"
      >
        <v-card
          :width="isMobile ? '100%' : '430'"
          :height="isMobile ? 'auto' : '360'"
          class="overflow-hidden"
        >
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
                height="100%"
                aspect-ratio="1.77"
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
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.mobile
    }
  }
}
</script>

<style>

</style>
