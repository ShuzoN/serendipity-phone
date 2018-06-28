Vue.component('audio-track', {
  props: ['track'],
  delimiters: ['${', '}'],
  template: `
<div>
  <div class="center">
    <table>
      <tr>
        <td>
          <iframe width="250px" frameborder="no" v-bind:src="track.viewingTrack"></iframe>
        </td>
        <td>
          <iframe v-bind:src="track.video"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </td>
      </tr>
    </table>
  </div>
  <p>This site uses NCS release audio. Sample track includes "Alan Walker - Fade"</p>
</div>
  `
});
