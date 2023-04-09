import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
// import * as ElementPlusIconsVue from 'element-plus/lib/el-icon/'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElFooter,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElIcon,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
