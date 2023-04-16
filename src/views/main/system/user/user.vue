<template>
  <div class="user">
    <div class="content">
      <hy-form v-bind="searchFormConfig" v-model="formData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formData = ref({
      field: '',
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
