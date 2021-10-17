<template>
  <v-app dark>
    <app-bar-component />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <footer-component />
  </v-app>
</template>

<script>
import FooterComponent from '~/components/Footer/FooterComponent.vue'
import AppBarComponent from '~/components/Header/AppBarComponent.vue'
export default {
  components: { AppBarComponent, FooterComponent }
}
</script>
