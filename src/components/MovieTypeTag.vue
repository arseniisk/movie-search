<template>
  <b-tag :class="['tag', typeClass]" size="is-medium">
    {{ type | capitalize }}
  </b-tag>
</template>

<script>
export default {
  name: "MovieTypeTag",
  props: {
    type: String,
  },
  computed: {
    typeClass() {
      switch (this.type) {
        case "movie":
          return "is-success";
        case "series":
          return "is-info";
        case "episode":
          return "is-link";
        default:
          return "is-light";
      }
    },
  },
};
</script>
