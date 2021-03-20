<template>
 <div class='dashboard'>
  <div id="vis"></div>
 </div>
</template>

<script>

import Vue from 'vue'
import VueVega from 'vue-vega'
import embed from 'vega-embed';

Vue.use(VueVega)

export default{
  props: ['history'],
  data () { 
    return {
      encoding: {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "value", "type": "quantitative"},
        "color": {"field": "topic", "type": "nominal"}
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    history: function () {
      let yourVlSpec = {
          $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
          description: 'A line graph',
          data: {'values' : this.history},
          mark: 'line',
          encoding: this.encoding
      };
      embed('#vis', yourVlSpec);
    }
  },
}
</script>

