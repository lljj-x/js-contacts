/**
 * Created by Liu.Jun on 2020/11/5 11:24.
 */

import './style.css';
import {
    genId, getRealCurrentTarget, groupByLetter, querySelectorList, throttle
} from './utils';
import genTemplateHtml, { groupItemsHtml, navItemsHtml } from './template';

const hideClass = 'xx-disHide';

export default class Contacts {
    events = []

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
        searchPlaceholder: '输入搜索词', // 是否显示搜索
        showNavBar: true, // 是否显示搜索
        navModel: 'scroll', // scrollBar / touchmove
        searchVal: '', // 搜索框的关键词同步
        curSelect: '', // 当前选中的值
        indicatorDuration: 1500, // 指示器弹窗显示时间
        isDestroy: false,
        shouldObserveScroll: true, // 是否需要监听滚动事件
        shouldObserveTouchMove: false, // 是否需要监听touchmove
        touchmoveX: 0, // 兼容移除区域继续move
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
    grouping(isSearch = false) {
        // 合并hot 和所有两组数据
        const hasHot = this.options.hotList && this.options.hotList.length > 0;
        this.options.groupedList = [
            ...(hasHot && (!isSearch || this.options.searchVal === '') ? [{
                isHot: true,
                name: this.options.hotName,
                letter: this.options.hotLetter,
                value: this.options.hotList,
                anchorPoint: `${this.options.id}_${this.options.hotName}`
            }] : []),
            ...groupByLetter(this.options.allList, this.options.id, this.options.searchVal)
        ];
    }

    render() {
        const html = genTemplateHtml(this.options);
        const targetDom = querySelectorList(this.options.target)[0];
        targetDom.insertAdjacentHTML('afterbegin', html);

        this.options.targetDom = targetDom;
        this.options.scrollDom = targetDom.querySelector('.js_contactsBoxListBox');
        this.options.navBarDom = targetDom.querySelector('.js_contactsBoxKeyBar');
        this.options.indicatorDom = targetDom.querySelector('.js_indicator');
        this.bindEvent(targetDom);
    }

    toggleObserving(value) {
        this.options.shouldObserveScroll = value;
    }

    setNavBarSelect(target) {
        if (!this.options.showNavBar) return;
        const currentActiveDom = this.options.targetDom.querySelector(`.js_keyBarItem.${this.options.activeClassName}`);
        if (currentActiveDom) {
            currentActiveDom.classList.remove(this.options.activeClassName);
        }
        target.classList.add(this.options.activeClassName);
    }

    // 设置指示器弹窗
    showNavBar(target) {
        this.options.indicatorDom.innerText = target.innerText;

        this.options.indicatorDom.style.display = 'block';

        clearTimeout(this.$$indicatorTimer);
        this.$$indicatorTimer = setTimeout(() => {
            this.options.indicatorDom.style.display = 'none';
            this.$$indicatorTimer = null;
        }, this.options.indicatorDuration);
    }

