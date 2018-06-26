<template>
  <div class="personal">
    <div class="topTitle"> 
      <span @click="prev" id="topBack" class="topBack"></span> 
      <span class="curTitle">个人中心</span> 
    </div>
    <div class="others-content">
      <div class="wrap">
        <div class="p-profile">
          <div class="setting">
            <a class="edit" href=""></a>
          </div>
          <div class="photo">
            <img src="../assets/H5-V0.jpg" alt="">
            <p>{{ username }}</p>
            <a class="grade" href=""></a>
          </div>
          <ul class="userinfo">
            <li>积分:0</li>
            <li>余额:0.00</li> 
            <li>成长值:0</li>
          </ul>
        </div>
        <div class="order">
          <p><a class="order-title" href="">全部订单</a></p>
          <ul>
            <li class="order-li">
               <a href="">
                  <span class="icon1"></span>
                  <span>进行中</span>
               </a>
            </li>
            <li class="order-li">
               <a href="">
                  <span class="icon2"></span>
                  <span>已完成</span>
               </a>
            </li>
            <li class="order-li">
               <a href="">
                  <span class="icon3"></span>
                  <span>编辑</span>
               </a>
            </li>
            <li class="order-li">
               <a href="">
                  <span class="icon4"></span>
                  <span>无效</span>
               </a>
            </li>
          </ul>
        </div>
        <ul class="section">
          <li class="section-li">
            <a class="section-charge" href="">
              <span></span>
              <span>充值返现</span>
              <span class="chargeNotice">充100返100</span>
            </a>
          </li>
          <li class="section-li">
            <a class="section-pTailor" href="">
              <span></span>
              <span>充值返现</span>
            </a>
          </li>
          <li class="section-li">
            <a class="section-logistics" href="">
              <span></span>
              <span>充值返现</span>
            </a>
          </li>   
          <li class="section-li">
            <a class="section-rRecords " href="">
              <span></span>
              <span>退货幻记录</span>
            </a>
          </li>
          <li class="section-li">
            <a class="section-addr" href="">
              <span></span>
              <span>地址管理</span>
            </a>
          </li>
          <li class="section-li">
            <a class="section-coupon" href="">
              <span></span>
              <span>我的礼品卡</span>
            </a>
          </li>
          <li class="section-li">
            <a class="section-gCard" href="">
              <span></span>
              <span>我的优惠券</span>
            </a>
          </li>   
          <li class="section-li">
            <a class="section-points" href="">
              <span></span>
              <span>我的积分</span>
            </a>
          </li>
          <li class="section-li">
            <a class="section-comment" href="">
              <span></span>
              <span>我的评论</span>
            </a>
          </li>
          <li class="section-li">
            <a class="section-ask" href="">
              <span></span>
              <span>我的提问</span>
            </a>
          </li>
          <li class="section-li">
            <a class="section-advise" href="">
              <span></span>
              <span>投诉建议</span>
            </a>
          </li>                 
        </ul>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import Footer from './Footer.vue';
