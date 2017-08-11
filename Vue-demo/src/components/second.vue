<template>
  <div id="secondComponents">
    <h3>{{msg11}}</h3>
    <h4>{{msg22}}</h4>
    <!--<ul>-->
      <!--<li v-for="article in articles">-->
        <!--{{article.title}}-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
    export default{
//        name:"app",
        data(){
            return {
                msg11:"点击 Hello Vue",
                msg22:"点击 前端框架"
//                articles:[1,2,3,4,5,6]
            }
        },
        components:{secondComponents}
//        mounted: function() {
//            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
//                headers: {
//
//                },
//                emulateJSON: true
//            }).then(function(response) {
//                // 这里是处理正确的回调
//
//                this.articles = response.data.subjects
//                // this.articles = response.data["subjects"] 也可以
//
//            }, function(response) {
//                // 这里是处理错误的回调
//                console.log(response)
//            });
//        }
    }
</script>

<style>

</style>