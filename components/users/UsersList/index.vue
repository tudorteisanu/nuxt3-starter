<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="data"
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

<script setup lang="ts">
onMounted(() => {
	fetchUsers();
});

const { data, headers, removeUser, fetchUsers } = useUsers();
const itemsPerPage = ref(10);
</script>
