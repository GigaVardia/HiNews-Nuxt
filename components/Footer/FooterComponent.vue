<template>
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
</template>

<script>
export default {
  name: 'FooterComponent',
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

<style>

</style>
