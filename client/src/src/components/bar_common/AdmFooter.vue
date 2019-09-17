<template>
  <div class="copyright">
    <div class="line">
      <div class="margin">
        <!-- left -->
        <div class="s-12 m-12 l-8 footer-links">
          <ul class="footer-bar-links">
            <li>
              <a href>Contact Us</a>
            </li>
            <li>
              <a href>Faqs</a>
            </li>
            <li>
              <a href>Shipping</a>
            </li>
            <li>
              <a href>Return Policy</a>
            </li>
            <li>
              <a href>Order Tracking</a>
            </li>
          </ul>
          <p>Copyright © 2017.Company name All rights reserved.More Templates</p>
        </div>
        <!-- right -->
        <div class="s-12 m-12 l-4 payment-methods">
          <i class="fa fa-cc-visa fa-2x"></i>
          <i class="fa fa-cc-mastercard fa-2x"></i>
          <i class="fa fa-cc-paypal fa-2x"></i>
          <i class="fa fa-credit-card fa-2x"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Lfooter"
};
</script>
<style scoped>
.copyright {
  width: 100%;
  box-sizing: border-box;
  background: #181415;
  padding: 2.5rem 5.25rem;
}
.line {
  margin: 0 auto;
  padding: 0 0.625rem;
  max-width: 71.25rem;
}
.margin {
  text-align: left;
  margin: 0 -0.625rem;
}
.footer-links {
  padding: 0 0.625rem;
}
.footer-bar-links {
  list-style: none;
  margin: 0;
  padding: 0;
}
p {
  color: #716b6c;
}
p {
  margin: 0 0 12px 0;
}
.footer-bar-links li {
  display: inline-block;
  padding: 0px 8px 6px 0px;
}
a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  color: #cf9963;
}
</style>