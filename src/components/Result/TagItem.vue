<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-avatar class="elevation-4">
          <v-img
            :style="{ opacity: 'notFully' in item ? '0.5' : '' }"
            :src="require('@/assets/factions/' + item.id + '.png')"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            :class="'notFully' in item ? 'grey--text' : ''"
            v-html="item.name"
          ></v-list-item-title>
          <v-list-item-subtitle v-html="item.desc"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title class="justify-center avatar-section py-0">
        <v-avatar size="128" color="primary" class="avatar">
          <v-img
            :style="{ opacity: 'notFully' in item ? '0.5' : '' }"
            :src="require('@/assets/factions/' + item.id + '.png')"
          ></v-img>
        </v-avatar>
      </v-card-title>
      <v-card-title class="text-h5">
        {{ item.name }}
      </v-card-title>
      <v-card-text>{{ item.desc }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({
    dialog: false
  })
};
</script>

<style scoped>
.v-card {
  overflow-y: visible !important;
}

.avatar {
  position: relative;
  margin-bottom: -64px;
  top: -64px;
}

.avatar-section {
  overflow: visible;
}
</style>

<style>
.v-dialog {
  overflow-y: visible !important;
}
</style>
