# js-contacts

## 真机还全是问题 需要解决
## 真机还全是问题 需要解决
## 真机还全是问题 需要解决

## 介绍

JS仿通讯录首字母快速选择效果，无三方依赖

使用数据的首字母分组并生成快捷导航，方便快速选中需要的结果。

![js-contacts](https://lljj-xxxx.oss-cn-hongkong.aliyuncs.com/js-contacts.gif)

## 使用方法

### 安装

```
## npm
npm install --save js-contacts

## yarn
yarn add js-contacts
```

### 使用
```js
import Contacts from 'js-contacts';
const instance = new Contacts({
    target: '.js_targetSelect', // 需要放置的容器位置
    data: {
        allList: [], // 所有数据
        hotList: [] // 热门数据
    },
    onSelect(value) {
        console.log(`当前选中：[${value}]`);
    }
});
```

### 运行Demo
```
yarn install
yarn demo:dev
```
Demo文件：https://github.com/lljj-x/js-contacts/blob/main/packages/demo/src/index/index.js

## 详细参数介绍

所有参数如下：
```js
    const contactsInstance = new Contacts({
        target: '.js_targetSelect', // 需要放置的目标位置
        containerHeight: '70vh', // 默认 60vh
        navModel: 'scroll', // 浏览器滚动条

        hotLetter: '#',
        hotName: '推荐',
        showSearch: true, // 是否显示搜索
        curSelect: 'IT',
        indicatorDuration: 2000, // 指示器显示时间
        data: {
            // 可以传入select dom节点
            selectDom: '.js_countrySelect',

            // 或者传入json数据
            allList: [],
            hotList: [] // 不是必须，如果需要置顶的hot数据
        },
        onSelect(value) {
            console.log(`当前选中：[${value}]`);
        },
        onScrollToAnchorPoint(target) {
            console.log(target);
        }
    });
    // 完全销毁实例
    contactsInstance.destroy();
```

### target
* required
* 生成的通讯录选择器需要放置的目标容器，可以是 `HTMLElement` 或者 `seleceor 字符串`

### data
* required
配置数据源，支持传入json数据或者select标签自动获取数据

### json格式
* `value`： 表示当前项的值
* `label`： 表示当前项显示文本
* `groupKey`： `非必须` 用于在数据做首字母分组时使用，如果不传则直接使用 `label` 首字母做分组，主要可以解决在非英语的环境下做英文字母分组。

如下：

```js
const allList = [
    {value: 'AX', label: 'Aland Island', groupKey: 'Aland Island' },
    { value: 'AL', label: 'Albania', groupKey: 'Albania' }
];
const hotList = [
    {value: 'AX', label: 'Aland Island', groupKey: 'Aland Island' }
];

// data 参数
data: {
     allList,
     hotList
}
```

### select标签格式
如果使用 select 标签，内部也会转换为如上的json格式。对应规则如下：

* `data-type`：`hot` 表示hot数据，对应`hotList`；`all` 对应`allList`；如果不配置hot，则所有的option都会处理为 `allList`
* `data-group-key`：表示分组key，对应 `groupKey`
* `option value`：表示值，对应 `value`
* `option 内容`：表示显示文本，对应 `label`

```html
<select class="js_countrySelect countrySelect">
	<optgroup label="热门国家" data-type="hot">
		<option value="BR">Brazil</option>
	</optgroup>
	<optgroup label="所有国家" data-type="all">
		<option value="AX" data-group-key="xxx">Aland Island</option>
		<option value="AL">Albania</option>
	</optgroup>
</select>
```

```js
// data 参数
data: {
    selectDom: '.js_countrySelect' // 可以传入select dom节点
}
```

> 数据分组时，只是对 allList 做分组，hotList独立一组数据并置于最前。hotList非必须

### curSelect
* 当前选中的值，用于设置默认选中的值

### containerHeight
* 默认：`60vh`
* 生成的通讯录选择器高度，不支持百分比单位，比如`100%`

### navModel
* 默认：`scroll`
* 取值：`scroll`、`touchmove`
* 导航模式，右侧快捷选择导航使用模式，`scroll` 浏览器滚动模式，`touchmove` touchmove 滑动模式

### showSearch
* 默认：true
* 是否显示搜索框

### indicatorDuration
* 默认：`2000`
* 快捷选择指示器tips显示时间（ms）

### hotLetter
* 默认：`#`,
* 热门数据右侧快捷导航条显示文案

### hotName
* 默认：`推荐`
* 热门数据分组名称

### onSelect
* 回调方法 - 选中数据时触发
* 参数：当前选中的值
```js
{
    ...,
    onSelect(value) {
        console.log(`当前选中：[${value}]`);
    }
}
```

### onScrollToAnchorPoint
* 回调方法 - 右侧快捷导航点击时触发
* 参数：当前点击的元素
```js
{
    ...,
    onScrollToAnchorPoint(target) {
        console.log(target);
    }
}
```





## 兼容性
内部使用 `Object.assign` 等es6 api，需要自行垫片或者通过babel处理

## License
MIT
