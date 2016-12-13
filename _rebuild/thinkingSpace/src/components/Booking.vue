<!-- src/components/Booking.vue -->
<template>
  <div class="background">
    <div class="content-area-bg center-block">
      <label class="booking-title">Room Schedule: </label>
      <!--<div class="booking-header center-block">
      <div class="random-space">
    </div>
    <div class="booking-from">
    <label class="booking-header-text" id="from">From</label>
  </div>
  <div class="booking-until">
  <label class="booking-header-text" id="until">Until</label>
</div>
</div>-->
<table class="booking-table">
  <tr height="49px" class="booking-header-row">
    <th class="name"></th>
    <th class="booking-header-text from">From</th>
    <th class="booking-header-text until">Until</th>
  </tr>
  <tr v-for="bookings in bookings" height="49px" class="booking-row-odd">
    <th class="name table-text">{{bookings.title}}</th>
    <th class="from table-text">{{bookings.from}}</th>
    <th class="until table-text">{{bookings.until}}</th>
  </tr>
</table>

<label class="booking-title">New Booking: </label>
<br>

<div class="input-form">
  <div class="name-form">
    <div class="form-group">
      <label class="input-description">name</label>
      <input v-model="input.iName" type="text" class="input-input form-control form-border" id="" placeholder="John Appleseed">
    </div>
  </div>
  <div class="phone-form">
    <div class="form-group">
      <label class="input-description">phone</label>
      <input v-model="input.iPhone" type="text" class="input-input form-control form-border" id="" placeholder="080-000-0000">
    </div>
  </div>
</div>

<div class="from-to-form form-group">
  <div class="">
    <label class="time-form-text">from</label>
    <div class="input-group time-input">
      <input v-model="input.iFrom" type="time" name="time from" value="00:00" class="form-control form-border booking-time">
      <span class="input-group-addon booking-addon form-border"><img src="../assets/img/clock-icon.png"/></span>
    </div>
  </div>

  <div class="">
    <label class="time-form-text">to</label>
    <div class="input-group time-input">
      <input v-model="input.iTo" type="time" name="time to" value="00:00" class="form-control form-border booking-time">
      <span class="input-group-addon booking-addon form-border"><img src="../assets/img/clock-icon.png"/></span>
    </div>
  </div>
</div>

<div class="">
  <button v-on:click="book" type="button" name="button" class="btn the-only-button">submit</button>
</div>
</div>
</div>



</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return:{
      input:{
        iName : '',
        iPhone : '',
        iFrom : '',
        iTo : ''
      }
    }
  },
  computed: mapGetters({
    bookings: 'getBookings'
  }),
  methods : {
    book: function(){
      console.log(input);
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

.booking-title {
  color: #4a4a4a;
  font-size: 36px;
  padding-left: 50px;
  padding-top: 30px;
}

/*.booking-header {
width: 90%;
height: 49px;
background-color: #d8d8d8;
}

.booking-header-text {
font-size: 24px;
font-weight: 600;
padding-top: 6px;
color: #4a4a4a;
float: left;
}

.random-space {
width: 60%;
}

#from {
}

#until {
}*/

.name {
  width: 65%;
}

.from {
  width: 20%;
}

.until {
  width: 15%;
}

.booking-table {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 26px;
  margin-top: 21px;
}

.booking-header-row {
  background-color: #d8d8d8;
}

.booking-header-text {
  font-size: 24px;
  font-weight: 600;
  color: #4a4a4a;
  text-align: center;
}

.table-text {
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  color: #4a4a4a;
}

.booking-row-odd {
  background-color: #f3f3f3;
}

.booking-row-even {
  background-color: #e9e9e9;
}

.input-description {
  font-size: 24px;
  color: #4a4a4a;
  display: inline-block;
  margin-right: 15px;
}

.name-form {
  display: inline-block;
  width: 32%;
}

.phone-form {
  margin-left: 34px;
  display: inline-block;
  width: 32%;
}

.input-input {
  width: 70%;
  font-size: 14px;
  display: inline-block;
}

.input-form {
  margin-left: 50px;
  margin-top: 16px;
}

.from-to-form {
  margin-left: 72px;
}

.time-form-text {
  font-size: 24px;
  font-weight: 500;
  color: #4a4a4a;
  margin-right: 10px;
}

.booking-time {
  color: #4a4a4a;
  font-weight: 500;
}

.booking-addon {
  background-color: #a0a0a0;
}

.form-border {
  border-radius: 4px;
  border: solid 1px #979797;
}

.time-input {
  width: 10%;
}

.the-only-button {
  margin-top: 29px;
  margin-left: 128px;
  background-color: #97bb22;
  color: #ffffff;
  width: 10%;
  height: 34px;
  font-size: 14px;
}


</style>
