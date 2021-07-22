import elementPlusIcon from '../assets/templateIcons/element-plus.svg'
import vueIcon from '../assets/templateIcons/vue.png'
import reactIcon from '../assets/templateIcons/react.svg'
import vhtmlIcon from '../assets/templateIcons/vhtml.png'
import elementIcon from '../assets/templateIcons/element.svg'
import echartsIcon from '../assets/templateIcons/echarts.png'
import openlayersIcon from '../assets/templateIcons/openlayers.png'
import g2Icon from '../assets/templateIcons/g2.png'
import vantIcon from '../assets/templateIcons/vant.png'


const vue3 = {
    name: 'Vue 3',
    icon: vueIcon,
    code: {
        HTML: {
            language: 'html',
            content: `<div id="hello-vue" class="demo">
{{ message }}
</div>`,
            resources: []
        },
        CSS: {
            language: 'css',
            content: `.demo {
font-family: sans-serif;
border: 1px solid #eee;
border-radius: 2px;
padding: 20px 30px;
margin-top: 1em;
margin-bottom: 40px;
user-select: none;
overflow-x: auto;
}`,
            resources: []
        },
        JS: {
            language: 'javascript',
            content: `const HelloVueApp = {
data() {
    return {
    message: 'Hello Vue!!'
    }
}
}

Vue.createApp(HelloVueApp).mount('#hello-vue')`,
            resources: [{
                name: 'Vue 3',
                url: 'https://unpkg.com/vue@next'
            }]
        },
    },
}

const vue2 = {
    name: 'Vue 2',
    icon: vueIcon,
    code: {
        HTML: {
            language: 'html',
            content: `<div id="app">
{{ message }}
</div>`,
            resources: []
        },
        CSS: {
            language: 'css',
            content: '',
            resources: []
        },
        JS: {
            language: 'javascript',
            content: `var app = new Vue({
el: '#app',
data: {
    message: 'Hello Vue!'
}
})`,
            resources: [{
                name: 'Vue 2',
                url: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
            }]
        },
    },
}