export default {
  name:'login',
  data(){
    return {
      username:""
    }
  },
  methods:{
    prev(){
       this.$router.go(-1)
    }
  },
  created(){
    this.username=window.localStorage.getItem('username');
  },
  components:{
    'myFooter':Footer
  }
}
</script>
<style scoped lang="scss">
img{
  width: 100%;
  display:block;
}
.clearfix:after{
  content: "."; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
}
.clearfix{
  zoom:1;
}
.topTitle{
    position: relative;
    top: 0;
    max-width: 640px;
    width: 100%;
    height: 50px;
    overflow: hidden;
    background: #b81c22;
    text-align: center;
    line-height: 50px;
    span{
      display: inline-block;
    }
    .curTitle{
      margin: 0 auto;
      font-size:19px;;
      color: #fff;
    }
    .topBack{
      position: absolute;
        top:50%;
        left:20px;
      width: 18px;
      height: 18px;
      border-top:2px solid #fff;
      border-left:2px solid #fff;
      transform:translateY(-50%) rotata(-45deg);
        -webkit-transform: translateY(-50%) rotate(-45deg);
    }
}
.others-content{
  overflow:hidden;
  line-height: 18.75px;
  margin-bottom:54px;
  background:#fff;
}
.wrap{
  background-color: #f0eff5;
  .p-profile{
    height: 222.5px;
    background: url(../assets/uc-topbgd.png) no-repeat center top;
    background-size: cover;
    text-align: center;
    color: #fff;
    line-height: 1.8;
  }
}
.setting {
  overflow:hidden;
  .edit{
    display: block;
    margin: 10px 10px 0 0;
    width: 22.5px;
    height: 25px;
    background: url(../assets/order-icon.png) no-repeat 0 0;
    background-size: 21.5px 100px;
    float: right;
  }
}
.photo{
  text-align:center;
  img{
    display:inline-block;
    width: 81.25px;
    height: 82.25px;
  }
  .grade{
    display: block;
    margin: 5px auto;
    width: 62.5px;
    height: 19px;
    background: url(../assets/H5-NewV0.png) no-repeat center;
    background-size: cover;
  }
}
.userinfo{
  li{
    display: inline-block;
    width: 32%;
  }
}
.order{
  background:#fff;
  margin:12.5px 0;
  .order-title{
    position: relative;
    display: block;
    height: 42.5px;
    padding: 0 11.25px;
    color: #000;
    text-align: left;
    line-height: 42.5px;
    border-bottom: 1px solid #f0eff5;
  }
  .order-title::after{
    content:"";
    width: 10px;
    height: 10px;
    position:absolute;
    top:50%;
    right:12.5px;
    border-top:1px solid #a5a5a5;
    border-right:1px solid #a5a5a5;
    transform: translateY(-50%) rotate(45deg);
    -webkit-transform: translateY(-50%) rotate(45deg);
  }
  ul{
    display:flex;
  }
  .order-li{
    width: 25%;
    a{
      display:block;
      float: left;
      padding: 12.5px 0;
      text-align:center;
      width: 100%;
      color: #000;
      span:first-child{
        display:block;
        margin: 0 auto;
        width: 22.5px;
        height: 25px;
        background:url(../assets/uc-order-icon.png) no-repeat;
        background-size:22.5px 125px;
      }
      span.icon1{
        background-position:0 -25px;
      }
      span.icon2{
        background-position:0 -50px;
      }
      span.icon3{
        background-position:0 -100px;
      }
      span.icon4{
        background-position:0 -75px;
      }
    }
  }
}
.section{
  width: 100%;
  overflow:hidden;
  text-align: center;
  background-color: #fff;
  li{
    overflow:hidden;
    position: relative;
    float: left;
    font-size:12.5px;
    width: 25%;
    border-top: 1px solid #f0eff5;
    a{
      width: 100%;
      display:inline-block;
      border-left: 1px solid #f0eff5;
      margin:18.75px 0;
      .chargeNotice{
        position: absolute;
        width: 100%;
        font-size: 12px;
        color: #b81c22;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }  
    }
    span{
      display: block;
    }
    span:first-of-type{
      margin: 0 auto;
      width: 37.5px;
      height: 37.5px;
      background: url(../assets/uc-section-icon.png) no-repeat;
      background-size: 37.5px 525px;
    }
    .section-logistics span:first-of-type{
      background-position:0 -450px;
    }
    .section-rRecords span:first-of-type{
      background-position:0 -487.5px;
    } 
    .section-addr span:first-of-type{
      background-position:0 -150px;
    } 
    .section-coupon span:first-of-type{
      background-position:0 -75px;
    } 
    .section-gCard span:first-of-type{
      background-position:0 -112.5px;
    }
    .section-points span:first-of-type{
      background-position:0 -262.5px;
    } 
    .section-comment span:first-of-type{
      background-position:0 -187.5px;
    } 
    .section-ask span:first-of-type{
      background-position:0 -225px;
    } 
    .section-advise span:first-of-type{
      background-position:0 -300px;
    } 
  }
}
</style>  