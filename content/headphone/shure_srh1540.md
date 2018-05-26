+++
date = "2018-05-18T20:08:00+09:00"
title = "Shure srh1540"
draft = false
image = "img/headphone/shure_srh1540.jpg"
showonlyimage = false
weight = 1
+++

[1]: /img/headphone/shure_srh1540.jpg

<p class="txtR">from: ¥40000</p>  

<!--more-->

---

<div id="spec">
<product-specification v-bind:spec="spec" ></product-specification>
</div>

![phone][1]

<div id="page-links">
<page-link v-bind:link="link" ></page-link>
</div>


---

#### Sound 

<div class="center">
  <iframe width="320" height="200" src="https://www.youtube.com/embed/aAPlpMPoP3Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

---

<script>
Vue.component('product-specification', {
  props: ['spec'],
  template: `
  <div>
    <p><strong>Product Specification</strong></p>  
    <p>System: {{ spec.system }}</p>
    <p>Design: {{ spec.design }}</p>
    <p>Weight: {{ spec.weight }}</p>
    <p>Impedance: {{ spec.impedance }}</p>
    <p>Plug: {{ spec.plug }}</p>
  </div>
  `
});

new Vue({ 
  el: '#spec',
  data: {
    spec: 
      {
        system: "Dynamic",
        design: "Closed-Back",
        weight: "286g",
        impedance: "46Ω",
        plug: "stereo mini (3.5mm)"
      }
  }
});


Vue.component('page-link', {
  props: ['link'],
  template: `
  <table>
  <tr>
  <td>
  <a v-bind:href="link.official">
  <div>Official Page</div>
  </a>
  </td>
  <td>
  <a v-bind:href="link.amazon">
  <img alt="amazon" src="/img/logo/amazon_logo.png" height="30px" />
  </a>
  </td>
  <td>
  <a v-bind:href="link.eIyahon">
  <img alt="e☆イヤホン" src="/img/logo/e_iyahon.png" height="30px" />
  </a>
  </td>
  </tr>
  </table>
  `
});

new Vue({
  el: '#page-links',
  data: {
    link:
      {
        official: "https://www.shure.co.jp/products/headphones/srh1540",
        amazon: "https://www.amazon.co.jp/SHURE-%E3%83%98%E3%83%83%E3%83%89%E3%83%9B%E3%83%B3-%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA%E7%94%A8-SRH1540-%E3%80%90%E5%9B%BD%E5%86%85%E6%AD%A3%E8%A6%8F%E5%93%81%E3%80%91/dp/B00H1FIJBY",
        eIyahon: "http://www.e-earphone.jp/shop/shopdetail.html?brandcode=002003000012&search=srh1540&sort=price_desc"
      }
  }
});

</script>
