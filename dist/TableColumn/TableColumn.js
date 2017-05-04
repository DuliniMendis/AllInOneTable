"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./TableColumn.css");

var _TableCell = require("../TableCell");

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColumn = function (_React$Component) {
  _inherits(TableColumn, _React$Component);

  function TableColumn() {
    _classCallCheck(this, TableColumn);

    return _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).apply(this, arguments));
  }

  _createClass(TableColumn, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "table-column" },
        _react2.default.createElement(_TableCell2.default, { key: "tc-header" + this.props.value,
          type: "header",
          text: this.props.value,
          sortField: this.props.sortField,
          sortDirection: this.props.sortDirection,
          sortAction: this.props.sortAction }),
        this.props.data.map(function (item, i) {
          return _react2.default.createElement(_TableCell2.default, {
            key: "tc" + _this2.props.value + "-" + i,
            position: i,
            type: "cell",
            code: item.code,
            field: _this2.props.value,
            text: item[_this2.props.value],
            editAction: _this2.props.editAction,
            clickAction: _this2.props.clickAction });
        })
      );
    }
  }]);

  return TableColumn;
}(_react2.default.Component);

exports.default = TableColumn;