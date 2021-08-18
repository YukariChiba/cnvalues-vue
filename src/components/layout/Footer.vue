<template>
  <v-footer
    dark
    padless
    class="primary white--text text-center"
    :class="$vuetify.theme.dark ? 'darken-1' : 'lighten-1'"
  >
    <v-card-text>
      <div>本测试受以下测试启发完成：</div>
      <v-btn text v-for="link in links" :key="link.name">{{ link.name }}</v-btn>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="white--text primary">
      {{ new Date().getFullYear() }} — <strong>CN Values Team</strong> <br />
      感谢 YAVT 制作者对本测试的协助
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "8values"
      },
      {
        name: "LeftValues"
      },
      {
        name: "RightValues"
      },
      {
        name: "PolitiScales"
      },
      {
        name: "The Political Compass"
      },
      {
        name: "北大未名版中国政治坐标系测试"
      },
      {
        name: "Yet Another Values Test"
      }
    ]
  })
};
</script>

<style></style>
