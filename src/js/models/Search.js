import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/search?q=${this.query}`
      );
      
      this.result = res.data.recipes.map((r) => ({
        ...r,
        image_url: r.image_url.replace(/^http:/, "https:"),
      }));

      //console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
