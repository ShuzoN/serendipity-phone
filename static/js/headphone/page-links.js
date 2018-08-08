Vue.component('page-link', {
  props: ['link'],
  delimiters: ['${', '}'],
  template: `
  <table>
    <tr>
      <td v-if="link.official">
        <a v-if="link.official" v-bind:href="link.official">
          <v-btn color="info" depressed>Official Page</v-btn>
        </a>
      </td>
      <td v-if="link.amazon">
        <a v-bind:href="link.amazon">
          <img alt="amazon" src="/serendipity-phone/img/logo/amazon_logo.png" height="30px" />
        </a>
      </td>
      <td v-if="link.eIyahon">
        <a v-bind:href="link.eIyahon">
          <img alt="e☆イヤホン" src="/serendipity-phone/img/logo/e_iyahon.png" height="30px" />
        </a>
      </td>
    </tr>
  </table>
  `
});
