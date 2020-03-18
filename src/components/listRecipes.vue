<template>
  <div id="list-recipes">
    <categories class="category-in" v-on:passData="passingData($event)"></categories>
      <div v-for="recipe in this.recipes" class="recipe-li">
          <router-link v-bind:to="'/recept/' + recipe.id"><h2>{{ recipe.title | to-uppercase }}</h2></router-link>
          <article>{{ recipe.directions }}</article>
      </div>
  </div>
</template>

<script>
// Imports
import categories from './categories'
import firebase from '../firebase'
// Exports
export default {
  components: {
    'categories': categories
  },
  data() {
    return {
      recipes: []
      // filterRecipes: []
    }
  },
  created() {
      firebase.firestore().collection('recipes').get().then((snapshot) => {
        snapshot.docs.forEach((doc, index) => {
          this.recipes.push(doc.data());
          this.recipes[index].id = doc.id;
        });
      });
  },
  methods: {
    passingData: function(item){
      this.recipes = [];
      firebase.firestore().collection('recipes').where('categories','array-contains',item.id).get().then((snapshot) => {
        snapshot.docs.forEach((doc, index) => {
          this.recipes.push(doc.data());
          this.recipes[index].id = doc.id;
        });
      });
    }
  },
  // created() {
  //     this.$http.get('https://codumdal-a40a5.firebaseio.com/recipes.json').then(function(data) {
  //         return data.json();
  //     }).then(function(data) {
  //       const recipesArray = [];
  //       for(let key in data){
  //         data[key].id = key;
  //         recipesArray.push(data[key]);
  //       };
  //       this.recipes = recipesArray;
  //       this.filterRecipes = this.recipes;
  //     })
  // },

  // watch: {
  //   '$route': function(to, from) {
  //      if (this.$route.params.category != "vse"){
  //       const aa = new Map
  //       aa.set("polevky", "Polévka")
  //       aa.set("predkrmy", "Předkrm")
  //       aa.set("hlavnijidla", "Hlavní jídlo")
  //       aa.set("dezerty", "Dezert")
  //       aa.set("napoje", "Nápoj")
  //       this.filterRecipes = this.recipes.filter(recipe => recipe.categories.includes(aa.get(this.$route.params.category)));
  //     } else {
  //       this.filterRecipes = this.recipes
  //     }
      
  //   }
  // }
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