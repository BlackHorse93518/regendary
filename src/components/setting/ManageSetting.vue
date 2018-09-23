<template>
    <div class="manage">
        <div class="title">
            <p>Manage Device</p>
            <button>SAVE PROFILE</button>
        </div>
        <div>
            Manage Device
        </div>
        
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .manage{
        width: 100%;
        padding:70px 70px 50px 70px;
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
                
            }
        }

    }
</style>