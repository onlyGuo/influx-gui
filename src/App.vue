<template>
    <div class="rounded-sm" @mousemove="moveHeight"
         @mouseup="isMove = false" style="user-select: none; overflow: hidden; height: 100vh">
        <v-app>
            <v-navigation-drawer app dark permanent>
                <!-- -->
                Navigation Drawer
            </v-navigation-drawer>

            <v-system-bar dense dark app height="40" style="text-align: center;-webkit-app-region: drag;">
                <v-toolbar-title style="width: 100%">Influx GUI Manager</v-toolbar-title>
                <div class="title-btn">
                    <img src="./assets/icons/min-lite.svg">
                    <img src="./assets/icons/big-lite.svg">
                    <img src="./assets/icons/close-lite.svg">
                </div>
            </v-system-bar>

            <!-- 根据应用组件来调整你的内容 -->
            <v-main>
                <!-- 给应用提供合适的间距 -->
                <v-container fluid :style="'overflow: auto; padding: 0;height:calc(100vh - ' + (footerWidth + 40) + 'px)'">
                    <!-- 如果使用 vue-router -->
                    <router-view></router-view>
                </v-container>
            </v-main>

            <v-footer app dark :height="footerWidth">
                <div class="footer-switch" :style="'bottom:' + (footerWidth - 9) + 'px'"
                     @mousedown="startMoveHeight"
                ></div>
                Footer
            </v-footer>
        </v-app>
    </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
      footerWidth: 200,
      isMove: false,
      moveStart: 0
  }),
    methods: {
        // 按下
        startMoveHeight(a){
            this.moveStart = this.footerWidth - (window.innerHeight - a.clientY);
            this.isMove = true
        },
        // 移动
        moveHeight(a){
            if (!this.isMove){
                return
            }
            this.footerWidth = window.innerHeight - a.clientY + this.moveStart;
        }
    }
};
</script>

<style scoped lang="less">
    .footer-switch{
        height: 9px;
        border-top: solid 1px gray;
        width: 100%;
        position: fixed;
        left: 0;
        cursor: row-resize;
    }
    .title-btn{
        float: right;
        position: fixed;
        right: 0;

        img{
            height: 25px;
            width: 25px;
            display: inline-block;
            padding: 5px;
            -webkit-app-region: none;
        }
        img:hover{
            background-color: #2b2b2b;
        }
    }
</style>
