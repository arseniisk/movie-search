<template>
  <div class="columns is-multiline">
    <div class="column"></div>
    <div class="column is-12-mobile is-12-tablet is-8-desktop">
      <div v-if="movie" class="card">
        <div class="card-content">
          <div class="columns is-multiline">
            <!-- Poster -->
            <div class="column is-12-mobile is-4-desktop">
              <figure class="image">
                <img :src="movie.Poster" alt="Placeholder image" />
              </figure>
            </div>
            <!-- Movie Info -->
            <div class="column is-12-mobile is-8-desktop">
              <div class="columns is-multiline">
                <div class="column is-12 is-flex is-align-items-center">
                  <span class="is-size-3">{{ movie.Title }}</span>
                  <movie-type-tag
                    class="ml-3"
                    :type="movie.Type"
                  ></movie-type-tag>
                  <movie-year-tag
                    class="ml-3"
                    :year="movie.Year"
                  ></movie-year-tag>
                </div>
                <div class="column is-12 pt-0">
                  <b-tag class="tag is-grey">{{ movie.Runtime }}</b-tag>
                  {{ movie.Genre }}
                </div>
                <!-- Dynamic Movie Properties -->
                <div
                  v-for="property in movieProperties"
                  :key="property"
                  class="column is-12 pt-0"
                >
                  <span class="has-text-weight-bold">{{ property }}:</span>
                  {{ movie[property] }}
                </div>
                <div class="column is-12 pt-0 is-flex is-align-items-center">
                  <b-icon pack="fab" icon="imdb" size="is-large" />
                  {{ movie.imdbRating }}
                  <img
                    class="ml-4"
                    :src="require('@/assets/tomato-icon.png')"
                  />
                  <span class="ml-2">{{
                    getMovieRating("Rotten Tomatoes", movie)
                  }}</span>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <span class="has-text-weight-bold">Plot:</span>
              {{ movie.Plot }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import movieAccessMixin from "@/mixins/movieAccessMixin";
import MovieYearTag from "@/components/MovieYearTag";
import MovieTypeTag from "@/components/MovieTypeTag";

export default {
  name: "MoviesTable",
  mixins: [movieAccessMixin],
  watch: {
    $route(to) {
      if (this.checkRouteParameter(to)) return;
      this.loadMovie(to.params.movieId);
    },
  },
  components: {
    MovieYearTag,
    MovieTypeTag,
  },
  data() {
    return {
      movie: null,
      movieProperties: [
        "Director",
        "Writer",
        "Actors",
        "Language",
        "Country",
        "Awards",
      ],
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      if (this.checkRouteParameter(this.$route)) return;
      this.loadMovie(this.$route.params.movieId);
    },
    // Check if movie ID parameter is passed
    checkRouteParameter(route) {
      return !route.params || !route.params.movieId;
    },
    getMovieRating(ratingSystem, movie) {
      const rating = movie.Ratings.find((x) => x.Source === ratingSystem);
      if (!rating) return "Not Specified";

      return rating.Value;
    },
  },
};
</script>
