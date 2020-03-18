import listRecipes from './components/listRecipes.vue'
import addRecipe from './components/addRecipe.vue'
import singleRecipe from './components/singleRecipe.vue'
import categories from './components/categories.vue'

export default [
    { path: '/recepty/:category', component: listRecipes},
    { path: '/add', component: addRecipe},
    { path: '/recept/:id', component: singleRecipe},
    { path: '/kategorie', component: categories},
]