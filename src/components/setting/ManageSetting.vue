<template>
    <div class="manage">
        <div class="title">
            <p>Manage Device</p>
            <button>SAVE PROFILE</button>
        </div>
        <div class="current-device">
            <p>Current Devices</p>
            <div class="contents-section">
                <div class="device-table">
                    table
                </div>
                <div class="sidebar">
                    sidebar
                </div>
            </div>
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
        .current-device{
            p{
                font-family: "OpenSans SemiBold";
                
            }
        }

    }
</style>