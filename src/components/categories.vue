<template>
    <div id="categories">
        <router-link to="/predkrmy" exact><div><p>Předkrmy</p></div></router-link>
        <router-link to="/polevky" exact><div><p>Polévky</p></div></router-link>
        <router-link to="/hlavnijidla" exact><div><p>Hlavní jídla</p></div></router-link>
        <router-link to="/dezerty" exact><div><p>Dezerty</p></div></router-link>
        <router-link to="/napoje" exact><div><p>Nápoje</p></div></router-link>
    </div>
</template>

<script>
// Imports

// Exports
export default {
    
    data() {
        return {

        }
    },
    methods: {

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
    }
    a {
        text-decoration: none;
        color: black;
    }
}
div p {
    display: table-cell;
    vertical-align: middle;
    text-transform: lowercase;
    font-size: 25px;
}
</style>