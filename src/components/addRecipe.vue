<template>
    <div class="add-recipe-container">
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
            <b-button variant="info" v-on:click.prevent="post" class="btn-add">přidat recept</b-button>
        </form>

        <b-form v-if="!submited">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="recipe.title"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="recipe.directions"
                required
                placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="recipe.categories"
                :options="foods"
                required
                ></b-form-select>
            </b-form-group>

            <!-- <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group> -->

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <div v-if="submited">
            <h3>Tvůj nový recept byl vložen :)</h3>
            <b-button variant="info" class="btn-add"><router-link v-bind:to="'/recept/' + this.recipe.id">zobrazit recept</router-link></b-button>
        </div>
    </div>
</template>

<script>
// Imports
import firebase from '../firebase'

// Exports
export default {

    data() {
        return {
        recipe: {
                    title: "",
                    directions: "",
                    categories: [],
                },
                submited: false
        }
    },
    methods: {
        post: function(){
            firebase.firestore().collection('recipes').add(this.recipe).then((data) => {
                this.submited = true;
                this.recipe.id = data.id;
            })
        }

        // post: function() {
        //     this.$http.post('https://codumdal-a40a5.firebaseio.com/recipes.json', this.recipe).then(function(data){
        //         this.submited = true;
        //         this.recipeId = data.body.name;
        //     });
        // }
    }
}
</script>

<style lang="scss">
// #add-recipe{
//     box-sizing: border-box;
//     margin: 20px auto;
//     max-width: 600px;
//     padding: 30px;
//     background: rgb(199, 228, 233);
//     h2 {
//       margin: 0 0 30px;
//     }
// }
// label{
//     display: block;
//     margin: 20px 0 10px;
// }
// input[type="text"], textarea{
//     display: block;
//     width: 96%;
//     padding: 8px;
// }
// #checkboxes input{
//     display: inline-block;
//     margin-right: 10px;
// }
// #checkboxes label{
//     display: inline-block;
// }
// h3{
//     margin-top: 10px;
// }
// .btn-add{
//     margin: 20px auto 0;
//     display: block;
//     a {
//         text-decoration: none;
//         color: white;
//     }
// }
</style>
