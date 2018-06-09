Vue.component('sound-video', {
  props: ['link'],
  template: `
<div class="center">
  <iframe v-bind:src="link.video"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
  `
});
