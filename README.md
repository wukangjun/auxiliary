
# 目录
- [配置gitHooks](#gitHooks)

## 配置babel环境
install
```
npm install @babel/core @babel/cli @babel/preset-env @babel/runtime --save
```
- @babel/runtime： 为了去除冗余代码,和避免和全局变量冲突
- @babel/cli: 命令行执行

配置`rollup.config.js`
```
module.exports = {
  presets: [
    [
      "@babel/preset-env"
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}
```

## <a id="gitHooks">配置gitHooks</a>
1. 下载格式化工具(`Prettier`)
```
npm install prettier --save-dev
```
2. 下载代码检查工具(`eslint`)
```
npm install eslint --save-dev
```
3. 下载`lint-staged`
```
npm install lint-staged --save-dev
```
4. 配置
```
"gitHooks": {
  "pre-commit": "lint-staged",
  "commit-msg": "node scripts/verify-commit.js"
},
"lint-staged": {
  "*.js": [
    "eslint",
    "prettier --write"
  ]
}
```


## 参考
- [rollup打包](https://segmentfault.com/a/1190000010628352)