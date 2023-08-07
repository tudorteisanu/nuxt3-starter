<template>
  <v-card>
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon
          variant="text"
          data-test="menu-toggle"
          @click.stop="drawer = !drawer"
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

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list
          data-test="menu-items"
          link
        >
          <v-list-item
            v-for="item in sideMenu"
            :key="item.title"
            :title="item.title"
            :to="item.to"
          />
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <v-card-text>
          <slot />
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { sideMenu } from '@/config/menu';

const drawer = ref(false);
</script>
