<template>
  <v-card class="my-4">
    <v-card-subtitle class="pb-0">特殊派别</v-card-subtitle>
    <v-card-actions>
      <v-list :three-line="!(tags(axis_result).length == 0)">
        <template v-for="(f, idx) in tags(axis_result)">
          <TagItem :item="f" :key="f.id" />
          <v-divider
            :key="f.id + '-spacer'"
            v-if="idx < tags(axis_result).length - 1"
          ></v-divider>
        </template>
        <v-list-item v-if="tags(axis_result).length == 0">
          <v-list-item-content>
            <v-list-item-title>
              无
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-actions>
  </v-card>
</template>

<script>
import specials from "@/data/specials.json";
import TagItem from "./TagItem";

export default {
  props: ["axis_result"],
  components: { TagItem },
  methods: {
    tags(arr) {
      let specialitems = [];
      specials.forEach(item => {
        let value = arr[item.id];
        if (!isNaN(value)) {
          if (value >= 66) {
            if (value < 83) {
              item["notFully"] = true;
            }
            specialitems.push(item);
          }
        }
      });
      return specialitems;
    }
  }
};
</script>

<style></style>
