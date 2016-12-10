<!-- src/components/About.vue -->
<template>
  <div class="background">
    <div class="content-area-bg center-block">
      <label class="about-title">About</label>
      <img src="../assets/img/thinkspace-about.jpg" class="about-img center-block"/>
      <label class="about-description center-block">Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.
        <br>
        <br>
        Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.
        <br>
        <br>
        Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        <br>
        <br>
        Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</label>
        <div class="center-block about-div">
          <div class="about-card left-about-card">
            <img src="../assets/img/thinkspace-morebags.jpg" class="about-card-img"/>
            <label class="about-card-title">Lorem Magna</label>
            <label class="about-card-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Donec sed odio dui.
              <br><br>
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.</label>
            </div>
            <div class="about-card right-about-card">
              <img src="../assets/img/thinkspace-feature-img.jpg" class="about-card-img"/>
              <label class="about-card-title">Parturient</label>
              <label class="about-card-description">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.
                <br><br>
                Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                <br><br>
                Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</label>
              </div>
            </div>
          </div>
        </div>
      </template>

      <script>
      export default {}
      </script>

      <style>

      .background {
        background-color: #dddddd;
        width: 100%;
      }

      .content-area-bg {
        width: 70%;
        background-color: #ffffff;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.36);
        overflow: hidden;
      }

      .about-title {
        font-size: 36px;
        padding-left: 50px;
        padding-top: 30px;
        color: #4a4a4a;
      }

      .about-img {
        padding-top: 20px;
        width: 90%;
      }

      .about-description {
        padding-top: 41px;
        padding-bottom: 74px;
        width: 90%;
        color: #4a4a4a;
        text-align: left;
        font-size: 18px;
      }

      .about-div {
        width: 90%;
      }

      .about-card {
        width: 47.5%;
        background-color: white;
        display: inline-block;
        margin-bottom: 80px;
      }

      .left-about-card {
        float: left;
      }

      .right-about-card {
        float: right;
      }

      .about-card-img {
        width: 100%;
        padding-bottom: 18px;
      }

      .about-card-title {
        font-size: 24px;
        color: #4a4a4a;
      }

      .about-card-description {
        font-size: 14px;

      }

      .row {
        display: table;
        width: 100%; /*Optional*/
        table-layout: fixed; /*Optional*/
        border-spacing: 40px 0px;/*Optional*/
        border-collapse: separate;
      }

      .column {
        display: table-cell;
        background-color: white; /*Optional*/
      }

      </style>
