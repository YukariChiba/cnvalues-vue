<template>
  <v-card class="my-4">
    <v-card-text>
      <v-row>
        <v-col v-for="bar in bars" :key="bar.name" cols="12"
          ><BarItem :bar="bar" :val="axis_result"
        /></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import BarItem from "./BarItem";
import bars from "@/data/bars";

export default {
  components: { BarItem },
  data: () => ({
    bars: bars,
  }),
  props: ["axis_result"]
};
</script>

<style></style>
