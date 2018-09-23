<template>
    <div class="web-control">
        <div class="title-and-search">
            <p>Website Control</p>
            <input type="text" placeholder="Search Website....">
        </div>
        <div class="table-details">
            <div class="table-header">
                <p class="address">Website address</p>
                <p class="account">Account Access</p>
                <p class="lastVisited">Last Visited</p>
                <p class="filterLevel">Filter Level</p>
                <p class="status">Status</p>
            </div>  
            <div class="table-content">
                <div class="table-content-item" v-for="(item, index) in items"  v-bind:key="index">
                    <p class="address">{{item.websiteAddress}}</p>
                    <p class="account">{{item.account}}</p>
                    <p class="lastVisited">{{item.lastVisited}}</p>
                    <p class="filterLevel" :style="{color:item.levelColor}">{{item.filterLevel}}</p>
                    <p class="status" :class="{offStatus:item.status==='Turn Off'?true:false}">{{item.status}}</p>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    data:()=>({
        items:[
            {websiteAddress:"http://www.facebook.com", account:"Elliot Lepley[Parent]", lastVisited:"02/09/2018", filterLevel:"high level", status:"Turn Off", levelColor:"#ff4d5a"},
            {websiteAddress:"http://www.google.com", account:"Elliot Lepley[Parent]", lastVisited:"02/07/2018", filterLevel:"low level", status:"Turn Off", levelColor:"#eee075"},
            {websiteAddress:"http://www.instagram.com", account:"Elliot Lepley[Parent]", lastVisited:"01/02/2018", filterLevel:"high level", status:"Turn On", levelColor:"#ff4d5a"},
            {websiteAddress:"http://www.linkedin.com", account:"Elliot Lepley[Parent]", lastVisited:"012/19/2017", filterLevel:"moderate level", status:"Turn On", levelColor:"#e09654"},
            {websiteAddress:"http://www.twitter.com", account:"Elliot Lepley[Parent]", lastVisited:"02/09/2017", filterLevel:"moderate level", status:"Turn On", levelColor:"#e09654"},
            {websiteAddress:"http://www.pinterest.com", account:"Elliot Lepley[Parent]", lastVisited:"02/09/2017", filterLevel:"moderate level", status:"Turn On", levelColor:"#e09654"},
            {websiteAddress:"http://www.facebook.com", account:"Elliot Lepley[Parent]", lastVisited:"02/09/2017", filterLevel:"high level", status:"Turn On", levelColor:"#ff4d5a"},
            {websiteAddress:"http://www.facebook.com", account:"Elliot Lepley[Parent]", lastVisited:"02/09/2017", filterLevel:"high level", status:"Turn On", levelColor:"#ff4d5a"},
            {websiteAddress:"http://www.facebook.com", account:"Elliot Lepley[Parent]", lastVisited:"02/09/2017", filterLevel:"high level", status:"Turn On", levelColor:"#ff4d5a"},
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


    .web-control{
        background-color: #16171c;
        border-radius: 8px;
        p{
            margin-bottom: 0px;
        }
        .title-and-search{
            height:90px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            padding-left:80px;
            padding-right:70px;

            p{
                font-size:24px;
                font-family: "OpenSans ExtraBold";
            }

            input{
                height: 44px;
                background-color: #22252c;
                color: #fff;
                border:none;
                border-radius: 3px;
                outline: none;
                padding-left:10px;
            }
            input::placeholder{
                color:#848588;
            }
            
        }
        .table-header{
            height: 70px;
            display: flex;
            align-items: center;
            background-color: #191c23;
            padding-left:80px;
            padding-right:70px;
            
            p{
               text-align: start;
               font-size: 16px;
               font-family: "OpenSans SemiBold";
            }

            .address{
                flex-basis: 28%;
            }
            .account{
                flex-basis:25%;
            }
            .lastVisited{
                flex-basis: 20%;
            }
            .filterLevel{
                flex-basis: 20%;
            }
            .status{
                flex-basis: 8%;
            }

        }
        .table-content{
            padding-left:80px;
            padding-right:70px;
            padding-top:10px;
            height: 300px;
            background-color: #1e2329;
            overflow: auto;

            p{
                font-size: 16px;
                text-align: start;
                font-family: "OpenSans SemiBold";

            }
            .address{
                flex-basis: 28%;
            }
            .account{
                flex-basis:25%;
            }
            .lastVisited{
                flex-basis: 20%;
            }
            .filterLevel{
                flex-basis: 20%;
                text-transform: uppercase;
                font-family: "OpenSans Bold"
            }
            .status{
                flex-basis: 8%;
                color:#3f8f5a;
                font-family: "OpenSans Bold"
            }
            .offStatus{
                color:#ff4d5a;
            }

            &-item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 60px;
                cursor: pointer;
            }
        }
    }
</style>
