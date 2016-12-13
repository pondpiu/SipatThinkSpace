<!-- src/components/AppNav.vue -->
<template>
  <div class="b-g">
    <ul class="topnav" id="topnav">
    <li><a><img src="../assets/img/magnifier.png" class="mag" /></a>
      <input type="text" class="search-input" v-on:change="search" v-model="lol" placeholder="Search here"></li>

        <li><router-link
        to="booking"
        class="nav-item nav-link"
        active-class="active"
        exact
        >
          Booking
        </router-link></li>

        <li><router-link
        to="about"
        class="nav-item nav-link"
        active-class="active"
        exact
        >
          About
        </router-link></li>

      <li>
        <div><router-link
        to="directory"
        class="nav-item nav-link"
        active-class="active"
        exact
      >
        Directory
      </router-link>
    <div></li>

      <li><router-link
      to="home"
      class="nav-item nav-link"
      active-class="active"
      exact
      >
        Home
      </router-link></li>

    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: {
    return: {
      lol: ''
    }
  },
   methods: {
      ...mapActions([
       'searchProduct'
     ]),
     onTextChange(text){
       this.searchProduct(text);
     },
     search: function() {
       alert(this.lol);
     }
   }

>>>>>>> origin/master
}
</script>

<style>

.b-g {
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
}

ul.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

ul.topnav li {
  float: right;
}

ul.topnav li:first-child {
  width: 4%;
  background-color: #97bb22;
  transition: all 0.4s;
}

ul.topnav li:first-child:hover {
  width: 40%;
  background-color: #97bb22;
}

ul.topnav li:first-child:hover .search-input {
  display: inline-block;
  border: 0 none;
  background: transparent;
  box-shadow: none;
  width: 85%;
  font-size: 24px;
}

ul.topnav li:first-child a:hover {
  background-color: #97bb22;
}

ul.topnav li a {
  display: inline-block;
  color: #4a4a4a;
  text-align: center;
  padding: 18px 22px;
  text-decoration: none;
  font-size: 24px;
}

ul.topnav li a:hover {
  background-color: #4a4a4a;
  color: #ffffff;
}

.mag {
  width: 25px;
  height: 25px;
  background-color: #97bb22;
  display: inline-block;
}

.search-input {
  width: 0%;
  display: none;
  color: white;
  transition: all 0.4s;
}

</style>
