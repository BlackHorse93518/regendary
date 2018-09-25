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
            <p class="option-title">1.Choose your payment option.</p>
            <div class="option-tab">
                <p>Credit Cards</p>
                <p>Bank Accounts</p>
            </div>
            <hr>
            <div class="option-card">
                <div class="visa-card">
                    <img src="../../assets/visa-pay-logo_white.svg" alt="">
                </div>
                <div class="express-card">
                    <img src="../../assets/american-express-logo.svg" alt="">
                </div>
                <div class="master-card">
                    <img src="../../assets/master-card-logo.svg" alt="">
                </div>
                <div class="wire-card">
                    <img src="../../assets/google wallet.svg" alt="">
                </div>
            </div>
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
            .option-tab{
                display: flex;
                justify-content: flex-start;
                font-size:14px;
               p{
                   margin-right: 30px;
                   cursor: pointer;
               }
            }
            hr{
                border:0px;
                height: 1px;
                background-color:#21242b!important;
                margin-top:1px;
                margin-bottom:20px;
            }

            .option-card{
                display: grid;
                 grid-template-columns: repeat(4,1fr);
                
                div{
                    height:100px;
                    background-color: #000;
                    width: 70%;
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        width:60%;
                        height:80%;
                        
                    }
                }
            }

        }

    }
</style>
