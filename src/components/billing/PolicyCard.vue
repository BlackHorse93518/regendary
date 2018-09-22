<template>
    <div class="policy-card">
        <div class="policy-title"><hr><p>Payment Policy</p></div>
        <div class="policy-content">
            <p class="short-content">
                {{content}}
            </p>
            <p><a href="">Read the full policy</a></p>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    })
    
}
</script>
<style lang="scss" scoped>
    .policy-card{
        width: 492px;
        height: 224px;
        border-radius: 8px;
        background-color: #16171c;
        padding:35px 32px 6px 32px;

        p{
            margin-bottom: 0px;
        }

        .policy-title{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            hr{
                width:30px;
                margin-left:0px;
                margin-right: 10px;
                border:0px;
                height: 1px;
                background-color: #fff;
            }
            p{
                font-size: 18px;
                font-family: "OpenSans Bold";
            }
        }

        .policy-content{
            .short-content{
                padding-top:15px;
                text-align: start;
                font-size:14px;
                line-height: 22px;
            }
            
            a{  
                margin-top:10px;
                float:left;
                font-size:14px;
            }
            
        }

    }
</style>
