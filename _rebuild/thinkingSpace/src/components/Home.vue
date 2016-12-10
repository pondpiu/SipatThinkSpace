<!-- src/components/Home.vue -->
<template>
  <div class="background">

    <!-- Image and Logo -->
    <div class="">
      <img src="../assets/img/thinkspace-feature-img.jpg" class="background-img"/>
      <img src="../assets/img/logo-cen-black.png" class="thinkspace-logo"/>
    </div>

    <!-- card -->
    <div class="promote-card center-block">
      <div class="promote-card-label">
        <div class="promote-card-header text-center">
          <label class="">Where Ideas Are Born</label>
        </div>
        <div class="promote-card-description">
          <label class="">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.</label>
        </div>
        <div class="promote-card-explore text-center">
          <a href="#" class="">Explore More ></a>
        </div>
      </div>
      <div class="promote-card-img">
        <img src="../assets/img/thinkspace-bag.jpg" alt="" class="thinkspace-bag"/>
      </div>
    </div>

    <!-- Egestas Pellentesque -->
    <div class="blur-card center-block">
      <img src="../assets/img/thinkspace-connect.jpg" alt="" class="thinkspace-connect"/>
      <div class="blur-card-label">
        <div class="blur-card-header text-center">
          <label class="">Egestas Pellentesque</label>
        </div>
        <div class="blur-card-description">
          <label class="">Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.
            <br>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.</label>
        </div>
        <div class="blur-card-explore text-center">
          <a href="#" class="">Explore More ></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style>

* html {
  font-family: "AvenirNext";
}

.background {
  background-color: #dddddd;
}

.b-g {
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
}

.background-img {
  width: 100%;
  height: 813px;
}

.thinkspace-logo {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 383px;
  height: 383px;
}

.promote-card {
  background-color: #ffffff;
  margin-top: 15px;
  width: 70%;
  height: 479px;
}

.promote-card-label {
  float: left;
  display: inline-block;
  width: 60%;
}

.promote-card-header {
  font-size: 36px;
  color: #000000;
  padding-top: 23px;
}

.promote-card-description {
  padding-top: 15px;
  padding-left: 23px;
  padding-right: 23px;
  font-size: 18px;
}

.promote-card-explore {
  margin-top: 70px;
  margin-bottom: 63px;
}

.promote-card-explore a {
  color: #8c9b09;
  font-size: 18px;
}

.promote-card-img {
  float: left;
  display: inline-block;
  width: 40%;
}

.thinkspace-bag {
  height: 479px;
  width: 100%
}

.blur-card {
  height: 479px;
  background-color: #aaaaaa;
  margin-top: 15px;
  width: 70%;
  position: relative;
}

.thinkspace-connect {
  -webkit-filter: blur(5.2px);
  -moz-filter: blur(5.2px);
  -o-filter: blur(5.2px);
  -ms-filter: blur(5.2px);
  filter: blur(5.2px);
  width: 100%;
  height: 479px;
}

.blur-card-label {
  position: absolute;
  top: 0%;
  color: #ffffff;
}

.blur-card-header {
  font-size: 36px;
  padding-top: 23px;
}

.blur-card-description {
  font-size: 18px;
  padding-top: 10px;
  padding-left: 58px;
  padding-right: 58px;
}

.blur-card-explore {
  padding-top: 144px;
  padding-bottom: 46px;
}

.blur-card-explore a {
  font-size: 18px;
  color: #e9ffa2;
}


</style>