const react = {
    name: 'React',
    icon: reactIcon,
    code: {
        HTML: {
            language: 'html',
            content: `<div id="root"></div>`,
            resources: []
        },
        CSS: {
            language: 'css',
            content: '',
            resources: []
        },
        JS: {
            language: 'babel',
            content: `ReactDOM.render(
<h1>Hello, world!</h1>,
document.getElementById('root')
);`,
            resources: [{
                    name: 'React',
                    url: 'https://unpkg.com/react/umd/react.development.js'
                },
                {
                    name: 'react-dom',
                    url: 'https://unpkg.com/react-dom/umd/react-dom.development.js'
                },
            ]
    },
}
}
const vhtmlForm = {
    name: 'vhtml表单组件',
    icon: vhtmlIcon,
    code: {
        HTML: {
            language: 'html',
            content: ` <div id="app"><v-form ref="form1" :model="form1" action="." method="GET">
            <v-form-item v-model="form1Errors.email" name="email" label="邮箱" required="邮箱必填" :rules="form1Rules.email">
                <template slot="label" slot-scope="prop">
                    <span v-if="prop.required">*</span>
                    {{prop.label}}
                </template>
                <v-input v-model="form1.email" name="email" kind="default" placeholder="请输入邮箱" style="width:400px;"></v-input>
                <p slot="desc">邮箱仅用于登陆</p>
            </v-form-item>
            <v-form-item v-model="form1Errors.username" name="username" required="用户名必填" error-placement="top-right" :rules="form1Rules.username">
                <v-input v-model="form1.username" name="username" kind="simple" placeholder="用户名" style="width:400px;" limit="20"></v-input>
            </v-form-item>
            <v-form-item v-model="form1Errors.password" name="password" label="密码" required="密码必填" error-placement="bottom" :rules="form1Rules.password">
                <v-input v-model="form1.password" password name="password" placeholder="请输入密码" style="width:400px;"></v-input>
                <!-- <p slot="desc">密码至少需要8个字符</p> -->
            </v-form-item>
            <v-form-item v-model="form1Errors.password2" name="password2" label="再输入一次" required="密码必填" error-placement="bottom" :rules="form1Rules.password2">
                <v-input v-model="form1.password2" password name="password2" placeholder="请输入密码" style="width:400px;"></v-input>
            </v-form-item>
            <v-form-item v-model="form1Errors.hobbies" name="hobbies" label="兴趣爱好" required="请选择一个兴趣爱好" :rules="form1Rules.hobbies">
                <v-checkbox-group v-model='form1.hobbies'>
                    <v-checkbox v-for="(hb, i) in avaliableHobbies" name="hobbies" :key="i" :value="hb.value">{{hb.label}}</v-checkbox>
                </v-checkbox-group>
            </v-form-item>
            <v-form-item v-model="form1Errors.sex" name="sex" label="性别" :rules="form1Rules.sex">
                <v-radio-group v-model="form1.sex" kind="button">
                    <v-radio v-for="(s, i) in sexs" name="sex" :key="i" :value="s.value">{{s.label}}</v-radio>
                </v-radio-group>
            </v-form-item>
            <v-form-item name="education" label="学历">
                <v-select v-model="form1.education" name="education" :options="avaliableEducation"></v-select>
            </v-form-item>
            <v-form-item v-model="form1Errors.agreement" name="agreement" label="是否同意注册协议" required="必须同意才能提交" :rules="form1Rules.agreement">
                <v-switch v-model="form1.agreement" name="agreement" value="yes">
                </v-switch>
            </v-form-item>
            <v-form-item>
                <v-button kind="primary" size="large" type="submit">提交</v-button>
            </v-form-item>
        </v-form>
    
        <br/>
        当前的错误信息：
        <pre>{{JSON.stringify(form1Errors, null, '    ')}}</pre>
    
        <v-button kind="warning" size="large" @click="showServerError">显示错误信息</v-button></div>`,
            resources: []
        },
        CSS: {
            language: 'less',
            content: `@color: black;
            #app {
              .v-form-item {
                color: @color;
              }
            }`,
            resources: [{
                name: 'vhtml',
                url: 'https://bqq.gtimg.com/vhtml_dev/latest/vhtml2.css'
            }]
        },
        JS: {
            language: 'javascript',
            content: `new Vue({
el: '#app',
data() {
    return {
        avaliableHobbies: [
            { label: '篮球', value: 1},
            { label: '羽毛球', value: 2},
            { label: '游泳', value: 3},
            { label: '看电影', value: 4},
            { label: '看美剧', value: 5},
            { label: '历史', value: 6},
            { label: '军事', value: 7},
            { label: '晒娃', value: 8}
        ],
        sexs: [
            { label: '男', value: 1},
            { label: '女', value: 2},
            { label: '未知', value: 3},
        ],
        form1: {
            username: '',
            email: '',
            password: '',
            password2: '',
            education: '',
            hobbies: [],
            sex: 1,
            agreement: false,
            education: 'F'
        },
        avaliableEducation: [
            {text: '本科', value: 'A'},
            {text: '硕士', value: 'B'},
            {text: '博士', value: 'C'},
            {text: '大专', value: 'D'},
            {text: '中专', value: 'E'},
            {text: '高中', value: 'F'},
            {text: '初中', value: 'G'},
            {text: '小学', value: 'H'}
        ],
        form1Errors: {
            username: 'xxx',
            password: 'xxx',
            password2: 'xxx',
            email: 'xxx',
            hobbies: 'xxx',
            sex: 'xxx',
            agreement: 'xxx'
        },
        form1Rules: {
            username: [
                {betweenLength: [10, 20], message: '用户名必须在10-20个字符之间'},
                {validate: /^[0-9a-zA-Z_]+$/, message: '用户名不能包含英文、数字、下划线以外的字符'},
                {custom: true, message: '真的不能超过{limit}个字符'}
            ],
            password: [
                {required: true, trim: false},
                {minLength: 10, message: '密码不能小于10个字符', trim: false}
            ],
            password2: [
                {required: true, trim: false},
                {equalTo: 'password', message: '两次输入的密码不一致'}
            ],
            email: [
                {email: true, message: '请输入正确的邮箱地址', trigger: 'change'}
            ],
            hobbies: [
                {required: true, message: '请选择一个兴趣爱好', trigger: 'submit'},
                {minLength: 2, message: '必须选两个兴趣爱好', trigger: 'submit'}
            ],
            sex: [
                {validate: (value) => value !== 3, message: 'Oops! 不能选未知哦'}
            ]
        }
    };
},
methods: {
    showServerError() {
        this.form1Errors.username = '来自星星的错误信息';
        this.form1Errors.password = '来自星星的错误信息';
        this.form1Errors.password2 = '来自星星的错误信息';
        this.form1Errors.email = '来自星星的错误信息';
        this.form1Errors.hobbies = '来自星星的错误信息';
        this.form1Errors.sex = '来自星星的错误信息';
        this.form1Errors.agreement = '来自星星的错误信息';
        this.$refs.form1.focusError();
    }
}
})`,
            resources: [{
                name: 'Vue 2',
                url: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
            },{
                    name: 'vhtml',
                    url: 'https://bqq.gtimg.com/vhtml_dev/latest/vhtml2.js'
                }
            ]
        },
    },
}

