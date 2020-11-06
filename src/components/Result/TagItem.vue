<template>
  <v-list-item>
    <v-list-item-avatar class="elevation-4">
      <v-img :src="require('@/assets/factions/' + item.id + '.png')"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-html="item.name"></v-list-item-title>
      <v-list-item-subtitle v-html="item.desc"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style></style>
