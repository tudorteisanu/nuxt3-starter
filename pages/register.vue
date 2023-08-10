<script setup>
useHead({
	title: 'Login',
});
const form = ref({});
const { $validationRules } = useNuxtApp();
</script>

<template>
  <v-card style="max-width: 400px;" class="mx-auto mt-10">
    <v-card-title class="text-center">
      Create User
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-text-field
                v-model="form.firstname"
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
                v-model="form.lastname"
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
                label="E-mail"
                required
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
