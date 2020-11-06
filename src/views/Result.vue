<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <Description :axis_result="result" />
        <Tags :axis_result="result" />
        <Fabs />
      </v-col>
      <v-col cols="12" md="6"><Bar :axis_result="result" /> </v-col>
    </v-row>
  </div>
</template>

<script>
import Description from "@/components/Result/Description";
import Bar from "@/components/Result/Bar";
import Tags from "@/components/Result/Tags";
import Fabs from "@/components/Result/Fabs";

export default {
  components: { Description, Bar, Tags, Fabs },
  computed: {
    result() {
      return this.$store.getters.calculate;
    }
  }
};
</script>

<style></style>
