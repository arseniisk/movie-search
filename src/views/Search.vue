<template>
  <div>
    <div class="columns mb-0">
      <div class="column is-flex is-justify-content-center">
        <b-field
          :type="{ 'is-danger': isSearchEmpty }"
          message="Search movies catalog by title"
        >
          <b-input
            v-model.trim="searchText"
            placeholder="Search..."
            type="search"
            icon="search"
          />
          <p class="control">
            <b-button
              type="is-primary"
              label="Search"
              @click="searchMovies"
              :disabled="isSearchEmpty || isSearchNull"
            />
          </p>
        </b-field>
        <b-select class="ml-3" placeholder="Filter by type" clearable>
          <option v-for="option in types" :value="option" :key="option">
            {{ option | capitalize }}
          </option>
        </b-select>
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
    console.log(testJson);
  },
  computed: {
    isSearchEmpty() {
      return this.searchText === "";
    },
    isSearchNull() {
      return this.searchText === null;
    },
  },
  data() {
    return {
      types: ["all", "movie", "series", "episode"],
      isSearchValid: true,
      searchText: null,
    };
  },
  methods: {
    searchMovies() {
      if (this.searchText === "") return;
    },
  },
};
</script>
