# WeUI React Component

**非官方**

![https://live-demo.github.io/weui-react/index.html](https://live-demo.github.io/weui-react/qrcode.png)

<https://live-demo.github.io/weui-react/qrcode.png>


## Usage

```
npm install --save weui-react-component
```

## Components

### Button

properties:
* **themes**: primary-btn warning-btn default-btn | (outline)
* **sizes**: medium(default) small
* **states**: disabled

### Cell

doc coming soon...


### Toast

doc coming soon...


### Dialog

doc coming soon...


### Progress

doc coming soon...


### Msg Page

doc coming soon...


### Article

doc coming soon...


### ActionSheet

doc coming soon...


### Icons

doc coming soon...


## Develop

``` bash
git clone https://github.com/zbinlin/weui-react`
cd weui-react
npm install
npm run build-lib && npm run serve
```

### Notes

* jest 里需要测试的组件需要以 require 来引入，不能使用 import

* jest 的 require 被重写了，导致通过 require.extensions 的 hook 方式失效，这里
  可通过 jest 提供的 scriptPreprocessor 引入脚本来处理。
