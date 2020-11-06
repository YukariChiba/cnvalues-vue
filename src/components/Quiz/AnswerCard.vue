<template>
  <div>
    <v-btn
      v-for="o in options"
      :key="o.name"
      :dark="!('nodark' in o)"
      x-large
      block
      :color="o.color"
      class="mb-2"
      @click="select_option(o.val)"
    >
      {{ o.name }}</v-btn
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        name: "强烈同意",
        color: "green",
        icon: "emoticon-outline",
        val: +1.0,
      },
      {
        name: "同意",
        color: "green lighten-3",
        icon: "emoticon-happy-outline",
        val: +0.33,
      },
      {
        name: "中立 / 不确定",
        color: "grey lighten-2",
        icon: "emoticon-neutral-outline",
        val: 0,
        nodark: true,
      },
      {
        name: "反对",
        color: "red lighten-3",
        icon: "emoticon-sad-outline",
        val: -0.33,
      },
      {
        name: "强烈反对",
        color: "red",
        icon: "emoticon-angry-outline",
        val: -1.0,
      },
    ],
  }),
  methods: {
    select_option(val) {
      if (!this.$store.getters.fullyAnswered)
        this.$store.commit("selectOption", val);
      else {
        this.$store.commit("end", val);
        this.$store.commit("calculate");
        this.$store.commit("init");
        this.$router.push("/result");
      }
    },
  },
};
</script>

<style></style>
