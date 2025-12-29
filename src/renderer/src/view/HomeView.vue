<script lang="ts" setup>
const minimize = (): void => window.electron.ipcRenderer.send('minimize')
const maximize = (): void => window.electron.ipcRenderer.send('maximize')
const close = (): void => window.electron.ipcRenderer.send('close')
</script>
<template>
  <v-system-bar class="electron-drag-bar" color="grey-darken-3">
    <v-icon class="electron-no-drag mr-1" icon="mdi-minus" @click="minimize"></v-icon>
    <v-icon
      class="electron-no-drag mr-1"
      icon="mdi-checkbox-blank-outline"
      @click="maximize"
    ></v-icon>
    <v-icon class="electron-no-drag mr-1" icon="mdi-close" @click="close"></v-icon>
  </v-system-bar>

  <v-navigation-drawer color="grey-darken-2" permanent width="72">
    <v-list-item subtitle="Vuetify" title="My Application"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>

  <v-navigation-drawer color="grey-darken-1" permanent width="150">
    <v-list-item subtitle="Vuetify" title="My Application"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>

  <v-app-bar color="grey" flat height="48"></v-app-bar>

  <v-navigation-drawer color="grey-lighten-1" location="right" permanent width="150">
    <v-list-item subtitle="Vuetify" title="My Application"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>

  <v-app-bar color="grey-lighten-2" flat height="48" location="bottom"></v-app-bar>

  <v-main class="d-flex align-center justify-center" height="300">
    <v-container>
      <v-sheet border="dashed md" color="surface-light" height="150" rounded="lg" width="100%">
      </v-sheet>
      <v-btn></v-btn>
    </v-container>
  </v-main>
</template>

<style scoped></style>
