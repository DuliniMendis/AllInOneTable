"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TableColumn = require("../TableColumn");

var _TableColumn2 = _interopRequireDefault(_TableColumn);

require("./TableContainer.css");

var _reactSortablePane = require("react-sortable-pane");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableContainer = function (_React$Component) {
  _inherits(TableContainer, _React$Component);

  function TableContainer() {
    _classCallCheck(this, TableContainer);

    return _possibleConstructorReturn(this, (TableContainer.__proto__ || Object.getPrototypeOf(TableContainer)).apply(this, arguments));
  }

  _createClass(TableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var columnNum = Object.keys(this.props.data[0]).length;
      var columnWidth = Math.floor(this.props.width / columnNum);
      var leftoverWidth = this.props.width - (columnNum - 1) * columnWidth;
      var columnLabels = Object.keys(this.props.data[0]);

      return _react2.default.createElement(
        "div",
        { className: "sort-container" },
        _react2.default.createElement(
          _reactSortablePane.SortablePane,
          {
            direction: "horizontal",
            onResize: function onResize(id, dir, size, rect) {
              return null;
            },
            onOrderChange: function onOrderChange(panes) {
              return null;
            },
            disableEffect: true,
            className: "sortable-pane"
          },
          columnLabels.map(function (item, i) {
            return _react2.default.createElement(
              _reactSortablePane.Pane,
              {
                id: "sp" + i,
                key: "sp" + i,
                width: i < columnNum - 1 ? columnWidth : leftoverWidth,
                height: _this2.props.height - 8,
                className: "sort-panel",
                isResizable: { x: true, y: false, xy: false }
              },
              _react2.default.createElement(_TableColumn2.default, {
                key: "tc" + i,
                value: item,
                data: _this2.props.data,
                sortField: _this2.props.sortField,
                sortDirection: _this2.props.sortDirection,
                sortAction: _this2.props.sortAction,
                editAction: _this2.props.editAction,
                clickAction: _this2.props.clickAction })
            );
          })
        )
      );
    }
  }]);

  return TableContainer;
}(_react2.default.Component);

exports.default = TableContainer;