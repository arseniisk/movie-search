<template>
  <b-tag class="tag is-info is-light" size="is-medium">
    {{ year }}
  </b-tag>
</template>

<script>
export default {
  name: "MovieYearTag",
  props: {
    year: String,
  },
};
</script>
