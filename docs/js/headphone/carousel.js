Vue.component('carousel', {
  props: ['items'],
  delimiters: ['${', '}'],
  template: `
  <v-app>
    <v-carousel light hide-delimiters id="phone-img-carousel">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </v-app>
  `
});
