<template>
  <v-carousel
    v-model="model"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    min-height="600"
  >
    <v-carousel-item
      v-for="article in news"
      :key="article.url"
      dark
    >
      <v-sheet height="100%">
        <v-row
          no-gutters
          class="fill-height"
        >
          <v-col cols="6" class="pa-4">
            <v-card height="100%" max-height="468">
              <v-card-text>
                <nuxt-link to="/">
                  <v-img
                    :src="article.urlToImage"
                    :lazy-src="article.urlToImage"
                    :alt="article.title"
                    max-height="430"
                    max-width="816"
                  />
                </nuxt-link>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" class="pa-4">
            <v-card height="100%" max-height="468">
              <v-card-title class="text-h4 mb-2">
                {{ article.title }}
              </v-card-title>

              <v-card-subtitle>
                {{ article.author }}
              </v-card-subtitle>

              <v-card-subtitle class="text-h5">
                {{ article.description }}
              </v-card-subtitle>

              <v-card-text class="text-h5">
                {{ article.content }}
              </v-card-text>

              <v-card-actions>
                <a :href="article.url" target="_blank">
                  Source
                </a>
                <v-btn
                  color="blue"
                  class="ml-auto"
                  to="/news"
                  nuxt
                  text
                  depressed
                >
                  Read more...
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'LatestNewsComponent',
  props: {
    news: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    model: 2
  })
}
</script>

<style>

</style>
