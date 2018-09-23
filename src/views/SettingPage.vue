<template>
    <div class="setting">
        <b-container class="setting-container">
            <ul><li><h2>ACCOUNT SETTINGS</h2></li></ul>
            <div class="account-setting">
                <div class="setting-group">
                    <div class="personal-group" :class="{active:isPersonal}" @click="displayContent(1)">
                        <p>Personal Setting</p>
                    </div>
                    <div class="billing-group" :class="{active:isBilling}" @click="displayContent(2)">
                        <p>Billing Information</p>
                    </div>
                    <div class="upgrade-group" :class="{active:isUpgrade}" @click="displayContent(3)">
                        <p>Upgrade Service</p>
                    </div>
                    <div class="manage-group" :class="{active:isManage}" @click="displayContent(4)">
                        <p>Manage Device</p>
                    </div>
                    <div class="claim-group">
                        <p>Claim your <b class="strong">20</b><br> reward right now</p>
                        <button>Claim Now</button>
                    </div>
                    
                </div>
                 <div class="setting-display">
                     <router-view></router-view>
                </div>
            </div>
           
        </b-container>
    </div>
</template>
<script>
export default {
    data:()=>({
        isPersonal:true,
        isBilling:false,
        isUpgrade:false,
        isManage:false,
    }),
    methods:{
        displayContent(num){
            this.isPersonal=false;
            this.isBilling=false;
            this.isUpgrade=false;
            this.isManage=false;

            if(num===1){
                this.$router.push({ path: "personal" });
                this.isPersonal=true;
            }else if(num===2){
                this.$router.push({ path: "billing" });
                this.isBilling=true;
            }else if(num===3){
                this.$router.push({ path: "upgrade" });
                this.isUpgrade=true;
            }else{
                this.$router.push({ path: "manage" });
                this.isManage=true;
            }
        }
    }

}
</script>
<style lang="scss" scoped>
    .setting{
        margin-top: 80px;
        align-content: center;


        .setting-container{
            max-width:1600px;
             ul{
                margin-bottom: 0px;
                li span {font-size: 200%;}

                h2{
                    text-align: start;
                    font-family: "OpenSans ExtraBold";
                    margin-bottom:0px;
                }
            }

            .account-setting{
                width:100%;
                height: 650px;
                background-color: #15161b;
                margin-top:50px;
                margin-bottom:50px;
                display: flex;
                border-radius: 8px;
        

                .setting-group{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    flex-basis: 30%;
                    padding:40px 3%;

                    div{
                        width:70%;
                        background-color: #171a21;
                        border-radius: 3px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;

                        p{
                            margin-bottom: 0px;
                           padding: 14px 0px;
                           font-size:18px;
                           font-family: "OpenSans Bold";
                           color:#292c35;
                        }
                        
                    }

                    .active{
                        background-color: #3654f4;
                        p{
                            color:#fff;
                        }
                    }

                    .claim-group{
                        
                        height: 135px;
                        background-color: #3654f4;
                        padding:20px 30px;
                        text-align: start!important;
                        display: flex!important;
                        flex-direction: column!important;
                        justify-content: space-between!important;
                        align-items: flex-start;

                        @media (max-width: 927px){
                            padding:10px 20px;
                        }

                        p{
                            width:100%;
                            padding:0px;
                            color:#fff;
                            font-family: "OpenSans";
                            line-height: 20px;
                            font-size: 16px;
                            .strong{
                                font-family: "OpenSans SemiBold";
                                font-size:17px;
                            }
                        }

                        button{
                            width: 50%;
                            font-size:14px;
                            font-family: "OpenSans Bold";
                            border-radius: 2px;
                            min-width: 88px;
                            padding:5px;
                            border:none;
                            outline:none;

                        }

                    }
                }

                .setting-display{
                    flex-basis: 70%;
                    background-color: #17181d;
                    border-radius: 0px 8px 8px 0px;
                }
            }
            


        }
    }
</style>
