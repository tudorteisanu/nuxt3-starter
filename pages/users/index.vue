<script setup>
useHead({
	title: 'Users',
});
</script>

<template>
  <v-card>
    <div class="text-bold">
      Users catalogue
    </div>
    <v-card-title>
      <div class="d-flex justify-between">
        <v-btn to="/users/create">
          Create User
        </v-btn>
        <div class="ml-auto">
          <v-icon>mdi-filter</v-icon>
        </div>
      </div>
    </v-card-title>
    <v-card-text>
      <UsersList />
    </v-card-text>
  </v-card>
</template>
