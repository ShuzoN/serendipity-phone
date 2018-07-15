+++
date = "2018-05-19T16:00:00+09:00"
title = "SOUND HOUSE CLASSIC PRO CHP7000"
draft = false
image = "/img/headphone/soundhouse_cph7000.jpg"
showonlyimage = false
weight = 1
+++
[1]: /img/headphone/soundhouse_cph7000.jpg


<p class="txtR">¥4300</p>  

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
        official:"https://www.soundhouse.co.jp/products/detail/item/25126/",
      }
  }
});

new Vue({
  el: '#audio-tracks',
  data: {
    tracks: [
      {
        viewingTrack: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ "463725633"
      },
    ]
  }
});

</script>
