<template>
  <div>
    <div class="columns mb-0">
      <div class="column is-flex is-justify-content-center pb-0">
        <b-field
          :type="{ 'is-danger': isSearchEmpty }"
          message="Search movies catalog by title"
        >
          <b-input
            v-model.trim="searchText"
            placeholder="Search..."
            type="search"
            icon="search"
            icon-right="close-circle"
            icon-right-clickable
            @icon-right-click="searchText = ''"
          />
          <p class="control">
            <b-button
              type="is-primary"
              label="Search"
              @click="reloadMoviesTable"
              :disabled="isSearchEmpty || isSearchNull"
            />
          </p>
        </b-field>
        <b-select
          v-model="searchType"
          class="ml-3"
          placeholder="Filter by type"
          clearable
        >
          <option v-for="option in types" :value="option" :key="option">
            {{ option | capitalize }}
          </option>
        </b-select>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <movies-table
          ref="moviesTable"
          :searchText="searchText"
          :searchType="searchType"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MoviesTable from "@/components/MoviesTable";

export default {
  name: "Search",
  components: {
    MoviesTable,
  },
  mounted() {},
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
      omdbApi: null,
      types: ["all", "movie", "series", "episode"],
      isSearchValid: true,
      searchText: null,
      searchType: null,
    };
  },
  methods: {
    reloadMoviesTable() {
      this.$refs.moviesTable.reloadMovies();
    },
  },
};
</script>
