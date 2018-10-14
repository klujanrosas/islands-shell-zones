"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shell = void 0;

var _react = _interopRequireDefault(require("react"));

var _ioc = require("@kwri/ioc");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var KWRIHeader = function KWRIHeader() {
  return _react.default.createElement("header", null, "This is a shared ", _react.default.createElement("strong", null, "header"), " provided by @kwri/shell");
};

var KWRIFooter = function KWRIFooter() {
  return _react.default.createElement("footer", null, "This is a shared ", _react.default.createElement("strong", null, "footer"), " provider by @kwri/shell");
};

var Shell = (_dec = (0, _ioc.provide)({
  KWRIHeader: KWRIHeader,
  KWRIFooter: KWRIFooter
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Shell, _React$Component);

  function Shell() {
    _classCallCheck(this, Shell);

    return _possibleConstructorReturn(this, _getPrototypeOf(Shell).apply(this, arguments));
  }

  _createClass(Shell, [{
    key: "render",
    value: function render() {
      /* We can even share a global Layout from this Shell, via static properties, or any other means */
      return _react.default.createElement("div", {
        style: {
          border: '2px dashed red '
        }
      }, this.props.children);
    }
  }]);

  return Shell;
}(_react.default.Component)) || _class);
exports.Shell = Shell;