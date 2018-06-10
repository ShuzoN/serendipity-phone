+++
date = "2018-05-19T16:00:00+09:00"
title = "AKG K52"
draft = false
image = "img/headphone/akg_k52.jpg"
showonlyimage = false
weight = 1
+++
[1]: /img/headphone/akg_k52.jpg


<p class="txtR">¥5600</p>  

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
        official:"http://akg.harman-japan.co.jp/product.php?id=k52",
        amazon:"https://www.amazon.co.jp/AKG-K52/dp/B06XT8DLZV",
        eIyahon:"http://www.e-earphone.jp/akg/k52"
      }
  }
});

new Vue({
  el: '#audio-tracks',
  data: {
    tracks: [
      {
        title: "Alan Walker - Faded",
        video: "https://www.youtube.com/embed/60ItHLz5WEA",
        viewingTrack: "https://drive.google.com/uc?authuser=0&id=1LHAf5gSpgM9Hx-RIwgdyl_S5uNnrgWj9&export=download"
      },
    ]
  }
});

</script>
