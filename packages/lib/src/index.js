/**
 * Created by Liu.Jun on 2020/11/5 11:24.
 */

import './style.css';
import {
    querySelectorList, groupByLetter, genId, getRealCurrentTarget, throttle
} from './utils';
import genTemplateHtml from './template';

const hideClass = 'xx-disHide';

export default class Contacts {
    options = {
        id: '', // 每个实例对应唯一的id
        target: '', // 需要放置的容器
        hotLetter: '#',
        hotName: 'Hot',
        hotList: [],
        allList: [],
        groupedList: [], // 处理为分组数据
        containerHeight: '60vh',
        showSearch: true, // 是否显示搜索
        navModel: 'scroll', // scrollBar / touchmove
        searchVal: '', // 搜索框的关键词同步
        curSelect: '', // 当前选中的值
        indicatorDuration: 1500, // 指示器弹窗显示时间
        isDestroy: false,
        activeClassName: 'xx-active'
    }

    constructor(options) {
        this.options.id = genId(); // 初始化id
        this.resolveData(options); // 初始化options
        this.grouping(); // 分组
        this.render(); // 渲染dom 已经绑定事件
        this.updatePosition(); // 计算每个session position
    }

    callHook(name, payload) {
        if (this.options[name]) {
            this.options[name].call(null, payload);
        }
    }

    throwError(msg) {
        // 抛出异常
        throw new Error(msg.message || msg);
    }

    // 转换Option NodeList 到 dataList
    optionNodeList2DataList(optionNodeList) {
        return [...optionNodeList].reduce((previousValue, curVal) => {
            if (curVal.value !== '') {
                const label = curVal.innerText || curVal.textContent || curVal.text;
                const groupKey = curVal.dataset.groupKey || label;
                previousValue.push({
                    value: curVal.value,
                    label,
                    groupKey,
                });
            }
            return previousValue;
        }, []);
    }

    // 根据select标签解析数据
    resolveSelectNodeData(selector) {
        const selectDom = querySelectorList(selector)[0];
        selectDom.classList.add(hideClass);
        this.options.selectDom = selectDom;

        const hotNode = selectDom.querySelector('[data-type=hot]');
        const dataOptions = Object.create(null);
        if (hotNode) {
            // hotList
            dataOptions.hotList = this.optionNodeList2DataList(hotNode.querySelectorAll('option'));

            // allList
            const allNode = selectDom.querySelector('[data-type=all]');
            if (allNode) dataOptions.allList = this.optionNodeList2DataList(allNode.querySelectorAll('option'));
        } else {
            dataOptions.allList = this.optionNodeList2DataList(selectDom.querySelectorAll('option'));
        }
        return dataOptions;
    }

    resolveData(options) {
        // 处理参数
        const { data, ...args } = options;
        if (!data) this.throwError('构造函数参数必须包含 [data] 属性');

        if (data.selectDom) {
            const dataOptions = this.resolveSelectNodeData(data.selectDom);
            Object.assign(this.options, args, dataOptions);
        } else {
            if (!data.allList) {
                this.throwError('构造函数参数data属性必须包含 [selectDom] 或者 [allList]');
            }
            Object.assign(this.options, args, data);
        }
    }

    // 对数据按首字母分组
    grouping() {
        // 合并hot 和所有两组数据
        const hasHot = this.options.hotList && this.options.hotList.length > 0;
        this.options.groupedList = [
            ...(hasHot ? [{
                isHot: true,
                name: this.options.hotName,
                letter: this.options.hotLetter,
                value: this.options.hotList,
                anchorPoint: `${this.options.id}_${this.options.hotName}`
            }] : []),
            ...groupByLetter(this.options.allList, this.options.id)
        ];
    }

    render() {
        const html = genTemplateHtml(this.options);
        const targetDom = querySelectorList(this.options.target)[0];
        targetDom.insertAdjacentHTML('afterbegin', html);

        this.options.targetDom = targetDom;
        this.options.scrollDom = targetDom.querySelector('.js_contactsBoxListBox');
        this.options.indicatorDom = targetDom.querySelector('.js_indicator');
        this.bindEvent(targetDom);
    }

    setKeyBarSelect(target) {
        const currentActiveDom = this.options.targetDom.querySelector(`.js_keyBarItem.${this.options.activeClassName}`);
        if (currentActiveDom) {
            currentActiveDom.classList.remove(this.options.activeClassName);
        }
        target.classList.add(this.options.activeClassName);
    }

    // 设置指示器弹窗
    handleIndicator(target) {
        this.options.indicatorDom.innerText = target.innerText;

        this.options.indicatorDom.style.display = 'block';

        clearTimeout(this.$$indicatorTimer);
        this.$$indicatorTimer = setTimeout(() => {
            this.options.indicatorDom.style.display = 'none';
            this.$$indicatorTimer = null;
        }, this.options.indicatorDuration);
    }

    handleAnchorPoint(target) {
        this.setKeyBarSelect(target);
        this.handleIndicator(target);

        // 通过dom 计算对应高度
        // scrollDom.scrollTop = document.getElementById(target.dataset.target).offsetTop;

        // 通过缓存的高度做计算
        const anchorPoint = target.dataset.target;
        const curSectionPosition = this.options.groupedList.find(item => item.anchorPoint === anchorPoint);
        this.options.scrollDom.scrollTop = curSectionPosition.positionTop;

        this.callHook('onScrollToAnchorPoint', target);
    }

