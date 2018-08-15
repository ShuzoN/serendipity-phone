+++
date = "2018-08-13T12:00:00+09:00"
title = "Bose SoundLink Around Ear Headphones II"
draft = false
image = "/img/headphone/soundlink_headphones_ii_1.jpg"
showonlyimage = false
weight = 3
+++

<!--more-->

<div id="images">
  <carousel v-bind:items="items" ></carousel>
</div>

<div id="page-links">
  <page-link v-bind:link="link" ></page-link>
</div>

---

#### Sound 

Coming Soon!!!

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
      { src: '/serendipity-phone/img/headphone/soundlink_headphones_ii_1.jpg' },
      { src: '/serendipity-phone/img/headphone/soundlink_headphones_ii_2.jpg' },
      { src: '/serendipity-phone/img/headphone/soundlink_headphones_ii_3.jpg' },
      { src: '/serendipity-phone/img/headphone/soundlink_headphones_ii_4.jpg' }
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
        weight: "200",
        impedance: "32Ω",
        plug: "stereo mini (3.5mm)"
      }
  }
});

new Vue({
  el: '#page-links',
  data: {
    link:
      {
        official:"https://www.bose.co.jp/ja_jp/products/headphones/over_ear_headphones/soundlink-around-ear-wireless-headphones-ii.html#v=soundlink_ae_headphones_ii_black",
        amazon:"https://www.amazon.co.jp/dp/" + "B014CI8VFQ",
        eIyahon:"http://www.e-earphone.jp/shopdetail/000000072127"
      }
  }
});

new Vue({
  el: '#audio-tracks',
  data: {
    tracks: [
      {
        viewingTrack: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ ""
      },
    ]
  }
});

</script>
