<template>
  <v-app dark>
    <app-bar-component @authClick="authDialog = $event" />

    <auth-component
      :dialog.sync="authDialog"
    />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <footer-component />
  </v-app>
</template>

<script>
import AuthComponent from '~/components/Auth/AuthComponent.vue'
import FooterComponent from '~/components/Footer/FooterComponent.vue'
import AppBarComponent from '~/components/Header/AppBarComponent.vue'

export default {
  components: { AppBarComponent, FooterComponent, AuthComponent },
  data: () => ({
    authDialog: false
  })
}
</script>