const elementPlus = {
    name: 'element-plus',
    icon: elementPlusIcon,
    code: {
        HTML: {
            language: 'html',
            content: `<div id="app">
<el-button>{{ message }}</el-button>
</div>`,
            resources: []
        },
        CSS: {
            language: 'css',
            content: '',
            resources: [{
                name: 'element-plus',
                url: 'https://unpkg.com/element-plus/lib/theme-chalk/index.css'
            }]
        },
        JS: {
            language: 'javascript',
            content: `const App = {
data() {
    return {
    message: "Hello Element Plus",
    };
},
};
const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");`,
            resources: [{
                name: 'Vue 3',
                url: 'https://unpkg.com/vue@next'
            }, {
                name: 'element-plus',
                url: 'https://unpkg.com/element-plus/lib/index.full.js'
            }]
        },
    },
}

const elementUi = {
    name: 'element-ui',
    icon: elementIcon,
    code: {
        HTML: {
            language: 'html',
            content: `<div id="app">
<el-button @click="visible = true">按钮</el-button>
<el-dialog :visible.sync="visible" title="Hello world">
    <p>欢迎使用 Element</p>
</el-dialog>
</div>`,
            resources: []
        },
        CSS: {
            language: 'css',
            content: '',
            resources: [{
                name: 'element-ui',
                url: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
            }]
        },
        JS: {
            language: 'javascript',
            content: `new Vue({
el: '#app',
data: function() {
    return { visible: false }
}
})`,
            resources: [{
                    name: 'Vue 2',
                    url: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
                },
                {
                    name: 'element-ui',
                    url: 'https://unpkg.com/element-ui/lib/index.js'
                }
            ]
        },
    },
}

const openLayers = {
    name: 'OpenLayers',
    icon: openlayersIcon,
    code: {
        HTML: {
            language: 'html',
            content: `<div id="map" class="map"></div>`,
            resources: []
        },
        CSS: {
            language: 'css',
            content: `.map {
height: 400px;
width: 100%;
}`,
            resources: [{
                name: 'OpenLayers',
                url: 'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css'
            }]
        },
        JS: {
            language: 'javascript',
            content: `var map = new ol.Map({
target: 'map',
layers: [
    new ol.layer.Tile({
    source: new ol.source.OSM()
    })
],
view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
})
});`,
            resources: [{
                name: 'OpenLayers',
                url: 'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js'
            }]
        },
    },
}

const eCharts = {
    name: 'ECharts',
    icon: echartsIcon,
    code: {
        HTML: {
            language: 'html',
            content: `<!-- 为ECharts准备一个具备大小（宽高）的Dom -->
<div id="main" style="width: 600px;height:400px;"></div>`,
            resources: []
        },
        CSS: {
            language: 'css',
            content: '',
            resources: []
        },
        JS: {
            language: 'javascript',
            content: `// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
title: {
    text: 'ECharts 入门示例'
},
tooltip: {},
legend: {
    data:['销量']
},
xAxis: {
    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
},
yAxis: {},
series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
}]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);`,
            resources: [{
                name: 'ECharts',
                url: 'https://cdn.bootcdn.net/ajax/libs/echarts/5.1.0/echarts.min.js'
            }]
        },
    },
}

