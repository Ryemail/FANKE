<template>
  <div class="home">
        <!-- 顶部标题 -->
        <div class="topTitle">
            <a class="topBack" @click.prevent="$router.go(-1)"></a>
            <span class="typeTxt">购物车</span>
        </div>    
        <div class="content-box">
            <div class="shopCar">
                <div class="car-null">
                    <p><img src="../assets/null-car.png" alt=""></p>
                </div>
                <div class="cartBtn">
                    <a href="">我的收藏</a>
                    <router-link to="/">去逛逛</router-link>
                </div>
            </div>
            <div class="loginBox">
                <a href="" class="userInfo">{{ user }}</a>
                <span>|</span>
               <!--  @click.prevent="logOut" -->
                <a href=""  @click.prevent="logOut" class="logOut">退出</a>
            </div>
            <div class="footer">
                <ul class="footer-list">
                    <li><a href=""><img src="../assets/help1.png" alt=""></a></li>
                    <li><a href=""><img src="../assets/download1.png" alt=""></a></li>
                    <li><a href=""><img src="../assets/weixin1.png" alt=""></a></li>
                    <li><a href=""><img src="../assets/pcsite1.png" alt=""></a></li>
                </ul>
                <div class="footerText">京ICP证100557号</div>
            </div>
        </div>
        <my-footer></my-footer>
   </div>
    <!-- 商品区域end -->
</template>

<script>
import Footer from './Footer';
export default {
  name: 'cart',
  data () {
    return {
        user:""
    }
  },
  /*beforeCreate(){
        if(this.$store.state.isLogin == false){
            this.$router.push('/login');
        }
    },*/
    created(){
        this.user = window.localStorage.getItem('username');
    }
    /*computed:{
        phone(){
            return this.$store.state.phone;
        },
        isLogin(){
            return this.$store.state.isLogin;
        }
    },*/,
    methods:{
        // 退出功能
        logOut(){
            window.localStorage.removeItem('username');
            //this.$store.state.isLogin = false;
            this.$router.push('/login');
        }
       /* backHome(){
            this.$router.push('/');
        }*/
    },
    components:{
        'myFooter':Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topTitle{
    position: relative;
    width: 100%;
    height: 50px;
    background-color: #b81c22;
    text-align: center;
}
.topTitle .topBack{
    display: inline-block;
    position: absolute;
    top: 50%;
    left:25px;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    border-top:2px solid #fff;
    border-left:2px solid #fff;
    transform: rotate(-45deg);
}
.topTitle .typeTxt{
    display: inline-block;
    height: 50px;
    font-size: 19px;
    color: #fff;
    line-height: 50px;
    margin: 0 auto;
}
.shopCar{
    padding: 25px;
    color: #4d4d4d;
    background-color: #fff;
}
.shopCar .car-null{
    width: 100%;
    height: 250px;
    border: 2px solid #d9d9d9;
}
.shopCar .car-null>p{
    width: 156px;
    height: 63px;
    margin: 88px auto;
}
.shopCar .car-null>p img{
    width: 100%;
}
.shopCar .cartBtn{
    margin-top: 13px;
    width: 100%;
    height: 37px;
    text-align: center;
    background-color: #fff;
}
.shopCar .cartBtn a{
    display: inline-block;
    width: 172px;
    height: 37px;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    text-align: center;
    line-height: 37px;
    background-color: #f5f5f5;
    border-radius: 3px;
    text-decoration: none;
}
.shopCar .cartBtn a:first-child{
    margin-right: 15px;
}
.loginBox{
    padding: 44px 0;
    text-align: center;
}
.loginBox a{
    font-size: 17px;
    color: #4c4c4c;
    padding: 9px 0;
    text-decoration: none;
}
.loginBox span{
    font-size: 17px;
    color: #4c4c4c;
    margin: 0 5px;
}
.footer{
    text-align: center;
    padding-bottom: 63px;
}
.footer .footer-list{
    display: inline-block;
    box-sizing: border-box;
    width: 280px;
    height: 97px;
    margin: 0 auto;
    padding: 15px 0;
    border-top:1px solid #4c4d4d;
    border-bottom:1px solid #4c4d4d;
}
.footer .footer-list li{
    list-style: none;
    display: inline-block;
    width: 44px;
    height: 65px;
    margin-right: 30px;
}
.footer .footer-list li:last-child{
    margin-right: 0;
}
.footer .footer-list li img{
    width:100%;
    height: 100%;
}
.footer .footerText{
    margin-top: 10px;
}
</style>
