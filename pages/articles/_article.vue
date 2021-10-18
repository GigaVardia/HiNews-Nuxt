<template>
  <v-sheet>
    <v-card min-height="100vha">
      <v-card-title class="text-h2 d-flex justify-center">
        {{ article.title }}
      </v-card-title>

      <v-card-subtitle class="text-h3 mt-2 d-flex justify-center">
        {{ article.author }}
      </v-card-subtitle>

      <v-card-subtitle class="text-h4">
        {{ article.description }}
      </v-card-subtitle>

      <v-card-text class="text-h5">
        {{ article.content }}
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  async asyncData ({ params, redirect, store }) {
    let article
    if (store.getters.newsGetter) {
      article = store.getters.newsGetter.find(article => article.title === params.article)
    } else {
      await store.dispatch('newsAction')
      article = store.getters.newsGetter.find(article => article.title === params.article)
    }

    if (!article) {
      return redirect('/')
    }

    return { article }
  }
}
</script>

<style>

</style>
