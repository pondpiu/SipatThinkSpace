<!-- src/components/searchItem.vue -->
<template>
  <div>
    <div v-for="result in results" class="search-result-row center-block">
      <img src="../assets/img/1.jpg" class="search-result-img" />
      <div class="search-result-row-text">
        <label class="search-result-row-title">{{result.title}}</label><br>
        <label class="search-result-row-description">{{result.description}}</label>
        <label class="search-result-price">฿ {{result.price}}</label>
      </div>
    </div>
  </div>


</template>

<script>

export default {
  data(){
    return{
      results : [
        {
          title : "Solgaleo",
          description : "Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
          price : "31415.92"
        },
        {
          title : "Andre",
          description : "Pikachu ja nai, andre dayo",
          price : "33333.33"
        }
      ]

    }
  }
}
</script>

<style>

.search-result-title {
  color: #4a4a4a;
  text-align: left;
  padding-left: 50px;
  padding-top: 30px;
  font-size: 36px;
  padding-bottom: 50px;
}

.search-result-row {
  height: 140px;
  width: 90%;
  margin-bottom: 25px;
  position: relative;
}

.search-result-img {
  width: 140px;
  height: 140px;
  float: left;
}

.search-result-row-title {
  font-size: 24px;
  padding-left: 32px;
  color: #4a4a4a;
}

.search-result-row-description {
  font-size: 14px;
  font-weight: normal;
  color: #4a4a4a;
  padding-left: 32px;
  padding-top: 7px;
}

.search-result-price {
  font-size: 30px;
  color: #8c9b09;
  position: absolute;
  bottom: -10px;
  right: 5px;
}

.search-result-row-text {
  overflow: hidden;
}

.random-space {
  height: 115px;
}

</style>
