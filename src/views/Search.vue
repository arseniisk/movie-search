<template>
  <div>
    <div class="columns mb-0">
      <div class="column is-flex is-justify-content-center">
        <b-field message="What do you want to search?">
          <b-input placeholder="Search..." type="search" icon="search">
          </b-input>
          <p class="control">
            <b-button type="is-primary" label="Search" />
          </p>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column py-0">
        <movies-table />
      </div>
    </div>
  </div>
</template>

<script>
import MoviesTable from "@/components/MoviesTable";
import testJson from "@/data/dev-set-1";

export default {
  name: "Search",
  components: {
    MoviesTable,
  },
  mounted() {
    console.log(testJson)
  }
};
</script>