const g2 = {
    name: 'G2',
    icon: g2Icon,
    code: {
        HTML: {
            language: 'html',
            content: `<div id="container"></div>`,
            resources: []
        },
        CSS: {
            language: 'css',
            content: '',
            resources: []
        },
        JS: {
            language: 'javascript',
            content: `const data = [
    { type: '未知', value: 654, percent: 0.02 },
    { type: '17 岁以下', value: 654, percent: 0.02 },
    { type: '18-24 岁', value: 4400, percent: 0.2 },
    { type: '25-29 岁', value: 5300, percent: 0.24 },
    { type: '30-39 岁', value: 6200, percent: 0.28 },
    { type: '40-49 岁', value: 3300, percent: 0.14 },
    { type: '50 岁以上', value: 1500, percent: 0.06 },
];

const chart = new G2.Chart({
    container: 'container',
    autoFit: true,
    height: 500,
    padding: [50, 20, 50, 20],
    });
    chart.data(data);
    chart.scale('value', {
    alias: '销售额(万)',
});

chart.axis('type', {
    tickLine: {
        alignTick: false,
    },
});
chart.axis('value', false);

chart.tooltip({
    showMarkers: false, 
});
chart.interval().position('type*value');
chart.interaction('element-active');

// 添加文本标注
data.forEach((item) => {
    chart
        .annotation()
        .text({
        position: [item.type, item.value],
        content: item.value,
        style: {
            textAlign: 'center',
        },
        offsetY: -30,
        })
        .text({
        position: [item.type, item.value],
        content: (item.percent * 100).toFixed(0) + '%',
        style: {
            textAlign: 'center',
        },
        offsetY: -12,
        });
});
chart.render();`,
            resources: [{
                name: 'g2',
                url: 'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.16/dist/g2.min.js'
            }]
        },
    },
}


const vant = {
    name: 'Vant',
    icon: vantIcon,
    code: {
        HTML: {
            language: 'html',
            content: ``,
            resources: []
        },
        CSS: {
            language: 'css',
            content: '',
            resources: [{
                name: 'vant',
                url: 'https://cdn.jsdelivr.net/npm/vant@2.12/lib/index.css'
            }]
        },
        JS: {
            language: 'javascript',
            content: `// 在 #app 标签下渲染一个按钮组件
new Vue({
    el: '#app',
    template: '<van-button>按钮</van-button>',
});

// 调用函数组件，弹出一个 Toast
vant.Toast('提示');

// 通过 CDN 引入时不会自动注册 Lazyload 组件
// 可以通过下面的方式手动注册
Vue.use(vant.Lazyload);`,
            resources: [{
                name: 'vue',
                url: 'https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js'
            }, {
                name: 'vant',
                url: 'https://cdn.jsdelivr.net/npm/vant@2.12/lib/vant.min.js'
            }]
        },
    },
}

