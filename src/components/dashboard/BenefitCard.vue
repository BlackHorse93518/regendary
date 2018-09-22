<template>
    <div class="benefit-card">
            <p class="title">benefits and rewards</p>
            <div class="card-info">
                <div class="card-icon">
                    <img src="" alt="">
                </div>
                
                <div class="card-number">
                    <p v-for="i in 4" v-bind:key="i">XXXX</p>
                </div>
                <div class="card-details">
                    <div class="card-user">
                        <p class="card-user-label">Card Holder</p>
                        <p class="card-user-content">JEMAL HAMUD</p>
                    </div>
                    <div class="card-exp">
                        <p class="card-exp-label">EXP.DATE</p>
                        <p class="card-exp-content">09/2020</p>
                    </div>
                </div>
            </div>
            <p class="view-benefit">View Benefits</p>
            <icon name="angle-down"></icon>    
        <div class="background-img"></div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .benefit-card{
        position: relative;
        background-color: #141519;
        width:400px;
        height: 350px; 
        padding:30px;
        padding-right:40px;
        padding-left:40px;
        border-radius: 16px;
        overflow: hidden;

        .background-img{
            position: absolute;            
            background-image: url("../../assets/Benefits&Rewards_BG.svg");
            background-repeat: no-repeat;
            top:-160px;
            left:-180px;
            width:100%;
            height: 100%;
           
        }

        .view-benefit{
            font-family: 'OpenSans SemiBold';
            font-size:14px;
            margin-top:10px;
            margin-bottom:0px;
        }
        .title{
            position: relative;
            font-family: 'OpenSans ExtraBold';
            width: 50%;           
            font-size:32px;
            font-weight: 800;
            line-height: 35px;
            margin:0px;
            text-align: start;
            text-transform: uppercase;
            z-index: 1;
        }
        .card-info{
            position: relative;
            background-color: #191c23;
            margin-top:30px;
            border-radius: 10px;
            padding:20px;
            z-index: 1;

            .card-icon{
                width:30px;
                height: 20px;
                background-color: #ffea39;
                border-radius: 2px;
            }
            .card-number{
                display: flex;
                justify-content: space-between;
                font-size: 10px;
                font-weight: 600;
                margin-top:8px;
                p{
                    letter-spacing: 3px;
                    color:#84878c;
                }
            }
            .card-details{
                display: flex;
                text-align: start;
                p{
                    margin-bottom: 0px;
                    font-size: 10px;
                    color:#84878c;
                }
                .card-user{
                    flex-basis: 60%;
                    &-label{
                        font-size:8px;
                        margin:0px;
                        text-align: start;
                        text-transform: uppercase;
                    }


                }
                .card-exp{
                    flex-basis: 40%;
                    &-label{
                        font-size:8px;
                        margin:0px;
                        text-align: start;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
</style>
