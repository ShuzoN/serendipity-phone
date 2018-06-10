Vue.component('audio-track', {
  props: ['track'],
  delimiters: ['${', '}'],
  template: `
<div>
  <p>\${ track.title }</p>
  <div class="center">
    <table>
      <tr>
        <iframe v-bind:src="track.video"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </tr>
      <tr>
        <audio v-bind:src="track.viewingTrack" controls controlsList="nodownload">
      </tr>
    </table>
  </div>
</div>
  `
});
