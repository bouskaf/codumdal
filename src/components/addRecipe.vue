<template>
    <div id="add-recipe">
        <h2>Nový recept</h2>
        <form v-if="!submited">
            <label>Název receptu:</label>
            <input type="text" v-model="recipe.title" reguired/>
            <!-- ingredience, doba vaření, obtížnost -->
            <label>Postup:</label>
            <textarea v-model="recipe.directions"></textarea>
            <div id="checkboxes">
                <label>Předkrm</label>
                <input type="checkbox" value="Předkrm" v-model="recipe.categories"/>
                <label>Polévka</label>
                <input type="checkbox" value="Polévka" v-model="recipe.categories"/>
                <label>Hlavní jídlo</label>
                <input type="checkbox" value="Hlavní jídlo" v-model="recipe.categories"/>
                <label>Dezert</label>
                <input type="checkbox" value="Dezert" v-model="recipe.categories"/>
                <label>Nápoj</label>
                <input type="checkbox" value="Nápoj" v-model="recipe.categories"/>
            </div>
            <!-- <label>Author:</label>
            <select v-model="recipe.author">
                <option v-for="author in authors">{{ author }}</option>
            </select> -->
            <button v-on:click.prevent="post" class="btn-add">přidat recept</button>
        </form>
        <div v-if="submited">
            <h3>Tvůj nový recept byl vložen :)</h3>
            <button class="btn-add"><router-link v-bind:to="'/recept/' + this.recipeId">zobrazit recept</router-link></button>
        </div>
    </div>
</template>

<script>
// Imports

// Exports
export default {

    data() {
        return {
        recipe: {
                    title: "",
                    directions: "",
                    categories: [],
                },
                submited: false,
                recipeId: ''
        }
    },
    methods: {
        post: function() {
            this.$http.post('https://codumdal-a40a5.firebaseio.com/recipes.json', this.recipe).then(function(data){
                this.submited = true;
                this.recipeId = data.body.name;
            });
        }
    }
}
</script>

<style lang="scss">
#add-recipe{
    box-sizing: border-box;
    margin: 20px auto;
    max-width: 600px;
    padding: 30px;
    background: rgb(199, 228, 233);
    h2 {
      margin: 0 0 30px;
    }
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 96%;
    padding: 8px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
h3{
    margin-top: 10px;
}
.btn-add{
    background: rgb(109, 163, 159);
    margin: 20px auto 0;
    display: block;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 15px;
}
</style>