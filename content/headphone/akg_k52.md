+++
date = "2018-05-19T16:00:00+09:00"
title = "AKG K52"
draft = false
image = "/img/headphone/akg_k52.jpg"
showonlyimage = false
weight = 1
+++

<!--more-->

{{< images >}}
{{< page-links >}}

---

{{< audio-track >}}
[視聴楽曲の著作権について]({{< ref "headphone/notes_of_copyright.md" >}})

---

{{< spec >}}

<script>
new Vue({
  el: '#images',
  data: {
    items: [
      { src: '/serendipity-phone/img/headphone/akg_k52.jpg' },
      { src: '/serendipity-phone/img/headphone/akg_k52_2.jpg' },
      { src: '/serendipity-phone/img/headphone/akg_k52_3.jpg' },
      { src: '/serendipity-phone/img/headphone/akg_k52_4.jpg' }
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
        viewingTrack: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ "463726323"
      },
    ]
  }
});

</script>
