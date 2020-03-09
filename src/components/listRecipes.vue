<template>
  <div id="list-recipes">
    <categories class="category-in"></categories>
      <div v-for="recipe in this.recipes" class="recipe-li">
          <router-link v-bind:to="'/recept/' + recipe.id"><h2>{{ recipe.title | to-uppercase }}</h2></router-link>
          <article>{{ recipe.directions | snippet }}</article>
      </div>
  </div>
</template>

<script>
// Imports
import categories from './categories'
// Exports
export default {
  components: {
    'categories': categories
  },
  data() {
    return {
      recipes: []
    }
  },
  methods: {
    
  },
  created() {
      this.$http.get('https://codumdal-a40a5.firebaseio.com/recipes.json').then(function(data) {
          return data.json();
      }).then(function(data) {
        const recipesArray = [];
        for(let key in data){
          data[key].id = key;
          recipesArray.push(data[key]);
        };
        this.recipes = recipesArray;
      })
  }
}
</script>

<style lang="scss">
#list-recipes{
    max-width: 800px;
    margin: 0px auto;
}
.recipe-li{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: rgb(224, 205, 209);
}
</style>