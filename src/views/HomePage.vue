<template>
  <div>
    <!-- Recipe of the Day Section -->
    <div class="section">
      <h2 class="section-title">Recipe of the Day</h2>
      <div class="recipe-card-big">
        <!-- Add content for the Recipe of the Day here -->
        <h2 class="recipe-title">Delicious Recipe of the Day</h2>
        <img src="your-image-url.jpg" alt="Recipe Image" class="recipe-image">
        <p class="recipe-description">This is the recipe of the day, enjoy!</p>
      </div>
    </div>

    <!-- Popular Recipes -->
    <div class="section">
      <h2 class="section-title">Popular Recipes</h2>
      <div class="featured-recipes">
        <div v-for="recipe in popularRecipes" :key="recipe.id" class="recipe-card">
          <!-- Display popular recipes here -->
          <h2 class="recipe-title">{{ recipe.title }}</h2>
          <img :src="recipe.imageURL" alt="Recipe Image" class="recipe-image">
          <p class="recipe-description">{{ recipe.description }}</p>
        </div>
      </div>
    </div>

    <!-- Cooking Tips -->
    <div class="section">
      <h2 class="section-title">Cooking Skills</h2>
      <div class="cooking-skills">
        <!-- Cooking Skill Box - Sauces -->
        <router-link to="/cooking/sauces" class="cooking-skill-box">
          <h3 class="cooking-skill-title">Sauces and condiments</h3>
          <!-- Add an icon or image for sauces -->
        </router-link>

        <!-- Cooking Skill Box - Cakes -->
        <router-link to="/cooking/cakes" class="cooking-skill-box">
          <h3 class="cooking-skill-title">Cakes</h3>
          <!-- Add an icon or image for cakes -->
        </router-link>

        <!-- Cooking Skill Box - Frying -->
        <router-link to="/cooking/frying" class="cooking-skill-box">
          <h3 class="cooking-skill-title">Frying</h3>
          <!-- Add an icon or image for frying -->
        </router-link>

        <!-- Cooking Skill Box - Baking -->
        <router-link to="/cooking/baking" class="cooking-skill-box">
          <h3 class="cooking-skill-title">Baking</h3>
          <!-- Add an icon or image for frying -->
        </router-link>

        <!-- Cooking Skill Box - Frying -->
          <router-link to="/cooking/grilling" class="cooking-skill-box">
          <h3 class="cooking-skill-title">Grilling</h3>
          <!-- Add an icon or image for frying  -->
        </router-link>

        <!-- Cooking Skill Box - Frying -->
          <router-link to="/cooking/asian-cuisine" class="cooking-skill-box">
          <h3 class="cooking-skill-title">Asian Cuisine</h3>
          <!-- Add an icon or image for frying -->
        </router-link>

        <!-- Add more cooking skill boxes -->
      </div>
    </div>


  <!-- Top Articles Section -->
  <div class="section">
    <h2 class="section-title">Top Articles</h2>
  </div>
  <div class="articles">
      <!-- Box 1 -->
      <router-link to="/new-cooking-techniques" class="article-box">
        <h3 class="article-title">New Cooking Techniques</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </router-link>

      <!-- Box 2 -->
      <router-link to="/recipe-inspiration" class="article-box">
        <h3 class="article-title">Recipe Inspiration</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </router-link>

      <!-- Box 3 -->
      <router-link to="/healthy-eating" class="article-box">
        <h3 class="article-title">Healthy Eating</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </router-link>

      <!-- Box 4 -->
      <router-link to="/cooking-tips" class="article-box">
        <h3 class="article-title">Cooking Tips</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </router-link>
    </div>

    <!-- Featured Chef Section -->
    <div class="section">
      <h2 class="section-title">Featured Chefs</h2>
      <div class="featured-chefs">
        <!-- Featured Chef Cards -->
        <div class="chef-card">
          <img src="chef1-image.jpg" alt="Chef 1" class="chef-image">
          <h3 class="chef-name">Chef Boyardee</h3>
          <p class="chef-description">Renowned for Italian cuisine</p>
        </div>
        <div class="chef-card">
          <img src="chef2-image.jpg" alt="Chef 2" class="chef-image">
          <h3 class="chef-name">Chef American John</h3>
          <p class="chef-description">Master of Asian flavors</p>
        </div>
        <div class="chef-card">
          <img src="chef3-image.jpg" alt="Chef 3" class="chef-image">
          <h3 class="chef-name">Chef Poutine</h3>
          <p class="chef-description">Mexican culinary expert</p>
        </div>
        <div class="chef-card">
        <img src="chef4-image.jpg" alt="Chef 4" class="chef-image">
        <h3 class="chef-name">Chef Gourdone Ramseis</h3>
        <p class="chef-description">Expert in French cuisine</p>
      </div>
        <!-- Add more chef cards here -->
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['recipes']),
    popularRecipes() {
      return this.recipes.slice(0, 4); 
    },
  },
};
</script>

/* I apologise for not making a css file it kept breaking when I try to link it to this I have no clue */

<style scoped>


.page-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* Styles for the Recipe of the Day section */
.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.recipe-card-big {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px; 
  transition: transform 0.2s;
  text-decoration: none;
  color: #333;
  box-sizing: border-box; 
}

.recipe-card-big:hover {
  transform: translateY(-5px);
}

.recipe-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.recipe-image {
  max-width: 100%;
  height: auto;
}

.recipe-description {
  font-size: 16px;
  margin-top: 10px;
}

.featured-recipes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -10px; 
}

.recipe-card {
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px; /* Adjust the margin for even spacing */
  width: calc(25% - 20px); /* Adjust the width for 4 cards per row */
  box-sizing: border-box;
  text-align: center;
  border-radius: 5px;
  transition: transform 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.recipe-image {
  max-width: 100%;
  height: auto;
}

.recipe-description {
  font-size: 16px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.section {
  margin-bottom: 30px; /* Add some spacing between sections */
}

.section-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* Cooking Skill Boxes */
.cooking-skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}

.cooking-skill-box {
  width: calc(33.33% - 20px); 
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
  transition: transform 0.2s;
  text-decoration: none;
  color: #333;
  box-sizing: border-box; 
}

.cooking-skill-box:hover {
  transform: translateY(-5px);
}

.cooking-skill-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

/* Styles for the Articles section */
.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -10px; 
}

.article-box {
  width: calc(50% - 20px); 
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px; 
  transition: transform 0.2s;
  text-decoration: none;
  color: #333;
  box-sizing: border-box; 
}

.article-box:hover {
  transform: translateY(-5px);
}

.article-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

/* Add styles for the Featured Chefs section here */
.featured-chefs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}

.chef-card {
  width: calc(50% - 20px); 
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px; 
  transition: transform 0.2s;
  text-decoration: none;
  color: #333;
  box-sizing: border-box; 
}

.chef-card:hover {
  transform: translateY(-5px);
}

.chef-image {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}

.chef-name {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.chef-description {
  font-size: 14px;
  color: #666;
}

</style>
