export class ThirdPartyApi {
  constructor() {
    this._baseUrl = "https://api.themoviedb.org";
    this._today = new Date().toISOString().split("T")[0];
    this.page = 1;
  }
  _getIpData() {
    return fetch("https://ipinfo.io/json")
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  _getMovieData() {
    return fetch(
      `${this._baseUrl}/3/discover/movie?sort_by=release_date.desc&with_original_language=en&primary_release_date.lte=${this._today}&primary_release_date.lte=${this._today}&page=${this.page}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTM4ZWQ4ZTk1OWJiMGIyM2MxYzUxMTZmYzRmYzQ5OSIsIm5iZiI6MTc1OTMwNzUyMC4yOCwic3ViIjoiNjhkY2U3MDA4NWQ2YjlhYWJjYjliMTJjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LYE4VKjCkn2majTWcO-X1jlI1n2LPsyMnwpyMylaMhU",
          accept: "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
