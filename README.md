# icons-vue3
一款基于[fontawesome](https://fontawesome.com/) 免费版icon的vue3.0 icons库

本项目暂时只支持es6模块

## 安装
```
npm install @wing-ui/icons-vue3
```
or

```
yarn add @wing-ui/icons-vue3
```

## 使用
首先在[fontawesome](https://fontawesome.com/icons?d=gallery&m=free) 的页面找到想要的icon名称，下面以`angle-left` 为例

然后在Vue文件中引入组件以及css文件（注意组件名要转换为驼峰命名）：
```vue
<script>
import AngleLeft from '@wing-ui/icons-vue3/lib/AngleLeft'
import '@wing-ui/icons-vue3/lib/icon.css'

export default {
  components: {
    AngleLeft
  }
}
</script>
```

其中上面的css文件可以选择项目入口处引入，这样就可以避免多次引入的麻烦
