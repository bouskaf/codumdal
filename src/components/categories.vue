<template>
    <div id="categories">
        <div v-for="item in myCategories">
            <router-link :to="item.route" exact><div v-on:click="passData(item)"><p>{{ item.category }}</p></div></router-link>
        </div>
    </div>
</template>

<script>
// Imports

// Exports
export default {
    
    data() {
        return {
            myCategories: [
                {
                    category: 'Předkrmy',
                    route: '/recepty/predkrmy',
                    id: 'Předkrm'
                },
                {
                    category: 'Polévky',
                    route: '/recepty/polevky',
                    id: 'Polévka'
                },
                {
                    category: 'Hlavní jídla',
                    route: '/recepty/hlavnijidla',
                    id: 'Hlavní jídlo'
                },
                {
                    category: 'Dezerty',
                    route: '/recepty/dezerty',
                    id: 'Dezert'
                },
                {
                    category: 'Nápoje',
                    route: '/recepty/napoje',
                    id: 'Nápoj'
                },
            ]
        }
    },
    methods: {
        passData: function(item){
            this.$emit('passData', item )
        }
    }
}
</script>

<style lang="scss">
#categories {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    div {
        width: 150px;
        height: 150px;
        background: rgb(213, 245, 238);
        margin: 20px;
        display: table;
        text-align: center;
        opacity: 0.8;
    }
    a {
        text-decoration: none;
        background: transparent;
        color: black;
    }
}
#categories div:hover {
    opacity: 1;
    p {
        font-size: 26px;
    }
}
div p {
    display: table-cell;
    vertical-align: middle;
    text-transform: lowercase;
    font-size: 25px;
}
</style>