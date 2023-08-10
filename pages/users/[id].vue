<script setup>
const form = ref({});
const { $validationRules } = useNuxtApp();
const { getUserById, updateUserById } = useUsers();
const route = useRoute();
const router = useRouter();
const userId = Number(route.params.id);

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

const submit = () => {
	updateUserById(userId, form.value).then(() => {
		router.push('/users');
	});
};
</script>

<template>
  <v-card style="max-width: 400px;" class="mx-auto mt-10">
    <v-card-title class="text-center">
      Edit User
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-text-field
                v-model="form.firstname"
                :rules="[$validationRules.required, $validationRules.minLength(2)]"
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
                :rules="[$validationRules.required]"
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
