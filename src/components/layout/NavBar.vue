<template>
  <v-app-bar app color="primary" dark>
    <v-container>
      <v-row align="center">
        <div class="text-h4" @click="$router.push('/')">CN Values</div>
        <v-spacer></v-spacer>
        <span>{{ version || "未知版本" }}</span>
        <v-btn href="https://github.com/SteveCharlesYang/cnvalues" target="_blank" icon>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    version: process.env.VUE_APP_VERSION_CODE,
  }),
};
</script>

<style></style>
