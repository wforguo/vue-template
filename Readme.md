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


## 测试链接

- https://cms.forguo.cn/apps-t/science-week
