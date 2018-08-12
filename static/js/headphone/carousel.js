Vue.component('carousel', {
  props: ['items'],
  delimiters: ['${', '}'],
  template: `
  <v-app id="phone-img-carousel">
    <v-carousel light hide-delimiters id="phone-img-carousel-item">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      id="hoge"></v-carousel-item>
    </v-carousel>
  </v-app>
  `
});
