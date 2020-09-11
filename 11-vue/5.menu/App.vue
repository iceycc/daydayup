<template>
  <div>
    <Menu :data="data"></Menu>
    <!-- <zf-menu>
          里面有两部分 一部分是标题 另一部分是标题展开的内容
          v-slot

          数据驱动视图
          <zf-submenu>
              <template slot="title">导航一</template>
               <zf-submenu >
                   <template slot="title">导航一.1</template>
                    <zf-menu-item>选项1-2</zf-menu-item>
                    <zf-menu-item>选项1-3</zf-menu-item>
               </zf-submenu>
              <zf-menu-item >选项1-2</zf-menu-item>
              <zf-menu-item>选项1-3</zf-menu-item>
          </zf-submenu>
          <zf-menu-item>导航二</zf-menu-item>
          <zf-menu-item>导航三</zf-menu-item>
    </zf-menu>-->
    <!-- <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-submenu index="1-1">
          <template slot="title">选项1-1</template>
          <el-menu-item index="1-1-1">选项1-1-1</el-menu-item>
          <el-menu-item index="1-1-2">选项1-1-2</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-2">选项1-2</el-menu-item>
        <el-menu-item index="1-3">选项1-3</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
      <el-menu-item index="4">导航四</el-menu-item>
    </el-menu>-->
  </div>
</template>
<script>
import zfMenu from "./components/zf-menu";
import zfMenuItem from "./components/zf-menu-item";
import zfSubmenu from "./components/zf-submenu";
import Menu from "./menu";
export default {
  data() {
    return {
      data: [
        {
          name: "导航一",
          id: 1,
          children: [
            {
              name: "导航1.1",
              id: 1.1,
              children: [
                { name: "导航1.1.1", id: 1.3 },
                {
                  name: "导航1.1.1",
                  id: 1.4,
                  children: [
                    { name: "导航1.1.5", id: 1.5 },
                    { name: "导航1.1.6", id: 1.6 }
                  ]
                }
              ]
            },
            { name: "导航1.2", id: 1.2 }
          ]
        },
        { name: "导航二", id: 2 },
        { name: "导航三", id: 3 },
        { name: "导航三", id: 4 }
      ]
    };
  },
  components: {
    zfMenu,
    Menu,
    zfMenuItem,
    zfSubmenu
  }
};
</script>
