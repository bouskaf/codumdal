import listRecipes from './components/listRecipes.vue'
import addRecipe from './components/addRecipe.vue'
import singleRecipe from './components/singleRecipe.vue'
import categories from './components/categories.vue'
import soups from './components/categories/soups.vue'

export default [
    { path: '/', component: listRecipes},
    { path: '/add', component: addRecipe},
    { path: '/recept/:id', component: singleRecipe},
    { path: '/kategorie', component: categories},
    { path: '/:category', component: soups}
]