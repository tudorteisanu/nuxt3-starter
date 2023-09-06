<script setup>
useHead({
  title: 'Login',
});
definePageMeta({
  layout: 'auth',
  middleware: 'auth',
});
const form = ref({
  password: '1s2ASD3d4@5678',
  email: 'test@domain.com',
});
const { $validationRules } = useNuxtApp();
const { login } = useAuth();

const submit = () => {
  login(form.value);
};
</script>

<template>
  <v-card style="max-width: 400px;" class="mx-auto mt-10">
    <v-card-title class="text-center">
      Create User
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-text-field
                v-model="form.email"
                :rules="[
                  $validationRules.required,
                  $validationRules.email,
                ]"
                label="E-mail"
                required
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-text-field
                v-model="form.password"
                :rules="[
                  $validationRules.required,
                  $validationRules.maxLength(256),
                  $validationRules.minLength(8)
                ]"
                label="Password"
                type="password"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-btn type="submit" style="width: 100%" color="primary">
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
