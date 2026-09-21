import { i as createLucideIcon, G as clsx, R as React, J as getDefaultExportFromCjs, r as reactExports, q as useEmailAuth, K as useAdminAuth, N as useRolePermissions, O as getAuditLog, j as jsxRuntimeExports, P as ShieldAlert, B as Button, Q as ChartColumn, I as Input, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, X, h as Badge } from "./index-DJeWhCy-.js";
import { S as ScrollArea } from "./scroll-area-DUDQuZCi.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CnbMZ7S8.js";
import { L as Lock } from "./lock-BfuJZcFd.js";
import { D as Download } from "./download-qc_8yQ5r.js";
import { P as Printer } from "./printer-BQUreT8L.js";
import { A as ArrowRightLeft } from "./arrow-right-left-DxaL83fz.js";
import { S as Search } from "./search-BLymxia-.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { t as toDate, c as constructFrom, f as format } from "./format-C8K1a6Fc.js";
import { f as filterProps, _ as _baseExtremum, a as _baseGt, b as _baseIteratee, c as _baseLt, i as isFunction, T as Text, p as polarToCartesian, L as Layer, g as getTickClassName, d as adaptEventsOfChild, e as Label, D as Dot, C as Curve, h as isNil, j as getValueByDataKey, S as Shape, A as Animate, k as get, l as interpolateNumber, m as isEqual, n as isNumber, o as LabelList, u as uniqueId, G as Global, q as mathSign, r as findAllByType, s as Cell, t as getMaxRadius, v as getPercentValue, w as warn, x as generateCategoricalChart, y as formatAxisMap, R as ResponsiveContainer, X as XAxis, Y as YAxis, z as Tooltip, B as Bar } from "./generateCategoricalChart-Dou_1HkF.js";
import { B as BarChart } from "./BarChart-Ch6XFCj8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
];
const List = createLucideIcon("list", __iconNode);
function addDays(date, amount) {
  const _date = toDate(date);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) {
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}
function subDays(date, amount) {
  return addDays(date, -amount);
}
var _excluded$1 = ["points", "className", "baseLinePoints", "connectNulls"];
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
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
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var isValidatePoint = function isValidatePoint2(point) {
  return point && point.x === +point.x && point.y === +point.y;
};
var getParsedPoints = function getParsedPoints2() {
  var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var segmentPoints = [[]];
  points.forEach(function(entry) {
    if (isValidatePoint(entry)) {
      segmentPoints[segmentPoints.length - 1].push(entry);
    } else if (segmentPoints[segmentPoints.length - 1].length > 0) {
      segmentPoints.push([]);
    }
  });
  if (isValidatePoint(points[0])) {
    segmentPoints[segmentPoints.length - 1].push(points[0]);
  }
  if (segmentPoints[segmentPoints.length - 1].length <= 0) {
    segmentPoints = segmentPoints.slice(0, -1);
  }
  return segmentPoints;
};
var getSinglePolygonPath = function getSinglePolygonPath2(points, connectNulls) {
  var segmentPoints = getParsedPoints(points);
  if (connectNulls) {
    segmentPoints = [segmentPoints.reduce(function(res, segPoints) {
      return [].concat(_toConsumableArray(res), _toConsumableArray(segPoints));
    }, [])];
  }
  var polygonPath = segmentPoints.map(function(segPoints) {
    return segPoints.reduce(function(path, point, index) {
      return "".concat(path).concat(index === 0 ? "M" : "L").concat(point.x, ",").concat(point.y);
    }, "");
  }).join("");
  return segmentPoints.length === 1 ? "".concat(polygonPath, "Z") : polygonPath;
};
var getRanglePath = function getRanglePath2(points, baseLinePoints, connectNulls) {
  var outerPath = getSinglePolygonPath(points, connectNulls);
  return "".concat(outerPath.slice(-1) === "Z" ? outerPath.slice(0, -1) : outerPath, "L").concat(getSinglePolygonPath(baseLinePoints.reverse(), connectNulls).slice(1));
};
var Polygon = function Polygon2(props) {
  var points = props.points, className = props.className, baseLinePoints = props.baseLinePoints, connectNulls = props.connectNulls, others = _objectWithoutProperties$1(props, _excluded$1);
  if (!points || !points.length) {
    return null;
  }
  var layerClass = clsx("recharts-polygon", className);
  if (baseLinePoints && baseLinePoints.length) {
    var hasStroke = others.stroke && others.stroke !== "none";
    var rangePath = getRanglePath(points, baseLinePoints, connectNulls);
    return /* @__PURE__ */ React.createElement("g", {
      className: layerClass
    }, /* @__PURE__ */ React.createElement("path", _extends$3({}, filterProps(others, true), {
      fill: rangePath.slice(-1) === "Z" ? others.fill : "none",
      stroke: "none",
      d: rangePath
    })), hasStroke ? /* @__PURE__ */ React.createElement("path", _extends$3({}, filterProps(others, true), {
      fill: "none",
      d: getSinglePolygonPath(points, connectNulls)
    })) : null, hasStroke ? /* @__PURE__ */ React.createElement("path", _extends$3({}, filterProps(others, true), {
      fill: "none",
      d: getSinglePolygonPath(baseLinePoints, connectNulls)
    })) : null);
  }
  var singlePath = getSinglePolygonPath(points, connectNulls);
  return /* @__PURE__ */ React.createElement("path", _extends$3({}, filterProps(others, true), {
    fill: singlePath.slice(-1) === "Z" ? others.fill : "none",
    className: layerClass,
    d: singlePath
  }));
};
var baseExtremum$1 = _baseExtremum, baseGt = _baseGt, baseIteratee$1 = _baseIteratee;
function maxBy(array, iteratee) {
  return array && array.length ? baseExtremum$1(array, baseIteratee$1(iteratee), baseGt) : void 0;
}
var maxBy_1 = maxBy;
const maxBy$1 = /* @__PURE__ */ getDefaultExportFromCjs(maxBy_1);
var baseExtremum = _baseExtremum, baseIteratee = _baseIteratee, baseLt = _baseLt;
function minBy(array, iteratee) {
  return array && array.length ? baseExtremum(array, baseIteratee(iteratee), baseLt) : void 0;
}
var minBy_1 = minBy;
const minBy$1 = /* @__PURE__ */ getDefaultExportFromCjs(minBy_1);
var _excluded = ["cx", "cy", "angle", "ticks", "axisLine"], _excluded2 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$2(descriptor.key), descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$2(t, o, e) {
  return o = _getPrototypeOf$2(o), _possibleConstructorReturn$2(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf$2(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$2(self);
}
function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$2(o);
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}
function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$2(o, p);
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var PolarRadiusAxis = /* @__PURE__ */ function(_PureComponent) {
  function PolarRadiusAxis2() {
    _classCallCheck$2(this, PolarRadiusAxis2);
    return _callSuper$2(this, PolarRadiusAxis2, arguments);
  }
  _inherits$2(PolarRadiusAxis2, _PureComponent);
  return _createClass$2(PolarRadiusAxis2, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function getTickValueCoord(_ref) {
        var coordinate = _ref.coordinate;
        var _this$props = this.props, angle = _this$props.angle, cx = _this$props.cx, cy = _this$props.cy;
        return polarToCartesian(cx, cy, coordinate, angle);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var orientation = this.props.orientation;
      var textAnchor;
      switch (orientation) {
        case "left":
          textAnchor = "end";
          break;
        case "right":
          textAnchor = "start";
          break;
        default:
          textAnchor = "middle";
          break;
      }
      return textAnchor;
    }
  }, {
    key: "getViewBox",
    value: function getViewBox() {
      var _this$props2 = this.props, cx = _this$props2.cx, cy = _this$props2.cy, angle = _this$props2.angle, ticks = _this$props2.ticks;
      var maxRadiusTick = maxBy$1(ticks, function(entry) {
        return entry.coordinate || 0;
      });
      var minRadiusTick = minBy$1(ticks, function(entry) {
        return entry.coordinate || 0;
      });
      return {
        cx,
        cy,
        startAngle: angle,
        endAngle: angle,
        innerRadius: minRadiusTick.coordinate || 0,
        outerRadius: maxRadiusTick.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props3 = this.props, cx = _this$props3.cx, cy = _this$props3.cy, angle = _this$props3.angle, ticks = _this$props3.ticks, axisLine = _this$props3.axisLine, others = _objectWithoutProperties(_this$props3, _excluded);
      var extent = ticks.reduce(function(result, entry) {
        return [Math.min(result[0], entry.coordinate), Math.max(result[1], entry.coordinate)];
      }, [Infinity, -Infinity]);
      var point0 = polarToCartesian(cx, cy, extent[0], angle);
      var point1 = polarToCartesian(cx, cy, extent[1], angle);
      var props = _objectSpread$2(_objectSpread$2(_objectSpread$2({}, filterProps(others, false)), {}, {
        fill: "none"
      }, filterProps(axisLine, false)), {}, {
        x1: point0.x,
        y1: point0.y,
        x2: point1.x,
        y2: point1.y
      });
      return /* @__PURE__ */ React.createElement("line", _extends$2({
        className: "recharts-polar-radius-axis-line"
      }, props));
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var _this = this;
      var _this$props4 = this.props, ticks = _this$props4.ticks, tick = _this$props4.tick, angle = _this$props4.angle, tickFormatter = _this$props4.tickFormatter, stroke = _this$props4.stroke, others = _objectWithoutProperties(_this$props4, _excluded2);
      var textAnchor = this.getTickTextAnchor();
      var axisProps = filterProps(others, false);
      var customTickProps = filterProps(tick, false);
      var items = ticks.map(function(entry, i) {
        var coord = _this.getTickValueCoord(entry);
        var tickProps = _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({
          textAnchor,
          transform: "rotate(".concat(90 - angle, ", ").concat(coord.x, ", ").concat(coord.y, ")")
        }, axisProps), {}, {
          stroke: "none",
          fill: stroke
        }, customTickProps), {}, {
          index: i
        }, coord), {}, {
          payload: entry
        });
        return /* @__PURE__ */ React.createElement(Layer, _extends$2({
          className: clsx("recharts-polar-radius-axis-tick", getTickClassName(tick)),
          key: "tick-".concat(entry.coordinate)
        }, adaptEventsOfChild(_this.props, entry, i)), PolarRadiusAxis2.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value));
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-polar-radius-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, ticks = _this$props5.ticks, axisLine = _this$props5.axisLine, tick = _this$props5.tick;
      if (!ticks || !ticks.length) {
        return null;
      }
      return /* @__PURE__ */ React.createElement(Layer, {
        className: clsx("recharts-polar-radius-axis", this.props.className)
      }, axisLine && this.renderAxisLine(), tick && this.renderTicks(), Label.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if (/* @__PURE__ */ React.isValidElement(option)) {
        tickItem = /* @__PURE__ */ React.cloneElement(option, props);
      } else if (isFunction(option)) {
        tickItem = option(props);
      } else {
        tickItem = /* @__PURE__ */ React.createElement(Text, _extends$2({}, props, {
          className: "recharts-polar-radius-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty$2(PolarRadiusAxis, "displayName", "PolarRadiusAxis");
_defineProperty$2(PolarRadiusAxis, "axisType", "radiusAxis");
_defineProperty$2(PolarRadiusAxis, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: true,
  tick: true,
  tickCount: 5,
  allowDataOverflow: false,
  scale: "auto",
  allowDuplicatedCategory: true
});
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$1(t, o, e) {
  return o = _getPrototypeOf$1(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf$1(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var RADIAN = Math.PI / 180;
var eps = 1e-5;
var PolarAngleAxis = /* @__PURE__ */ function(_PureComponent) {
  function PolarAngleAxis2() {
    _classCallCheck$1(this, PolarAngleAxis2);
    return _callSuper$1(this, PolarAngleAxis2, arguments);
  }
  _inherits$1(PolarAngleAxis2, _PureComponent);
  return _createClass$1(PolarAngleAxis2, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function getTickLineCoord(data) {
        var _this$props = this.props, cx = _this$props.cx, cy = _this$props.cy, radius = _this$props.radius, orientation = _this$props.orientation, tickSize = _this$props.tickSize;
        var tickLineSize = tickSize || 8;
        var p1 = polarToCartesian(cx, cy, radius, data.coordinate);
        var p2 = polarToCartesian(cx, cy, radius + (orientation === "inner" ? -1 : 1) * tickLineSize, data.coordinate);
        return {
          x1: p1.x,
          y1: p1.y,
          x2: p2.x,
          y2: p2.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor(data) {
      var orientation = this.props.orientation;
      var cos = Math.cos(-data.coordinate * RADIAN);
      var textAnchor;
      if (cos > eps) {
        textAnchor = orientation === "outer" ? "start" : "end";
      } else if (cos < -eps) {
        textAnchor = orientation === "outer" ? "end" : "start";
      } else {
        textAnchor = "middle";
      }
      return textAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props2 = this.props, cx = _this$props2.cx, cy = _this$props2.cy, radius = _this$props2.radius, axisLine = _this$props2.axisLine, axisLineType = _this$props2.axisLineType;
      var props = _objectSpread$1(_objectSpread$1({}, filterProps(this.props, false)), {}, {
        fill: "none"
      }, filterProps(axisLine, false));
      if (axisLineType === "circle") {
        return /* @__PURE__ */ React.createElement(Dot, _extends$1({
          className: "recharts-polar-angle-axis-line"
        }, props, {
          cx,
          cy,
          r: radius
        }));
      }
      var ticks = this.props.ticks;
      var points = ticks.map(function(entry) {
        return polarToCartesian(cx, cy, radius, entry.coordinate);
      });
      return /* @__PURE__ */ React.createElement(Polygon, _extends$1({
        className: "recharts-polar-angle-axis-line"
      }, props, {
        points
      }));
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var _this = this;
      var _this$props3 = this.props, ticks = _this$props3.ticks, tick = _this$props3.tick, tickLine = _this$props3.tickLine, tickFormatter = _this$props3.tickFormatter, stroke = _this$props3.stroke;
      var axisProps = filterProps(this.props, false);
      var customTickProps = filterProps(tick, false);
      var tickLineProps = _objectSpread$1(_objectSpread$1({}, axisProps), {}, {
        fill: "none"
      }, filterProps(tickLine, false));
      var items = ticks.map(function(entry, i) {
        var lineCoord = _this.getTickLineCoord(entry);
        var textAnchor = _this.getTickTextAnchor(entry);
        var tickProps = _objectSpread$1(_objectSpread$1(_objectSpread$1({
          textAnchor
        }, axisProps), {}, {
          stroke: "none",
          fill: stroke
        }, customTickProps), {}, {
          index: i,
          payload: entry,
          x: lineCoord.x2,
          y: lineCoord.y2
        });
        return /* @__PURE__ */ React.createElement(Layer, _extends$1({
          className: clsx("recharts-polar-angle-axis-tick", getTickClassName(tick)),
          key: "tick-".concat(entry.coordinate)
        }, adaptEventsOfChild(_this.props, entry, i)), tickLine && /* @__PURE__ */ React.createElement("line", _extends$1({
          className: "recharts-polar-angle-axis-tick-line"
        }, tickLineProps, lineCoord)), tick && PolarAngleAxis2.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value));
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-polar-angle-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, ticks = _this$props4.ticks, radius = _this$props4.radius, axisLine = _this$props4.axisLine;
      if (radius <= 0 || !ticks || !ticks.length) {
        return null;
      }
      return /* @__PURE__ */ React.createElement(Layer, {
        className: clsx("recharts-polar-angle-axis", this.props.className)
      }, axisLine && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if (/* @__PURE__ */ React.isValidElement(option)) {
        tickItem = /* @__PURE__ */ React.cloneElement(option, props);
      } else if (isFunction(option)) {
        tickItem = option(props);
      } else {
        tickItem = /* @__PURE__ */ React.createElement(Text, _extends$1({}, props, {
          className: "recharts-polar-angle-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty$1(PolarAngleAxis, "displayName", "PolarAngleAxis");
_defineProperty$1(PolarAngleAxis, "axisType", "angleAxis");
_defineProperty$1(PolarAngleAxis, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: true,
  tickLine: true,
  tickSize: 8,
  tick: true,
  hide: false,
  allowDuplicatedCategory: true
});
var _Pie;
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
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
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Pie = /* @__PURE__ */ function(_PureComponent) {
  function Pie2(props) {
    var _this;
    _classCallCheck(this, Pie2);
    _this = _callSuper(this, Pie2, [props]);
    _defineProperty(_this, "pieRef", null);
    _defineProperty(_this, "sectorRefs", []);
    _defineProperty(_this, "id", uniqueId("recharts-pie-"));
    _defineProperty(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    _this.state = {
      isAnimationFinished: !props.isAnimationActive,
      prevIsAnimationActive: props.isAnimationActive,
      prevAnimationId: props.animationId,
      sectorToFocus: 0
    };
    return _this;
  }
  _inherits(Pie2, _PureComponent);
  return _createClass(Pie2, [{
    key: "isActiveIndex",
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;
      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }
      return i === activeIndex;
    }
  }, {
    key: "hasActiveIndex",
    value: function hasActiveIndex() {
      var activeIndex = this.props.activeIndex;
      return Array.isArray(activeIndex) ? activeIndex.length !== 0 : activeIndex || activeIndex === 0;
    }
  }, {
    key: "renderLabels",
    value: function renderLabels(sectors) {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props = this.props, label = _this$props.label, labelLine = _this$props.labelLine, dataKey = _this$props.dataKey, valueKey = _this$props.valueKey;
      var pieProps = filterProps(this.props, false);
      var customLabelProps = filterProps(label, false);
      var customLabelLineProps = filterProps(labelLine, false);
      var offsetRadius = label && label.offsetRadius || 20;
      var labels = sectors.map(function(entry, i) {
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
        var labelProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entry), {}, {
          stroke: "none"
        }, customLabelProps), {}, {
          index: i,
          textAnchor: Pie2.getTextAnchor(endPoint.x, entry.cx)
        }, endPoint);
        var lineProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entry), {}, {
          fill: "none",
          stroke: entry.fill
        }, customLabelLineProps), {}, {
          index: i,
          points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
        });
        var realDataKey = dataKey;
        if (isNil(dataKey) && isNil(valueKey)) {
          realDataKey = "value";
        } else if (isNil(dataKey)) {
          realDataKey = valueKey;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ React.createElement(Layer, {
            key: "label-".concat(entry.startAngle, "-").concat(entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
          }, labelLine && Pie2.renderLabelLineItem(labelLine, lineProps, "line"), Pie2.renderLabelItem(label, labelProps, getValueByDataKey(entry, realDataKey)))
        );
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-pie-labels"
      }, labels);
    }
  }, {
    key: "renderSectorsStatically",
    value: function renderSectorsStatically(sectors) {
      var _this2 = this;
      var _this$props2 = this.props, activeShape = _this$props2.activeShape, blendStroke = _this$props2.blendStroke, inactiveShapeProp = _this$props2.inactiveShape;
      return sectors.map(function(entry, i) {
        if ((entry === null || entry === void 0 ? void 0 : entry.startAngle) === 0 && (entry === null || entry === void 0 ? void 0 : entry.endAngle) === 0 && sectors.length !== 1) return null;
        var isActive = _this2.isActiveIndex(i);
        var inactiveShape = inactiveShapeProp && _this2.hasActiveIndex() ? inactiveShapeProp : null;
        var sectorOptions = isActive ? activeShape : inactiveShape;
        var sectorProps = _objectSpread(_objectSpread({}, entry), {}, {
          stroke: blendStroke ? entry.fill : entry.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ React.createElement(Layer, _extends({
          ref: function ref(_ref) {
            if (_ref && !_this2.sectorRefs.includes(_ref)) {
              _this2.sectorRefs.push(_ref);
            }
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, adaptEventsOfChild(_this2.props, entry, i), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(entry === null || entry === void 0 ? void 0 : entry.startAngle, "-").concat(entry === null || entry === void 0 ? void 0 : entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
        }), /* @__PURE__ */ React.createElement(Shape, _extends({
          option: sectorOptions,
          isActive,
          shapeType: "sector"
        }, sectorProps)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function renderSectorsWithAnimation() {
      var _this3 = this;
      var _this$props3 = this.props, sectors = _this$props3.sectors, isAnimationActive = _this$props3.isAnimationActive, animationBegin = _this$props3.animationBegin, animationDuration = _this$props3.animationDuration, animationEasing = _this$props3.animationEasing, animationId = _this$props3.animationId;
      var _this$state = this.state, prevSectors = _this$state.prevSectors, prevIsAnimationActive = _this$state.prevIsAnimationActive;
      return /* @__PURE__ */ React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(animationId, "-").concat(prevIsAnimationActive),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(_ref2) {
        var t = _ref2.t;
        var stepData = [];
        var first = sectors && sectors[0];
        var curAngle = first.startAngle;
        sectors.forEach(function(entry, index) {
          var prev = prevSectors && prevSectors[index];
          var paddingAngle = index > 0 ? get(entry, "paddingAngle", 0) : 0;
          if (prev) {
            var angleIp = interpolateNumber(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);
            var latest = _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + angleIp(t) + paddingAngle
            });
            stepData.push(latest);
            curAngle = latest.endAngle;
          } else {
            var endAngle = entry.endAngle, startAngle = entry.startAngle;
            var interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
            var deltaAngle = interpolatorAngle(t);
            var _latest = _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + deltaAngle + paddingAngle
            });
            stepData.push(_latest);
            curAngle = _latest.endAngle;
          }
        });
        return /* @__PURE__ */ React.createElement(Layer, null, _this3.renderSectorsStatically(stepData));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function attachKeyboardHandlers(pieRef) {
      var _this4 = this;
      pieRef.onkeydown = function(e) {
        if (!e.altKey) {
          switch (e.key) {
            case "ArrowLeft": {
              var next = ++_this4.state.sectorToFocus % _this4.sectorRefs.length;
              _this4.sectorRefs[next].focus();
              _this4.setState({
                sectorToFocus: next
              });
              break;
            }
            case "ArrowRight": {
              var _next = --_this4.state.sectorToFocus < 0 ? _this4.sectorRefs.length - 1 : _this4.state.sectorToFocus % _this4.sectorRefs.length;
              _this4.sectorRefs[_next].focus();
              _this4.setState({
                sectorToFocus: _next
              });
              break;
            }
            case "Escape": {
              _this4.sectorRefs[_this4.state.sectorToFocus].blur();
              _this4.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
        }
      };
    }
  }, {
    key: "renderSectors",
    value: function renderSectors() {
      var _this$props4 = this.props, sectors = _this$props4.sectors, isAnimationActive = _this$props4.isAnimationActive;
      var prevSectors = this.state.prevSectors;
      if (isAnimationActive && sectors && sectors.length && (!prevSectors || !isEqual(prevSectors, sectors))) {
        return this.renderSectorsWithAnimation();
      }
      return this.renderSectorsStatically(sectors);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.pieRef) {
        this.attachKeyboardHandlers(this.pieRef);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _this$props5 = this.props, hide = _this$props5.hide, sectors = _this$props5.sectors, className = _this$props5.className, label = _this$props5.label, cx = _this$props5.cx, cy = _this$props5.cy, innerRadius = _this$props5.innerRadius, outerRadius = _this$props5.outerRadius, isAnimationActive = _this$props5.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (hide || !sectors || !sectors.length || !isNumber(cx) || !isNumber(cy) || !isNumber(innerRadius) || !isNumber(outerRadius)) {
        return null;
      }
      var layerClass = clsx("recharts-pie", className);
      return /* @__PURE__ */ React.createElement(Layer, {
        tabIndex: this.props.rootTabIndex,
        className: layerClass,
        ref: function ref(_ref3) {
          _this5.pieRef = _ref3;
        }
      }, this.renderSectors(), label && this.renderLabels(sectors), Label.renderCallByParent(this.props, null, false), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, sectors, false));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevIsAnimationActive !== nextProps.isAnimationActive) {
        return {
          prevIsAnimationActive: nextProps.isAnimationActive,
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: [],
          isAnimationFinished: true
        };
      }
      if (nextProps.isAnimationActive && nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: prevState.curSectors,
          isAnimationFinished: true
        };
      }
      if (nextProps.sectors !== prevState.curSectors) {
        return {
          curSectors: nextProps.sectors,
          isAnimationFinished: true
        };
      }
      return null;
    }
  }, {
    key: "getTextAnchor",
    value: function getTextAnchor(x, cx) {
      if (x > cx) {
        return "start";
      }
      if (x < cx) {
        return "end";
      }
      return "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function renderLabelLineItem(option, props, key) {
      if (/* @__PURE__ */ React.isValidElement(option)) {
        return /* @__PURE__ */ React.cloneElement(option, props);
      }
      if (isFunction(option)) {
        return option(props);
      }
      var className = clsx("recharts-pie-label-line", typeof option !== "boolean" ? option.className : "");
      return /* @__PURE__ */ React.createElement(Curve, _extends({}, props, {
        key,
        type: "linear",
        className
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function renderLabelItem(option, props, value) {
      if (/* @__PURE__ */ React.isValidElement(option)) {
        return /* @__PURE__ */ React.cloneElement(option, props);
      }
      var label = value;
      if (isFunction(option)) {
        label = option(props);
        if (/* @__PURE__ */ React.isValidElement(label)) {
          return label;
        }
      }
      var className = clsx("recharts-pie-label-text", typeof option !== "boolean" && !isFunction(option) ? option.className : "");
      return /* @__PURE__ */ React.createElement(Text, _extends({}, props, {
        alignmentBaseline: "middle",
        className
      }), label);
    }
  }]);
}(reactExports.PureComponent);
_Pie = Pie;
_defineProperty(Pie, "displayName", "Pie");
_defineProperty(Pie, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: true,
  hide: false,
  minAngle: 0,
  isAnimationActive: !Global.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: false,
  rootTabIndex: 0
});
_defineProperty(Pie, "parseDeltaAngle", function(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
});
_defineProperty(Pie, "getRealPieData", function(itemProps) {
  var data = itemProps.data, children = itemProps.children;
  var presentationProps = filterProps(itemProps, false);
  var cells = findAllByType(children, Cell);
  if (data && data.length) {
    return data.map(function(entry, index) {
      return _objectSpread(_objectSpread(_objectSpread({
        payload: entry
      }, presentationProps), entry), cells && cells[index] && cells[index].props);
    });
  }
  if (cells && cells.length) {
    return cells.map(function(cell) {
      return _objectSpread(_objectSpread({}, presentationProps), cell.props);
    });
  }
  return [];
});
_defineProperty(Pie, "parseCoordinateOfPie", function(itemProps, offset) {
  var top = offset.top, left = offset.left, width = offset.width, height = offset.height;
  var maxPieRadius = getMaxRadius(width, height);
  var cx = left + getPercentValue(itemProps.cx, width, width / 2);
  var cy = top + getPercentValue(itemProps.cy, height, height / 2);
  var innerRadius = getPercentValue(itemProps.innerRadius, maxPieRadius, 0);
  var outerRadius = getPercentValue(itemProps.outerRadius, maxPieRadius, maxPieRadius * 0.8);
  var maxRadius = itemProps.maxRadius || Math.sqrt(width * width + height * height) / 2;
  return {
    cx,
    cy,
    innerRadius,
    outerRadius,
    maxRadius
  };
});
_defineProperty(Pie, "getComposedData", function(_ref4) {
  var item = _ref4.item, offset = _ref4.offset;
  var itemProps = item.type.defaultProps !== void 0 ? _objectSpread(_objectSpread({}, item.type.defaultProps), item.props) : item.props;
  var pieData = _Pie.getRealPieData(itemProps);
  if (!pieData || !pieData.length) {
    return null;
  }
  var cornerRadius = itemProps.cornerRadius, startAngle = itemProps.startAngle, endAngle = itemProps.endAngle, paddingAngle = itemProps.paddingAngle, dataKey = itemProps.dataKey, nameKey = itemProps.nameKey, valueKey = itemProps.valueKey, tooltipType = itemProps.tooltipType;
  var minAngle = Math.abs(itemProps.minAngle);
  var coordinate = _Pie.parseCoordinateOfPie(itemProps, offset);
  var deltaAngle = _Pie.parseDeltaAngle(startAngle, endAngle);
  var absDeltaAngle = Math.abs(deltaAngle);
  var realDataKey = dataKey;
  if (isNil(dataKey) && isNil(valueKey)) {
    warn(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
    realDataKey = "value";
  } else if (isNil(dataKey)) {
    warn(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
    realDataKey = valueKey;
  }
  var notZeroItemCount = pieData.filter(function(entry) {
    return getValueByDataKey(entry, realDataKey, 0) !== 0;
  }).length;
  var totalPadingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
  var realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPadingAngle;
  var sum = pieData.reduce(function(result, entry) {
    var val = getValueByDataKey(entry, realDataKey, 0);
    return result + (isNumber(val) ? val : 0);
  }, 0);
  var sectors;
  if (sum > 0) {
    var prev;
    sectors = pieData.map(function(entry, i) {
      var val = getValueByDataKey(entry, realDataKey, 0);
      var name = getValueByDataKey(entry, nameKey, i);
      var percent = (isNumber(val) ? val : 0) / sum;
      var tempStartAngle;
      if (i) {
        tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
      } else {
        tempStartAngle = startAngle;
      }
      var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{
        name,
        value: val,
        payload: entry,
        dataKey: realDataKey,
        type: tooltipType
      }];
      var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
      prev = _objectSpread(_objectSpread(_objectSpread({
        percent,
        cornerRadius,
        name,
        tooltipPayload,
        midAngle,
        middleRadius,
        tooltipPosition
      }, entry), coordinate), {}, {
        value: getValueByDataKey(entry, realDataKey),
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entry,
        paddingAngle: mathSign(deltaAngle) * paddingAngle
      });
      return prev;
    });
  }
  return _objectSpread(_objectSpread({}, coordinate), {}, {
    sectors,
    data: pieData
  });
});
var PieChart = generateCategoricalChart({
  chartName: "PieChart",
  GraphicalChild: Pie,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: PolarAngleAxis
  }, {
    axisType: "radiusAxis",
    AxisComp: PolarRadiusAxis
  }],
  formatAxisMap,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
function getClinicalAuditEntries() {
  try {
    const store = JSON.parse(
      localStorage.getItem("medicare_clinical_data") || "{}"
    );
    return store.auditTrail ?? [];
  } catch {
    return [];
  }
}
const ROLE_COLORS = {
  admin: "bg-amber-100 text-amber-800",
  doctor: "bg-blue-100 text-blue-800",
  consultant_doctor: "bg-purple-100 text-purple-800",
  medical_officer: "bg-sky-100 text-sky-800",
  intern_doctor: "bg-cyan-100 text-cyan-800",
  nurse: "bg-pink-100 text-pink-800",
  staff: "bg-muted text-muted-foreground",
  patient: "bg-teal-100 text-teal-800"
};
const CHART_PALETTE = [
  "#0ea5e9",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#ec4899",
  "#06b6d4"
];
const ENTITY_TYPES = [
  "All",
  "AI Suggestion",
  "Patient",
  "Visit",
  "Prescription",
  "Appointment",
  "Handover",
  "User Account",
  "Observation",
  "ClinicalNote",
  "ClinicalOrder",
  "BedRecord"
];
const PAGE_SIZE = 50;
function csvCell(v) {
  return `"${String(v ?? "").replace(/"/g, '""')}"`;
}
function generateCSV(clinicalEntries, legacyLogs, fromDate, toDate2) {
  const header = "Timestamp,User,Role,Entity Type,Entity ID,Field / Action,Before Value,After Value,Reason / Target";
  const clinicalRows = clinicalEntries.map((e) => {
    const ts = new Date(Number(e.changedAt) / 1e6).toISOString();
    return [
      csvCell(ts),
      csvCell(e.changedByName),
      csvCell(e.changedByRole),
      csvCell(e.entityType),
      csvCell(String(e.entityId ?? "")),
      csvCell(e.fieldName),
      csvCell(e.beforeValue ?? ""),
      csvCell(e.afterValue),
      csvCell(e.reason ?? "")
    ].join(",");
  });
  const legacyRows = legacyLogs.map((l) => {
    return [
      csvCell(l.timestamp),
      csvCell(l.userName),
      csvCell(l.userRole),
      csvCell("—"),
      csvCell("—"),
      csvCell(l.action),
      csvCell("—"),
      csvCell("—"),
      csvCell(l.target)
    ].join(",");
  });
  const csv = [header, ...clinicalRows, ...legacyRows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const from = fromDate || format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const to = toDate2 || format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  a.download = `audit-log-${from}-to-${to}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
function printAuditLog(clinicalEntries, legacyLogs, fromDate, toDate2, totalOriginal) {
  const rows = [
    ...clinicalEntries.map((e) => {
      const ts = format(
        new Date(Number(e.changedAt) / 1e6),
        "MMM d, yyyy HH:mm"
      );
      return `<tr>
        <td>${ts}</td>
        <td>${e.changedByName}</td>
        <td>${e.changedByRole}</td>
        <td>${e.entityType}</td>
        <td>${e.fieldName}</td>
        <td class="before">${e.beforeValue ?? "—"}</td>
        <td class="after">${e.afterValue}</td>
        <td>${e.reason ?? "—"}</td>
      </tr>`;
    }),
    ...legacyLogs.map((l) => {
      const ts = format(new Date(l.timestamp), "MMM d, yyyy HH:mm");
      return `<tr>
        <td>${ts}</td>
        <td>${l.userName}</td>
        <td>${l.userRole}</td>
        <td>—</td>
        <td>${l.action}</td>
        <td class="before">—</td>
        <td class="after">—</td>
        <td>${l.target}</td>
      </tr>`;
    })
  ].join("\n");
  const from = fromDate || "All";
  const to = toDate2 || "All";
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>Audit Log ${from} to ${to}</title>
<style>
  body { font-family: Arial, sans-serif; font-size: 11px; margin: 20px; color: #111; }
  h1 { font-size: 16px; margin-bottom: 4px; }
  .meta { color: #555; font-size: 10px; margin-bottom: 16px; }
  table { width: 100%; border-collapse: collapse; }
  th { background: #f3f4f6; text-align: left; padding: 6px 8px; font-size: 10px; border: 1px solid #d1d5db; }
  td { padding: 5px 8px; border: 1px solid #e5e7eb; vertical-align: top; }
  tr:nth-child(even) td { background: #f9fafb; }
  .before { background: #fffbeb !important; color: #92400e; }
  .after { background: #f0fdf4 !important; color: #166534; }
</style>
</head>
<body>
<h1>Dr. Arman Kabir's Care — Audit Trail</h1>
<p class="meta">Period: ${from} to ${to} &nbsp;·&nbsp; Showing ${clinicalEntries.length + legacyLogs.length} of ${totalOriginal} entries &nbsp;·&nbsp; Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
<table>
  <thead>
    <tr>
      <th>Timestamp</th><th>User</th><th>Role</th><th>Entity</th>
      <th>Field / Action</th><th>Before</th><th>After</th><th>Reason / Target</th>
    </tr>
  </thead>
  <tbody>
    ${rows}
  </tbody>
</table>
</body>
</html>`;
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => {
    win.print();
  }, 400);
}
function LegacyLogRow({ log, idx }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { "data-ocid": `audit_log.item.${idx + 1}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground whitespace-nowrap", children: format(new Date(log.timestamp), "MMM d, yyyy HH:mm:ss") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm", children: log.userName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Badge,
      {
        className: `text-xs border-0 ${ROLE_COLORS[log.userRole] ?? "bg-muted text-muted-foreground"}`,
        children: log.userRole
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground", children: "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: log.action }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground", children: "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground", children: "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground max-w-[160px] truncate", children: log.target })
  ] });
}
function ClinicalAuditRow({ entry, idx }) {
  const changedAt = new Date(Number(entry.changedAt) / 1e6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { "data-ocid": `audit_log.item.${idx + 1}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground whitespace-nowrap", children: format(changedAt, "MMM d, yyyy HH:mm:ss") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm", children: entry.changedByName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Badge,
      {
        className: `text-xs border-0 ${ROLE_COLORS[entry.changedByRole] ?? "bg-muted text-muted-foreground"}`,
        children: entry.changedByRole
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs font-mono", children: entry.entityType }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium", children: entry.fieldName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs max-w-[120px]", children: entry.beforeValue ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-amber-50 text-amber-700 border border-amber-200 rounded px-1.5 py-0.5 font-mono truncate block", children: entry.beforeValue }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground italic", children: "—" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs max-w-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-50 text-green-700 border border-green-200 rounded px-1.5 py-0.5 font-mono truncate block", children: entry.afterValue }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground max-w-[120px] truncate", children: entry.reason ?? "—" })
  ] });
}
function AuditDashboard({ legacyLogs, clinicalEntries }) {
  const [days, setDays] = reactExports.useState(7);
  const cutoff = subDays(/* @__PURE__ */ new Date(), days);
  const recentLegacy = reactExports.useMemo(
    () => legacyLogs.filter((l) => new Date(l.timestamp) >= cutoff),
    [legacyLogs, cutoff]
  );
  const recentClinical = reactExports.useMemo(
    () => clinicalEntries.filter(
      (e) => new Date(Number(e.changedAt) / 1e6) >= cutoff
    ),
    [clinicalEntries, cutoff]
  );
  const loginActivity = reactExports.useMemo(() => {
    const map = {};
    for (const l of recentLegacy) {
      if (l.action.toLowerCase().includes("login")) {
        map[l.userName] = (map[l.userName] ?? 0) + 1;
      }
    }
    return Object.entries(map).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 10);
  }, [recentLegacy]);
  const topActions = reactExports.useMemo(() => {
    const map = {};
    const normalize = (action) => {
      const a = action.toLowerCase();
      if (a.includes("prescription")) return "Prescriptions Written";
      if (a.includes("patient") && a.includes("register"))
        return "Patients Registered";
      if (a.includes("visit")) return "Visits Created";
      if (a.includes("edit") || a.includes("update")) return "Edits Made";
      if (a.includes("ai")) return "AI Suggestions";
      if (a.includes("export")) return "Data Exports";
      if (a.includes("login")) return "Logins";
      return "Other Actions";
    };
    for (const l of recentLegacy) {
      const key = normalize(l.action);
      map[key] = (map[key] ?? 0) + 1;
    }
    for (const e of recentClinical) {
      const key = normalize(e.fieldName);
      map[key] = (map[key] ?? 0) + 1;
    }
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 8);
  }, [recentLegacy, recentClinical]);
  const failedLogins = reactExports.useMemo(
    () => recentLegacy.filter(
      (l) => l.action.toLowerCase().includes("failed") || l.action.toLowerCase().includes("login_failed")
    ).slice(0, 20),
    [recentLegacy]
  );
  const aiRate = reactExports.useMemo(() => {
    const accepted = recentLegacy.filter(
      (l) => l.action.toLowerCase().includes("ai suggestion accepted")
    ).length;
    const rejected = recentLegacy.filter(
      (l) => l.action.toLowerCase().includes("ai suggestion rejected")
    ).length;
    const total = accepted + rejected;
    return total === 0 ? null : { accepted, rejected, rate: Math.round(accepted / total * 100) };
  }, [recentLegacy]);
  const aiPieData = aiRate ? [
    { name: "Accepted", value: aiRate.accepted },
    { name: "Rejected", value: aiRate.rejected }
  ] : [];
  const exports$1 = reactExports.useMemo(
    () => recentLegacy.filter((l) => l.action.toLowerCase().includes("export")).slice(0, 20),
    [recentLegacy]
  );
  const roleChanges = reactExports.useMemo(
    () => recentLegacy.filter(
      (l) => l.action.toLowerCase().includes("role") || l.action.toLowerCase().includes("role_change")
    ).slice(0, 20),
    [recentLegacy]
  );
  const dateRangeOptions = [
    { label: "Last 7 days", value: 7 },
    { label: "Last 14 days", value: 14 },
    { label: "Last 30 days", value: 30 },
    { label: "Last 90 days", value: 90 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "audit_dashboard.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Showing data for the past",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-foreground", children: [
          days,
          " days"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: String(days), onValueChange: (v) => setDays(Number(v)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "w-40 h-9 text-sm",
            "data-ocid": "audit_dashboard.date_range.select",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: dateRangeOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(opt.value), children: opt.label }, opt.value)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
      {
        label: "Total Events",
        value: recentLegacy.length + recentClinical.length,
        color: "bg-blue-50 border-blue-200 text-blue-700"
      },
      {
        label: "Failed Logins",
        value: failedLogins.length,
        color: "bg-red-50 border-red-200 text-red-700"
      },
      {
        label: "Data Exports",
        value: exports$1.length,
        color: "bg-amber-50 border-amber-200 text-amber-700"
      },
      {
        label: "Role Changes",
        value: roleChanges.length,
        color: "bg-purple-50 border-purple-200 text-purple-700"
      }
    ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `border rounded-xl p-4 ${stat.color}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium mt-0.5 opacity-80", children: stat.label })
        ]
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-primary" }),
          "Login Activity (by user)"
        ] }),
        loginActivity.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-6 text-center", children: "No logins recorded in this period" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          BarChart,
          {
            data: loginActivity,
            layout: "vertical",
            margin: { left: 8, right: 16, top: 4, bottom: 4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", tick: { fontSize: 11 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  dataKey: "name",
                  type: "category",
                  width: 110,
                  tick: { fontSize: 10 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  contentStyle: { fontSize: 12 },
                  formatter: (v) => [`${v} logins`, "Count"]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", radius: [0, 4, 4, 0], children: loginActivity.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Cell,
                {
                  fill: CHART_PALETTE[loginActivity.indexOf(entry) % CHART_PALETTE.length]
                },
                `login-${entry.name}`
              )) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-primary" }),
          "Top Actions This Week"
        ] }),
        topActions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-6 text-center", children: "No actions recorded in this period" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          BarChart,
          {
            data: topActions,
            margin: { left: 8, right: 16, top: 4, bottom: 32 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                XAxis,
                {
                  dataKey: "name",
                  tick: { fontSize: 9 },
                  angle: -25,
                  textAnchor: "end",
                  interval: 0
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 11 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 12 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", radius: [4, 4, 0, 0], children: topActions.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Cell,
                {
                  fill: CHART_PALETTE[topActions.indexOf(entry) % CHART_PALETTE.length]
                },
                `action-${entry.name}`
              )) })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground mb-4", children: "AI Suggestion Acceptance Rate" }),
        !aiRate ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-6 text-center", children: "No AI suggestion events in this period" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: 180, height: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Pie,
              {
                data: aiPieData,
                cx: "50%",
                cy: "50%",
                innerRadius: 50,
                outerRadius: 80,
                dataKey: "value",
                paddingAngle: 3,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "#10b981" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "#f87171" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 12 } })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-green-600", children: [
              aiRate.rate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Acceptance Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-full bg-green-500 inline-block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Accepted: ",
                  aiRate.accepted
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-full bg-red-400 inline-block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Rejected: ",
                  aiRate.rejected
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-red-500" }),
          "Failed Login Attempts"
        ] }),
        failedLogins.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-6 text-center", children: "No failed logins in this period" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-44 overflow-y-auto", children: failedLogins.map((l, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between text-xs py-1.5 border-b border-border last:border-0",
            "data-ocid": `audit_dashboard.failed_login.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: l.userName || "Unknown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground ml-2", children: l.target })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground whitespace-nowrap", children: format(new Date(l.timestamp), "MMM d, HH:mm") })
            ]
          },
          l.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground mb-4", children: "Data Export History" }),
      exports$1.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No data exports in this period" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-xs font-semibold text-muted-foreground pb-2 pr-4", children: "User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-xs font-semibold text-muted-foreground pb-2 pr-4", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-xs font-semibold text-muted-foreground pb-2 pr-4", children: "Action" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-xs font-semibold text-muted-foreground pb-2", children: "Timestamp" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: exports$1.map((l, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b border-border/50 last:border-0",
            "data-ocid": `audit_dashboard.export.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 font-medium", children: l.userName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-muted-foreground", children: l.userRole }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-muted-foreground", children: l.action }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground whitespace-nowrap", children: format(new Date(l.timestamp), "MMM d, yyyy HH:mm") })
            ]
          },
          l.id
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground mb-4", children: "Role Change Log" }),
      roleChanges.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No role changes in this period" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border", children: ["User Changed", "Action", "Changed By", "Timestamp"].map(
          (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "text-left text-xs font-semibold text-muted-foreground pb-2 pr-4",
              children: h
            },
            h
          )
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: roleChanges.map((l, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b border-border/50 last:border-0",
            "data-ocid": `audit_dashboard.role_change.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 font-medium", children: l.target }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-muted-foreground", children: l.action }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-muted-foreground", children: l.userName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground whitespace-nowrap", children: format(new Date(l.timestamp), "MMM d, yyyy HH:mm") })
            ]
          },
          l.id
        )) })
      ] }) })
    ] })
  ] });
}
function AuditLog() {
  const { currentDoctor } = useEmailAuth();
  const { isAdmin } = useAdminAuth();
  const permissions = useRolePermissions();
  const canView = isAdmin || (currentDoctor == null ? void 0 : currentDoctor.role) === "consultant_doctor" && permissions.canViewAuditTrail;
  const [activeTab, setActiveTab] = reactExports.useState("log");
  const [search, setSearch] = reactExports.useState("");
  const [fromDate, setFromDate] = reactExports.useState("");
  const [toDate2, setToDate] = reactExports.useState("");
  const [entityFilter, setEntityFilter] = reactExports.useState("All");
  const [roleFilter, setRoleFilter] = reactExports.useState("All");
  const [page, setPage] = reactExports.useState(1);
  const legacyLogs = reactExports.useMemo(() => {
    const logs = getAuditLog();
    return [...logs].reverse();
  }, []);
  const clinicalEntries = reactExports.useMemo(() => getClinicalAuditEntries(), []);
  const totalUnfilteredEntries = legacyLogs.length + clinicalEntries.length;
  const allRoles = reactExports.useMemo(() => {
    const roles = /* @__PURE__ */ new Set();
    for (const l of legacyLogs) roles.add(l.userRole);
    for (const e of clinicalEntries) roles.add(e.changedByRole);
    return ["All", ...Array.from(roles)];
  }, [legacyLogs, clinicalEntries]);
  const filteredLegacy = reactExports.useMemo(() => {
    return legacyLogs.filter((log) => {
      if (roleFilter !== "All" && log.userRole !== roleFilter) return false;
      if (entityFilter === "AI Suggestion") {
        if (!log.action.toLowerCase().includes("ai suggestion")) return false;
      } else if (entityFilter !== "All") {
        return false;
      }
      if (search) {
        const q = search.toLowerCase();
        if (!log.userName.toLowerCase().includes(q) && !log.action.toLowerCase().includes(q) && !log.target.toLowerCase().includes(q))
          return false;
      }
      if (fromDate && new Date(log.timestamp) < new Date(fromDate))
        return false;
      if (toDate2 && new Date(log.timestamp) > /* @__PURE__ */ new Date(`${toDate2}T23:59:59`))
        return false;
      return true;
    });
  }, [legacyLogs, search, fromDate, toDate2, entityFilter, roleFilter]);
  const filteredClinical = reactExports.useMemo(() => {
    return clinicalEntries.filter((entry) => {
      if (roleFilter !== "All" && entry.changedByRole !== roleFilter)
        return false;
      if (entityFilter !== "All" && entry.entityType !== entityFilter)
        return false;
      const changedAt = new Date(Number(entry.changedAt) / 1e6);
      if (fromDate && changedAt < new Date(fromDate)) return false;
      if (toDate2 && changedAt > /* @__PURE__ */ new Date(`${toDate2}T23:59:59`)) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!entry.changedByName.toLowerCase().includes(q) && !entry.fieldName.toLowerCase().includes(q) && !entry.entityType.toLowerCase().includes(q) && !(entry.afterValue ?? "").toLowerCase().includes(q))
          return false;
      }
      return true;
    });
  }, [clinicalEntries, search, fromDate, toDate2, entityFilter, roleFilter]);
  const totalEntries = filteredLegacy.length + filteredClinical.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / PAGE_SIZE));
  const pagedClinical = filteredClinical.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );
  const remainingSlots = PAGE_SIZE - pagedClinical.length;
  const legacyOffset = Math.max(
    0,
    (page - 1) * PAGE_SIZE - filteredClinical.length
  );
  const pagedLegacy = filteredLegacy.slice(
    legacyOffset,
    legacyOffset + remainingSlots
  );
  const hasActiveFilters = search || fromDate || toDate2 || entityFilter !== "All" || roleFilter !== "All";
  function resetFilters() {
    setSearch("");
    setFromDate("");
    setToDate("");
    setEntityFilter("All");
    setRoleFilter("All");
    setPage(1);
  }
  if (!canView) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-2xl mx-auto p-6 mt-16 text-center",
        "data-ocid": "audit_log.access_denied_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-8 h-8 text-amber-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground mb-2", children: "Restricted Access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
            "The Audit Trail is only visible to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Admin" }),
            " and",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consultant Doctor" }),
            " roles for medico-legal compliance."
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto p-4 sm:p-6 space-y-5",
      "data-ocid": "audit_log.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-5 h-5 text-amber-700" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-foreground", children: "Full Audit Trail" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                totalUnfilteredEntries,
                " entries — medico-legal compliance record"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => generateCSV(filteredClinical, filteredLegacy, fromDate, toDate2),
                className: "gap-1.5 text-xs h-9",
                "data-ocid": "audit_log.export_csv.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                  "Export CSV"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => printAuditLog(
                  filteredClinical,
                  filteredLegacy,
                  fromDate,
                  toDate2,
                  totalUnfilteredEntries
                ),
                className: "gap-1.5 text-xs h-9",
                "data-ocid": "audit_log.export_pdf.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
                  "Export PDF"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-1 bg-muted/50 rounded-xl p-1 w-fit",
            "data-ocid": "audit_log.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveTab("log"),
                  className: `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "log" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                  "data-ocid": "audit_log.log.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-3.5 h-3.5" }),
                    "Audit Log"
                  ]
                }
              ),
              isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveTab("dashboard"),
                  className: `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "dashboard" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                  "data-ocid": "audit_log.dashboard.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-3.5 h-3.5" }),
                    "Dashboard"
                  ]
                }
              )
            ]
          }
        ),
        activeTab === "dashboard" && isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
          AuditDashboard,
          {
            legacyLogs,
            clinicalEntries
          }
        ),
        activeTab === "log" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3 text-sm text-amber-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Before → After Audit Trail" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-0.5", children: "Every change is recorded with the original value (amber) and new value (green). This log is immutable — no records can be deleted." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-48 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "audit-search",
                    className: "text-xs font-medium text-muted-foreground",
                    children: "Search"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "audit-search",
                      placeholder: "User, action, field...",
                      value: search,
                      onChange: (e) => {
                        setSearch(e.target.value);
                        setPage(1);
                      },
                      className: "pl-9",
                      "data-ocid": "audit_log.search_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Entity Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: entityFilter,
                    onValueChange: (v) => {
                      setEntityFilter(v);
                      setPage(1);
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          className: "w-40 h-9 text-sm",
                          "data-ocid": "audit_log.entity_filter",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ENTITY_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: roleFilter,
                    onValueChange: (v) => {
                      setRoleFilter(v);
                      setPage(1);
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          className: "w-40 h-9 text-sm",
                          "data-ocid": "audit_log.role_filter",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: allRoles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, className: "capitalize", children: r }, r)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "audit-from",
                    className: "text-xs font-medium text-muted-foreground",
                    children: "From Date"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "audit-from",
                    type: "date",
                    value: fromDate,
                    onChange: (e) => {
                      setFromDate(e.target.value);
                      setPage(1);
                    },
                    className: "w-36 h-9 text-sm",
                    "data-ocid": "audit_log.from_date_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "audit-to",
                    className: "text-xs font-medium text-muted-foreground",
                    children: "To Date"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "audit-to",
                    type: "date",
                    value: toDate2,
                    onChange: (e) => {
                      setToDate(e.target.value);
                      setPage(1);
                    },
                    className: "w-36 h-9 text-sm",
                    "data-ocid": "audit_log.to_date_input"
                  }
                )
              ] })
            ] }),
            hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                totalEntries,
                " result",
                totalEntries !== 1 ? "s" : "",
                " matching current filters"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: resetFilters,
                  className: "text-xs text-primary underline flex items-center gap-1 hover:opacity-80",
                  "data-ocid": "audit_log.reset_filters",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                    "Reset filters"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-card border border-border rounded-xl overflow-hidden",
              "data-ocid": "audit_log.table",
              children: totalEntries === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center py-16",
                  "data-ocid": "audit_log.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-10 h-10 text-muted-foreground mx-auto mb-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No audit entries found" }),
                    hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: resetFilters,
                        className: "mt-2 text-sm text-primary underline",
                        children: "Clear filters"
                      }
                    )
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[58vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { className: "sticky top-0 bg-card z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold text-xs w-40", children: "Timestamp" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold text-xs", children: "Changed By" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold text-xs w-28", children: "Role" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold text-xs w-28", children: "Entity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold text-xs", children: "Field / Action" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold text-xs w-32 text-amber-700", children: "Before" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold text-xs w-32 text-green-700", children: "After" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold text-xs", children: "Reason / Target" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
                  pagedClinical.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ClinicalAuditRow,
                    {
                      entry,
                      idx
                    },
                    entry.id.toString()
                  )),
                  pagedLegacy.map((log, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    LegacyLogRow,
                    {
                      log,
                      idx: pagedClinical.length + idx
                    },
                    log.id
                  ))
                ] })
              ] }) })
            }
          ),
          totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between text-sm",
              "data-ocid": "audit_log.pagination",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  "Page ",
                  page,
                  " of ",
                  totalPages,
                  " · ",
                  totalEntries,
                  " entries"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      disabled: page === 1,
                      onClick: () => setPage((p) => p - 1),
                      "data-ocid": "audit_log.pagination_prev",
                      children: "Previous"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      disabled: page === totalPages,
                      onClick: () => setPage((p) => p + 1),
                      "data-ocid": "audit_log.pagination_next",
                      children: "Next"
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  AuditLog as default
};
