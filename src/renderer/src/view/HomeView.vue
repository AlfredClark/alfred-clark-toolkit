<script setup lang="ts">
import { useTheme } from 'vuetify/framework'

const theme = useTheme()
const change = (): void => {
  theme.cycle(['dark', 'light', 'custom'])
}
</script>

<template>
  <v-container class="h-100 w-100 d-flex justify-center align-center">
    <v-btn @click="change">Change</v-btn>
  </v-container>
</template>

<style scoped></style>
