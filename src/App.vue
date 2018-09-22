<template>
  <div id="app">
    <div id="nav">
      <top-nav />
      <nav-bar />
    </div>
    <router-view/>
  </div>
</template>
<script>
import TopNav from '@/components/TopNav'
import NavBar from '@/components/NavBar'
export default {
  components:{
    TopNav,
    NavBar

  }
}
</script>

<style lang="scss">


@font-face {
  font-family: "OpenSans";
  font-style: normal;
  font-weight: 400;
  src: local("OpenSans Regular"), local("OpenSans-Regular"),
    url("/fonts/open-sans/OpenSans-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "OpenSans SemiBold";
  font-style: normal;
  font-weight: 600;
  src: local("OpenSans SemiBold"), local("OpenSans-SemiBold"),
    url("/fonts/open-sans/OpenSans-Semibold.ttf") format("truetype");
}
@font-face {
  font-family: "OpenSans Medium";
  font-style: normal;
  font-weight: 500;
  src: local("OpenSans Medium"), local("OpenSans-Medium"),
  url("/fonts/Mopen-sans/OpenSans-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "OpenSans Bold";
  font-style: normal;
  font-weight: 700;
  src: local("OpenSans Bold"), local("OpenSans-Bold"),
  url("/fonts/open-sans/OpenSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "OpenSans ExtraBold";
  font-style: normal;
  font-weight: 800;
  src: local("OpenSans ExtraBold"), local("OpenSans-ExtraBold"),
  url("/fonts/open-sans/OpenSans-ExtraBold.ttf") format("truetype");
}

body{
  margin: 0px;
  box-sizing: border-box;
  background-color: #191c23!important;  
}
#app {
  font-family: 'OpenSans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff; 
}
#nav {
  background-color: #191c23;
  
}

</style>
