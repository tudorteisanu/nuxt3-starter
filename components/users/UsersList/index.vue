<script setup lang="ts">
const { data, headers } = useUsers();
const { isLoading: isRemovingUser, removeUser } = useRemoveUser();
const itemsPerPage = ref(10);
</script>

<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="data"
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
