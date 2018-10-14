"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IOCContext = exports.provide = exports.inject = void 0;

var _react = _interopRequireDefault(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IOCContext = _react.default.createContext({});

exports.IOCContext = IOCContext;

var provide = function provide() {
  var injectables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (BaseComponent) {
    var ProvideEnhancer =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(ProvideEnhancer, _React$Component);

      function ProvideEnhancer() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, ProvideEnhancer);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProvideEnhancer)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
          injectables: injectables
        });

        return _this;
      }

      _createClass(ProvideEnhancer, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(IOCContext.Provider, {
            value: this.state.injectables
          }, _react.default.createElement(BaseComponent, this.props));
        }
      }]);

      return ProvideEnhancer;
    }(_react.default.Component);

    return (0, _hoistNonReactStatics.default)(ProvideEnhancer, BaseComponent);
  };
};

exports.provide = provide;

var inject = function inject() {
  var selectedDependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function (BaseComponent) {
    var InjectEnhancer =
    /*#__PURE__*/
    function (_React$Component2) {
      _inherits(InjectEnhancer, _React$Component2);

      function InjectEnhancer() {
        var _getPrototypeOf3;

        var _this2;

        _classCallCheck(this, InjectEnhancer);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(InjectEnhancer)).call.apply(_getPrototypeOf3, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "injectDependencies", function (availableDependencies) {
          var dependenciesToInject = (0, _lodash.default)(availableDependencies, selectedDependencies);
          return _react.default.createElement(BaseComponent, _extends({}, _this2.props, dependenciesToInject));
        });

        return _this2;
      }

      _createClass(InjectEnhancer, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(IOCContext, null, this.injectDependencies);
        }
      }]);

      return InjectEnhancer;
    }(_react.default.Component);

    return (0, _hoistNonReactStatics.default)(InjectEnhancer, BaseComponent);
  };
};

exports.inject = inject;