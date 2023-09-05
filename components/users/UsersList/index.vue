<script setup lang="ts">
import { headers } from '~/settings/data/users';
import { useUsersStore } from '~/store/users';
const usersStore = useUsersStore()
const { isLoading: isRemovingUser, removeUser } = useRemoveUser();
const itemsPerPage = ref(10);
</script>

<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="usersStore.items"
    :loading="isRemovingUser"
  >
    <template #item.actions="{item}">
      <v-btn
        :to="`/users/${item.raw.id}`"
        flat
      >
        <v-icon
          size="small"
          class="me-2"
        >
          mdi-pencil
        </v-icon>
      </v-btn>
      <v-icon
        size="small"
        @click="removeUser(item.raw)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
