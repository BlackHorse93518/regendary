<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :options="options" :width="600" :height="120"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data: ()=>({
      datacollection: {
        labels: ['Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality', 'Quality'],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#2857ff',
						pointBackgroundColor: 'rgba(255,255,255, 0.9)',
            borderWidth: 1,
    
						pointBorderColor: 'rgba(255,255,255, 0.5)',
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
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

<style>
  .small {
    max-width: 600px;
    
    
  }
</style>