const css = {
    name: '好玩的CSS',
    icon: vantIcon,
    code: {
        HTML: {
            language: 'html',
            content: `<div class="sea">
            <div class="circle-wrapper">
                <div class="bubble"></div>
                <div class="submarine-wrapper">
                    <div class="submarine-body">
                        <div class="window"></div>
                        <div class="engine"></div>
                        <div class="light"></div>
                    </div>A
                    <div class="helix"></div>
                    <div class="hat">
                      <div class="leds-wrapper">
                          <div class="periscope"></div>
                          <div class="leds"></div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        <!-- Link to my website -->
        <a id="ajerez" href="http://www.ajerez.es/en/" target="_blank"><img src="https://i.imgur.com/AI4BS2I.png"/></a>`,
            resources: []
        },
        CSS: {
            language: 'sass',
            content: `$color1: #306D85;
            $color2: #D93A54;
            
            body {
                background-color: $color1;
                
            
            }
            
            *, *:before, *:after {
                box-sizing: border-box;
            }
            
            
            .sea {
                margin: 40px auto 0 auto;
                overflow: hidden;
                
                .bubble {
                    position: absolute;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background-color: lighten($color1, 25%);
                    opacity: 0.9;
                    animation: bubble1-h-movement 1s ease-in infinite, bubble1-v-movement 300ms ease-in-out infinite alternate, bubble-scale-movement 300ms ease-in-out infinite alternate;
                    
                    &:after {
                        position: absolute;
                        content: "";
                        width: 7px;
                        height: 7px;
                        border-radius: 50%;
                        background-color: lighten($color1, 25%);
                        opacity: 0.9;
                        
                    }
                    &:after {
                      top: -20;
                      left:100px;
                      width: 9px;
                      height: 9px;
                    }
                    
            
                }
                
                .circle-wrapper {
                    position: relative;
                    background: linear-gradient(darken($color1, 3%), darken($color1, 12%));
                    width:300px;
                    height:300px;
                    margin: 10px auto 0 auto;
                    overflow: hidden;
                    z-index: 0;
                    border-radius:50%;
                    padding: 0 50px 0 50px;
                    border: 6px solid lighten($color1, 10%);
                    
                }
                
                .submarine-wrapper {
                    height: 300px;
                    width: 300px;
                    padding: 30px 50px 30px 150px;
                    margin: 0 auto 0 auto;
                    animation: diving 3s ease-in-out infinite, diving-rotate 3s ease-in-out infinite;
                    
                   .submarine-body {
                       
                       width: 150px;
                       height: 80px;
                       position: absolute;
                       margin-top: 50px;
                       left: 25px;
                       background-color: $color2;
                       border-radius: 40px;
                       background: linear-gradient($color2, darken($color2, 10%));
                       
                       .light {
                            position:absolute;
                            width: 0;
                            height: 0;
                            border-style: solid;
                            border-width: 0 40px 150px 40px;
                            border-color: transparent transparent lighten($color1,5%) transparent;
                           
                            transform: rotate(-50deg);
                           top:40px;
                           left:99%;
                           
                           &:after {
                               content:"";
                               position: absolute;
                               width: 20px;
                               height:13px;
                               border-radius:5px;
                               background-color:darken($color2, 5%);
                               margin-left:-10px;
                           }
            
                       }
                       
                       .window {
                           width: 37px;
                           height: 37px;
                           position: absolute;
                           margin-top: 23px;
                           right: 18px;
                           background: linear-gradient(darken($color1, 13%), darken($color1, 18%));
                           border-radius: 50%;
                           border: 3px solid $color2;
                           
                            &:after {
                              content: "";
                              position: absolute;
                              margin-top:3px;
                              margin-left:3px;
                              width: 25px;
                              height: 25px;
                              border-radius: 50%;
                              background-color: transparent;
                              opacity:0.8;
                              border-top:3px solid white;
                              transform:rotate(-45deg); 
                            }
                       }
                       
                       .engine {
                           width: 30px;
                           height: 30px;
                           position: absolute;
                           margin-top: 32px;
                           left: 53px;
                           background-color: darken($color2, 10%);
                           border-radius: 50%;
                           border: 5px solid $color2;
                           
                           &:after, &:before {
                              position: absolute;
                              content: "";
                              border-radius: 2px;
                              background-color: white;
                              animation:spin 900ms linear infinite;
                              opacity:0.8;
                            }
                            &:after {
                              top:8px;
                              width: 20px;
                              height: 4px;
                              
                            }
                            &:before {
                              left:8px;
                              width: 4px;
                              height: 20px;
                              
                            }
                       }
                   }
                   
                    .helix {
                       width: 30px;
                       height: 70px;
                       position: absolute;
                       margin-top: 55px;
                       left:0;
                       background-color: $color2;
                       border-radius: 7px;
                       background: linear-gradient($color2, darken($color2, 10%));
                       
                        &:after {
                            content: "";
                            position: absolute;
                            margin-top:5px;
                            margin-left:7px;
                            width: 17px;
                            height: 60px;
                            border-radius: 3px;
                            background-color: transparent;
                            opacity:0.8;
                            background: linear-gradient(
                              to bottom,
                              $color2,
                              $color2 50%,
                              lighten($color2, 15%) 50%,
                              lighten($color2, 15%)
                            );
                            background-size: 100% 20px;
                            animation:helix-movement 110ms linear infinite;
            
                        }
                    }
                    
                    
                    .hat {
                       width: 65px;
                       height: 25px;
                       position: absolute;
                       margin-top: 26px;
                       left:70px;
                       background-color: $color2;
                       border-radius: 10px 10px 0 0;
                       background: linear-gradient($color2, darken($color2, 3%));
                       
                        .periscope {
                            position: absolute;
                            width: 7px;
                            height: 20px;
                            background-color: $color2;
                            margin-top: -27px;
                            margin-left:32px;
                            border-radius:5px 5px 0 0;
                            
                            &:after, &:before {
                                content: "";
                                position: absolute;
                                width: 15px;
                                height: 7px;
                                border-radius: 5px;
                                background-color: $color2;
                            }
                        }
                        
                        .leds-wrapper {
                           width: 53px;
                           height: 13px;
                           position: relative;
                           top:7px;
                           left:7px;
                           background-color: $color2;
                           border-radius: 10px;
                           background: linear-gradient(darken($color2, 12%), darken($color2, 16%));
                            
                            .leds {
                                position: absolute;
                                margin-top:4px;
                                margin-left:7px;
                                width: 5px;
                                height: 5px;
                                border-radius: 50%;
                                background-color: white;
                                animation:leds-off 500ms linear infinite;
            
                                &:after, &:before {
                                    content: "";
                                    position: absolute;
                                    width: 5px;
                                    height: 5px;
                                    border-radius: 50%;
                                    background-color: white;
                                }
                                &:after {
                                    margin-top:0px;
                                    margin-left:17px;
                                }
                                &:before {
                                    margin-top:0px;
                                    margin-left:34px;
                                }
                            }
                        }
                    }
                    
                    
                }
            }
            
            
            @keyframes spin { 
                100% { 
                    transform:rotate(360deg); 
                } 
            }
            
            @keyframes leds-off { 
                100% { 
                    opacity:0.3;
                } 
            }
            
            @keyframes helix-movement {
                100% {
                    background: linear-gradient(
                      to bottom,
                      lighten($color2, 15%) 50%,
                      lighten($color2, 15%),
                      $color2,
                      $color2 50%
                    );
                    background-size: 100% 20px;
                }
            }
            
            
            @keyframes diving {
                0% {
                     margin-top:5px;
                }
                50% {
                     margin-top:15px;
                }
                
                100% {
                     margin-top:5px;
                }
            }
            
            @keyframes diving-rotate {
                0% {
                     transform:rotate(0deg); 
                }
                50% {
                     transform:rotate(3deg); 
                }
                75% {
                    transform:rotate(-2deg); 
                }
                100% {
                    transform:rotate(0deg); 
                }
            }
            
                @keyframes bubble1-h-movement {
                  0% { 
                      margin-left: 80%;
                  }
                  100% { 
                       margin-left: -100%; 
                  }
                }	
            
                @keyframes bubble2-h-movement {
                  0% { 
                      margin-left: 65%;
                  }
                  100% { 
                       margin-left: -5%; 
                  }
                }
            
                @keyframes bubble1-v-movement {
                  0% { 
                      margin-top: 115px; 
                  }
                  100% { 
                      margin-top:160px; 
                  }
                }
                
                @keyframes bubble2-v-movement {
                  0% { 
                      margin-top: 115px; 
                  }
                  100% { 
                      margin-top:90px; 
                  }
                }
            
                @keyframes bubble-scale-movement {
                  0% { 
                      transform: scale(1.4);
                  }
                  100% { 
                      transform: scale(0.9);
                  }
                }
            
                @keyframes light-movement {
                  0% { 
                      transform: rotate(-40deg);
                  }
                  50% {
                      transform: rotate(-70deg);
                  }
                  100% { 
                      transform: rotate(-40deg);
                  }
                }`,
            resources: [{
                name: 'vant',
                url: 'https://cdn.jsdelivr.net/npm/vant@2.12/lib/index.css'
            }]
        },
        JS: {
            language: 'javascript',
            content: ``,
            resources: []
        },
    },
}



/** 
 * javascript comment 
 * @Author: barryzhang 
 * @Date: 2021-05-14 10:47:23 
 * @Desc: 模板列表 
 */
const templateList = [
    vue3,
    vue2,
    react,
    vhtmlForm,
    elementPlus,
    elementUi,
    openLayers,
    eCharts,
    g2,
    vant,
    css
]

export default templateList