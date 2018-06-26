<template>
   <div class="customize">
    <div class="topTitle"> 
    <span @click="prev" id="topBack" class="topBack"></span> 
    <span class="curTitle">私人订制</span> 
    </div>
  <div class="others-content">
      <!-- 轮播图 start -->
    <div class="carousel">
      <swiper :options="swiperOptiona" ref ="mySwiper">
        <!-- 幻灯片-->
        <swiper-slide class="swiper-slide"><a href="">
           <img src="../assets/cm1.jpg" alt=""></a>
        </swiper-slide>
        <swiper-slide class="swiper-slide"><a href="">
           <img src="../assets/cm2.jpg" alt=""></a>
        </swiper-slide>
        <swiper-slide class="swiper-slide"><a href="">
           <img src="../assets/cm3.jpg" alt=""></a>
        </swiper-slide>
        <swiper-slide class="swiper-slide"><a href="">
           <img src="../assets/cm4.jpg" alt=""></a>
        </swiper-slide>
        <!-- 可选控件-->
        <div class ="swiper-pagination"  slot ="pagination"> </div>
      </swiper>
    </div>
       <div class="topiclist-1">
         <div class="topic"><a href=""><img src="../assets/2017_9_21_15_47_45_5022.jpg" alt=""></a></div>
         <div class="topic"><a href=""><img src="../assets/2017_9_20_11_28_18_888.jpg" alt=""></a></div>
       </div>
       <swiper :options="slidec" class="slide-carousel" ref ="mySwiper">
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c1.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c2.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c3.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"><a href="">
                 <img src="../assets/c4.jpg" alt="">
             </a>
         </swiper-slide>
          <swiper-slide class="swiper-slide"><a href="">
                 <img src="../assets/c5.jpg" alt="">
             </a>
         </swiper-slide>
       </swiper>
       <div class="topiclist-1">
         <div class="topic"><a href=""><img src="../assets/2017_9_20_11_28_31_547.jpg" alt=""></a></div>
         <div class="topic"><a href=""><img src="../assets/2017_9_18_9_1_17_3827.jpg" alt=""></a></div>
       </div>
       <swiper :options="slidec" class="slide-carousel" ref ="mySwiper">
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c1.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c2.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c3.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"><a href="">
                 <img src="../assets/c4.jpg" alt="">
             </a>
         </swiper-slide>
          <swiper-slide class="swiper-slide"><a href="">
                 <img src="../assets/c5.jpg" alt="">
             </a>
         </swiper-slide>
       </swiper>

        <div class="topiclist-1">
         <div class="topic"><a href=""><img src="../assets/2017_9_18_9_1_50_1705.jpg" alt=""></a></div>
         </div>
        <div class="s"></div>
        <div class="topiclist-1">
         <div class="topic"><a href=""><img src="../assets/2017_9_18_9_2_18_3443.jpg" alt=""></a></div>
         </div>
        <swiper :options="slidec" class="slide-carousel" ref ="mySwiper">
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c1.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c2.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c3.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"><a href="">
                 <img src="../assets/c4.jpg" alt="">
             </a>
         </swiper-slide>
          <swiper-slide class="swiper-slide"><a href="">
                 <img src="../assets/c5.jpg" alt="">
             </a>
         </swiper-slide>
       </swiper>
        <div class="topiclist-1">
         <div class="topic"><a href=""><img src="../assets/2017_9_18_9_2_36_4318.jpg" alt=""></a></div>
         </div>
        <swiper :options="slidec" class="slide-carousel" ref ="mySwiper">
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c1.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c2.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"> <a href="">
                 <img src="../assets/c3.jpg" alt="">
             </a>
         </swiper-slide>
         <swiper-slide class="swiper-slide"><a href="">
                 <img src="../assets/c4.jpg" alt="">
             </a>
         </swiper-slide>
          <swiper-slide class="swiper-slide"><a href="">
                 <img src="../assets/c5.jpg" alt="">
             </a>
         </swiper-slide>
       </swiper>
        <!-- 衬衫 start -->
        <div class="topiclist-1">
          <div class="topic"><a href="">
            <img src="../assets/2017_9_20_11_28_41_3414.jpg" alt=""></a>
          </div>
        </div>
        <ul class="topiclist-2">
          <li><a href=""><img src="../assets/2017_11_28_14_34_10_6033.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_11_28_14_34_10_6033.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_11_28_14_34_10_6033.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_11_28_14_34_10_6033.jpg" alt=""></a></li>
        </ul>

        <!-- 西服 start -->
        <div class="topiclist-1">
          <div class="topic"><a href="">
            <img src="../assets/2017_9_20_11_29_0_6891.jpg" alt=""></a>
          </div>
        </div>
        <ul class="topiclist-2">
          <li><a href=""><img src="../assets/2017_9_18_9_6_52_8837.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_9_18_9_6_52_8837.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_9_18_9_6_52_8837.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_11_28_14_34_10_6033.jpg" alt=""></a></li>
        </ul>
        <!-- 羊毛大衣 start -->
        <div class="topiclist-1">
          <div class="topic"><a href="">
            <img src="../assets/2017_11_9_10_53_9_5655.jpg" alt=""></a>
          </div>
        </div>
        <ul class="topiclist-2">
          <li><a href=""><img src="../assets/2017_11_28_14_34_29_6701.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_9_18_9_6_52_8837.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_9_18_9_6_52_8837.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_11_28_14_34_10_6033.jpg" alt=""></a></li>
        </ul>
         <!-- 领带 start -->
        <div class="topiclist-1">
          <div class="topic"><a href="">
            <img src="../assets/2017_9_26_16_23_16_4389.jpg" alt=""></a>
          </div>
        </div>
        <ul class="topiclist-2">
          <li><a href=""><img src="../assets/2017_9_26_16_23_30_6065.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_9_18_9_6_52_8837.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_9_18_9_6_52_8837.jpg" alt=""></a></li>
          <li><a href=""><img src="../assets/2017_11_28_14_34_10_6033.jpg" alt=""></a></li>
        </ul>
  </div>
  <my-footer></my-footer>
</div>
</template>
<script>
import Footer from './Footer.vue';
import 'swiper/dist/css/swiper.css';
import {swiper,swiperSlide} from 'vue-awesome-swiper';
export default {
  name:'product',
  data(){
    return {
       notNextTick: true,
       swiperOptiona: {
        // swiper options 所有的配置同swiper官方api配置
        autoplay: 1500,
        autoplayDisableOnInteraction:false,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        mousewheelControl: true,
        observeParents: true
      },
      slidec:{
         slidesPerView: 3.3,
         spaceBetween: 2,
         pagination: {
          el: '.swiper-pagination',
          clickable: true,
        } 
      }
    }
  },
   components:{
    swiper,
    swiperSlide,
    'myFooter':Footer
  },
  methods:{
    prev(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="scss">
img{
  width: 100%;
  display:block;
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
.topiclist-1{
  width: 100%;
  .topic{
    width: 100%;
    a{
     display: block;
     text-decoration: none;
    }
  }  
}
.slide-carousel{
  width: 100%;
  height: 100%;
  div.swiper-slide{
    width: 125px !important; 
    margin-right: 2px;
    img{
      display:block;
      width:100% ;
    }
  }
}
.topic{
  width: 50%;
  display:inline-block;
  font-size:0;
}
.topiclist-2{
  overflow:hidden;
  a{
    display:block;
  }
  li{
    float: left;
    width: 50%;
  }
}
</style>  