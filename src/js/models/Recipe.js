import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    const res = await axios(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${this.id}`
    );
    const recipe = res.data.data.recipe;

    this.title = recipe.title;
    this.author = recipe.publisher;
    this.img = recipe.image_url.replace(/^http:/, "https:");
    this.url = recipe.source_url;
    this.time = recipe.cooking_time;
    this.servings = recipe.servings;
    // v2 already returns structured ingredients: { quantity, unit, description }
    this.ingredients = recipe.ingredients.map((ing) => ({
      count: ing.quantity,
      unit: ing.unit,
      ingredient: ing.description,
    }));
  }

  updateServings(type) {
    //servings
    const newServings = type === "dec" ? this.servings - 1 : this.servings + 1;
    //ingredients
    this.ingredients.forEach((ing) => {
      // "salt to taste" has no quantity; leave it as is
      if (ing.count) ing.count *= newServings / this.servings;
    });

    this.servings = newServings;
  }
}
