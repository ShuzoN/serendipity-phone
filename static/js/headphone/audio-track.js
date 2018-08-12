Vue.component('audio-track', {
  props: ['track'],
  delimiters: ['${', '}'],
  template: `
<div>
  <div class="center">
    <iframe width="250px" frameborder="no" v-bind:src="track.viewingTrack"></iframe>
  </div>
  <p class="mTpx5">このサイトはNCS(著作権フリー曲)を利用しています.</p>

  <h5>Sample Tracks</h5>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=bM7SZ5SBzyY">Alan Walker - Fade</a>
    </li>
    <li>
      <a href="https://www.youtube.com/audiolibrary/music">YouTube Audio Library</a>
    </li>
  </ul>
</div>
  `
});
