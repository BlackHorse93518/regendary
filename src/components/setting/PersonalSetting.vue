<template>
    <div class="personal">
        <div class="title">
            <p>Personal Setting</p>
            <button>SAVE PROFILE</button>
        </div>
        <div class="upload-picture">
            <p class="img-label">Profile Picture</p>
            <button><icon name="upload"></icon> <br> Upload a photo</button>
        </div>
        <div class="user-info">
            <div class="first-name">
                <p class="first-name-label">First Name</p>
                <input type="text" placeholder="First name.." />
            </div>
            <div class="last-name">
                <p class="last-name-label">Last Name</p>
                <input type="text" placeholder="Last name.." />
            </div>
            <div class="email-address">
                <p class="email-address-label">Email Address</p>
                <input type="text" placeholder="Email address.." />
            </div>
            <div class="phone-number">
                <p class="phone-number-label">Phone Number</p>
                <input type="text" placeholder="Phone number..." />
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .personal{
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
        .upload-picture{
            text-align: start;
            p{
                text-transform: uppercase;
                font-family: "OpenSans SemiBold";
               
            
            }
            button{
                background-image: linear-gradient(to bottom, #21242d, #191c23);
                color:#fff;
                border: none;
                outline:none;
                border-radius: 4px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.55);
                padding:10px;
                padding-left:20px;
                padding-right: 20px;

                
            }
        }
        .user-info{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-row-gap: 50px;
            margin-top: 30px;

            div{
                text-align: start;
            }
            
            p{
                margin-bottom: 10px;
                text-transform: uppercase;
                font-family: "OpenSans SemiBold"
                
            }
            input{
                background-color: #21242d;
                border:none;
                outline:none;
                padding:10px;
                width:80%;
                color:#474b57;
            }
        }

    }
</style>
