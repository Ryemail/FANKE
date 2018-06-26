<template>
   <div class="product">
   	<div class="topTitle"> 
	  <span  @click="prev" id="topBack" class="topBack"></span> 
	  <span class="curTitle">分类</span> 
   	</div>
    <div class="others-content">
   	   <ul class="side-menu">
   	   	 <li class="product-title" v-for="(item,index) in shopType" :key="index" :class="{active:index===currentIndex}" @click="typeActive(index)">{{ item }}</li> 
   	   </ul>
   	   <div class="product-con">
        <ul>
          <li v-for="(item,key) in goodsArr" :key="key">
            <img :src="'http://101.132.171.105:3000/images/'+item.logo" alt="">
            <span>{{ item.typeName }}</span>
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
	name:'product',
	data(){
		return {
        currentIndex:0,
        shopType:["推荐","男装","女装","男鞋","女鞋","袜品","家具","童装","内衣"],
        level:0,
        goodsArr:[]
		}
	},
  created(){
     this.getType();
  },
  methods:{
    prev(){
       this.$router.go(-1)
    },
    typeActive(index){
       this.currentIndex=this.level=index;
       console.log(this.level);
       this.getType();
    },
    getType(){
       this.$axios.get('http://101.132.171.105:3000/typeList?level='+this.level).then((res)=>{
         this.goodsArr= res.data.result
      })
    }
  },
  components:{
    'myFooter':Footer
  }
}
  
</script>
<style scoped lang="scss">
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
}
.side-menu{
	float: left;
    width: 25%;
    height: 100%;
    li{
    	display: block;
	    height: 37.5px;
	    line-height: 37.5px;
	    border-bottom: 1px solid #fff;
	    cursor: pointer;
	    font-size:13px;
	    text-align:center;
    }
    .active{
    	background-color: #fff;
      color: #CC0000;
    }
}	
.product-con{
	width: 75%;
	min-height:632px;
	background-color: #fff;
	float: right;
	font-size:0;
	li{
		display:inline-block;
		width: 33%;
	    text-align: center;
	    overflow: hidden;
	    font-size:12.5px;
	    cursor: pointer;
	    img{
	    	display: block;
		    margin: 6.25px auto;
		    width: 75%;
	    }
	    span{
	    	display: block;
           color: #999;
	    }
	}
}
</style>	