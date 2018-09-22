<template>
  <div class="usage">
    <bar-chart :chart-data="datacollection" :options="options" :width="430" :height="90"></bar-chart>
  </div>
</template>

<script>
  import BarChart from './BarChart.js'

  export default {
    components: {
      BarChart
    },
    data: ()=>({
      datacollection: {
        labels: ['Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality'],
				datasets: [
					{
						label: 'Usage',
						backgroundColor: '#2857ff',
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100, 70, 30,50,20,40,70]
					}
        ]
      },
        
        options: {
          scales: {
            yAxes: [{
              display: false,
              ticks: {
                beginAtZero: true,
                display: false
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              display: false,
              ticks: {
                beginAtZero: false,
                fontSize:20
              },
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
              label: function(tooltipItems, data) {
                return tooltipItems.yLabel+"%";
              }
            },
            
          },

          responsive: true,
          maintainAspectRatio: false,
          height: 100
        }
    }),
    mounted () {
      
    },
    methods: {
      
    }
  }
</script>
