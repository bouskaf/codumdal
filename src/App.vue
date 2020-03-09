<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// Imports
import header from './components/header'
import listRecipes from './components/listRecipes'
import addRecipe from './components/addRecipe'
import singleRecipe from './components/singleRecipe'
import categories from './components/categories'
import soups from './components/categories/soups'

// Exports
export default {
  components: {
    'app-header': header,
    'list-recipes': listRecipes,
    'add-recipe': addRecipe,
    'single-recipe': singleRecipe,
    'categories': categories,
    'soups': soups,
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
