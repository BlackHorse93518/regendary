<template>
    <div class="parental">
        
        <b-container class="parental-container">

            <ul><li><h2>Parental Controls</h2></li></ul>
            <b-row class="content">
                <b-col col md="12" lg="8" >
                    <b-row>
                        <b-col class="website-col"><WebsiteControl class="web-site"/></b-col>                       
                    </b-row> 
                    <b-row >
                        <b-col><AddOn class="addon"/></b-col>
                    </b-row> 
                </b-col>

                 <b-col col md="12" lg="4">
                     <b-row>
                        <b-col><ProtectionCard class="protection" :title="title1" :imgUrl="imgUrl1" /></b-col>                       
                    </b-row>
                    <b-row>
                        <b-col><ProtectionCard class="protection" :title="title2" :imgUrl="imgUrl2" /></b-col>                       
                    </b-row> 
                    <b-row>
                        <b-col><ProtectionCard class="protection" :title="title3" :imgUrl="imgUrl3" /></b-col>                       
                    </b-row>  
                 </b-col>
            </b-row>
        

        </b-container>
    </div>
</template>

<script>

import WebsiteControl from "@/components/parental/WebsiteControl.vue"
import AddOn from "@/components/parental/AddOn.vue"
import ProtectionCard from "@/components/parental/ProtectionCard.vue"

export default {
    components:{
        WebsiteControl,
        AddOn,
        ProtectionCard
    },
    data:()=>({
        title1:"VIRUS",
        title2:"SCAM",
        title3:"TIMED",
        imgUrl1:"/assets/protection.svg",
        imgUrl2:"/assets/protection1.svg",
        imgUrl3:"/assets/homework.svg",

    })
}
</script>

<style lang="scss" scoped>
    .parental{
        margin-top: 80px;
        align-content: center;


        .parental-container{
            max-width:1700px;
            
            ul{
                margin-bottom: 0px;
                li span {font-size: 200%;}

                h2{
                    text-align: start;
                    font-family: "OpenSans ExtraBold";
                    margin-bottom:0px;
                    text-transform: uppercase;
                }
            }

            .content{
                .col{
                    margin-top:50px;
                    .website-col{
                        margin-top:0px;
                    }
                    .web-site{
                        border-radius: 8px;
                    }
                    .addon{
                        margin-top:50px;
                        margin-bottom: 50px;
                    }
                }
                
            }
            

        }
    }
</style>

