<template>
  <v-app-bar app>
    <v-container class="pa-0">
      <v-row no-gutters class="d-flex align-center">
        <v-col>
          <nuxt-link to="/" class="text-decoration-none text-h4">
            Hi-News
          </nuxt-link>
        </v-col>
        <v-spacer />
        <v-col>
          <v-text-field
            class="mr-3"
            placeholder="Search"
            append-icon="mdi-magnify"
            hide-details
          />
        </v-col>
        <v-col>
          <v-btn
            icon
            @click="$emit('authClick', $event)"
          >
            <v-icon>
              mdi-account
            </v-icon>
          </v-btn>
          <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-icon v-if="$vuetify.theme.dark">
              mdi-weather-sunny
            </v-icon>
            <v-icon v-else>
              mdi-weather-night
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBarComponent'
}
</script>

<style>

</style>
