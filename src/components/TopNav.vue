<template>
    <div class="topnav">
        <div class="topnav-log">
            <img src="../assets/logo-icon-white.svg" alt="">
        </div>
        <div class="topnav-right">
            <p>Internet Connectivity</p>
            <p>Business Backups</p>
            <button>contact</button>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>

    .topnav{
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 150px;
        
        &-log{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            margin-left:140px;
            cursor: pointer;
            img{
                width: 60px;

            }
        }

        &-right{
            display: flex;
            justify-content: center;
            align-items: center;
            
            p{
                color:#fafeff;
                font-size:21px;
                margin-right: 64px;
                margin-bottom: 0px;
                cursor: pointer;
            }
            button{
                font-family: "OpenSans ExtraBold";
                background-color: #4c7fff;
                border:none;
                outline: none;
                color:#fff;
                font-size:21px;
                font-weight: 700;
                margin-right:100px;
                border-radius: 4px;
                padding:10px;
                padding-left:25px;
                padding-right:25px;
                text-transform: uppercase
            }
        }
       
    }
    

</style>
