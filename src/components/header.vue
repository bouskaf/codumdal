<template>
  <nav>
      <ul class="header-ul">
          <li><router-link to="/recepty/vse" exact>Recepty</router-link></li>
          <li><router-link to="/kategorie" exact>Kategorie</router-link></li>
          <li><router-link to="/add" exact>Přidat recept</router-link></li>
      </ul>
  </nav>
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
ul {
    list-style-type: none;
}
.header-ul{
    
    text-align: center;
    margin: 0;
    li {
        display: inline-block;
        margin: 0 10px;
    }
}
li a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: rgb(109, 163, 159);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>