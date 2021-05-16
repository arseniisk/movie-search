<template>
  <b-table
    :data="data"
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
        :src="props.row.Poster"
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
      <b-tag class="is-info is-light" size="is-medium">{{ props.row.Year }}</b-tag>
    </b-table-column>
  </b-table>
</template>

<script>
import testJson from "@/data/dev-set-1";
import MovieTypeTag from "@/components/MovieTypeTag";

export default {
  name: "MoviesTable",
  components: {
    MovieTypeTag,
  },
  data() {
    return {
      data: [],
      total: 0,
      perPage: 5,
    };
  },
  mounted() {
    this.data = testJson.Search;
    this.total = testJson.totalResults;
  },
  methods: {
    onPageChange() {
      console.log("Page changed");
    },
  },
};
</script>
