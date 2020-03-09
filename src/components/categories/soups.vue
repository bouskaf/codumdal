<template>
  <div id="soups">
      <div v-for="recipe in filterRecipes" class="recipe-li">
          <router-link v-bind:to="'/recept/' + recipe.id"><h2>{{ recipe.title | to-uppercase }}</h2></router-link>
          <article>{{ recipe.directions | snippet }}</article>
      </div>
  </div>
</template>

<script>
// Imports

// Exports
export default {

  data() {
    return {
      recipes: [],
      category: this.$route.params.category
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
  },
  computed: {
      filterRecipes: function() {  
          if (this.category != ""){
              const aa = new Map
              aa.set("polevky", "Polévka")
              aa.set("predkrmy", "Předkrm")
              aa.set("hlavnijidla", "Hlavní jídlo")
              aa.set("dezerty", "Dezert")
              aa.set("napoje", "Nápoj")

              return this.recipes.filter(recipe => recipe.categories.includes(aa.get(this.category))); // FIXME do filtering on Firebase
          }  
          else {
              return this.recipes;
          }               
      }
  }
}
</script>

<style lang="scss">

</style>