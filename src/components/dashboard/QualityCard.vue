<template>
    <div class="quality-card">
        <p class="title">{{title}}</p>
        <div class="line-chart">
            <RandomChart />
        </div>
        <div class="schedule-bottom">
            <div class="bottom-left">
                <p class="info-label">Last quality check:</p>
                <p class="info-date">03/05/2018, 2:15pm</p>
            </div>
            <button class="view-btn"> VIEW FULL</button>
        </div>
       
    </div>
</template>
<script>

import RandomChart from '@/components/dashboard/RandomChart.vue'

export default {
    components:{
        RandomChart,
    },
    data:()=>({
        title:"quality comparsion",
        items:[
            {reason:"Internet not turning on for him-self, tried reset from our end.", date:"09/13/2018, 2:15PM", technician:"Jemal Hamud", priority:"Highest Priority", isHigh:true},
            {reason:"Internet not turning on for him-self, tried reset from our end.", date:"09/13/2018, 3:00PM", technician:"Jemal Ramsay", priority:"Lowest Priority", isHigh:false},   
        ],
    })
}
</script>
<style lang="scss" scoped>
    .quality-card{
        position: relative;
        background-color: #16171c;
        width:570px;
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top:35px;
        padding-left:34px;
        padding-right:25px;
        padding-bottom:30px;
        border-radius: 16px;
        overflow: hidden;

        

        .title{
            width:30%;
            text-align: start;
            font-family: 'OpenSans ExtraBold';
            font-size: 25px;
            font-weight: 800;
            line-height: 30px;
            text-transform: uppercase;
        }

        .line-chart{
            
            margin-left: -39px;
            margin-right: -75px;
        }

        .schedule-bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .bottom-left{
                .info-label{
                    font-size:11px;
                    font-family: "OpenSans Bold";
                    text-align: start;
                    margin-bottom: 0px;
                }
                .info-date{
                    font-size:16px;
                    font-family: "OpenSans ExtraBold";
                    text-transform: uppercase;
                    margin-bottom: 0px;
                }

            }
            .view-btn{
                font-family: "OpenSans ExtraBold";
                font-size:15px;
                font-weight: 700;
                padding:8px;
                padding-left:15px;
                padding-right:15px;
                border:none;
                border-radius: 5px;
                background-color:#fff;
            }
        }
    }
</style>
