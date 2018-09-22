<template>
    <div class="device-card">
        <p class="head-title">devices connected</p>
        <p class="main-title">There are 04 devices currently connected to the internet.</p>
        <hr>
        <div class="status-list" v-for="(item, index) in items" v-bind:key="index">
            <div class="status-main">
                <div class="status-content" >
                    <p class="content-title">{{item.title}}</p>
                    <p class="content-description">{{item.content}}</p>
                </div>
                <div class="button-section">
                    <button class="status-btn">{{item.status}}</button>
                    <div class="status-color" v-bind:style="{backgroundColor:item.statusColor}"></div>
                </div>
                
            </div>
            <hr>
        </div>
        <div class="background-img-1"></div>
        <div class="background-img-2"></div>
    </div>
</template>
<script>
export default {
    data:()=>({
        items:[
            {title:"3 Devices Connected", content:"These are taking currently 900mbps.", status:"online", statusColor:"#20d65f"},
            {title:"5 Devices Idle", content:"These are taking currently 900mbps.", status:"pending", statusColor:"#fbb12a"},
            {title:"9 Devices Offline", content:"These are taking currently 900mbps.", status:"offline", statusColor:"#ff524a"},

        ]
    })
}
</script>
<style lang="scss" scoped>
    .device-card{
        position: relative;
        background-color: #141519;
        width:400px;
        height: 350px; 
        padding:35px;
        padding-right:40px;
        padding-left:40px;
        border-radius: 16px;
        overflow: hidden;

        .background-img-1{
            position: absolute;
            background-image: url('../../assets/DevicesConnected_shape_bottom.svg');
            height: 30%;
            width: 32%;
            bottom: 0px;
            right: 0px;
            background-repeat: no-repeat;
            z-index: 0;
        }

        .background-img-2{
            position: absolute;
            background-image: url('../../assets/DevicesConnected_shape_top.svg');
            height: 70%;
            width:50%;
            top: -63px;
            left: -48px;
            background-repeat: no-repeat;
            z-index: 0;
        }
        
        hr{
            border:0px;
            height: 1px;
            background-color: #2e2f34;

        }
        .head-title{
            font-size:10px;
            font-family: "OpenSans ExtraBold";
            text-align: start;
            text-transform: uppercase;
            margin-bottom: 0px;
        }
        .main-title{
            font-size:18px;
            font-family: "OpenSans ExtraBold";
            text-align: start;
            line-height: 28px;
            margin-bottom:28px;
        }
        .status-list{
            display: flex;
            flex-direction: column;

            hr{
                border:0px;
                height: 1px;
                width: 100%;
                background-color: #2e2f34;
                margin-top:13px;
                margin-bottom:13px;

            }

            .status-main{
                display: flex;
                justify-content: space-between;
                align-items: center;

                .status-content{
                    display:flex;
                    flex-direction: column;

                    p{
                        text-align: start;
                        margin-bottom: 0px;
                    }
                    .content-title{
                        font-size:11px;
                        font-family: "OpenSans ExtraBold";

                    }
                    .content-description{
                        font-size:9px;
                    }


                }
                .button-section{
                    position: relative;

                    .status-btn{
                        width:70px;
                        height: 22px;
                        border:none;
                        border-radius: 3px;
                        font-size:10px;
                        line-height: 20px;
                        color:#2e2e2e;
                        font-family: "OpenSans ExtraBold";
                        text-transform: uppercase;
                        
                    }

                    .status-color{
                        position: absolute;
                        width: 7px;
                        height: 7px;
                        background-color: #20d65f;
                        border-radius: 50%;
                        top:0px;
                        right:-2px;

                    }

                }
                

            }

            
        }
    }

</style>
