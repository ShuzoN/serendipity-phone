Vue.component('audio-track', {
  props: ['track'],
  delimiters: ['${', '}'],
  template: `
<div>
  <div class="center">
    <iframe width="250px" frameborder="no" v-bind:src="track.viewingTrack"></iframe>
  </div>
</div>
  `
});
