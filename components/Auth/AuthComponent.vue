<template>
  <v-dialog
    v-model="dialogModel"
    persistent
    max-width="600px"
  >
    <v-tabs>
      <v-tab>
        Login
      </v-tab>
      <v-tab>
        Register
      </v-tab>

      <v-btn
        color="red"
        class="ml-auto"
        icon
        @click="dialogModel = false"
      >
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>

      <v-tab-item>
        <v-form ref="loginForm">
          <v-card>
            <v-card-text>
              <v-text-field
                v-model="loginForm.username"
                :loading="isLoading"
                placeholder="Username"
              />
              <v-text-field
                v-model="loginForm.password"
                :loading="isLoading"
                placeholder="Password"
              />

              <v-checkbox
                v-model="loginForm.rememberMe"
                label="Remember me"
              />
            </v-card-text>

            <v-card-actions class="justify-end">
              <v-btn
                @click="login"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-tab-item>

      <v-tab-item>
        <v-form ref="registerForm">
          <v-card>
            <v-card-text>
              <v-text-field
                v-model="registerForm.username"
                :loading="isLoading"
                placeholder="Username"
              />
              <v-text-field
                v-model="registerForm.email"
                :loading="isLoading"
                placeholder="Email"
              />
              <v-text-field
                v-model="registerForm.password"
                :loading="isLoading"
                placeholder="Password"
              />
              <v-text-field
                v-model="registerForm.password_confirmation"
                :loading="isLoading"
                placeholder="Password confirmation"
              />

              <v-checkbox
                v-model="registerForm.terms"
                label="I accept the Terms and Conditions"
              />
            </v-card-text>

            <v-card-actions class="justify-end">
              <v-btn
                @click="register"
              >
                Register
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-tab-item>
    </v-tabs>
  </v-dialog>
</template>

<script>
export default {
  name: 'AuthComponent',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    dialog: {
      required: true,
      default: false
    }
  },
  data: () => ({
    isLoading: false,
    loginForm: {
      username: null,
      password: null,
      rememberMe: false
    },
    registerForm: {
      username: null,
      email: null,
      password: null,
      password_confirmation: null,
      terms: false
    }
  }),
  computed: {
    dialogModel: {
      get () {
        return this.dialog
      },
      set (val) {
        this.$emit('update:dialog', val)
      }
    }
  },
  methods: {
    async register () {
      if (this.$refs.loginForm.validate()) {
        this.isLoading = true
        try {
          await new Promise(resolve => setTimeout(resolve, 1000))
        } catch (err) {
          return err
        } finally {
          this.isLoading = false
        }
      }
    },
    async login () {
      if (this.$refs.registerForm.validate()) {
        this.isLoading = true
        try {
          await new Promise(resolve => setTimeout(resolve, 1000))
        } catch (err) {
          return err
        } finally {
          this.isLoading = false
        }
      }
    }
  }
}
</script>

<style>
html {
  overflow: auto !important;
}
</style>
