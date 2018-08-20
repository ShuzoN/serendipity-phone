Vue.component('product-specification', {
  props: ['spec'],
  delimiters: ['${', '}'],
  template: `
  <div>
    <p><strong>Product Specification</strong></p>  
    <p>System: \${ spec.system }</p>
    <p>Design: \${ spec.design }</p>
    <p>Weight: \${ spec.weight }</p>
    <p>Impedance: \${ spec.impedance }</p>
    <p>Plug: \${ spec.plug }</p>
    <p v-if="spec.isWireless">wireless: \${ spec.isWireless}</p>
    <p v-if="spec.battery">battery: \${spec.battery}</p>
  </div>
  `
});
