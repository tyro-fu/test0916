<template>
  <div class="headers">
    <div class="navbar">
      <div class="nav-container">
        <div class="nav-img">
          <img src="../common/images/logo.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headers",
};
</script>
<style scoped>
.headers {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
}
.navbar {
  background: #2f333e;
  padding-top: 16px;
  padding-bottom: 16px;
  color: #fff;
  position: relative;
  border-radius: 0;
  -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding-left: 0;
  padding-right: 0;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.3125rem 11.875rem;
  box-sizing: border-box;
}
.nav-img {
  width: 207px;
  height: 27px;
}
.nav-msg {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-msg li {
  float: left;
}
.tip {
  background-color: #2f333e;
  color: #fff;
  border: none;
  font-size: 1.25rem;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.nav-link {
  display: inline-block;
  padding: 1rem 1rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
}
.clearfix {
  display: none !important;
}
</style>