<template>
    <div class="active-card">
        <div class="title-and-btn">
            <p>Active Card</p>
            <button>Update Card</button>
        </div>
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
        width:492px;
        height: 180px;
        border-radius: 8px;
        background-color: #2e63ff;
        padding:30px 32px 26px 32px;

        .title-and-btn{
            display: flex;
            justify-content: space-between;
            align-items: center;

            p{
                font-size:17px;
                font-family: "OpenSans ExtraBold";
                line-height: 20px;
                margin-bottom: 0px;

            }

            button{
                width:82px;
                height: 25px;
                font-size:10px;
                font-family: "OpenSans Bold";
                border-radius:2px;
                border:none;
                outline:none;
                color:#2e63ff;
                background-color: #fbffe8;
            }
        }
        
        .upcoming-info{
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            p{
                margin-bottom:0px;
                font-size:14px;
            }

            .upcoming-balance{
                
                width:143px;
                height: 80px;
                flex-basis: 33%;
                background-color: #ffffff;
                border-radius: 3px;
                img{
                    width: 130%;
                    height: 130%;
                    margin-left:-15%;
                    margin-top:-8%;
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
