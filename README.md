# WeUI React Component

**非官方**

![https://live-demo.github.io/weui-react/index.html](https://live-demo.github.io/weui-react/qrcode.png)

<https://live-demo.github.io/weui-react/qrcode.png>


## Usage

```
npm install --save weui-react-component
```

**注意：**
由于在 `weui-react-component` 里使用了 `Promise`，因此在不支持 ES6 Promise 的平
台需要引入 Promise 的 polyfill（如 es6-promise 或 babel-polyfill）


## Components

### Button

Button 目录有三种类型的组件：PrimaryButton（primary-btn）、WarningButton（warning-btn）、
DefaultButton（default-btn），可以通过两种方式引入：

1. 直接引入相应的组件：

 ```js
 import { PrimaryButton, WarningButton, DefaultButton } from "weui-react-component";

 ...
 <PrimaryButton>这是一个 primary 按钮</PrimaryButton>
 <WarningButton>这是一个 warning 按钮</WarningButton>
 <DefaultButton>这是一个 default 按钮</DefaultButton>
 ...
 ```
2. 通过设置 Button 组件的 is 属性（默认 primary-btn）：

 ```js
 import { Button } from "weui-react-component";

 ...
 <Button>这是一个 primary 按钮</Button>
 <Button is="primary-btn">这是一个 primary 按钮</Button>
 <Button is="warning-btn">这是一个 warning 按钮</Button>
 <Button is="default-btn">这是一个 default 按钮</Button>
 ...
 ```

**props:**
* `outline`: {boolean} - 设置该属性后，其背景颜色将变成透明
* `size`: {string}
  - `small` - 小按钮（inline-block）
* `disabled`: {boolean} - 设置该属性后，其按钮变灰


### Cell

在 Cell 这个类别里，有以下这些组件：

Cells（CellGroup）、Cell、Link、Input、Checkbox、Radio、Select、Switch、Textarea、Tips，
除了 Tips，其他的组件都应该在 Cells 组件里面。

#### Cells 组件

alias `CellGroup`

```js
import { Cells } from "weui-react-component";

...
<Cells>
    <Cell>这是一个说明</Cell>
    ...
    <Cell>这是一个说明</Cell>
</Cells>
```

#### Cell 组件

```js
import { Cell } from "weui-react-component";

...
<Cell>这是一个说明</Cell>
```
**props:**

* `header`: {string | ReactElement}
* `footer`: {string | ReactElement}


#### Link 组件

```js
import { Link } from "weui-react-component";

...
<Link href="...">这是一个链接</Link>
...
```
like as `<a href="...">这是一个链接</a>`

* `header`: {string | ReactElement}

* `footer`: {string | ReactElement}


#### Input 组件

```js
import { Input } from "weui-react-component";

...
<Input label="Description" />
...
```
like as `<label>Description</label><input type="text">`

**props:**

* `label`: {string}


#### Checkbox 组件

```js
import { Checkbox } from "weui-react-component";

...
<Checkbox>Description</Checkbox>
...
```
like as `<label>Description></label><input type="checkbox">`

**props:**

* `label`: {string}
* `checked`: {boolean}
* `defaultChecked`: {boolean}

#### Radio 组件

```js
import { Radio } from "weui-react-component";

...
<Radio>Description</Radio>
...
```
like as `<label>Description></label><input type="radio">`


#### Select 组件

```js
import { Select } from "weui-react-component";

...
<Select options={["opt1", "opt2", "opt3"]}>Description</Select>
...
```
like as
```html
<label>Description</label>
<select>
    <option>opt1</option>
    <option>opt2</option>
    <option>opt3</option>
</select>
```

**props**

* `header`: {string | ReactElement}
* `label`: {string}


#### Switch 组件

```js
import { Switch } from "weui-react-component";

...
<Switch>Description</Switch>
...
```

**props:**

* `checked`: {boolean}
* `defaultChecked`: {boolean}


#### Textarea 组件

```js
import { Textarea } from "weui-react-component";

...
<Textarea value="..." />
...
```

**props:**

* `value`: {string}



#### Tips 组件

```js
import { Tips } from "weui-react-component";

...
<Tips>tips</Tips>
...
```


### Toast

#### Toast 组件

```js
import { Toast } from "weui-react-component";

...
<Toast icon={...}>已完成</Toast>
```

**props:**

* `open`: {boolean}


#### Loading 组件

```js
import { Loading } from "weui-react-component";

...
<Loading>加载中...</Loading>
...
```

**props:**

* `open`: {boolean}


### Dialog

#### Alert 组件

```js
import { Alert } from "weui-react-component";

...
<Alert title="这是标题" onConfirm={...}>内容...</Alert>
...
```

**props:**

* `title`: {string}
* `open`: {boolean}
* `onConfirm`: {Function}



#### Confirm 组件

```js
import { Confirm } from "weui-react-component";

...
<Confirm title="这是标题" onConfirm={...} onCancel={...}>内容...</Confirm>
...
```

**props**

* `title`: {string}
* `open`: {boolean}
* `onConfirm`: {Function}
* `onCancel`: {Function}


### Progress

```js
import { Progress } from "weui-react-component";

...
<Progress value={0} max={100} onCancel={...} />
...
```

**props:**

* `value`: {number}
* `max`: {number}
* `onCancel`: {Function}
* `canceled`: {boolean}


### Msg Page

```js
import { Msg } from "weui-react-component";

...
<Msg title="这是标题" icon={<img src="..." alt="图标" />}
     onConfirm={...}
     onCancel={...}>
    <p>内容详情...</p>
</Msg>
...
```

**props:**

* `title`: {string}
* `icon`: {ReactElement}
* `more`: {string} - URL
* `onConfirm`: {Function}
* `onCancel`: {Function}


### Article

```js
import { Article } from "weui-react-component";

...
<Article>
    <h1>大标题</h1>
    <section>
        <h2>章标题</h2>
        <section>
            <h3>1.1 节标题</h3>
            <p>xxxxxxxxxxx</p>
        </section>
    </section>
</Article>
...
```


### ActionSheet

```js
import { ActionSheet } from "weui-react-component";

...
<ActionSheet items=["Item1", "Item2", "Item3"] />
...
```

**props:**

* `items`: {string[]}
* `onClick`: {`(() => Promise<any>, () => Promise) => void`}

  ```js
  onClick = function (getValue, cleanup) {
     getValue().then(function (val) {
         // val
         return cleanup();
     }).then(function () {
         // done
     });
  }
  ```
* `onCancel`: {`(() => Promise) => void`}

  ```js
  onCancel = function (cleanup) {
     cleanup().then(function () {
         // done
     });
  }
  ```

### Icons

```js
import { Icon } from "weui-react-component";

...
<Icon type="success" />
...
```

**props:**

* `type`: {string} - one of (blank, circle, download, info, safe-success, safe-warning,
 success, success-circle, success-no-circle, waiting, info-circle, cancle)


## Develop

``` bash
git clone https://github.com/zbinlin/weui-react
cd weui-react
npm install
npm run build-lib && npm run build-watch &
npm run serve
```

### Notes

* jest 里需要测试的组件需要以 require 来引入，不能使用 import

* jest 的 require 被重写了，导致通过 require.extensions 的 hook 方式失效，这里
  可通过 jest 提供的 scriptPreprocessor 引入脚本来处理。
