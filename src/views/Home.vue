<template>
  <v-card class="my-4">
    <v-row class="pa-6 py-0">
      <v-col cols="12" sm="5" md="4" lg="3" class="justify-center pb-0">
        <v-card-title>
          <v-img src="@/assets/favicon.png" alt="favicon" max-width="200px" />
        </v-card-title>
      </v-col>
      <v-col cols="12" sm="7" md="8" lg="9" class="pt-0">
        <v-card-title class="text-h3 orange--text">CN Values</v-card-title>
        <v-card-subtitle class="text-h6 mt-2">
          CN Values 是基于 8values 源代码开发制作的娱乐性政治立场测试。
          <br />
          为了使测试更贴近国人，在参考数个其他测试后，以中国当下语境为背景重新编制了测试题。
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn x-large color="primary" @click="start">
        点击开始
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  methods: {
    start() {
      this.$store.commit("updateNotice", true);
    }
  }
};
</script>
