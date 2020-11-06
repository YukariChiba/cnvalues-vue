<template>
  <v-row>
    <v-col cols="12" md="8" class="d-flex flex-column">
      <QuestionCard />
    </v-col>
    <v-col cols="12" md="4" class="d-flex flex-column">
      <AnswerCard />
    </v-col>
  </v-row>
</template>

<script>
import QuestionCard from "@/components/Quiz/QuestionCard";
import AnswerCard from "@/components/Quiz/AnswerCard";

export default {
  components: { QuestionCard, AnswerCard },
  mounted() {
    //this.$store.commit("init");
  },
};
</script>
