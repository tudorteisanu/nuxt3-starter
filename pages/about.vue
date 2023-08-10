<script setup lang="ts">
useHead({
	title: 'About',
});
</script>

<template>
  <v-card>
    <v-card-title>
      <span class="text-h2 text-bold">
        About us
      </span>
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col
          v-for="item in 24"
          :key="item"
          cols="4"
        >
          <v-card

            class="mx-auto"
          >
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              Number 10
            </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange">
                Share
              </v-btn>

              <v-btn color="orange">
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
