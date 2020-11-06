<template>
  <v-app-bar app color="primary" dark>
    <v-container>
      <v-row align="center">
        <div class="text-h4" @click="$router.push('/')">CN Values</div>
        <v-spacer></v-spacer>
        <span class="mx-2">{{ version || "未知版本" }}</span>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn @click="toggleDark" icon v-bind="attrs" v-on="on">
              <v-icon>mdi-brightness-4</v-icon>
            </v-btn>
          </template>
          <span>切换亮度模式</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://github.com/SteveCharlesYang/cnvalues"
              target="_blank"
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>GitHub 项目地址</span>
        </v-tooltip>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    version: process.env.VUE_APP_VERSION_CODE
  }),
  methods: {
    toggleDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style></style>
