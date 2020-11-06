<template>
  <v-dialog persistent v-model="show" max-width="800px">
    <v-card>
      <v-card-title>
        测试说明
      </v-card-title>
      <v-card-text class="pb-0">
        <p>你将会看到一系列观点，请点击按钮选择你对于每个观点的看法。</p>
        <v-alert text type="warning">
          <strong>提示：</strong
          >本测试的意图在于评估你的政治观念，即政治的“应然”而非“实然”，请忽略部分题目在当下的可行性。<br />若对题目摇摆不定，请跟着第一感觉走；<br />若对某道题难以理解，可试着思考题目观点的对立面。
        </v-alert>
        <v-alert text type="error">
          <strong
            >声明：为了保证本测试的区分度，<span style="color: #ff0000"
              >可能会出现高度偏激或有冒犯性的内容</span
            >，题目观点并不代表制作者的观点。</strong
          >
        </v-alert>
        <v-alert text type="info" class="mb-0">
          <strong>隐私声明：</strong
          >本测试完全由前端实现，代码全部开源，我们不会收集你的任何个人信息。
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="start" large text color="success">开始</v-btn>
        <v-btn
          @click="
            {
              show = false;
            }
          "
          large
          text
          color="default"
          >取消</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    start() {
      this.show = false;
      this.$store.commit("init");
      this.$router.push("/quiz");
    },
  },
  computed: {
    show: {
      get() {
        return this.$store.state.noticeShow;
      },
      set(val) {
        return this.$store.commit("updateNotice", val);
      },
    },
  },
};
</script>

<style></style>
