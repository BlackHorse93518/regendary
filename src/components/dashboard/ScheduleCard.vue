<template>
    <div class="schedule-card">
        <p class="title">{{title}}</p>
        <div class="schedule-table">
            <div class="table-label">
                <p class="label-reason reason">REASON</p>
                <p class="label-date date">DATE OPEN</p>
                <p class="label-technician technician">TECHNICIAN</p>
                <p class="label-priority priority">PRIORITY</p>
            </div>
            <div class="table-content">
                <div class="content-items" v-for="(item, index) in items" v-bind:key="index">
                    <p class="content-reason-item reason">{{item.reason}}</p>
                    <p class="content-date-item date">{{item.date}}</p>
                    <p class="content-technician-item technician">{{item.technician}}</p>
                    <p class="content-priority-item priority" :class="{isHigh:item.isHigh}">{{item.priority}}</p>
                </div>
            </div>
            
        </div>
        <div class="schedule-bottom">
            <div class="bottom-left">
                <p class="info-label">Open Schedule:</p>
                <p class="info-date">Monday, 2:15pm</p>
            </div>
            <button class="view-btn"> VIEW FULL</button>
        </div>
        <div class="background-img-1"></div>
    </div>
</template>
<script>
export default {
    data:()=>({
        title:"scheduled maintenance",
        items:[
            {reason:"Internet not turning on for him-self, tried reset from our end.", date:"09/13/2018, 2:15PM", technician:"Jemal Hamud", priority:"Highest Priority", isHigh:true},
            {reason:"Internet not turning on for him-self, tried reset from our end.", date:"09/13/2018, 3:00PM", technician:"Jemal Ramsay", priority:"Lowest Priority", isHigh:false},   
        ],
    })
}
</script>
<style lang="scss" scoped>
    .schedule-card{
        position: relative;
        background-color: #16171c;
        width:570px;
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top:35px;
        padding-left:34px;
        padding-right:25px;
        padding-bottom:30px;
        border-radius: 16px;
        overflow: hidden;

        .background-img-1{
            position: absolute;
            background-image: url('../../assets/Maintenance_shape.svg');
            height: 117%;
            width: 21%;
            top: -70px;
            right: 0px;
            background-repeat: no-repeat;
            z-index: 0;
        }

        .title{
            width:30%;
            text-align: start;
            font-family: 'OpenSans ExtraBold';
            font-size: 25px;
            font-weight: 800;
            line-height: 30px;
            text-transform: uppercase;
        }

        .schedule-table{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top:10px;
            
            .table-label{
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-size:12px;
                    font-family: "OpenSans ExtraBold";
                    text-align: start;
                    margin-bottom: 5px;
                }
                 .label-reason{
                        flex-basis: 40%;
                    
                    }
                    .label-date{
                        margin-left:3%;
                        flex-basis: 20%;    
                    }
                    .label-technician{
                        flex-basis: 20%;
                        
                    }
                    .label-priority{
                        flex-basis: 20%;
                    }
                
            }
            .table-content{
                display: flex;
                flex-direction: column;
                align-items: center;
                

                p{  
                    font-family: 'OpenSans SemiBold';
                    font-size:12px;
                    text-align: start;
                    font-size:600;
                }

                .content-items{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top:10px;

                   

                    .content-reason-item{
                        flex-basis: 40%;
                        
                    }
                    .content-date-item{
                        margin-left:3%;
                        flex-basis: 20%;
                        
                    }
                    .content-technician-item{
                        flex-basis: 20%;
                        padding-right:10%;
                        
                    }
                    .content-priority-item{
                        flex-basis: 20%;
                        padding-right:10%;
                        color:#e2d65e;
                    }
                    .isHigh{
                        color:#e95865;
                    }
                }
            }
        }

        .schedule-bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .bottom-left{
                .info-label{
                    font-size:11px;
                    font-family: "OpenSans Bold";
                    text-align: start;
                    margin-bottom: 0px;
                }
                .info-date{
                    font-size:16px;
                    font-family: "OpenSans ExtraBold";
                    text-transform: uppercase;
                    margin-bottom: 0px;
                }

            }
            .view-btn{
                font-family: "OpenSans ExtraBold";
                font-size:15px;
                font-weight: 700;
                padding:8px;
                padding-left:15px;
                padding-right:15px;
                border:none;
                border-radius: 5px;
                background-color:#fff;
            }
        }
    }
</style>
