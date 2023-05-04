import { App } from 'vue'
import registerElement from './register-element' // 全局的element组件
import registerProperties from './register-properties' // 全局的过滤器filters

export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerProperties)
}
