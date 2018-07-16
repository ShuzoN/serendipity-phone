+++
date = "2018-05-19T16:00:00+09:00"
title = "SONY MDR-CD900ST"
draft = false
image = "/img/headphone/sony_mdr_cd900st.jpg"
showonlyimage = false
weight = 1
+++
[1]: /img/headphone/sony_mdr_cd900st.jpg

<p class="txtR">¥16000</p>  

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
        weight: "200g",
        impedance: "63Ω",
        plug: "Stereo Standard"
      }
  }
});

new Vue({
  el: '#page-links',
  data: {
    link:
      {
        official: "http://www.smci.jp/s/headp/page/cd900st",
        amazon: "https://www.amazon.co.jp/dp/B000UPEJCU",
        eIyahon: "http://www.e-earphone.jp/shop/shopdetail.html?brandcode=002014000005&search=900st&sort=price_desc"
      }
  }
});

new Vue({
  el: '#audio-tracks',
  data: {
    tracks: [
      {
        viewingTrack: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ "472388967"
      },
    ]
  }
});

</script>
