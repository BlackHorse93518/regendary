<template>
    <div class="table-card">
        <div class="title-and-search">
            <p>Overview Payments</p>
            <input type="text" placeholder="Search Bills...">
        </div>
        <div class="table-details">
            <div class="table-field-name">
                <p class="package-type">PACKAGE TYPE</p>
                <p class="billing-type">BILLING TYPE</p>
                <p class="amount">AMOUNT CHARGED</p>
                <p class="date-charged">DATE CHARGED</p>
                <p class="view-file">VIEW FILE</p>
            </div>
            <div class="table-field-content">
                <div class="table-field-content-items" v-for="(item, index) in items" v-bind:key="index">
                    <p>{{item.package}}</p>
                    <p>{{item.billing}}</p>
                    <p>{{item.amount}}</p>
                    <p>{{item.date}}</p>
                    <p><a href="url">Download</a></p>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        items:[
            {package:"500MBPS Internet", billing:"AutoPay", amount:"$485.1", date:"03/28/2018", file:"url"},
            {package:"500MBPS Internet", billing:"Deposit", amount:"$192.49", date:"03/28/2018", file:"url"},
            {package:"500MBPS Internet", billing:"Deposit", amount:"$485.1", date:"03/28/2018", file:"url"},
            {package:"500MBPS Internet", billing:"AutoPay", amount:"$76.34", date:"03/28/2018", file:"url"},
            {package:"500MBPS Internet", billing:"Deposit", amount:"$485.1", date:"03/28/2018", file:"url"},   
            {package:"500MBPS Internet", billing:"Deposit", amount:"$485.1", date:"03/28/2018", file:"url"},   
            {package:"500MBPS Internet", billing:"Deposit", amount:"$485.1", date:"03/28/2018", file:"url"},   
            {package:"500MBPS Internet", billing:"Deposit", amount:"$485.1", date:"03/28/2018", file:"url"},   
            {package:"500MBPS Internet", billing:"Deposit", amount:"$485.1", date:"03/28/2018", file:"url"},   
            {package:"500MBPS Internet", billing:"Deposit", amount:"$485.1", date:"03/28/2018", file:"url"},   
        ]
    })
}
</script>
<style lang="scss" scoped>

    /* width */
    ::-webkit-scrollbar {
        width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #444757; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #666; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    

    .table-card{
        background-color: #16171c;
        padding:55px;
        border-radius: 8px;
        width:1070px;
        height:500px;

        p{
            margin-bottom:0px;
        }

        .title-and-search{
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            p{
                font-size: 30px;
                font-family: "OpenSans ExtraBold";
            }

            input{
                height: 44px;
                background-color: #22252c;
                color: #848588;
                border:none;
                border-radius: 3px;
                outline: none;
                padding-left:10px;
            }
            input::placeholder{
                color:#16171c;
            }

        }
        .table-details{
            background-color: #191c23;

            .table-field-name{
                display: flex;
                justify-content: space-around;
                align-items: center;
                height:72px;
                background-color: #1e2329;
                margin-top:45px;
                padding-left:40px;
                

                p{
                    font-size:14px;
                    font-weight: 700;
                    flex-basis: 15%;
                    text-align: start;
                }
            }
            .table-field-content{
                overflow: auto;
                height: 270px;
                padding-top:10px;

                

                .table-field-content-items{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 60px;
                    padding-left:40px;
                    cursor: pointer;
                    
                    p{
                        font-size:14px;
                        font-weight:600;
                        flex-basis: 15%;
                        color:#a0a3a8;
                        text-align: start;
                        a{
                            color:#4163a3;
                        }
                    }

                    
                }
            }
            
            .table-field-content-items:hover{
                p{
                    color:#fff;
                    font-weight: 700;
                    a{
                        color:#5e94ff;
                    }
                }
            }
        }
    }
</style>
