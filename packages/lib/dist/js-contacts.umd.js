/** @license js-contacts (c) 2020-2020 Liu.Jun License: MIT */
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

  var css_248z = ".xx-disHide{display:none!important}.contactsBox{position:relative;background:#fff}.contactsBox .c-search-icon{display:inline-block;width:.6667rem;height:.6667rem;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAMAAABpN6nPAAAAdVBMVEUAAAC6urqsrKy6urq7u7u7u7u6urq7u7u7u7u6urq6urq8vLy8vLy6urq6urq7u7u7u7u6urq6urq7u7u7u7u7u7u9vb26urq6urq7u7u6urq6urq6urq6urq7u7u8vLy7u7u6urq7u7u6urq7u7u9vb26uro15wGBAAAAJnRSTlMA7QX4rH0WEGz72VQ38+fRlYxpRz4yB8axc52bh3lhWxzhoU4pH65UEgAAAAEaSURBVEjH7ZXLGoIgEIUBJbyVqZl2v/P+jxhjLFSEYr6WnuWBH4YZGMisP2vD24TGAc3DXf0b8SpWsqfkJL4ii3UsR1ryrZtJqZxQkrmYo+xE7+dasO0ii8KgM4KzndlL0K3shSP4Z++djSlgNOZs6IpDR1n2SmFstTEHLkuIsJ7MG8RBn1NDFZwsZ8TUGpazpOkilSLTvwau4+4hcnMrDvVg1prDsVLDzpVb9g0z+NBYCrIt7FAGWTISpMyGOAS5vY68UnkHF9SoCeManpR3dEGtmvBAQajwUInApBxVXNQ1Ql1YzNNAPULMc0c0lob5tjBQyDybpab82nKhKb8PINKU11djo9yfmqY48ZGmWoKgUuKrqqjIrIHeA6M7aFBCwYoAAAAASUVORK5CYII=\");background-size:.6667rem;background-repeat:no-repeat;background-position:50%;vertical-align:top}.contactsBox_search{position:relative;padding:.2667rem}.contactsBox_searchIcon{position:absolute;left:.4rem;top:.3733rem}.contactsBox_searchInput{display:block;width:100%;box-sizing:border-box!important;line-height:.4rem;padding:.2667rem .2667rem .2667rem .9333rem;font-size:14px;border:none;outline:none;background:#f2f2f2;border-radius:4px;-webkit-transition:box-shadow .4s ease;transition:box-shadow .4s ease}.contactsBox_searchInput::-webkit-input-placeholder{color:#bababa}.contactsBox_searchInput::placeholder{color:#bababa}.contactsBox_searchInput:focus{box-shadow:0 0 .08rem 0 rgba(0,0,0,.3)}.contactsBox_content{position:relative;height:100%}.hasSearchInput .contactsBox_content{height:auto}.contactsBox_listBox{overflow:auto;padding:0;-webkit-overflow-scrolling:touch}.contactsBox_groupTitle{margin:0;position:-webkit-sticky;position:sticky;top:0;padding:0 .2667rem;font-size:14px;font-weight:700;color:#000;line-height:1.0667rem;background:#e5e5e5}.contactsBox_groupItem{padding:0 .8rem 0 .2667rem}.contactsBox_groupItem:active{background-color:#efefef}.contactsBox_groupItem.xx-active .contactsBox_groupLabel{color:#ff8a00}.contactsBox_groupItem .contactsBox_groupLabel{display:block;font-size:14px;color:#000;line-height:1.28rem;border-bottom:.5px solid #eee}.contactsBox_keyBar{box-sizing:border-box!important;position:absolute;padding:.2667rem .08rem .2667rem 0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:0;color:#007aff;max-height:100%}.contactsBox_keyBar>span{display:block;text-align:center;width:.48rem;line-height:.48rem;border-radius:50%;font-size:.32rem}.contactsBox_keyBar>span.xx-active{background:#007aff;color:#fff}.contactsBox_keyBar.contactsBox_keyBar-scroll{overflow:auto;-webkit-overflow-scrolling:touch}.contactsBox_keyBar.contactsBox_keyBar-touchmove>span{width:1.8vh;line-height:1.8vh;padding:.0533rem}.contactsBox_indicator{position:absolute;width:1.1733rem;height:1.1733rem;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;line-height:1.1733rem;background-color:#666;border-radius:.2133rem;color:#fff;font-size:17px}";
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
      return _toConsumableArray(selector);
    }

    if (selector instanceof HTMLElement) {
      return [selector];
    }

    if (isString(selector)) {
      return _toConsumableArray(parent.querySelectorAll(selector));
    }

    throw new Error('请传入一个正确的选择器');
  } // 通过首字母对数据分组 数据分组

  function groupByLetter(data, id) {
    var tempCache = Object.create(null);
    return data.reduce(function (preVal, curVal) {
      var letter = String((curVal.groupKey || curVal.label)[0]).toLocaleUpperCase();

      if (tempCache[letter] !== undefined) {
        preVal[tempCache[letter]].value.push(curVal);
      } else {
        tempCache[letter] = preVal.length;
        preVal.push({
          name: letter,
          letter: letter,
          value: [curVal],
          anchorPoint: "".concat(id, "_").concat(letter)
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

  /**
   * Created by Liu.Jun on 2020/11/5 17:46.
   */
  function genTemplateHtml (options) {
    var genGroupItem = function genGroupItem(item) {
      return "\n        <div class=\"js_contactsBoxGroupItem contactsBox_groupItem ".concat(options.curSelect === item.value ? options.activeClassName : '', "\"\n            data-value=\"").concat(item.value, "\"\n        >\n            <span class=\"contactsBox_groupLabel\">").concat(item.label, "</span>\n        </div>");
    };

    var genGroupList = function genGroupList(_ref) {
      var name = _ref.name,
          anchorPoint = _ref.anchorPoint,
          isHot = _ref.isHot,
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? [] : _ref$value;
      return "\n        <div class=\"js_contactsBoxGroup contactsBox_group".concat(isHot ? ' contactsBox_group-hot' : '', "\" id=\"").concat(anchorPoint, "\">\n            <h4 class=\"js_contactsBoxGroupTitle contactsBox_groupTitle\">").concat(name, "</h4>\n            <div class=\"contactsBox_groupList\">\n                ").concat(value.map(genGroupItem).join(''), "\n            </div>\n        </div>\n        ");
    };

    var searchInput = "<div class=\"contactsBox_search\">\n        <span class=\"c-search-icon contactsBox_searchIcon\"></span>\n        <input placeholder=\"Enter keywords\" class=\"contactsBox_searchInput\">\n    </div>";
    var boxHeight = options.showSearch ? "calc(".concat(options.containerHeight, " - 1.4668rem)") : '100%';
    return "\n<div class=\"contactsBox ".concat(options.showSearch ? 'hasSearchInput' : '', "\" style=\"height: ").concat(options.containerHeight, "\">\n    ").concat(options.showSearch ? searchInput : '', "\n    <div class=\"contactsBox_content\">\n        <div class=\"contactsBox_listBox js_contactsBoxListBox\" style=\"height: ").concat(boxHeight, "\">\n            ").concat(options.groupedList.map(genGroupList).join(''), "\n        </div>\n        <div class=\"js_contactsBoxKeyBar contactsBox_keyBar contactsBox_keyBar-").concat(options.navModel, "\">\n            ").concat(options.groupedList.map(function (item, index) {
      return "\n                <span data-target=\"".concat(item.anchorPoint, "\" class=\"js_keyBarItem ").concat(index === 0 ? options.activeClassName : '', "\">").concat(item.letter, "</span>\n            ");
    }).join(''), "\n        </div>\n    </div>\n    <div class=\"js_indicator contactsBox_indicator\" style=\"display: none;\">#</div>\n</div>\n");
  }

  var hideClass = 'xx-disHide';

  var Contacts = /*#__PURE__*/function () {
    function Contacts(options) {
      _classCallCheck(this, Contacts);

      _defineProperty(this, "options", {
        id: '',
        // 每个实例对应唯一的id
        target: '',
        // 需要放置的容器
        hotLetter: '#',
        hotName: 'Hot',
        hotList: [],
        allList: [],
        groupedList: [],
        // 处理为分组数据
        containerHeight: '60vh',
        showSearch: true,
        // 是否显示搜索
        navModel: 'scroll',
        // scrollBar / touchmove
        searchVal: '',
        // 搜索框的关键词同步
        curSelect: '',
        // 当前选中的值
        indicatorDuration: 1500,
        // 指示器弹窗显示时间
        isDestroy: false,
        activeClassName: 'xx-active'
      });

      this.options.id = genId(); // 初始化id

      this.resolveData(options); // 初始化options

      this.grouping(); // 分组

      this.render(); // 渲染dom 已经绑定事件

      this.updatePosition(); // 计算每个session position
    }

    _createClass(Contacts, [{
      key: "callHook",
      value: function callHook(name, payload) {
        if (this.options[name]) {
          this.options[name].call(null, payload);
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
        return _toConsumableArray(optionNodeList).reduce(function (previousValue, curVal) {
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
      value: function resolveSelectNodeData(selector) {
        var selectDom = querySelectorList(selector)[0];
        selectDom.classList.add(hideClass);
        this.options.selectDom = selectDom;
        var hotNode = selectDom.querySelector('[data-type=hot]');
        var dataOptions = Object.create(null);

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
          var dataOptions = this.resolveSelectNodeData(data.selectDom);
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
        // 合并hot 和所有两组数据
        var hasHot = this.options.hotList && this.options.hotList.length > 0;
        this.options.groupedList = [].concat(_toConsumableArray(hasHot ? [{
          isHot: true,
          name: this.options.hotName,
          letter: this.options.hotLetter,
          value: this.options.hotList,
          anchorPoint: "".concat(this.options.id, "_").concat(this.options.hotName)
        }] : []), _toConsumableArray(groupByLetter(this.options.allList, this.options.id)));
      }
    }, {
      key: "render",
      value: function render() {
        var html = genTemplateHtml(this.options);
        var targetDom = querySelectorList(this.options.target)[0];
        targetDom.insertAdjacentHTML('afterbegin', html);
        this.options.targetDom = targetDom;
        this.options.scrollDom = targetDom.querySelector('.js_contactsBoxListBox');
        this.options.indicatorDom = targetDom.querySelector('.js_indicator');
        this.bindEvent(targetDom);
      }
    }, {
      key: "setKeyBarSelect",
      value: function setKeyBarSelect(target) {
        var currentActiveDom = this.options.targetDom.querySelector(".js_keyBarItem.".concat(this.options.activeClassName));

        if (currentActiveDom) {
          currentActiveDom.classList.remove(this.options.activeClassName);
        }

        target.classList.add(this.options.activeClassName);
      } // 设置指示器弹窗

    }, {
      key: "handleIndicator",
      value: function handleIndicator(target) {
        var _this = this;

        this.options.indicatorDom.innerText = target.innerText;
        this.options.indicatorDom.style.display = 'block';
        clearTimeout(this.$$indicatorTimer);
        this.$$indicatorTimer = setTimeout(function () {
          _this.options.indicatorDom.style.display = 'none';
          _this.$$indicatorTimer = null;
        }, this.options.indicatorDuration);
      }
    }, {
      key: "handleAnchorPoint",
      value: function handleAnchorPoint(target) {
        this.setKeyBarSelect(target);
        this.handleIndicator(target); // 通过dom 计算对应高度
        // this.options.scrollDom.scrollTop = document.getElementById(target.dataset.target).offsetTop;
        // 通过缓存的高度做计算

        var anchorPoint = target.dataset.target;
        var curSectionPosition = this.options.groupedList.find(function (item) {
          return item.anchorPoint === anchorPoint;
        });
        this.options.scrollDom.scrollTop = curSectionPosition.positionTop;
        this.callHook('onScrollToAnchorPoint', target);
      }
    }, {
      key: "handleSelect",
      value: function handleSelect(target) {
        var _this2 = this;

        // 移除已选中
        var currentActiveList = querySelectorList(".js_contactsBoxGroupItem.".concat(this.options.activeClassName), this.options.targetDom);
        currentActiveList.forEach(function (item) {
          return item.classList.remove(_this2.options.activeClassName);
        }); // 选中新的值，可能多选

        var curSelect = target.dataset.value;
        var selectList = querySelectorList(".js_contactsBoxGroupItem[data-value=".concat(target.dataset.value, "]"), this.options.targetDom);
        selectList.forEach(function (item) {
          return item.classList.add(_this2.options.activeClassName);
        });
        this.options.curSelect = curSelect;
        this.callHook('onSelect', curSelect);
      } // 计算每个 section position top

    }, {
      key: "updatePosition",
      value: function updatePosition() {
        var _this3 = this;

        if (!this.options.allList.length > 0) return;
        var groupDomList = querySelectorList('.js_contactsBoxGroup', this.options.targetDom);
        groupDomList.forEach(function (item, index) {
          _this3.options.groupedList[index].positionTop = item.offsetTop;
        }); // 直接根据数据条数来计算了，不去递归dom节点
        // const titleHeight = this.options.targetDom.querySelector('.js_contactsBoxGroupTitle').getBoundingClientRect().height;
        // const itemHeight = this.options.targetDom.querySelector('.js_contactsBoxGroupItem').getBoundingClientRect().height;
        //
        // // 高度不变 不需要重新计算
        // if (this.options.titleHeight === titleHeight && this.options.itemHeight === itemHeight) return;
        //
        // this.options.titleHeight = titleHeight;
        // this.options.itemHeight = itemHeight;
        //
        // this.options.groupedList.forEach((curItem, curIndex) => {
        //     const prevItem = this.options.groupedList[curIndex - 1];
        //     curItem.positionTop = prevItem ? (titleHeight + (prevItem.value.length) * itemHeight + prevItem.positionTop) : 0;
        // });
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
      }
    }, {
      key: "scrollChange",
      value: function scrollChange(event) {
        if (this.isDestroy) return;
        var scrollTarget = event && event.target || this.options.scrollDom;
        var scrollTop = scrollTarget.scrollTop;
        var currentSection = this.getCurrentSection(scrollTop);
        this.setKeyBarSelect(this.options.targetDom.querySelector(".js_keyBarItem[data-target=".concat(currentSection.anchorPoint, "]")));
      }
    }, {
      key: "bindEvent",
      value: function bindEvent(targetDom) {
        var _this4 = this;

        // 点击事件委托
        this.$$clickEvent = function (event) {
          getRealCurrentTarget(event.currentTarget, event.target, function (t) {
            // 选中数据
            if (t.className && ~t.className.indexOf('contactsBox_groupItem')) {
              _this4.handleSelect(t);

              return true;
            }

            return false;
          });
        };

        targetDom.addEventListener('click', this.$$clickEvent, false); // touchstart event 委托

        this.$$touchstartEvent = function (event) {
          getRealCurrentTarget(event.currentTarget, event.target, function (t) {
            // 点击右边栏关键词
            if (t.className && ~t.className.indexOf('js_keyBarItem')) {
              _this4.handleAnchorPoint(t);

              return true;
            }

            return false;
          });
        };

        targetDom.addEventListener('touchstart', this.$$touchstartEvent, false); // 滚动定位

        this.$$scrollEvent = throttle(this.scrollChange.bind(this), 250);
        this.options.scrollDom.addEventListener('scroll', this.$$scrollEvent, false); // resize

        this.$$resizeEvent = throttle(function () {
          if (_this4.isDestroy) return;

          _this4.updatePosition();

          _this4.scrollChange();
        }, 250);
        window.addEventListener('resize', this.$$resizeEvent, false); // 搜索框逻辑处理
        // touchMove

        if (this.options.navModel === 'touchmove') {
          this.$$navTouchMoveEvent = throttle(function (event) {
            if (_this4.isDestroy) return;
            event.preventDefault();
            var target = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);

            if (target && target.classList && target.classList.contains('js_keyBarItem')) {
              _this4.handleAnchorPoint(target);
            }
          }, 50);
          var keyBarDom = this.options.targetDom.querySelector('.js_contactsBoxKeyBar');
          keyBarDom.addEventListener('touchstart', this.$$navTouchMoveEvent, false);
          keyBarDom.addEventListener('touchmove', this.$$navTouchMoveEvent, false);
        }
      } // 销毁

    }, {
      key: "destroy",
      value: function destroy() {
        this.isDestroy = true; // 释放计时器

        clearTimeout(this.$$indicatorTimer); // 释放事件

        this.options.targetDom.removeEventListener('click', this.$$clickEvent, false);
        this.options.targetDom.removeEventListener('click', this.$$touchstartEvent, false);
        this.options.scrollDom.removeEventListener('scroll', this.$$scrollEvent, false);
        var keyBarDom = this.options.targetDom.querySelector('.js_contactsBoxKeyBar');
        keyBarDom.removeEventListener('touchstart', this.$$navTouchMoveEvent, false);
        keyBarDom.removeEventListener('touchmove', this.$$navTouchMoveEvent, false);
        window.removeEventListener('resize', this.$$resizeEvent, false);
        this.$$clickEvent = null;
        this.$$touchstartEvent = null;
        this.$$scrollEvent = null;
        this.$$navTouchMoveEvent = null;
        this.$$resizeEvent = null; // 还原dom节点

        if (this.options.selectDom) this.options.selectDom.classList.remove(hideClass);
        this.options.targetDom.removeChild(this.options.targetDom.firstElementChild); // 释放dom等引用

        this.options = null;
      }
    }]);

    return Contacts;
  }();

  exports.default = Contacts;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
