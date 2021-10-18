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

<style lang="scss">
a {
  color: inherit !important;;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: $grey;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: darken($grey, 20%);
}

.v-application.theme--light {
  /* Track */
  ::-webkit-scrollbar-track {
    background: $dark_white;
  }
}

.v-application.theme--dark {
  /* Track */
  ::-webkit-scrollbar-track {
    background: $light_black;
  }
}
</style>
