<template>
  <div id="single-recipe">
        <h1>{{ recipe.title }}</h1>
        
        <article>Kategorie:</article>
        <ul>
            <li v-for="category in recipe.categories">{{ category }}</li>
        </ul><br>
        <article>{{ recipe.directions }}</article>
    </div>
</template>

<script>
// Imports
import firebase from '../firebase'

// Exports
export default {

  data() {
    return {
        id: this.$route.params.id,
        recipe: {}
    }
  },
  methods: {
    
  },
  created() {
      firebase.firestore().collection('recipes').doc(this.id).get().then((doc) => {
        this.recipe = doc.data();
      });
  }
//   created() {
//         this.$http.get('https://codumdal-a40a5.firebaseio.com/recipes/' + this.id + '.json').then(function(data){
//             return data.json();
//         }).then(function(data){
//             this.recipe = data;
//         })
//     }
}
</script>

<style lang="scss">
#single-recipe{
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    background: rgb(197, 218, 200);
    h1 {
      margin: 0 0 30px;
    }
}
</style>