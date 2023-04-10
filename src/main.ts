import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

// import './service/axios_demo'
// import hyRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
// 先动态获取到路由再去做匹配，否则会出现刷新页面 not-found 的问题
setupStore()
app.use(router)

app.mount('#app')
