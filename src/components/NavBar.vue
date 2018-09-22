<template>
    <div class="menu-bar">
        <div class="item" v-for="(item, index) in menus" v-bind:key="index" >
            <p><router-link :to="item.url">{{item.title}}</router-link></p>
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
            {title:"Manage Plan", url: "manage"},
            {title:"Internet Configuration", url: "/internet"},
            {title:"Account Settings", url: "/account"}
        ]
    })
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
        }
        .item:hover{
            color:#477ef2;
            
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
