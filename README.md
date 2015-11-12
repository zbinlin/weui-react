**开发中**

## Develop

   ``` bash
   git clone https://github.com/zbinlin/weui-react`
   cd weui-react
   npm install
   npm run build-lib && npm run serve
   ```


## Components

### Button

themes: primary-btn warning-btn default-btn | primary-outline warning-outline default-outline
sizes: medium small
states: disabled


## 疑难杂症

* jest 里需要测试的组件需要以 require 来引入，不能使用 import

* jest 的 require 被重写了，导致通过 require.extensions 的 hook 方式失效，这里
  可通过 jest 提供的 scriptPreprocessor 引入脚本来处理。
