<template>
  <div class="hy-table">
    <!-- 表头header -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <!-- 列表部分 -->
    <el-table
      size="mini"
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handelSelectionChange"
    >
      <el-table-column
        v-show="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-show="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 翻页部分 -->
    <div class="footer">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
// PropType
import { PropType, defineComponent } from 'vue'
export default defineComponent({
  props: {
    // 列表title
    title: {
      type: String,
      default: ''
    },
    // 列表数据
    listData: {
      type: Array,
      required: true
    },
    // 总页数
    listCount: {
      type: Number,
      default: 0
    },
    // 表头数据
    propList: {
      type: Array as PropType<any[]>,
      default() {
        return []
      },
      required: true
    },
    // 控制序号列显示
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    // 控制勾选框列显示
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    // 页数信息
    page: {
      type: Object,
      // default: () => ({ currentPage: 0, pageSize: 10 })
      default() {
        return {
          currentPage: 0,
          pageSize: 10
        }
      }
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props: any, { emit }) {
    // 勾选列表数据变化
    const handelSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    // 页面跳转
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    // 每页数量变化
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    return {
      handelSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 16px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
