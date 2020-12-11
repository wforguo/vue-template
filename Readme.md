# app

> 云上

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```


## 适配

### lib-flexible

> https://github.com/amfe/lib-flexible

### postcss-pxtorem

> https://github.com/cuth/postcss-pxtorem

- 安装

```bash
npm install postcss-pxtorem -D
```

- 配置

编辑`postcss.config.js`，添加

项目中使用设计稿宽度：750px

```javascript
module.exports = {
    plugins: {
        autoprefixer: {},
        // +
        'postcss-pxtorem': {
            rootValue: 75,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
            propList: ['*']
        }
        // +
    }
}
```

-  忽略转换

```less

// `px` is converted to `rem`
.convert {
    font-size: 16px; // converted to 1rem
}

// `Px` or `PX` is ignored by `postcss-pxtorem` but still accepted by browsers
.ignore {
    border: 1Px solid; // ignored
    border-width: 2PX; // ignored
}
```

## loaders

https://github.com/ConnorAtherton/loaders.css

## pace进度条

https://github.hubspot.com/pace/docs/welcome/

## 云开发

### demo

见 `pages/Intro` 页面

### 使用

- 1.修改 `cloudbaserc.js`

- 2.修改项目部署路径 `vueconfig.js`

## videojs

[https://github.com/videojs/video.js](https://github.com/videojs/video.js)

## 测试链接

- https://cloud-app.com.cn/apps/cloud-app-vue

## 路由

不能使用hash模式，云开发服务器没有做配置，刷新会出现404

如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html

[history-mode](https://router.vuejs.org/zh/guide/essentials/history-mode.html)
