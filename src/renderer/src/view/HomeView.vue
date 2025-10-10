<script setup lang="ts">
import request from '@renderer/request'

const minimize = (): void => window.electron.ipcRenderer.send('minimize')
const maximize = (): void => window.electron.ipcRenderer.send('maximize')
const close = (): void => window.electron.ipcRenderer.send('close')

const test = (): void => {
  request
    .get('/v1/hw')
    .then((response) => {
      alert(response.data)
    })
    .catch((error: Error) => {
      alert(error.message)
    })
}
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

  <v-navigation-drawer color="grey-darken-2" width="72" permanent></v-navigation-drawer>

  <v-navigation-drawer color="grey-darken-1" width="150" permanent></v-navigation-drawer>

  <v-app-bar color="grey" height="48" flat></v-app-bar>

  <v-navigation-drawer
    color="grey-lighten-1"
    location="right"
    width="150"
    permanent
  ></v-navigation-drawer>

  <v-app-bar color="grey-lighten-2" height="48" location="bottom" flat></v-app-bar>

  <v-main class="d-flex align-center justify-center" height="300">
    <v-container>
      <v-sheet border="dashed md" color="surface-light" height="150" rounded="lg" width="100%">
        <v-btn @click="test">REQUEST</v-btn>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<style scoped></style>
