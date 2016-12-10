<!-- src/components/Directory.vue -->
<template>
  <div class="background">
      <div class="content-area-bg center-block">
        <label class="directory-header">Directory</label>
        <img src="../assets/img/ThinkSpaceDirectory.jpg" class="thinkspace-directory center-block"/>
        <div class="directory-block row">
          <div class="square column">
            <label class="directory-floor">1F</label>
            <label class="directory-name">1 TRAVEL</label>
            <label class="directory-name">2 LEISURE</label>
            <label class="directory-name">3 CRAFT</label>
          </div>
          <div class="square column">
            <label class="directory-floor">T1F</label>
            <label class="directory-name">4 SMART</label>
            <label class="directory-name">5 WISDOM</label>
          </div>
          <div class="square column">
            <label class="directory-floor">T2F</label>
            <label class="directory-name">6 FICTION</label>
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
  width: 180px;
  height: 180px;
  background-color: #ffffff;
	border: solid 1px #979797;
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


</style>
