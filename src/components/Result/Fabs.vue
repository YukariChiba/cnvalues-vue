<template>
  <v-tooltip left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="green"
        dark
        fab
        href="/"
        fixed
        right
        bottom
        v-bind="attrs"
        v-on="on"
        ><v-icon>mdi-restart</v-icon></v-btn
      >
    </template>
    <span>重新开始</span>
  </v-tooltip>
</template>

<script>
export default {};
</script>

<style></style>
