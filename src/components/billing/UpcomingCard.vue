<template>
    <div class="upcome-card">
        <div class="title-and-btn">
            <p>Upcoming Payment</p>
            <button>Pay Invoice</button>
        </div>
        <div class="upcoming-info">
            <div class="upcoming-balance">
                <p class="balance-label">Current Balance</p>
                <div class="balance-price">
                    <p class="price-symbol">$</p>
                    <p class="price-integer">145.</p>
                    <p class="price-float">55</p>
                </div>
            </div>
            <div class="cardNumber">
                <p class="card-label">Payment Card:</p>
                <p class="card-number">****0349,Hamud</p>
            </div>
            <div class="date">
                <div class="payment-date">
                    <p class="date-label">Payment Date:</p>
                    <p class="date-value">03/14/2018</p>
                </div>
                <div>
                    <p class="date-label">Payment Type:</p>
                    <p class="date-value"> Auto-Pay</p>
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
    .upcome-card{
        width:492px;
        height: 180px;
        border-radius: 8px;
        background-color: #16171c;
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
                background-color: #2e303c;
                border-radius: 3px;
                .balance-label{
                    font-size: 11px;
                    font-family: "OpenSans ExtraBold";
                    text-transform: uppercase;
                    padding-top: 12px;
                }
                .balance-price{
                    display: flex;
                    justify-content: center;
                    padding-top:15px;

                    .price-symbol, .price-float{
                        font-family: "Opensans Bold";
                    }
                    .price-integer{
                        font-size:22px;
                        font-family: "Opensans ExtraBold";
                    }
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
