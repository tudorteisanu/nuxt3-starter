<template>
  <v-toolbar density="compact">
    <v-btn @click="toggle()">
      toggle
    </v-btn>
    <v-btn to="/">
      Home
    </v-btn>
    <v-btn to="about">
      About
    </v-btn>
  </v-toolbar>
</template>

<script setup>
const { show, hide, open } = useSidebar();

const toggle = () => {
	console.log(open);
	if (open) {
		hide();
		return;
	}

	show();
};
</script>
