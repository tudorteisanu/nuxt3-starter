<script setup>
useHead({
	title: 'Create user',
});
const form = ref({});
const isFormValid = ref(false);
const { $validationRules } = useNuxtApp();
const { addUser } = useUsers();
const router = useRouter();

const submit = async () => {
	if (!isFormValid.value) {
		return;
	}

	await addUser(form.value);
	await router.push('/users');
};
</script>

<template>
  <v-card
    style="max-width: 400px;"
    class="mx-auto mt-10"
  >
    <v-card-title class="text-center">
      Create User
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
                :rules="[$validationRules.required]"
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
                :rules="[$validationRules.required, $validationRules.email]"
                label="E-mail"
                required
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
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
