import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    // options: {
    //   scales: {
    //     yAxes: [{
    //       display: false,
    //       ticks: {
    //         beginAtZero: false,
    //         display: false
    //       },
    //       gridLines: {
    //         display: false
    //       }
    //     }],
    //     xAxes: [{
    //       ticks: {
    //         beginAtZero: false
    //       },
    //       gridLines: {
    //         display: false
    //       }
    //     }]
    //   }
    // }
    this.renderChart(this.chartData, this.options)
  }
}