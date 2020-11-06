<template>
  <v-card>
    <v-card-subtitle class="pb-0">最接近的意识形态</v-card-subtitle>
    <v-card-title class="pt-0">
      {{ result(axis_result).name }}
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon :href="result(axis_result).link" v-bind="attrs" v-on="on">
            <v-icon>mdi-wikipedia</v-icon>
          </v-btn>
        </template>
        <span>百科介绍</span>
      </v-tooltip>
    </v-card-title>
    <v-card-text v-html="result(axis_result).desc" />
  </v-card>
</template>

<script>
import ideologies from "@/data/ideologies.json";

export default {
  props: ["axis_result"],
  methods: {
    result(arr) {
      let min_dist = Infinity;
      let min_index = 0;
      for (let i = 0; i < ideologies.length; i++) {
        let dist = 0;
        dist += Math.pow(Math.abs(ideologies[i].stats.econ - arr.econ), 2);
        dist += Math.pow(Math.abs(ideologies[i].stats.govt - arr.govt), 2);
        dist += Math.pow(
          Math.abs(ideologies[i].stats.scty - arr.scty),
          1.73856063
        );
        if (dist < min_dist) {
          min_index = i;
          min_dist = dist;
        }
      }
      return ideologies[min_index];
    }
  }
};
</script>

<style></style>
