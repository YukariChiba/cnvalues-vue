<template>
  <div class="result">
    <v-row>
      <v-col cols="12" md="6" class="pb-0 py-1">
        <v-row class="pa-0">
          <v-col cols="12" class="pt-0 py-1">
            <Description :axis_result="result" />
          </v-col>
          <v-col cols="12">
            <Tags :axis_result="result" />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="py-1" cols="12" md="6">
        <Bar :axis_result="result" />
      </v-col>
    </v-row>
    <Fabs />
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

<style lang="scss" scoped>
.result {
  min-height: 90vh;
}
</style>
