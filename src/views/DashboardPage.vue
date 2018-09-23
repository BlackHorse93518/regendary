<template>
    <div class="dashboard">
        <b-container class="dashboard-container ">
            <b-row class="row first-row " >
                <b-col class="col" > <BalanceCard /> </b-col>
                <b-col class="col" > <InternetCard /> </b-col>
                <b-col class="col"> <BenefitCard /> </b-col>
            </b-row>
            <b-row class="row ">
                <b-col class="col" > <ScheduleCard /> </b-col> 
                <b-col class="col" > <QualityCard /> </b-col>  
                <b-col class="col" > <DeviceCard /> </b-col>        
            </b-row>
           
        </b-container>
    </div>
</template>
<script>
import BalanceCard from '@/components/dashboard/BalanceCard.vue'
import InternetCard from '@/components/dashboard/InternetCard.vue'
import BenefitCard from '@/components/dashboard/BenefitCard.vue'
import ScheduleCard from '@/components/dashboard/ScheduleCard.vue'
import QualityCard from '@/components/dashboard/QualityCard.vue'
import DeviceCard from '@/components/dashboard/DeviceCard.vue'

export default {
    components:{
        BalanceCard,
        InternetCard,
        BenefitCard,
        ScheduleCard, 
        QualityCard,
        DeviceCard,
    }
}
</script>
<style lang="scss" scoped>

    .dashboard{
        margin-top: 80px;
        align-content: center;

        .dashboard-container{
            max-width:1700px;
            .row{
                margin-top:50px;
                margin-bottom:50px;
                .col {
                    margin-top:50px;
                }
            }
        }
    }
    
</style>
