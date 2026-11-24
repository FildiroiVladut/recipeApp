import axios from "axios";

const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  // Throws on network/API errors; the controller decides how to show them
  async getResults() {
    const res = await axios(API_URL, { params: { search: this.query } });

    this.result = res.data.data.recipes.map((r) => ({
      recipe_id: r.id,
      title: r.title,
      publisher: r.publisher,
      image_url: r.image_url.replace(/^http:/, "https:"),
    }));
  }
}
