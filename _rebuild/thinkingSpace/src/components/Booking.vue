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
        <tr height="49px" class="booking-row-odd">
          <th class="name table-text">Nebby and its bag</th>
          <th class="from table-text">15:30</th>
          <th class="until table-text">16:30</th>
        </tr>
        <tr height="49px" class="booking-row-even">
          <th class="name table-text">Some random dude</th>
          <th class="from table-text">17:00</th>
          <th class="until table-text">19:00</th>
        </tr>
        <tr height="49px" class="booking-row-odd">
          <th class="name table-text">-</th>
          <th class="from table-text">19:00</th>
          <th class="until table-text">25:00</th>
        </tr>
      </table>

      <label class="booking-title">New Booking: </label>
      <br>

      <div class="input-form">
        <div class="name-form">
          <div class="form-group">
            <label class="input-description">name</label>
            <input type="text" class="input-input form-control form-border" id="" placeholder="John Appleseed">
          </div>
        </div>
        <div class="phone-form">
          <div class="form-group">
            <label class="input-description">phone</label>
            <input type="text" class="input-input form-control form-border" id="" placeholder="080-000-0000">
          </div>
        </div>
      </div>

      <div class="from-to-form form-group">
        <div class="">
          <label class="time-form-text">from</label>
          <div class="input-group time-input">
            <input type="text" name="time from" value="00:00" class="form-control form-border booking-time">
            <span class="input-group-addon booking-addon form-border"><img src="img/clock-icon.png"/></span>
          </div>
        </div>

        <div class="">
          <label class="time-form-text">to</label>
          <div class="input-group time-input">
            <input type="text" name="time to" value="00:00" class="form-control form-border booking-time">
            <span class="input-group-addon booking-addon form-border"><img src="img/clock-icon.png"/></span>
          </div>
        </div>
      </div>

      <div class="">
        <button type="button" name="button" class="btn the-only-button">submit</button>
      </div>
    </div>
  </div>



</template>

<script>

export default {

}
</script>

<style>

</style>
