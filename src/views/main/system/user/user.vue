<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    // const store = useStore()
    // store.dispatch('system/getPageListAction', {
    //   pageUrl: '/users/list',
    //   queryInfo: {
    //     offset: 0,
    //     size: 10
    //   }
    // })

    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    return {
      searchFormConfig,
      // userList,
      // userCount,
      contentTableConfig
    }
  }
})
</script>

<style scoped>
.content {
  padding: 10px;
  border-top: 10px solid #f5f5f5;
}
</style>
