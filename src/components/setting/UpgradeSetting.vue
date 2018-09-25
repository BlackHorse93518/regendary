<template>
    <div class="upgrade">
        <div class="title">
            <p>Upgrade Service</p>
            <button>SAVE PROFILE</button>
        </div>
        <div class="current-service">
            <p>Current Service</p>
            <div class="current-option">
                <p>30MB/S</p>
                <select>
                    <option value="0">View Details</option>
                    <option value="1">30MB/S</option>
                    <option value="2">50MB/S</option>
                    <option value="3">100MB/S</option>
                </select>
                <p class="background-text">30MB/S</p>
            </div>
        </div>
        <div class="service-options">
            <div class="option-header">
                <div>
                    <p>1.Choose Service</p>
                    <p class="question">Which service seems to fix you need?</p>
                </div>
                <button>Next Step <icon name="arrow-right"></icon></button>
            </div>
            <div class="option-items">
                <div class="item" :class="{activeItem:currentSelect===index?true:false}" v-for="(item, index) in speedItems" v-bind:key="index" @click="activeCard(index)">
                    <p>{{item}}</p>
                    <p class="background-text">{{item}}</p>
                </div>
            </div>
        </div>
        
    </div>    
</template>
<script>
export default {
    data:()=>({
        speedItems:[
            "100MB/S","500MB/S","50MB/S","250MB/S",
        ],
        currentSelect:0,
    }),
    methods:{
        activeCard(num){
            this.currentSelect=num;
        }
    }
}
</script>
<style lang="scss" scoped>
    .upgrade{
        width: 100%;
        height: 100%;
        padding:70px 70px 50px 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-size:28px;
                font-family: "OpenSans Bold";
            }
            button{
                font-size:14px;
                font-family: "OpenSans Bold";
                padding:10px 20px;
                border:none;
                outline:none;
                border-radius: 2px;
                
            }
        }

        .current-service{
            text-align: start;
            p{
                text-transform: uppercase;
                font-family: "OpenSans SemiBold";
            }
            
            .current-option{
                position: relative;
                background-color: #2e63ff;
                max-width:350px;
                padding:20px 30px 20px 30px;
                border-radius: 4px;
                overflow: hidden;
                p{
                    font-size:30px;
                    font-family: "OpenSans ExtraBold";
                }
                select{
                    padding:8px;
                    font-family: "OpenSans SemiBold";
                    border-radius: 2px;
                    border:none;
                }
                .background-text{
                    position: absolute;
                    font-size: 45px;
                    right: -17px;
                    bottom: -34px;
                    opacity: 0.1;
                }
            }
            


        }

        .service-options{
            
            .option-header{
                p{
                    text-transform: uppercase;
                    font-family: "OpenSans SemiBold";
                    margin-bottom: 10px;
                }
                .question{
                    font-size:12px;
                    font-family: "OpenSans";
                }
                text-align: start;
                display: flex;
                justify-content: space-between;
                align-items: center;
                button{
                    border:none;
                    outline:none;
                    padding:5px 20px;
                    border-radius: 2px;
                    font-size: 16px;
                    font-family: "OpenSans SemiBold";
                    
                }
            }    
            
            .option-items{
                display: grid;
                grid-template-columns: repeat(4,1fr);
                margin-top:30px;
                
                .item{
                    position: relative;
                    width:85%;
                    height: 80px;
                    padding:20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 3px;
                    background-color: #1d2027;
                    overflow: hidden;
                    cursor: pointer;
                    p{
                        font-size:25px;
                        font-family: "OpenSans ExtraBold";
                        text-align: center;
                        margin-bottom: 0px;
                        color:#a2a5aa;
                    }
                    .background-text{
                        position: absolute;
                        font-size:50px;
                        font-family: "OpenSans ExtraBold";
                        color:#fff;
                        opacity: 0.05;

                    }
                }

                .activeItem{
                    background-color: #2e63ff;
                    p{
                        color:#fff;
                    }
                }
            }
        }


    }
</style>