    // 计算每个 section position top
    updatePosition() {
        if (!this.options.allList.length > 0) return;

        // 如果滚动容器高度没发生变化  不重新计算
        const curScrollHeight = this.options.scrollDom.scrollHeight;
        if (this.options.scrollHeight === curScrollHeight) return;

        this.options.scrollHeight = this.options.targetDom.scrollHeight;

        // 计算各个节点高度
        const groupDomList = querySelectorList('.js_contactsBoxGroup', this.options.targetDom);
        groupDomList.forEach((item, index) => {
            this.options.groupedList[index].positionTop = item.offsetTop;
        });

        // 计算 touchmoveX
        if (this.options.navModel === 'touchmove') {
            // 3 是随便加的...
            this.options.touchmoveX = this.options.navBarDom.offsetLeft + 3;
        }
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


    // 快捷导航点击事件
    handleAnchorPoint(target) {
        // 停止滚动监听
        // 优化性能，以及可能产生滚动定位计算和当前选中点的偏差
        this.toggleObserving(false);

        this.setNavBarSelect(target);
        this.showNavBar(target);

        // 通过dom 计算对应高度
        // this.options.scrollDom.scrollTop = document.getElementById(target.dataset.target).offsetTop;

        // 通过缓存的高度做计算
        const anchorPoint = target.dataset.target;
        const curSectionPosition = this.options.groupedList.find(item => item.anchorPoint === anchorPoint);
        this.options.scrollDom.scrollTop = curSectionPosition.positionTop;

        setTimeout(() => {
            this.toggleObserving(true);
        }, 16);
        this.callHook('onScrollToAnchorPoint', target);
    }

    // 列表选中事件
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

    // 滚动条滚动事件
    handleScrollChange(event) {
        if (this.isDestroy || !this.options.shouldObserveScroll) return;

        const scrollTarget = (event && event.target) || this.options.scrollDom;
        const scrollTop = Math.round(scrollTarget.scrollTop); // 有些浏览器可能不四舍五入
        const currentSection = this.getCurrentSection(scrollTop);
        if (currentSection) {
            this.setNavBarSelect(this.options.targetDom.querySelector(`.js_keyBarItem[data-target=${currentSection.anchorPoint}]`));
        }
    }

    // 搜索框change
    handleSearch(event) {
        // 更新值.
        this.options.searchVal = String(event.target.value).replace(/^\s+|\s+$/gm, '');

        this.grouping(true); // 分组
        this.options.scrollDom.innerHTML = groupItemsHtml(this.options);
        if (this.options.showNavBar) {
            this.options.navBarDom.innerHTML = navItemsHtml(this.options);
        }


        this.updatePosition();
        this.options.scrollDom.scrollTop = 0;
    }

    bindEvent(targetDom) {
        // 点击选中事件
        this.events.push({
            target: targetDom,
            eventName: 'click',
            handler: (event) => {
                getRealCurrentTarget(event.currentTarget, event.target, (t) => {
                    // 选中数据
                    if (t.className && ~t.className.indexOf('contactsBox_groupItem')) {
                        this.handleSelect(t);
                        return true;
                    }
                    return false;
                });
            }
        });

        // 容器滚动右侧定位事件
        // 不操作dom不做节流了
        this.events.push({
            target: this.options.scrollDom,
            eventName: 'scroll',
            handler: this.handleScrollChange.bind(this)
        });

        // 搜索框 input
        if (this.options.showSearch) {
            this.events.push({
                target: this.options.targetDom.querySelector('.js_contactsBoxSearchInput'),
                eventName: 'input',
                handler: throttle(this.handleSearch.bind(this), 350)
            });
        }

        // resize 判断是否需要重新计算position
        this.events.push({
            target: window,
            eventName: 'resize',
            handler: throttle(() => {
                if (this.isDestroy) return;
                this.updatePosition();
                this.handleScrollChange();
            }, 250)
        });

        // 快捷选择条事件
        if (this.options.showNavBar) {
            // 点击跳转当前锚点
            this.events.push({
                target: targetDom,
                eventName: 'touchstart',
                handler: (event) => {
                    getRealCurrentTarget(event.currentTarget, event.target, (t) => {
                        // 点击右边栏关键词
                        if (t.className && ~t.className.indexOf('js_keyBarItem')) {
                            this.handleAnchorPoint(t);
                            return true;
                        }
                        return false;
                    });
                }
            });

            if (this.options.navModel === 'touchmove') {
                // touchmove 模式，支持区域外滑动
                this.events.push({
                    target: this.options.navBarDom,
                    eventName: ['touchstart', 'touchend'],
                    handler: (event) => {
                        if (this.isDestroy) return;
                        event.preventDefault();
                        this.options.shouldObserveTouchMove = event.type === 'touchstart';
                    }
                });

                this.events.push({
                    target: this.options.targetDom,
                    eventName: 'touchmove',
                    handler: throttle((event) => {
                        if (this.isDestroy || !this.options.shouldObserveTouchMove) return;
                        event.preventDefault();
                        const target = document.elementFromPoint(this.options.touchmoveX, event.changedTouches[0].clientY);
                        if (target && target.classList && target.classList.contains('js_keyBarItem')) {
                            this.handleAnchorPoint(target);
                        }
                    }, 80)
                });
            }
        }

        // 注册事件
        this.events.forEach(({
            target, eventName, handler, useCapture = false
        } = {}) => {
            if (Array.isArray(eventName)) {
                eventName.forEach((eName) => {
                    target.addEventListener(eName, handler, useCapture);
                });
            } else {
                target.addEventListener(eventName, handler, useCapture);
            }
        });
    }

    // 销毁
    destroy() {
        this.isDestroy = true;

        // 释放计时器
        clearTimeout(this.$$indicatorTimer);

        // 释放事件
        this.events.forEach(({
            target, eventName, handler, useCapture = false
        } = {}) => {
            if (Array.isArray(eventName)) {
                eventName.forEach((eName) => {
                    target.removeEventListener(eName, handler, useCapture);
                });
            } else {
                target.removeEventListener(eventName, handler, useCapture);
            }
        });

        // 还原dom节点
        if (this.options.selectDom) this.options.selectDom.classList.remove(hideClass);
        this.options.targetDom.removeChild(this.options.targetDom.firstElementChild);

        // 释放dom等引用
        this.options = null;
        this.events.length = 0;
    }
}
