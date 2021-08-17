<template>
    <div>
        <v-tabs v-model="tab" dark>
            <v-tab v-for="(item, index) in consoleTabs">
                {{item.title}}
                <img class="tab-close" src="../assets/icons/close-lite.svg"
                    @click="consoleTabs.splice(index, 1)">
            </v-tab>
        </v-tabs>

        <v-card-text class="text-center">
            <div ref="monaco" class="monaco-editor"></div>
        </v-card-text>
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data() {
        return {
            text: "啊啊啊",
            tab: 0,
            consoleTabs: [
                {
                    title: '标题1',
                    database: 'test_database'
                },
                {
                    title: '标题2',
                    database: 'test_database2'
                }
            ]
        }
    },created() {
        // require.config({ paths: { 'vs': 'editor/min/vs' }});
        // require(['vs/editor/editor.main'], function() {
        //     let editor = monaco.editor.create(document.getElementById('container'), {
        //         value: [
        //             '/* ',
        //             ' * 在下方编写要模拟的数据接口路径以及模拟数据',
        //             ' * 以接口路径为`api/v1/demo`的GET请求, 且响应信息为 `{"say": "Hello!"}`为例',
        //             ' * 编写完毕后按 `Ctrl+S` 使其生效',
        //             ' */',
        //             'return {',
        //             '    // GET 请求 api/v1/demo 的接口模拟数据',
        //             '    "GET: api/v1/demo":{',
        //             '        say: "Hello"',
        //             '    }',
        //             '}'
        //         ].join('\n'),
        //         language: 'javascript',
        //         theme: 'vs-dark',
        //     });

            // editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {
            //     setApi(editor.getValue())
            // })

        // });
        // this.monaco.editor.create(this.$refs.monaco)
    },
    methods: {
        onMounted(editor) {
            this.editor = editor;
        },
        onCodeChange(editor) {
            console.log(this.editor.getValue());
        },
    }
}
</script>

<style lang="less">
    .v-tabs .v-item-group{
        height: 30px !important;
    }
</style>
<style lang="less" scoped>

    .tab-close{
        height: 10px;
        width: 10px;
    }
    .tab-close:hover{
        background-color: red;
    }
</style>
