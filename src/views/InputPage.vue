<template>
  <div class="container">
    <form @submit.prevent="submitRecipe" class="recipe-form"> 
      <!-- Add the form element here -->
      <h2 class="section-title">Create a Recipe</h2>
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="recipe.title" required>
      </div>
      <div class="form-group">
        <label for="imageURL">Image URL:</label>
        <input type="url" id="imageURL" v-model="recipe.imageURL" required>
      </div>
      <div class="form-group">
        <label for="ingredients">Ingredients:</label>
        <textarea id="ingredients" v-model="recipe.ingredients" rows="4" required placeholder="Add ingredient and press Enter"></textarea>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="recipe.description" rows="4" required></textarea>
      </div>
      <button class="submit-button" type="submit">Save & Exit</button>

      <button class="exit-button" @click="exitWithoutSaving">Exit</button>
    </form> 
  </div>
</template>




<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      recipe: {
        title: '',
        imageURL: '',
        ingredients: '',
        description: '',
      },
    };
  },
  methods: {
    submitRecipe() {
      // Send the recipe data to your server or perform further actions

      // After successfully adding the recipe, commit the mutation
      this.addRecipe(this.recipe);
      
      // Navigate back to the home page
      this.$router.push('/');
    },
    exitWithoutSaving() {
      // Navigate back to the home page without saving the recipe
      this.$router.push('/');
    },
    ...mapMutations(['addRecipe']), // Map the addRecipe mutation to this component
  },
};
</script>

<style scoped>
/* Styles for the InputPage.vue component */

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.recipe-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.form-group {
  margin-top: 20px;
}

.ingredient-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.ingredient-item {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
}

.ingredient-item span {
  flex-grow: 1;
  margin-right: 5px;
}

.ingredient-item button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.ingredient-item button:hover {
  background-color: #ff1a1a;
}

input[placeholder='Add ingredient and press Enter'] {
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="text"],
input[type="url"],
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.submit-button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.exit-button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #0056b3;
}

.exit-button:hover {
  background-color: #0056b3;
}


</style>
