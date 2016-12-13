<!-- src/components/Directory.vue -->
<template>
  <div class="background">
    <div class="content-area-bg center-block">
      <p class="directory-header">Directory</p>
      <img src="../assets/img/ThinkSpaceDirectory.jpg" class="thinkspace-directory center-block"/>
      <div class="directory-block row">
          <div class="" v-bind:class="[{'col-md-12': show1||show2||show3},{'col-md-4': !show1&&!show2&&!show3}]">
            <div class="square">
              <p class="directory-floor">1F</p>
              <p class="directory-name" @click="show1 = !show1">1 TRAVEL</p>
              <transition name="slide-fade">
              <table class="table table-hover" v-if="show1">
                <thead>
                  <tr>
                    <th>BOOKS</th>
                    <th>LIFESTYLE GOODS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Language Phrasebooks</td>
                    <td>Backpacks</td>
                  </tr>
                  <tr>
                    <td>Travel Guides</td>
                    <td>Cameras</td>
                  </tr>
                  <tr>
                    <td>Travel Maps</td>
                    <td>Camera Accessories</td>
                  </tr>
                  <tr>
                    <td>Travel Writing</td>
                    <td>Car DVR</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>GPS</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Travel Accessories</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Travel Bags</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Travel Stationery</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Watches</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Wearable Technology</td>
                  </tr>
                </tbody>
              </table>
            </transition>
              <p class="directory-name" @click="show2 = !show2">2 LEISURE</p>
              <transition name="slide-fade">

                <table class="table table-hover" v-if="show2">
                  <thead>
                      <tr>
                        <th>BOOKS</th>
                        <th>LIFESTYLE GOODS</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>  MEN’S INTEREST</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Sports</td>
                      <td>Car Models</td>
                    </tr>
                    <tr>
                      <td>Transportation</td>
                      <td>Leather Goods</td>
                    </tr>
                    <tr>
                      <td>Watches</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>  GENERAL INTEREST</th>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Gardening</td>
                      <td>Candles</td>
                    </tr>
                    <tr>
                      <td>Health & Fitness</td>
                      <td>Pet Accessories</td>
                    </tr>
                    <tr>
                      <td>Home Decoration</td>
                      <td>Spa Product</td>
                    </tr>
                    <tr>
                      <td>Humour</td>
                      <td>Terrariums</td>
                    </tr>
                    <tr>
                      <td>Pets</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>  WOMEN’S INTEREST</th>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Beauty</td>
                      <td>Fabric Goods</td>
                    </tr>
                    <tr>
                      <td>Fashion & Style Guides</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Jewelry</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </transition>
              <p class="directory-name" @click="show3 = !show3">3 CRAFT</p>
              <transition name="slide-fade">

                <table class="table table-hover" v-if="show3">
                  <thead>
                    <tr>
                      <th>BOOKS</th>
                      <th>LIFESTYLE GOODS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Book & Paper Crafts</td>
                      <td>Craft Accessories</td>
                    </tr>
                    <tr>
                      <td>Flower Arranging</td>
                      <td>Handmade Ceramics</td>
                    </tr>
                    <tr>
                      <td> & Floral Crafts</td>
                      <td>Home Decor Item</td>
                    </tr>
                    <tr>
                      <td>Lettering &Calligraphy</td>
                      <td>Scrapbooks</td>
                    </tr>
                    <tr>
                      <td>Needlework</td>
                      <td>Woodcrafts</td>
                    </tr>
                    <tr>
                      <td> & Fabric Crafts</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Pottery & Ceramics</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </transition>
            </div>
          </div>
        <div class="" v-bind:class="[{'col-md-12': show4||show5},{'col-md-4': !show4&&!show5}]">
          <div class="square">
            <p class="directory-floor">T1F</p>
            <p class="directory-name" @click="show4 = !show4">4 SMART</p>
            <transition name="slide-fade">

              <table class="table table-hover" v-if="show4">
                <thead>
                  <tr>
                    <th>BOOKS</th>
                    <th>LIFESTYLE GOODS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>  BUSINESS</th>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Business & Management</td>
                    <td>Luxury Pens & Pencils</td>
                  </tr>
                  <tr>
                    <td>Business Biography</td>
                    <td>Leather Goods</td>
                  </tr>
                  <tr>
                    <td>Economics</td>
                    <td>Organizers</td>
                  </tr>
                  <tr>
                    <td>Finance & Accounting</td>
                    <td>Planners</td>
                  </tr>
                  <tr>
                    <th>  SCIENCE</th>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Agriculture</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Computing</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td> & Information Technology</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Engineering</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Science</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Technology</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </transition>
            <p class="directory-name" @click="show5 = !show5">5 WISDOM</p>
            <transition name="slide-fade">

              <table class="table table-hover" v-if="show5">
                <thead>
                  <tr>
                    <th>BOOKS</th>
                    <th>LIFESTYLE GOODS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>  SOCIAL SCIENCES</th>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Education</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Law</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Political Science</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Psychology</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Society & Culture</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Sociology & Anthropology</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>  HUMANITIES</th>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Archaeology</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>History</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Mind,Body And Spirit</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Philosophy</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Religion & Beliefs</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </transition>
          </div>
        </div>
        <div class="" v-bind:class="[{'col-md-12': show6},{'col-md-4': !show6}]">
          <div class="square">
            <p class="directory-floor">T2F</p>
            <p class="directory-name" @click="show6 = !show6">6 FICTION</p>
            <transition name="slide-fade">

              <table class="table table-hover" v-if="show6">
                <thead>
                  <tr>
                    <th>BOOKS</th>
                    <th>LIFESTYLE GOODS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Adventure</td>
                    <td>Eyeglasses For Reading</td>
                  </tr>
                  <tr>
                    <td>Crime & Mystery</td>
                    <td>Literary Gifts</td>
                  </tr>
                  <tr>
                    <td>Fantasy</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Graphic Novels</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Historical Fiction</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Horror & Ghost Stories</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Literary Fiction</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Romance</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Science Fiction</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Short Stories</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Thriller & Suspense</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Young-Adult Fiction</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </transition>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
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

.background {
  background-color: #dddddd;
  width: 100%;
}

.content-area-bg {
  width: 70%;
  background-color: #ffffff;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.36);
}

.directory-header {
  font-size: 36px;
  color: #4a4a4a;
  text-align: left;
  margin-left: 50px;
  margin-top: 30px;
}

.thinkspace-directory {
  width: 90%;
}
.square {
  background-color: #ffffff;
  border: solid 1px #979797;
  margin-bottom: 15px;
}

.full{

}
.directory-floor {
  font-size: 30px;
  padding-left: 15px;
  padding-top: 13px;
}

.directory-name {
  font-size: 24px;
  padding-left: 15px;
}
.directory-subname {
  font-size: 24px;
  padding-left: 15px;
}

.directory-block {
  margin-top: 91.7px;
  padding-bottom: 95px;
}

.row
{
  display: table;
  width: 100%; /*Optional*/
  table-layout: fixed; /*Optional*/
  border-spacing: 55px 0px;/*Optional*/
  border-collapse: separate;
}
.column
{
  display: table-cell;
  background-color: white; /*Optional*/
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  /*transform: translateX(10px);*/
  opacity: 0;
}

</style>
