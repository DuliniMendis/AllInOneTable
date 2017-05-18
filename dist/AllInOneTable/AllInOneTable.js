'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableContainer = require('../TableContainer');

var _TableContainer2 = _interopRequireDefault(_TableContainer);

require('./AllInOneTable.css');

var _reactContainerDimensions = require('react-container-dimensions');

var _reactContainerDimensions2 = _interopRequireDefault(_reactContainerDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllInOneTable = function (_React$Component) {
  _inherits(AllInOneTable, _React$Component);

  function AllInOneTable() {
    _classCallCheck(this, AllInOneTable);

    return _possibleConstructorReturn(this, (AllInOneTable.__proto__ || Object.getPrototypeOf(AllInOneTable)).apply(this, arguments));
  }

  _createClass(AllInOneTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(this.props);
      var fieldKeys = Object.keys(this.props.fields);
      var dataKeys = Object.keys(this.props.data[0]);
      var error = false;

      for (var i = 0; i < fieldKeys.length; i++) {
        if (fieldKeys[i] !== dataKeys[i]) error = true;
      }
      if (error === false) return _react2.default.createElement(
        'div',
        { className: 'full-width-height' },
        _react2.default.createElement(
          _reactContainerDimensions2.default,
          null,
          function (_ref) {
            var width = _ref.width,
                height = _ref.height;
            return _react2.default.createElement(_TableContainer2.default, {
              width: width,
              height: height,
              data: _this2.props.data,
              fields: _this2.props.fields,
              sortField: _this2.props.sortField,
              sortDirection: _this2.props.sortDirection,
              sortAction: _this2.props.sortAction,
              editAction: _this2.props.editAction,
              clickAction: _this2.props.clickAction });
          }
        )
      );else return _react2.default.createElement(
        'div',
        null,
        'Fields and data mismatch'
      );
    }
  }]);

  return AllInOneTable;
}(_react2.default.Component);

exports.default = AllInOneTable;