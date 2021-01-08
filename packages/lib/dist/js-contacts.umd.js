/** @license js-contacts (c) 2020-2021 Liu.Jun License: MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['js-contacts'] = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".xx-disHide{display:none!important}.contactsBox{position:relative;background:#fff}.contactsBox .c-search-icon{display:inline-block;width:.6667rem;height:.6667rem;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAMAAABpN6nPAAAAdVBMVEUAAAC6urqsrKy6urq7u7u7u7u6urq7u7u7u7u6urq6urq8vLy8vLy6urq6urq7u7u7u7u6urq6urq7u7u7u7u7u7u9vb26urq6urq7u7u6urq6urq6urq6urq7u7u8vLy7u7u6urq7u7u6urq7u7u9vb26uro15wGBAAAAJnRSTlMA7QX4rH0WEGz72VQ38+fRlYxpRz4yB8axc52bh3lhWxzhoU4pH65UEgAAAAEaSURBVEjH7ZXLGoIgEIUBJbyVqZl2v/P+jxhjLFSEYr6WnuWBH4YZGMisP2vD24TGAc3DXf0b8SpWsqfkJL4ii3UsR1ryrZtJqZxQkrmYo+xE7+dasO0ii8KgM4KzndlL0K3shSP4Z++djSlgNOZs6IpDR1n2SmFstTEHLkuIsJ7MG8RBn1NDFZwsZ8TUGpazpOkilSLTvwau4+4hcnMrDvVg1prDsVLDzpVb9g0z+NBYCrIt7FAGWTISpMyGOAS5vY68UnkHF9SoCeManpR3dEGtmvBAQajwUInApBxVXNQ1Ql1YzNNAPULMc0c0lob5tjBQyDybpab82nKhKb8PINKU11djo9yfmqY48ZGmWoKgUuKrqqjIrIHeA6M7aFBCwYoAAAAASUVORK5CYII=\");background-size:.6667rem;background-repeat:no-repeat;background-position:50%;vertical-align:top}.contactsBox_search{position:relative;padding:.2667rem}.contactsBox_searchIcon{position:absolute;left:.4rem;top:.3733rem}.contactsBox_searchInput{display:block;width:100%;box-sizing:border-box!important;line-height:.4rem;padding:.2667rem .2667rem .2667rem .9333rem;font-size:14px;border:none;outline:none;background:#f2f2f2;border-radius:4px;-webkit-transition:box-shadow .4s ease;transition:box-shadow .4s ease}.contactsBox_searchInput::-webkit-input-placeholder{color:#bababa}.contactsBox_searchInput::placeholder{color:#bababa}.contactsBox_searchInput:focus{box-shadow:0 0 .04rem 0 rgba(0,0,0,.1)}.contactsBox_content{position:relative;height:100%}.hasSearchInput .contactsBox_content{height:auto}.contactsBox_listBox{overflow:auto;padding:0;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}.contactsBox_groupTitle{margin:0;position:-webkit-sticky;position:sticky;top:0;padding:0 .2667rem;font-size:14px;font-weight:700;color:#000;line-height:1.0667rem;background:#e5e5e5}.contactsBox_groupItem{padding:0 .8rem 0 .2667rem}.contactsBox_groupItem:active{background-color:#efefef}.contactsBox_groupItem.xx-active .contactsBox_groupLabel{color:#ff8a00}.contactsBox_groupItem .contactsBox_groupLabel{display:block;font-size:14px;color:#000;line-height:1.28rem;border-bottom:.5px solid #eee}.contactsBox_keyBar{box-sizing:border-box!important;position:absolute;padding:.2667rem .0533rem .2667rem 0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:0;color:#007aff;max-height:100%}.contactsBox_keyBar>span{box-sizing:content-box;display:block;width:.48rem;line-height:.48rem;border-radius:50%;font-size:.32rem;text-align:center}.contactsBox_keyBar>span.xx-active{background:#007aff;color:#fff}.contactsBox_keyBar.contactsBox_keyBar-scroll{overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}.contactsBox_keyBar.contactsBox_keyBar-touchmove>span{width:1.8vh;line-height:1.8vh;padding:.0533rem}.contactsBox_indicator{position:absolute;width:1.1733rem;height:1.1733rem;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;line-height:1.1733rem;background-color:#666;border-radius:.2133rem;color:#fff;font-size:17px}";
  styleInject(css_248z);

  /**
   * Created by Liu.Jun on 2020/11/5 15:24.
   */
  function isString(str) {
    return String(str) === str;
  }

  function genIdFn() {
    var preKey = "".concat(+new Date());
    var key = 0;
    return function () {
      var curTimestamp = "".concat(+new Date());

      if (curTimestamp === preKey) {
        key += 1;
      } else {
        // 重置 key
        key = 0;
      }

      preKey = curTimestamp;
      return "lj".concat(preKey, "x").concat(key);
    };
  } // 只保证同时生成不重复


  var genId = genIdFn(); // 委托事件判断target

  function getRealCurrentTarget(currentTarget, target, validFn) {
    while (target) {
      if (validFn(target)) {
        return target;
      }

      if (target === currentTarget || target.parentNode === currentTarget) {
        break;
      } else {
        target = target.parentNode;
      }
    }

    return null;
  } // 返回普通数组

  function querySelectorList(selector) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (selector instanceof NodeList) {
      return Array.from(selector);
    }

    if (selector instanceof HTMLElement) {
      return [selector];
    }

    if (isString(selector)) {
      return Array.from(parent.querySelectorAll(selector));
    }

    throw new Error('请传入一个正确的选择器');
  } // 通过首字母对数据分组 数据分组

  function groupByLetter(data, searchVal) {
    var tempCache = Object.create(null);
    return data.reduce(function (preVal, curVal) {
      // 过滤搜索数据
      if (searchVal !== '' && !~curVal.label.toLocaleUpperCase().indexOf(searchVal.toLocaleUpperCase())) return preVal;
      var letter = String((curVal.groupKey || curVal.label)[0]).toLocaleUpperCase();

      if (tempCache[letter] !== undefined) {
        preVal[tempCache[letter]].value.push(curVal);
      } else {
        tempCache[letter] = preVal.length;
        preVal.push({
          name: letter,
          letter: letter,
          value: [curVal],
          anchorPoint: genId()
        });
      }

      return preVal;
    }, []);
  }
  function throttle(func, wait, ops) {
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    var options = Object.assign({}, ops);

    var later = function later() {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);

      if (!timeout) {
        context = null;
        args = null;
      }
    };

    return function fn() {
      var now = Date.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;

      for (var _len = arguments.length, reArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        reArgs[_key] = arguments[_key];
      }

      args = reArgs;

      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }

        previous = now;
        result = func.apply(context, args);

        if (!timeout) {
          context = null;
          args = null;
        }
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    };
  }
  function handleEvents(events) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'addEventListener';
    // 注册事件
    events.forEach(function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          target = _ref.target,
          eventName = _ref.eventName,
          handler = _ref.handler,
          _ref$useCapture = _ref.useCapture,
          useCapture = _ref$useCapture === void 0 ? false : _ref$useCapture;

      if (Array.isArray(eventName)) {
        eventName.forEach(function (eName) {
          target[type](eName, handler, useCapture);
        });
      } else {
        target[type](eventName, handler, useCapture);
      }
    });
  }

  /**
   * Created by Liu.Jun on 2020/11/5 17:46.
   */
  // nav items
  function navItemsHtml(options) {
    return options.groupedList.map(function (item, index) {
      return "\n        <span data-target=\"".concat(item.anchorPoint, "\" class=\"js_keyBarItem ").concat(index === 0 ? options.activeClassName : '', "\">").concat(item.letter, "</span>\n    ");
    }).join('');
  } // group items

  function groupItemsHtml(options) {
    var genGroupItem = function genGroupItem(item) {
      return "\n        <div class=\"js_contactsBoxGroupItem contactsBox_groupItem ".concat(options.curSelect === item.value ? options.activeClassName : '', "\"\n            data-value=\"").concat(item.value, "\"\n        >\n            <span class=\"contactsBox_groupLabel\">").concat(item.label, "</span>\n        </div>");
    };

    var genGroupList = function genGroupList(_ref) {
      var name = _ref.name,
          anchorPoint = _ref.anchorPoint,
          isHot = _ref.isHot,
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? [] : _ref$value;
      return "\n        <div class=\"js_contactsBoxGroup contactsBox_group".concat(isHot ? ' contactsBox_group-hot' : '', "\" id=\"").concat(anchorPoint, "\">\n            <h4 class=\"js_contactsBoxGroupTitle contactsBox_groupTitle\">").concat(name, "</h4>\n            <div class=\"contactsBox_groupList\">\n                ").concat(value.map(genGroupItem).join(''), "\n            </div>\n        </div>");
    };

    return options.groupedList.map(genGroupList).join('');
  }
  function genTemplateHtml (options) {
    var searchInput = "<div class=\"contactsBox_search\">\n        <span class=\"c-search-icon contactsBox_searchIcon\"></span>\n        <input placeholder=\"".concat(options.searchPlaceholder, "\" class=\"js_contactsBoxSearchInput contactsBox_searchInput\">\n    </div>");
    var boxHeight = options.showSearch ? "calc(".concat(options.containerHeight, " - 1.4668rem)") : '100%';
    var navBarHtml = "<div class=\"js_contactsBoxKeyBar contactsBox_keyBar contactsBox_keyBar-".concat(options.navModel, "\">\n            ").concat(navItemsHtml(options), "\n        </div>");
    return "\n<div class=\"contactsBox ".concat(options.showSearch ? 'hasSearchInput' : '', "\" style=\"height: ").concat(options.containerHeight, "\">\n    ").concat(options.showSearch ? searchInput : '', "\n    <div class=\"contactsBox_content\">\n        <div class=\"contactsBox_listBox js_contactsBoxListBox\" style=\"height: ").concat(boxHeight, "\">\n            ").concat(groupItemsHtml(options), "\n        </div>\n        ").concat(options.showNavBar ? navBarHtml : '', "\n    </div>\n    <div class=\"js_indicator contactsBox_indicator\" style=\"display: none;\">#</div>\n</div>\n");
  }

  var Contacts = /*#__PURE__*/function () {
    function Contacts(options) {
      _classCallCheck(this, Contacts);

      _defineProperty(this, "events", []);

      _defineProperty(this, "options", {
        target: '',
        // 需要放置的容器
        hotLetter: '#',
        hotName: 'Hot.xxx',
        hotList: [],
        allList: [],
        groupedList: [],
        // 处理为分组数据
        containerHeight: '60vh',
        showSearch: true,
        // 是否显示搜索
        searchPlaceholder: '输入搜索词',
        // 是否显示搜索
        showNavBar: true,
        // 显示导航条
        navModel: 'scroll',
        // scrollBar / touchmove
        searchVal: '',
        // 搜索框的关键词同步
        curSelect: '',
        // 当前选中的值
        indicatorDuration: 1500,
        // 指示器弹窗显示时间
        isDestroy: false,
        shouldObserveScroll: true,
        // 是否需要监听滚动事件
        shouldObserveTouchMove: false,
        // 是否需要监听touchmove
        touchmoveX: 0,
        // 兼容移除区域继续move
        activeClassName: 'xx-active'
      });

      this.resolveData(options); // 初始化options

      this.grouping(); // 分组

      this.render(); // 渲染dom 已经绑定事件

      this.updatePosition(); // 计算每个session position
    }

    _createClass(Contacts, [{
      key: "callHook",
      value: function callHook(name) {
        if (this.options[name]) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          this.options[name].apply(null, args);
        }
      }
    }, {
      key: "throwError",
      value: function throwError(msg) {
        // 抛出异常
        throw new Error(msg.message || msg);
      } // 转换Option NodeList 到 dataList

    }, {
      key: "optionNodeList2DataList",
      value: function optionNodeList2DataList(optionNodeList) {
        return Array.from(optionNodeList).reduce(function (previousValue, curVal) {
          if (curVal.value !== '') {
            var label = curVal.innerText || curVal.textContent || curVal.text;
            var groupKey = curVal.dataset.groupKey || label;
            previousValue.push({
              value: curVal.value,
              label: label,
              groupKey: groupKey
            });
          }

          return previousValue;
        }, []);
      } // 根据select标签解析数据

    }, {
      key: "resolveSelectNodeData",
      value: function resolveSelectNodeData(selector, curSelect) {
        var selectDom = querySelectorList(selector)[0]; // selectDom.classList.add(hideClass);

        this.options.selectDom = selectDom;
        var hotNode = selectDom.querySelector('[data-type=hot]');
        var dataOptions = Object.create(null);
        if (curSelect === undefined) dataOptions.curSelect = selectDom.value;

        if (hotNode) {
          // hotList
          dataOptions.hotList = this.optionNodeList2DataList(hotNode.querySelectorAll('option')); // allList

          var allNode = selectDom.querySelector('[data-type=all]');
          if (allNode) dataOptions.allList = this.optionNodeList2DataList(allNode.querySelectorAll('option'));
        } else {
          dataOptions.allList = this.optionNodeList2DataList(selectDom.querySelectorAll('option'));
        }

        return dataOptions;
      }
    }, {
      key: "resolveData",
      value: function resolveData(options) {
        // 处理参数
        var data = options.data,
            args = _objectWithoutProperties(options, ["data"]);

        if (!data) this.throwError('构造函数参数必须包含 [data] 属性');

        if (data.selectDom) {
          var dataOptions = this.resolveSelectNodeData(data.selectDom, args.curSelect);
          Object.assign(this.options, args, dataOptions);
        } else {
          if (!data.allList) {
            this.throwError('构造函数参数data属性必须包含 [selectDom] 或者 [allList]');
          }

          Object.assign(this.options, args, data);
        }
      } // 对数据按首字母分组

    }, {
      key: "grouping",
      value: function grouping() {
        var isSearch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        // 合并hot 和所有两组数据
        var hasHot = this.options.hotList && this.options.hotList.length > 0;
        this.options.groupedList = [].concat(_toConsumableArray(hasHot && (!isSearch || this.options.searchVal === '') ? [{
          isHot: true,
          name: this.options.hotName,
          letter: this.options.hotLetter,
          value: this.options.hotList,
          anchorPoint: genId()
        }] : []), _toConsumableArray(groupByLetter(this.options.allList, this.options.searchVal)));
      }
    }, {
      key: "render",
      value: function render() {
        var html = genTemplateHtml(this.options);
        var targetDom = querySelectorList(this.options.target)[0];
        targetDom.insertAdjacentHTML('afterbegin', html);
        this.options.targetDom = targetDom;
        this.options.scrollDom = targetDom.querySelector('.js_contactsBoxListBox');
        this.options.navBarDom = targetDom.querySelector('.js_contactsBoxKeyBar');
        this.options.indicatorDom = targetDom.querySelector('.js_indicator');
        this.bindEvent(targetDom);
      }
    }, {
      key: "toggleObserving",
      value: function toggleObserving(value) {
        this.options.shouldObserveScroll = value;
      }
    }, {
      key: "setNavBarSelect",
      value: function setNavBarSelect(target) {
        if (!this.options.showNavBar) return;
        var currentActiveDom = this.options.targetDom.querySelector(".js_keyBarItem.".concat(this.options.activeClassName));

        if (currentActiveDom) {
          currentActiveDom.classList.remove(this.options.activeClassName);
        }

        target.classList.add(this.options.activeClassName);
      } // 设置指示器弹窗

    }, {
      key: "showNavBar",
      value: function showNavBar(target) {
        var _this = this;

        this.options.indicatorDom.innerText = target.innerText;
        this.options.indicatorDom.style.display = 'block';
        clearTimeout(this.$$indicatorTimer);
        this.$$indicatorTimer = setTimeout(function () {
          _this.options.indicatorDom.style.display = 'none';
          _this.$$indicatorTimer = null;
        }, this.options.indicatorDuration);
      } // 计算每个 section position top

    }, {
      key: "updatePosition",
      value: function updatePosition() {
        var _this2 = this;

        if (!this.options.allList.length > 0) return; // 如果滚动容器高度没发生变化  不重新计算

        var curScrollHeight = this.options.scrollDom.scrollHeight;
        if (this.options.scrollHeight === curScrollHeight) return;
        this.options.scrollHeight = this.options.targetDom.scrollHeight; // 计算各个节点高度

        var groupDomList = querySelectorList('.js_contactsBoxGroup', this.options.targetDom);
        groupDomList.forEach(function (item, index) {
          _this2.options.groupedList[index].positionTop = item.offsetTop;
        }); // 计算 touchmoveX

        if (this.options.showNavBar && this.options.navModel === 'touchmove') {
          var barClientRect = this.options.navBarDom.getBoundingClientRect();
          this.options.touchmoveX = barClientRect.left + (barClientRect.width || 6) / 2;
        }
      }
    }, {
      key: "getCurrentSection",
      value: function getCurrentSection(scrollTop) {
        for (var i = this.options.groupedList.length - 1; i >= 0; i -= 1) {
          var cur = this.options.groupedList[i];

          if (cur.positionTop <= scrollTop) {
            return cur;
          }
        }

        return this.options.groupedList[this.options.groupedList.length - 1];
      } // 快捷导航点击事件

    }, {
      key: "handleAnchorPoint",
      value: function handleAnchorPoint(target) {
        var _this3 = this;

        // 停止滚动监听
        // 优化性能，以及可能产生滚动定位计算和当前选中点的偏差
        this.toggleObserving(false);
        this.setNavBarSelect(target);
        this.showNavBar(target); // 通过dom 计算对应高度
        // this.options.scrollDom.scrollTop = document.getElementById(target.dataset.target).offsetTop;
        // 通过缓存的高度做计算

        var anchorPoint = target.dataset.target;
        var curSectionPosition = this.options.groupedList.find(function (item) {
          return item.anchorPoint === anchorPoint;
        });
        this.options.scrollDom.scrollTop = curSectionPosition.positionTop;
        setTimeout(function () {
          _this3.toggleObserving(true);
        }, 16);
        this.callHook('onScrollToAnchorPoint', target);
      } // 列表选中事件

    }, {
      key: "handleSelect",
      value: function handleSelect(target) {
        var _this4 = this;

        // 移除已选中
        var currentActiveList = querySelectorList(".js_contactsBoxGroupItem.".concat(this.options.activeClassName), this.options.targetDom);
        currentActiveList.forEach(function (item) {
          return item.classList.remove(_this4.options.activeClassName);
        }); // 选中新的值，可能多选

        var curSelect = target.dataset.value;
        var selectList = querySelectorList(".js_contactsBoxGroupItem[data-value='".concat(target.dataset.value, "']"), this.options.targetDom);
        selectList.forEach(function (item) {
          return item.classList.add(_this4.options.activeClassName);
        });
        this.options.curSelect = curSelect;
        this.callHook('onSelect', curSelect, target);
      } // 滚动条滚动事件

    }, {
      key: "handleScrollChange",
      value: function handleScrollChange(event) {
        if (this.isDestroy || !this.options.shouldObserveScroll) return;
        var scrollTarget = event && event.target || this.options.scrollDom;
        var scrollTop = Math.round(scrollTarget.scrollTop); // 有些浏览器可能不四舍五入

        var currentSection = this.getCurrentSection(scrollTop);

        if (currentSection) {
          this.setNavBarSelect(this.options.targetDom.querySelector(".js_keyBarItem[data-target=".concat(currentSection.anchorPoint, "]")));
        }
      } // 搜索框change

    }, {
      key: "handleSearch",
      value: function handleSearch(event) {
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
    }, {
      key: "bindEvent",
      value: function bindEvent(targetDom) {
        var _this5 = this;

        // 点击选中事件
        this.events.push({
          target: targetDom,
          eventName: 'click',
          handler: function handler(event) {
            getRealCurrentTarget(event.currentTarget, event.target, function (t) {
              // 选中数据
              if (t.className && ~t.className.indexOf('contactsBox_groupItem')) {
                _this5.handleSelect(t);

                return true;
              }

              return false;
            });
          }
        }); // 容器滚动右侧定位事件
        // 不操作dom不做节流了

        this.events.push({
          target: this.options.scrollDom,
          eventName: 'scroll',
          handler: this.handleScrollChange.bind(this)
        }); // 搜索框 input

        if (this.options.showSearch) {
          this.events.push({
            target: this.options.targetDom.querySelector('.js_contactsBoxSearchInput'),
            eventName: 'input',
            handler: throttle(this.handleSearch.bind(this), 350)
          });
        } // resize 判断是否需要重新计算position


        this.events.push({
          target: window,
          eventName: 'resize',
          handler: throttle(function () {
            if (_this5.isDestroy) return;

            _this5.updatePosition();

            _this5.handleScrollChange();
          }, 250)
        }); // 快捷选择条事件

        if (this.options.showNavBar) {
          // 点击跳转当前锚点
          this.events.push({
            target: targetDom,
            eventName: 'touchstart',
            handler: function handler(event) {
              getRealCurrentTarget(event.currentTarget, event.target, function (t) {
                // 点击右边栏关键词
                if (t.className && ~t.className.indexOf('js_keyBarItem')) {
                  _this5.handleAnchorPoint(t);

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
              handler: function handler(event) {
                if (_this5.isDestroy) return;
                event.preventDefault();
                _this5.options.shouldObserveTouchMove = event.type === 'touchstart';
              }
            });
            this.events.push({
              target: document,
              eventName: 'touchmove',
              handler: throttle(function (event) {
                if (_this5.isDestroy || !_this5.options.shouldObserveTouchMove) return;
                var target = document.elementFromPoint(_this5.options.touchmoveX, event.changedTouches[0].clientY);

                if (target && target.classList && target.classList.contains('js_keyBarItem')) {
                  _this5.handleAnchorPoint(target);
                }
              }, 80)
            });
          }
        } // 注册事件


        handleEvents(this.events);
      } // 销毁

    }, {
      key: "destroy",
      value: function destroy() {
        this.isDestroy = true; // 释放计时器

        clearTimeout(this.$$indicatorTimer); // 释放事件

        handleEvents(this.events, 'removeEventListener'); // 还原dom节点
        // if (this.options.selectDom) this.options.selectDom.classList.remove(hideClass);

        this.options.targetDom.removeChild(this.options.targetDom.firstElementChild); // 释放dom等引用

        this.options = null;
        this.events.length = 0;
      }
    }]);

    return Contacts;
  }();

  exports.default = Contacts;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
