<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="pageModel"
              :length="length"
            />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MainPaginationComponent',
  props: {
    page: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    }
  },
  computed: {
    pageModel: {
      get () {
        return this.page
      },
      set (val) {
        this.$emit('update:page', val)
      }
    }
  }
}
</script>

<style>

</style>
