<template>
    <div class="protection">
        <div class="header">
            <div class="header-title">
                <p class="maintitle">{{title}}</p>
                <p class="subtitle">Protection</p>
            </div>
            <img :src="imgUrl" alt="">
        </div>
        <div class="timepicker">
            <div class="timer">
                <div class="timer-img">
                    <img src="../../assets/rewind-time.svg" alt="">
                </div>               
                <TimePicker  />
                <div class="down-icon">
                    <icon name="caret-down"></icon>
                </div>  
            </div>
            <div class="timer">
                <div class="timer-img">
                    <img src="../../assets/rewind-time.svg" alt="">
                </div>
                <TimePicker />
                <div class="down-icon">
                    <icon name="caret-down"></icon>
                </div>  
                
            </div>
            <div class="timer-result">
                
            </div>
        </div>
        <div class="background-img"></div>
    </div>    
</template>
<script>
import TimePicker from "@/components/timepicker/TimePicker.vue"
export default {
    components:{
        TimePicker,
    },
    props:{
        imgUrl:String,
        title:String
    }
}
</script>
<style lang="scss" scoped>
    .protection{
        position: relative;
        background-color: #1b2026;
        border-radius: 8px;
        overflow: hidden;
        z-index: 1;
       
        .background-img{
            position: absolute;
            background-image: url('../../assets/ParentalControl_Rightside.svg');
            height: 140%;
            width:110%;
            top: -55px;
            left: -10px;
            background-repeat: no-repeat;
            z-index: 0;
            
        }
       
        
        p{
            margin-bottom: 0px;
            text-align: start;
        }

        .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left:35px;
            padding-right: 35px;
            padding-top:35px;
            padding-bottom:20px;
            position: relative;
            z-index: 1;

            .maintitle{
                font-size:16px;
                font-family: "OpenSans Bold";
            }
            .subtitle{
                font-size:20px;
            }
            img{
                height: 60px;
            }
        }
        .timepicker{

            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #16171c;
            padding-left:30px;
            padding-right: 30px;
            padding-top:20px;
            padding-bottom: 20px;
            

            .timer{
                background-color: #1b2026;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                .timer-img{
                    width:40px;
                    height: 25px;
                    
                }
                img{
                    height: 20px;
                    width: 20;
                }
                .down-icon{
                    padding:10px;
                    padding-top:5px;
                    padding-bottom:5px;
                    background-color: #1e2329;
                    border-radius: 4px;
                }
            }

            div img{
                width:22px;
            }
            .timer-result{
                width:80px;
                height: 35px;
                background-color: #2e3641;
                border-radius: 5px;
            }
        }
    }
</style>
