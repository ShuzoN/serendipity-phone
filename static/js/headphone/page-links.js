Vue.component('page-link', {
  props: ['link'],
  delimiters: ['${', '}'],
  template: `
  <table>
    <tr>
      <td>
        <a v-bind:href="link.official">
          <div>Official Page</div>
        </a>
      </td>
      <td>
        <a v-bind:href="link.amazon">
          <img alt="amazon" src="/img/logo/amazon_logo.png" height="30px" />
        </a>
      </td>
      <td>
        <a v-bind:href="link.eIyahon">
          <img alt="e☆イヤホン" src="/img/logo/e_iyahon.png" height="30px" />
        </a>
      </td>
    </tr>
  </table>
  `
});
