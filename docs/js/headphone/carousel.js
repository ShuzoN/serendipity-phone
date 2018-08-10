Vue.component('carousel', {
  props: ['items'],
  delimiters: ['${', '}'],
  template: `
  <v-app id="inspire" style="height:700px;">
    <v-carousel light hide-delimiters style="height:700px;">
      <v-carousel-item class="hoge"
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </v-app>
  `
});
