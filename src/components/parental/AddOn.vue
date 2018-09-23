<template>
    <div class="add-on">
        <div class="add-on-left">
            <p class="title">WEBSITE ADD-ON</p>
            <p class="content">Add a site to block or control permissions.</p>
        </div>
        <div class="add-on-right">
            <input type="text" placeholder="Enter Website Address..">
            <button><span>NEXT</span><icon name="angle-right"></icon></button>
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
    .add-on{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #1e2329;
        padding-left:60px;
        padding-right:60px;
        border-radius: 8px;
        padding-top:30px;
        padding-bottom:30px;
        z-index:1;

        .background-img-1{
            position: absolute;
            background-image: url('../../assets/WebsiteAddon_shape_up.svg');
            height: 107%;
            width:50%;
            bottom: 0px;
            right: 0px;
            background-repeat: no-repeat;
            z-index: 0;
        }

        .background-img-2{
            position: absolute;
            background-image: url('../../assets/WebsiteAddon_shape_up.svg');
            height: 140%;
            width:55%;
            top: -25px;
            left: 0px;
            background-repeat: no-repeat;
            z-index: 0;
            transform: rotate(180deg);
        }

        p{
            margin-bottom: 0px;
            text-align: start;
        }
        .add-on-left{
            position: relative;
            display: flex;
            flex-direction: column;
            z-index: 1;
            
            .title{
                font-family: "OpenSans ExtraBold";
            }
            .content{
                font-family: "OpenSans SemiBold"
            }
        }
        .add-on-right{
            position: relative;
            background-color: #16171c;
            padding:10px;
            border-radius: 5px;
            z-index: 1;
            input{
                background-color: #16171c;
                font-size:14px;
                border:none;
                outline: none;
                padding-left:5px;
                color:#fff;
                margin-right:10px;
            }
            input::placeholder{
                color:#848588;
            }
            button{
                background-color: #1e2329;
                color:#fff;
                font-size:14px;
                font-family: "OpenSans ExtraBold";
                border-radius:3px;
                border:none;
                outline:none;
                padding-top:5px;
                padding-bottom:5px;
                padding-left:20px;
                padding-right:20px;
                span{
                    padding-right: 10px;
                }
                icon{
                    padding-left:10px;
                }
            }
        }
    }
</style>
