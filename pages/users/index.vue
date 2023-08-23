<script setup>
useHead({
	title: 'Users',
});
</script>

<template>
  <v-card>
    <v-card-title>
      <div class="d-flex justify-between">
        <v-btn to="/users/create" color="primary">
          {{ $t('pages.users.create') }}
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
