<template>
    <div class="device-table">
        <div class="table-header">
            <p class="name">Device Name</p>
            <p class="status">Device Status</p>
            <p class="ip">IPV4 Address</p>
            <p class="mac">Mac Address</p>
        </div>
        <div class="table-content">
            <div class="table-item" v-for="(item, index) in items" v-bind:key="index">
                <p class="name">{{item.name}}</p>
                <p class="status">{{item.status}}</p>
                <p class="ip">{{item.ip}}</p>
                <p class="mac">{{item.mac}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        items:[
            {name:"Smelliot-PC_HOME",status:"Online[3 Days]", ip:"923.324.233.21", mac:"00:1c:2B:07:AD:F3"},
        ]
    })
}
</script>
<style lang="scss" scoped>
    .device-table{
        background-color: #1d2027;
        display: flex;
        flex-direction: column;
        p{
            margin-bottom: 0px;
        }
        .table-header{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .table-content{
            display: flex;
            flex-direction: column;
        }
    }
</style>
