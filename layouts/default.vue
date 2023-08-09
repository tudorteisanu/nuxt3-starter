<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        :rail="drawer"
        permanent
      >
        <v-list>
          <v-list-item
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          />
        </v-list>
        <v-divider />

        <v-list
          data-test="menu-items"
          class="pt-0"
        >
          <v-list-item
            v-for="item in sideMenu"
            :key="item.title"
            :prepend-icon="item.icon"
            :to="item.to"
            :title="item.title"
          />
        </v-list>
      </v-navigation-drawer>

      <v-main style="min-height: 100vh">
        <v-app-bar
          color="primary"
          prominent
        >
          <v-app-bar-nav-icon
            variant="text"
            data-test="menu-toggle"
            @click.stop="toggle()"
          />
          <v-toolbar-title>My files</v-toolbar-title>
          <v-spacer />
          <v-btn
            variant="text"
            icon="mdi-magnify"
          />
          <v-btn
            variant="text"
            icon="mdi-filter"
          />
          <v-btn
            variant="text"
            icon="mdi-dots-vertical"
          />
        </v-app-bar>
        <v-card-text>
          <slot />
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { sideMenu } from '@/config/menu';

const drawer = ref(true);
const toggle = () => {
	drawer.value = !drawer.value;
};
</script>
