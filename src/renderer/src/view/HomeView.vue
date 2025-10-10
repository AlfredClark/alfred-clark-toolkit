<script setup lang="ts">
import { ref } from 'vue'

const order = ref(0)
</script>

<template>
  <v-navigation-drawer color="surface-variant" permanent></v-navigation-drawer>

  <v-app-bar :order="order" color="grey-lighten-2" title="Application bar" flat>
    <template v-slot:append>
      <v-switch
        v-model="order"
        class="me-2"
        false-value="0"
        label="Toggle order"
        true-value="-1"
        hide-details
        inset
      ></v-switch>
    </template>
  </v-app-bar>

  <v-main class="d-flex align-center justify-center" height="300">
    <v-container>
      <v-sheet
        border="dashed md"
        color="surface-light"
        height="200"
        rounded="lg"
        width="100%"
      ></v-sheet>
    </v-container>
  </v-main>
</template>

<style scoped></style>
