<template>
    <div class="balance-card">
        <div  class="top">
            <p class="top-title">Total Balance</p>
            <div>
                <p class="top-balance">Balance Owed:</p>
                <div class="top-price">
                    <p class="price-symbol">$</p>
                    <p class="price-integer">145.</p>
                    <p class="price-float">22</p>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div  class="payment-info">
                <p class="payment-info-label">Next Payment:</p>
                <div class="payment-info-detail">
                    <p class="date">03/09/2018</p>
                    <hr>
                    <p class="pay-now">Pay it now <icon name="arrow-right"></icon></p>
                </div>
            </div>
            <button> VIEW BILL <icon name="angle-right"></icon></button>
        </div>

        <div class="background-img-1"></div>
        <div class="background-img-2"></div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.balance-card{
    position: relative;
    background-color: #2966ff;
    width:570px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    border-radius: 16px;
    overflow: hidden;

    .background-img-1{
        position: absolute;
        background-image: url('../../assets/TotalBalance_shape.svg');
        height: 70%;
        width:50%;
        bottom: 0px;
        right: 0px;
        background-repeat: no-repeat;
        z-index: 0;
    }

    .background-img-2{
        position: absolute;
        background-image: url('../../assets/TotalBalance_shape_top.svg');
        height: 70%;
        width:50%;
        top: -25px;
        left: 0px;
        background-repeat: no-repeat;
        z-index: 0;
    }

    .top{
        display: flex;
        justify-content: space-between;
        z-index: 1;
        &-title{
            width:30%;
            text-align: start;
            font-family: 'OpenSans ExtraBold';
            font-size: 40px;
            font-weight: 800;
            line-height: 40px;
            text-transform: uppercase;
        }
        .top-balance{
            
            font-size:14px;
            font-weight: 700;
            margin-bottom: 0px;
            text-align: end;
        }
        .top-price{
            display:flex;
            .price-symbol{
                font-family: "OpenSans Bold";
                font-size:25px;
                font-weight: 800;
            }
            .price-integer{
                font-family: "OpenSans ExtraBold";
                font-size:45px;
                line-height: 45px;
            }
            .price-float{
                font-family: "OpenSans Bold";
                font-size:25px;
                font-weight: 800;
            }
        }
    }
    .bottom{
        display:flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;

        .payment-info-label{
            font-family: "OpenSans Bold";
                font-size:14px;
                font-weight: 800;
                text-align: start;
                margin-bottom:0px;
            }
        .payment-info-detail{
            display: flex;
            .date{
                font-family: "OpenSans ExtraBold";
                font-size:25px;
                margin-bottom: 0px;
                line-height: 30px;
            }
            hr{
                border:none;
                width: 2px;
                height: 10px;
                background-color: #fff;
                margin: 0px;
                margin-left:10px;
                margin-top:10px;

            }
            .pay-now{
                font-size:10px;
                font-weight: 700;
                margin-bottom: 0px;
                align-items: center;
                line-height: 30px;
                margin-left:10px;
                
                .fa-icon{
                    height: 10px;
                }
            }
            
        }

        button{
            font-family: "OpenSans ExtraBold";
            font-size:15px;
            font-weight: 700;
            padding:10px;
            padding-left:20px;
            padding-right:20px;
            border:none;
            border-radius: 5px;
            background-color:#fff;
        }
    }
}
</style>
