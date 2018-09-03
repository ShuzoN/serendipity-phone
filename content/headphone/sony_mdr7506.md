+++
date = "2018-05-19T16:00:00+09:00"
title = "SONY MDR-7506"
draft = false
image = "/img/headphone/sony_mdr7506_1.jpg"
showonlyimage = false
weight = 1
+++
[1]: /img/headphone/sony_mdr7506_1.jpg

<!--more-->

---

<div id="images">
  <carousel v-bind:items="items" ></carousel>
</div>

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

<script src="/js/headphone/carousel.js"></script>
<script src="/js/headphone/page-links.js"></script>
<script src="/js/headphone/spec.js"></script>
<script src="/js/headphone/audio-track.js"></script>

<script>
new Vue({
  el: '#images',
  data: {
    items: [
      { src: '/serendipity-phone/img/headphone/sony_mdr7506_1.jpg' },
      { src: '/serendipity-phone/img/headphone/sony_mdr7506_2.jpg' },
      { src: '/serendipity-phone/img/headphone/sony_mdr7506_3.jpg' },
      { src: '/serendipity-phone/img/headphone/sony_mdr7506_4.jpg' }
    ]
  }
})

new Vue({
  el: '#spec',
  data: {
    spec:
      {
        system: "Dynamic",
        design: "Closed-Back",
        weight: "230g",
        impedance: "63Ω",
        plug: "Stereo mini plug"
      }
  }
});

new Vue({
  el: '#page-links',
  data: {
    link:
      {
        official: "https://www.sony.jp/pro-audio/products/MDR-7506/",
        amazon: "https://www.amazon.co.jp/dp/B000AJIF4E",
        eIyahon: "http://www.e-earphone.jp/sony/mdr-7506"
      }
  }
});

new Vue({
  el: '#audio-tracks',
  data: {
    tracks: [
      {
        viewingTrack: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ "489281379"
      },
    ]
  }
});

</script>
