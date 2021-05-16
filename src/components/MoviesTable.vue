<template>
  <b-table
    :data="movies"
    paginated
    backend-pagination
    :total="total"
    :per-page="perPage"
    @page-change="onPageChange"
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
      <b-tag class="is-info is-light" size="is-medium">{{
        props.row.Year
      }}</b-tag>
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
  },
  data() {
    return {
      movies: [],
      total: 0,
      perPage: 10,
      currentPage: 1,
    };
  },
  mounted() {},
  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
      this.loadMovieList();
    },
    reloadMovies() {
      console.log(this.searchType)
      this.loadMovieList();
    },
  },
};
</script>
