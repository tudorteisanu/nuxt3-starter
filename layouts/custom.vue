<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template #append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            />
          </template>
        </v-list-item>

        <v-divider />

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" to="/" />
          <v-list-item prepend-icon="mdi-account" title="About" to="/about" />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <TheHeader />
        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
const drawer = ref(true);
const rail = ref(true);
</script>
