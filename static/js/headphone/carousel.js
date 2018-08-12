Vue.component('carousel', {
  props: ['items'],
  delimiters: ['${', '}'],
  template: `
  <center>
    <v-app style="max-width:500px;">
      <v-carousel light hide-delimiters id="phone-img-carousel">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        id="hoge"></v-carousel-item>
      </v-carousel>
    </v-app>
  </center>
  `
});
