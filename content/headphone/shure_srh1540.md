+++
date = "2018-05-18T20:08:00+09:00"
title = "Shure srh1540"
draft = false
image = "img/headphone/shure_srh1540.jpg"
showonlyimage = false
weight = 1
+++

[1]: /img/headphone/shure_srh1540.jpg

<p class="txtR">¥40000</p>

<!--more-->

---

![phone][1]

<div id="page-links">
<page-link v-bind:link="link" ></page-link>
</div>

---

#### Sound 

<div id="audio-tracks">
<audio-track
  v-for="track in tracks"
  v-bind:track="track"
></audio-track>
</div>

This site uses NCS release audio.

---

<div id="spec">
<product-specification v-bind:spec="spec" ></product-specification>
</div>

<script src="/js/headphone/page-links.js"></script>
<script src="/js/headphone/spec.js"></script>
<script src="/js/headphone/audio-track.js"></script>

<script>
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

new Vue({
  el: '#audio-tracks',
  data: {
    tracks: [
      {
        title: "Alan Walker - Faded",
        video: "https://www.youtube.com/embed/" + "bM7SZ5SBzyY",
        viewingTrack: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ "456916059"
      },
    ]
  }
});

</script>
