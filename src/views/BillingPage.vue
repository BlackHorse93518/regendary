<template>
    <div class="billing">
        
        <b-container class="billing-container">

            <ul><li><h2>Billing</h2></li></ul>

            <b-row class="billing-info">
                 
                 <b-col class="col"  > <UpcomingCard /> </b-col>
                 <b-col class="col" > <PreferCard /> </b-col>
                 <b-col class="col" > <ActiveCard /> </b-col>

            </b-row>

            <b-row class="billing-details">
                <b-col col lg="8" cols="12"> <TableCard />  </b-col>
                <b-col col lg="4">
                    <div class="billing-sidesection">
                        <UsageCard class="usage"/>
                        <PolicyCard class="policy" />
                    </div>
                </b-col>
            </b-row>

        </b-container>
    </div>
</template>
<script>

import UpcomingCard from "@/components/billing/UpcomingCard.vue"
import PreferCard from "@/components/billing/PreferCard.vue"
import ActiveCard from "@/components/billing/ActiveCard.vue"
import TableCard from "@/components/billing/TableCard.vue"
import UsageCard from "@/components/billing/UsageCard.vue"
import PolicyCard from "@/components/billing/PolicyCard.vue"
import BarChart from "@/components/billing/BarChart.vue"



export default {
    components:{
        UpcomingCard,
        PreferCard,
        ActiveCard,
        TableCard,
        UsageCard,
        PolicyCard,
        BarChart

    }
    
}
</script>
<style lang="scss" scoped>
    .billing{
        margin-top: 80px;
        align-content: center;


        .billing-container{
            max-width:1700px;
            
            ul{
                margin-bottom: 0px;
                li span {font-size: 200%;}

                h2{
                    text-align: start;
                    font-family: "OpenSans ExtraBold";
                    margin-bottom:0px;
                }
            }
            
            .row{
                margin-top:50px;
                margin-bottom:50px;
                .col {
                    margin-top:50px;
                }
            }

            .billing-details{
                .billing-sidesection{
                    display: flex;
                    flex-direction: column;
                    .usage{
                        margin-bottom:50px;
                    }
                }
            }
        }
    }
</style>
