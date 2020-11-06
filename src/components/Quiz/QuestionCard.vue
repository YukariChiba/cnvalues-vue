<template>
  <v-card loading height="100%" hover>
    <template #progress>
      <v-progress-linear striped v-model="percent" />
    </template>
    <v-card-subtitle>
      第 {{ now_cnt }} 题 剩余 {{ rem_cnt }} 题
    </v-card-subtitle>
    <v-card-title>
      <blockquote>{{ desc.question }}</blockquote>
    </v-card-title>
    <v-card-actions class="mt-8">
      <div class="question-buttom">
        <v-btn
          text
          color="primary"
          v-if="now_cnt != 1"
          @click="$store.commit('prevQuestion')"
          >上一题</v-btn
        >
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  computed: {
    now_cnt() {
      return this.$store.state.currentQuestion + 1;
    },
    rem_cnt() {
      return this.$store.getters.questionsLength - this.now_cnt;
    },
    desc() {
      return this.$store.getters.currentQuestion;
    },
    percent() {
      return (100 * this.now_cnt) / this.$store.getters.questionsLength;
    },
  },
};
</script>

<style lang="scss" scoped>
.question-buttom {
  position: absolute;
  bottom: 5px;
}
</style>
