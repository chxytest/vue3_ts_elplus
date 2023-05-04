import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App): void {
  // 注册全局属性filters
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
      // return '2023-05-04 11:50:00'
    }
  }
}
