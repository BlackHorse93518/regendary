<template>
    <div class="billing">
        <div class="title">
            <p>Billing Infomation</p>
            <button>SAVE PROFILE</button>
        </div>
        <div class="billing-card">
            <p>Current Billing</p>
            <VisaCard />
        </div>
        <div class="billing-option">
            <p>1.Choose your payment option.</p>
        </div>
        
    </div>    
</template>
<script>
import VisaCard from './VisaCard'
export default {
    components:{
        VisaCard
    }
}
</script>
<style lang="scss" scoped>
    .billing{
        width: 100%;
        height: 100%;
        padding:70px 70px 50px 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-size:28px;
                font-family: "OpenSans Bold";
            }
            button{
                font-size:14px;
                font-family: "OpenSans Bold";
                padding:10px 20px;
                border:none;
                outline:none;
                border-radius: 2px;
                
            }
        }
        .billing-card{
            text-align: start;
            p{
                text-transform: uppercase;
                font-family: "OpenSans SemiBold";
            }
        }
        .billing-option{
            text-align:start;
            p{
                text-transform: uppercase;
                font-family: "OpenSans SemiBold";
            }
        }

    }
</style>
