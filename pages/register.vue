<script setup lang="ts">
import { CreateUserInterface } from 'types';

useHead({
  title: 'Login',
});
definePageMeta({
  middleware: 'auth',
  layout: 'auth',
});

const valid = ref(false);
const form: Ref<CreateUserInterface> = ref({
  firstName: "some first name",
  lastName: "some last name",
  roles: ['user'],
  password: "2134123412341234123",
  email: "someEmail@mail.ru"
});
const { $validationRules } = useNuxtApp();

const { register } = useAuth();
const onSubmit = async () => {
  if (!valid.value) {
    return;
  }

  await register({ ...form.value, roles: ['user'] });
};
</script>

<template>
  <v-card style="max-width: 400px;" class="mx-auto mt-10">
    <v-card-title class="text-center">
      Create User
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" @submit.prevent="onSubmit()">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-text-field
                v-model="form.firstName"
                :rules="[
                  $validationRules.required,
                  $validationRules.minLength(2),
                  $validationRules.maxLength(256),
                ]"
                label="First name"
                required
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-text-field
                v-model="form.lastName"
                :rules="[
                  $validationRules.required,
                  $validationRules.minLength(2),
                  $validationRules.maxLength(256),
                ]"
                label="Last name"
                required
              />
            </v-col>
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
                required
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
              <div class="mt-4 text-right">
                <span>Have an account?</span>
                <nuxt-link to="/login">
                  Sign In
                </nuxt-link>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