    handleSelect(target) {
        // 移除已选中
        const currentActiveList = querySelectorList(`.js_contactsBoxGroupItem.${this.options.activeClassName}`, this.options.targetDom);
        currentActiveList.forEach(item => item.classList.remove(this.options.activeClassName));

        // 选中新的值，可能多选
        const curSelect = target.dataset.value;
        const selectList = querySelectorList(`.js_contactsBoxGroupItem[data-value=${target.dataset.value}]`, this.options.targetDom);
        selectList.forEach(item => item.classList.add(this.options.activeClassName));

        this.options.curSelect = curSelect;
        this.callHook('onSelect', curSelect);
    }

    // 计算每个 section position top
    updatePosition() {
        if (!this.options.allList.length > 0) return;

        // 直接根据数据条数来计算了，不去递归dom节点
        const titleHeight = this.options.targetDom.querySelector('.js_contactsBoxGroupTitle').offsetHeight;
        const itemHeight = this.options.targetDom.querySelector('.js_contactsBoxGroupItem').offsetHeight;

        // 高度不变 不需要重新计算
        if (this.options.titleHeight === titleHeight && this.options.itemHeight === itemHeight) return;

        this.options.titleHeight = titleHeight;
        this.options.itemHeight = itemHeight;

        this.options.groupedList.forEach((curItem, curIndex) => {
            const prevItem = this.options.groupedList[curIndex - 1];
            curItem.positionTop = prevItem ? (titleHeight + (prevItem.value.length) * itemHeight + prevItem.positionTop) : 0;
        });
    }

    getCurrentSection(scrollTop) {
        for (let i = this.options.groupedList.length - 1; i >= 0; i -= 1) {
            const cur = this.options.groupedList[i];
            if (cur.positionTop <= scrollTop) {
                return cur;
            }
        }
        return this.options.groupedList[this.options.groupedList.length - 1];
    }

    scrollChange(event) {
        if (this.isDestroy) return;
        const scrollTarget = (event && event.target) || this.options.scrollDom;
        const scrollTop = scrollTarget.scrollTop;
        const currentSection = this.getCurrentSection(scrollTop);

        this.setKeyBarSelect(this.options.targetDom.querySelector(`.js_keyBarItem[data-target=${currentSection.anchorPoint}]`));
    }

    bindEvent(targetDom) {
        // 点击事件委托
        this.$$clickEvent = (event) => {
            getRealCurrentTarget(event.currentTarget, event.target, (t) => {
                // 点击右边栏关键词
                if (t.className && ~t.className.indexOf('js_keyBarItem')) {
                    this.handleAnchorPoint(t);
                    return true;
                }

                // 选中数据
                if (t.className && ~t.className.indexOf('contactsBox_groupItem')) {
                    this.handleSelect(t);
                    return true;
                }

                return false;
            });
        };
        targetDom.addEventListener('click', this.$$clickEvent, false);

        // 滚动定位
        this.$$scrollEvent = throttle(this.scrollChange.bind(this), 250);
        this.options.scrollDom.addEventListener('scroll', this.$$scrollEvent, false);

        // resize
        this.$$resizeEvent = throttle(() => {
            if (this.isDestroy) return;
            this.updatePosition();
            this.scrollChange();
        }, 250);
        window.addEventListener('resize', this.$$resizeEvent, false);


        // 搜索框逻辑处理

        // touchMove
        if (this.options.navModel === 'touchmove') {
            this.$$touchEvent = throttle((event) => {
                if (this.isDestroy) return;
                event.preventDefault();
                const target = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                if (target && target.classList && target.classList.contains('js_keyBarItem')) {
                    this.handleAnchorPoint(target);
                }
            }, 100);
            const keyBarDom = this.options.targetDom.querySelector('.js_contactsBoxKeyBar');
            keyBarDom.addEventListener('touchstart', this.$$touchEvent, false);
            keyBarDom.addEventListener('touchmove', this.$$touchEvent, false);
        }
    }

    // 销毁
    destroy() {
        this.isDestroy = true;

        // 释放计时器
        clearTimeout(this.$$indicatorTimer);

        // 释放事件
        this.options.targetDom.removeEventListener('click', this.$$clickEvent, false);
        this.options.scrollDom.removeEventListener('scroll', this.$$scrollEvent, false);
        const keyBarDom = this.options.targetDom.querySelector('.js_contactsBoxKeyBar');
        keyBarDom.removeEventListener('touchstart', this.$$touchEvent, false);
        keyBarDom.removeEventListener('touchmove', this.$$touchEvent, false);
        window.removeEventListener('resize', this.$$resizeEvent, false);

        this.$$clickEvent = null;
        this.$$scrollEvent = null;
        this.$$touchEvent = null;
        this.$$resizeEvent = null;

        // 还原dom节点
        if (this.options.selectDom) this.options.selectDom.classList.remove(hideClass);
        this.options.targetDom.removeChild(this.options.targetDom.firstElementChild);

        // 释放dom等引用
        this.options = null;
    }
}
