<template>
  <div class="text-center">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          color="orange"
          dark
          fab
          outlined
          v-bind="attrs"
          v-on="on"
          ><v-icon>mdi-share</v-icon></v-btn
        >
      </template>
      <span>分享</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          color="green"
          dark
          fab
          href="/"
          outlined
          v-bind="attrs"
          v-on="on"
          ><v-icon>mdi-restart</v-icon></v-btn
        >
      </template>
      <span>重新开始</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
