<script setup lang="ts">
const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <v-container>
    <v-btn @click="ipcHandle">IPC</v-btn>
  </v-container>
</template>
