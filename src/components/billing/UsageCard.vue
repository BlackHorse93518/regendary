<template>
    <div class="usage-card">
        <div class="usage-title"><hr><p>Usage Statistics</p></div>
        <div class="usage-graph">
            <BarChart />
        </div>
    </div>
</template>
<script>
import BarChart from './BarChart.vue'
export default {
    components:{
        BarChart
    }
}
</script>
<style lang="scss" scoped>
    .usage-card{
        width: 492px;
        height: 224px;
        border-radius: 8px;
        background-color: #16171c;
        padding:30px 32px 6px 32px;

        p{
            margin-bottom: 0px;
        }

        .usage-title{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            hr{
                width:30px;
                margin-left:0px;
                margin-right: 10px;
                border:0px;
                height: 1px;
                background-color: #fff;
            }
            p{
                font-size: 18px;
                font-family: "OpenSans Bold";
            }
        }
        .usage-graph{
            padding-top:30px;
        }
    }
</style>
