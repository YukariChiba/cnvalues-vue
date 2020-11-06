<template>
  <v-row>
    <v-col cols="2" class="text-center">
      <v-img
        :src="require('@/assets/factions/' + bar.logo_left + '.png')"
        contain
      />
      {{ bar.left_title }}
    </v-col>
    <v-col cols="8">
      <v-row class="mx-1">
        {{ val[bar.id] }}%
        <v-spacer />
        {{ bar.name }}：{{ getLabel(val[bar.id], bar.desc) }}
        <v-spacer />
        {{ 100 - val[bar.id] }}%
      </v-row>
      <v-progress-linear
        :background-color="bar.color_right"
        :color="bar.color_left"
        :value="val[bar.id]"
        height="30"
      />
    </v-col>
    <v-col cols="2" class="text-center">
      <v-img
        :src="require('@/assets/factions/' + bar.logo_right + '.png')"
        contain
      />
      {{ bar.right_title }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["bar", "val"],
  methods: {
    getLabel(val, ary) {
      if (val > 100) {
        return "";
      } else if (val > 90) {
        return ary[0];
      } else if (val > 75) {
        return ary[1];
      } else if (val > 60) {
        return ary[2];
      } else if (val >= 40) {
        return ary[3];
      } else if (val >= 25) {
        return ary[4];
      } else if (val >= 10) {
        return ary[5];
      } else if (val >= 0) {
        return ary[6];
      } else {
        return "";
      }
    }
  }
};
</script>

<style></style>
