<template>
  <v-app dark>
    <v-app-bar app>
      <v-container class="pa-0">
        <v-row no-gutters class="d-flex align-center">
          <v-col>
            <v-app-bar-title>
              Hi-News
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
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <v-container class="pa-0">
        <v-row
          no-gutters
          class="d-flex align-center text-center"
        >
          <v-col>
            &copy; 2021
          </v-col>

          <v-col>
            By Giga Vardia
          </v-col>

          <v-col>
            <v-btn
              v-for="item in socialItems"
              :key="item.id"
              :to="item.to"
              icon
            >
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    socialItems: [
      {
        to: '#',
        icon: 'mdi-github',
        id: 'footer-social-item-github'
      },
      {
        to: '#',
        icon: 'mdi-linkedin',
        id: 'footer-social-item-linkedin'
      }
    ]
  })
}
</script>
