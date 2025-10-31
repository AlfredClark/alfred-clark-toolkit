<script setup lang="ts">
const minimize = (): void => window.electron.ipcRenderer.send('minimize')
const maximize = (): void => window.electron.ipcRenderer.send('maximize')
const close = (): void => window.electron.ipcRenderer.send('close')
</script>
<template>
  <v-system-bar class="electron-drag-bar" color="grey-darken-3">
    <v-icon icon="mdi-minus" class="electron-no-drag mr-1" @click="minimize"></v-icon>
    <v-icon
      icon="mdi-checkbox-blank-outline"
      class="electron-no-drag mr-1"
      @click="maximize"
    ></v-icon>
    <v-icon icon="mdi-close" class="electron-no-drag mr-1" @click="close"></v-icon>
  </v-system-bar>

  <v-navigation-drawer color="grey-darken-2" width="72" permanent>
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>

  <v-navigation-drawer color="grey-darken-1" width="150" permanent>
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>

  <v-app-bar color="grey" height="48" flat></v-app-bar>

  <v-navigation-drawer color="grey-lighten-1" location="right" width="150" permanent>
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>

  <v-app-bar color="grey-lighten-2" height="48" location="bottom" flat></v-app-bar>

  <v-main class="d-flex align-center justify-center" height="300">
    <v-container>
      <v-sheet border="dashed md" color="surface-light" height="150" rounded="lg" width="100%">
      </v-sheet>
      <v-btn></v-btn>
    </v-container>
  </v-main>
</template>

<style scoped></style>
