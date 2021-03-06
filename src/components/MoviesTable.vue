<template>
  <b-table
    :data="movies"
    paginated
    backend-pagination
    :total="total"
    :per-page="perPage"
    @page-change="onPageChange"
    :current-page.sync="currentPage"
    aria-next-label="Next page"
    aria-previous-label="Previous page"
    aria-page-label="Page"
    aria-current-label="Current page"
  >
    <b-table-column field="Poster" label="Poster" v-slot="props" width="125">
      <b-image
        :src="
          props.row.Poster == 'N/A'
            ? require('@/assets/placeholder.jpg')
            : props.row.Poster
        "
        :alt="props.row.Title"
        :placeholder="require('@/assets/placeholder.jpg')"
      />
    </b-table-column>

    <b-table-column field="Title" label="Title" v-slot="props" width="55%">
      <span class="is-size-4"> {{ props.row.Title }} </span>
    </b-table-column>

    <b-table-column field="Type" label="Type" v-slot="props">
      <movie-type-tag :type="props.row.Type" />
    </b-table-column>

    <b-table-column field="Year" label="Year" v-slot="props" numeric>
      <movie-year-tag :year="props.row.Year"></movie-year-tag>
    </b-table-column>

    <b-table-column field="imdbID" numeric v-slot="props">
      <b-button
        @click="viewMovieDetails(props.row.imdbID)"
        size="is-small"
        type="is-primary"
        outlined
      >
        View Details
      </b-button>
    </b-table-column>

    <template #bottom-left>
      <div class="is-size-5 has-text-weight-medium">
        Total: {{ total }} records.
      </div>
    </template>
  </b-table>
</template>

<script>
import MovieTypeTag from "@/components/MovieTypeTag";
import MovieYearTag from "@/components/MovieYearTag";
import movieAccessMixin from "@/mixins/movieAccessMixin";

export default {
  name: "MoviesTable",
  mixins: [movieAccessMixin],
  props: {
    searchText: String,
    searchType: String,
  },
  components: {
    MovieTypeTag,
    MovieYearTag,
  },
  data() {
    return {
      movies: [],
      total: 0,
      perPage: 10,
      currentPage: 1,
      lastIndexedText: "",
      lastIndexedType: "",
    };
  },
  mounted() {},
  methods: {
    onPageChange(page) {
      // If indexed data has been changed get back to page 1
      if (!this.handlePageOutOfBounds()) this.currentPage = page;

      this.loadMovieList();
    },
    reloadMovies() {
      this.handlePageOutOfBounds();
      this.loadMovieList();
    },
    // Reset the current page if search criteria has changed (text or filter)
    handlePageOutOfBounds() {
      if (
        this.searchText !== this.lastIndexedText ||
        this.searchType !== this.lastIndexedType
      ) {
        this.currentPage = 1;
        this.lastIndexedText = this.searchText;
        this.lastIndexedType = this.searchType;
        return true;
      }
      return false;
    },
    viewMovieDetails(movieId) {
      this.$router.push({
        name: "Movie",
        params: { movieId },
      });
    },
  },
};
</script>
