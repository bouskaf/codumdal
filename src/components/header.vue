<template>
  <div class="header-container">
    <!-- <nav>
        <ul class="header-ul">
            <li><router-link to="/recepty/vse" exact>Recepty</router-link></li>
            <li><router-link to="/kategorie" exact>Kategorie</router-link></li>
            <li><router-link to="/add" exact>Přidat recept</router-link></li>
        </ul>
    </nav> -->

        <b-nav pills align="center">
          <b-nav-item variant="info" active-class="active" to="/recepty/vse" exact>Recepty</b-nav-item>
          <b-nav-item active-class="active" to="/kategorie" exact>Kategorie</b-nav-item>
          <b-nav-item active-class="active" to="/add" exact>Přidat recept</b-nav-item>
        </b-nav>
    
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
