<template>
    <div class="prefer-card">
        <div class="title-and-btn">
            <p>Billing Preferences</p>
            <button>Update Info</button>
        </div>
        <div class="prefer-info">
            <div class="billing-address info-item" :class="{active:isBilling}" @click="activeCard(1)">
                <p class="prefer-info-title">billing address</p>
                <img src="../../assets/Mail_Icon.svg" alt="">
                <button>Inactive</button>
            </div>
            <div class="text-message info-item" :class="{active:isText}" @click="activeCard(2)">
                <p class="prefer-info-title">text message</p>
                <img src="../../assets/Send_Icon.svg" alt="">
                <button>(324)-544-2938</button>
            </div>
            <div class="email-address info-item" :class="{active:isEmail}" @click="activeCard(3)">
                <p class="prefer-info-title">email address</p>
                <img src="../../assets/Email_Icon.svg" alt="">
                <button>Inactive</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        isBilling:true,
        isText:false,
        isEmail:false

    }),
    methods:{
        activeCard(num){
            this.isBilling=false;
            this.isText=false;
            this.isEmail=false;
            if(num===1){
                this.isBilling=true;
            }else if(num===2){
                this.isText=true;

            }else{
                this.isEmail=true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .prefer-card{
        width:492px;
        height: 180px;
        border-radius: 8px;
        background-color: #16171c;
        padding:30px 32px 26px 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

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

        .prefer-info{
            display: flex;
            justify-content: space-between;
            align-items: center;
            

            .info-item{
                width:122px;
                height: 75px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                flex-basis: 28%;
                background-color: #22252c;
                border-radius: 3px;
                padding:5px;
                opacity:0.7;

                
                p{
                    font-size:9px;
                    font-family: "OpenSans ExtraBold";
                    text-transform: uppercase;
                    margin-bottom: 0px;

                }
                button{
                    width:65px;
                    height: 14px;
                    font-size: 7px;
                    line-height: 8px;
                    border-radius: 2px;
                    border:none;
                    outline: none;
                    background-color: #3f4249;
                }
                

            }

            

            .active{
                background-color: #295bfc;
                opacity:1;
                button{
                    background-color: #2244b4;
                    color:#fff;
                    

                }
            }

            

        }

    }
</style>

