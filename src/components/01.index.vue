<template>
      <div>
          <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item, index) in catelist" :key="index.id" >
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(ti, i) in item.subcates" :key="i.id">
                                              {{ti.title}}
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                              {{item.title}}
                                            </dt>
                                            <dd>
                                                <a v-for="(we, ba) in item.subcates" :key="ba.id" href="/goods/43.html">{{item.title}}</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <!--幻灯片-->
                    <div class="left-705">
                        <el-carousel :interval="5000" arrow="always">
                            <el-carousel-item v-for="(item, index) in sliderlist" :key="index.id">
                            <img :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time | time}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item, index) in goods" :key="index.id">
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a href="/goods/43.html" v-for="(items) in item.subcatetitle" :key="items.id">{{items.subcatetitle}}</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(itemss) in item.datas" :key="itemss.id">
                            <router-link :to="">
                                <div class="img-box">
                                    <img v-lazy="itemss.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{itemss.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{itemss.market_price}}</b>元</p>
                                    <p>
                                        <strong>库存{{itemss.artID}}</strong>
                                        <span>市场价：
                                            <s>{{itemss.sell_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
      </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "app",
  data: function() {
    return {
      catelist: [],
      sliderlist: [],
      toplist: [],
      goods:[]
    };
  },
  beforeCreate() {
      
  },
  //过滤器
  filters: {
    time(valeu) {
      return moment(valeu).format("YYYY年MM月DD日");
    }
  },

  //拿到首页数据
  created() {
      axios.get("http://47.106.148.205:8899/site/goods/gettopdata/goods")
      .then(response => {
        this.catelist = response.data.message.catelist;
        this.sliderlist = response.data.message.sliderlist;
        this.toplist = response.data.message.toplist;
      });
  },

  //即将显示时调用
   beforeMount() {
       axios.get('http://47.106.148.205:8899/site/goods/getgoodsgroup')
        .then((response) =>{
          this.goods=response.data.message;
        //    console.log(this.goods)
        })
        .catch(function (error) {
            // console.log(error);
        })
   },
};
</script>


<style>
 /* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
  .el-carousel__item{
      width: 100%;
      height: 100%;
  }
  .el-carousel__item img{
      width: 750px;
      height: 341px;
  }

.el-carousel__container{
    width: 705px;
    height: 341px !important;
}

</style>





