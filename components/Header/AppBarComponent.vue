<template>
  <v-app-bar app>
    <v-container class="pa-0">
      <v-row no-gutters class="d-flex align-center">
        <v-col>
          <v-app-bar-title>
            <nuxt-link to="/" class="text-decoration-none">
              Hi-News
            </nuxt-link>
          </v-app-bar-title>
        </v-col>
        <v-spacer />
        <v-col>
          <v-text-field
            placeholder="Search"
            append-icon="mdi-magnify"
            hide-details
          />
        </v-col>
        <v-col>
          <v-btn icon>
            <v-icon>
              mdi-account
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
