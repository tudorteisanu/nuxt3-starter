<script setup lang="ts">
import { CreateUserInterface } from 'types/user.interface';

useHead({
	title: 'Create user',
});
const form = ref({} as CreateUserInterface);
const isFormValid = ref(false);
const { $validationRules } = useNuxtApp();
const { createUser, isSubmitting } = useCreateUser();
const router = useRouter();

const submit = async () => {
	if (!isFormValid.value) {
		return;
	}

	await createUser(form.value);
	await router.push('/users');
};
</script>

<template>
  <v-card
    style="max-width: 400px;"
    class="mx-auto mt-10"
  >
    <v-card-title class="text-center">
      {{ $t('pages.createUser.title') }}
    </v-card-title>
    <v-card-text>
      <v-form
        v-model="isFormValid"
        @submit.prevent="submit"
      >
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-text-field
                v-model="form.firstname"
                :rules="[$validationRules.required]"
                :label="$t('pages.createUser.form.firstName')"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-text-field
                v-model="form.lastname"
                :rules="[$validationRules.required]"
                :label="$t('pages.createUser.form.lastName')"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-text-field
                v-model="form.email"
                :rules="[$validationRules.required, $validationRules.email]"
                :label="$t('pages.createUser.form.email')"
                type="email"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-btn
                type="submit"
                style="width: 100%"
                color="primary"
                :loading="isSubmitting"
              >
                {{ $t('pages.createUser.form.submit') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
