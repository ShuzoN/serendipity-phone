Vue.component('audio-track', {
  props: ['track'],
  delimiters: ['${', '}'],
  template: `
<div>
  <p>\${ track.title }</p>
  <div class="center">
    <table>
      <tr>
        <td>
          <iframe v-bind:src="track.video"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </td>
        <td>
          <iframe width="250px" frameborder="no" v-bind:src="track.viewingTrack"></iframe>
        </td>
      </tr>
    </table>
  </div>
</div>
  `
});
