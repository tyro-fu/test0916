<template>
  <div class="margin">
    <!-- about us block 1 -->
    <div class="s-12 m-12 l-4 margin-m-bottom-60">
      <div class="fullwidth margin-bottom">
        <a href class="image-hover-zoom">
          <img  src="../images/mockup3.jpg" alt />
        </a>
      </div>
      <div class="fullwidth">
        <h3>Lovely tutorial</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus quis eros ut aliquam.</p>
      </div>
    </div>
    <!-- about us block 2 -->
     <div class="s-12 m-12 l-4">
      <div class="fullwidth margin-bottom">
        <a href class="image-hover-zoom">
          <img src="../images/mockup1.jpg" alt />
        </a>
      </div>
      <div class="fullwidth">
        <h3>Follow us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus quis eros ut aliquam.</p>
      </div>
    </div>
    <!-- about us block 3 -->
    <div class="s-12 m-12 l-4">
      <div class="fullwidth margin-bottom">
        <a href class="image-hover-zoom">
          <img src="../images/mockup4.jpg" alt />
        </a>
      </div>
      <div class="fullwidth">
        <h3>Read our blog</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus quis eros ut aliquam.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Lbottom"
};
</script>
<style scoped>
.margin {
  overflow: hidden;
  margin: 0 0.625rem;
}
.margin > .fullwidth {
  padding: 0 0.625rem;
}
.margin-bottom {
  margin-bottom: 1.25em;
}
.fullwidth {
  float: left;
  text-align: left;
}
a,
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: #1d191a;
  transition: color 0.2s linear 0s;
  -o-transition: color 0.2s linear 0s;
  -ms-transition: color 0.2s linear 0s;
  -moz-transition: color 0.2s linear 0s;
  -webkit-transition: color 0.2s linear 0s;
}
.image-hover-zoom img {
  transition: all 0.4s linear 0s;
  -o-transition: all 0.4s linear 0s;
  -ms-transition: all 0.4s linear 0s;
  -moz-transition: all 0.4s linear 0s;
  -webkit-transition: all 0.4s linear 0s;
}
img {
  border: 0;
  display: block;
  height: auto;
  width: 94%;
}
img:hover{
    width: 93%;
}
.l-4 {
  width: 33.3333%;
}
a:active,
a:hover {
  outline-width: 0;
}
h3 {
  text-align: left;
}
.m-12 {
  float: left;
}
/* .s-12{
    margin: 0 5px;
} */
</style>