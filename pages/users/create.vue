<template>
  <v-card style="max-width: 400px;" class="mx-auto mt-10">
    <v-card-title class="text-center">
      CreateUser
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
                :rules="rules.lastname"
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
                :rules="rules.lastname"
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
                :rules="rules.email"
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

<script setup>
useHead({
	title: 'Users',
});
const form = ref({});
const rules = ref({
	email: [
		(value) => {
			if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) {
				return true;
			}

			return 'Must be a valid e-mail.';
		},
	],
	lastname: [
		(value) => {
			if (/[^0-9]/.test(value)) {
				return true;
			}

			return 'Last name can not contain digits.';
		},
	],
	firstname: [
		(value) => {
			if (/[^0-9]/.test(value)) {
				return true;
			}

			return 'Last name can not contain digits.';
		},
	],
});
</script>
