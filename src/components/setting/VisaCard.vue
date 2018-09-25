<template>
    <div class="active-card">
        
        <div class="upcoming-info">
            <div class="upcoming-balance">
                <img src="../../assets/visa-pay-logo.svg" alt="">
            </div>
            <div class="cardNumber">
                <p class="card-label">Card Holder:</p>
                <p class="card-number">Keish Masshell</p>
            </div>
            <div class="date">
                <div class="payment-date">
                    <p class="date-label">Card Number:</p>
                    <p class="date-value">**** **** **** **23</p>
                </div>
                <div>
                    <p class="date-label">Card Expiration:</p>
                    <p class="date-value"> 03/2020</p>
                </div>
                
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .active-card{
        max-width:370px;
        border-radius: 4px;
        background-color: #2e63ff;
        padding:20px;
        
        .upcoming-info{
            display: flex;
            justify-content: space-between;
            
            p{
                margin-bottom:0px;
                font-size:14px;
            }

            .upcoming-balance{
                
                width:103px;
                height: 70px;
                flex-basis: 33%;
                background-color: #ffffff;
                border-radius: 3px;
                display: flex;
                margin:auto;
                
                align-items: center;
                justify-content: center;
                
                img{
                    width: 130%;
                    height: 130%;
                    margin-left:-5%;
                    margin-top:0%;
                    object-fit: contain;
                }
            }

            .cardNumber{
                flex-basis: 30%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                p{
                    text-align: end;
                }
                .card-label{
                    font-size: 13px;
                    font-family: "OpenSans ExtraBold";
                }
                .card-number{
                    font-size: 11px;
                    font-family: "OpenSans SemiBold";
                }
            }
            .date{
                flex-basis: 36%;
                display: flex;
                flex-direction: column;
                .payment-date{
                    padding-bottom: 8px;
                }
                p{
                    text-align: end;
                }
                .date-label{
                    font-size: 13px;
                    font-family: "OpenSans ExtraBold";
                }
                .date-value{
                    font-size: 11px;
                    font-family: "OpenSans SemiBold";
                }
            }
        }
    }
    
</style>
