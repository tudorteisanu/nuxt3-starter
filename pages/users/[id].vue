<script setup>
const form = ref({});
const { $validationRules } = useNuxtApp();
const {
	getUserById,
	updateUserById,
} = useUsers();
const route = useRoute();
const router = useRouter();
const userId = Number(route.params.id);

const isFormValid = ref(false);

onMounted(() => {
	getUserById(userId).then((user) => {
		if (user) {
			form.value = user;
			useHead({
				title: `Editing: ${user.firstname} ${user.lastname}`,
			});
		}
	});
});

const submit = async () => {
	if (!isFormValid.value) {
		return;
	}

	await updateUserById(userId, form.value);
	await router.push('/users');
};
</script>

<template>
  <v-card
    class="mx-auto mt-10"
    style="max-width: 400px;"
  >
    <v-card-title class="text-center">
      Edit User
    </v-card-title>
    <v-card-text>
      <v-form
        v-model="valid"
        @submit.prevent="submit"
      >
        <v-container>
          <v-row>
            <v-col
              class="mt-0"
              cols="12"
            >
              <v-text-field
                v-model="form.firstname"
                :rules="[$validationRules.required, $validationRules.minLength(2)]"
                label="First name"
                required
              />
            </v-col>
            <v-col
              class="mt-0"
              cols="12"
            >
              <v-text-field
                v-model="form.lastname"
                :rules="[$validationRules.required]"
                label="Last name"
                required
              />
            </v-col>
            <v-col
              class="mt-0"
              cols="12"
            >
              <v-text-field
                v-model="form.email"
                :rules="[$validationRules.required, $validationRules.email]"
                label="E-mail"
                required
              />
            </v-col>
            <v-col
              class="mt-0"
              cols="12"
            >
              <v-btn
                color="primary"
                style="width: 100%"
                type="submit"
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
