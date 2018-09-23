<template>
    <div class="menu-bar">
        <div class="item" @click="selectMenu(1)">
            <p :class="{active:isDashboard}"><router-link :to="'/dashboard'">Dashboard</router-link></p>
            <div class="bottom-bar"></div>  
        </div>
        <div class="item" @click="selectMenu(2)">
            <p :class="{active:isBenefits}"><router-link :to="'/billing'">Benefits</router-link></p>
            <div class="bottom-bar"></div>  
        </div>
        <div class="item" @click="selectMenu(3)">
            <p :class="{active:isManage}"><router-link :to="'/parental'">Manage Plan</router-link></p>
            <div class="bottom-bar"></div>  
        </div>
        <div class="item" @click="selectMenu(4)">
            <p :class="{active:isInternet}"><router-link :to="'/internet'">Internet Configuration</router-link></p>
            <div class="bottom-bar"></div>  
        </div>
        <div class="item" @click="selectMenu(5)">
            <p :class="{active:isSetting}"><router-link :to="'/setting'">Account Settings</router-link></p>
            <div class="bottom-bar"></div>  
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        menus:[
            {title:"Dashboard", url:"/dashboard"},
            {title:"Benefits & Rewards", url:"/billing"},
            {title:"Manage Plan", url: "/parental"},
            {title:"Internet Configuration", url: "/internet"},
            {title:"Account Settings", url: "/setting"}
        ],
        isDashboard:true,
        isBenefits:false,
        isManage:false,
        isInternet:false,
        isSetting:false,
    }),
    methods:{
        selectMenu(num){
            this.isDashboard=false;
            this.isBenefits=false;
            this.isManage=false;
            this.isInternet=false;
            this.isSetting=false;
            if(num===1){
                this.isDashboard=true;
            }else if(num===2){
                this.isBenefits=true;
            }else if(num===3){
                this.isManage=true;
            }else if(num===4){
                this.isInternet=true;
            }else{
                this.isSetting=true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .menu-bar{
        height: 110px;
        display: flex;
        align-items: center;
        background-color: #15181d;
        color:#727375;
        padding-left:140px;

        .item{
            position: relative;
            height: 110px;
            padding:auto;
            margin-right:5%;
            display: flex;
            align-items: center;
            cursor: pointer;
            p{
                margin: 0px;
                font-size: 19px;
                a{
                    color:#fff;
                    text-decoration: none;
                }
            }
            .bottom-bar{
                position: absolute;
                bottom:0px;
                left:50%;
                margin-left:-10px;
                width: 15px;
                height: 10px;
                
            }
            .active{
                a{
                    color:#477ef2;
                }
            }
        }
        .item:hover{
            a{
                color:#477ef2;
            }
            
            
            .bottom-bar{
                display: flex;
                align-items: center;
                width: 15px;
                height: 10px;
                background-color:#477ef2;
                

            }
        }
    }
</style>
