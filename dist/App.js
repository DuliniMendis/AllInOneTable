'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AllInOneTable = require('./AllInOneTable');

var _AllInOneTable2 = _interopRequireDefault(_AllInOneTable);

require('./App.css');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.handleSort = function (field) {

      var data = _this.state.data.slice();

      var sortedData = data.sort(function (a, b) {
        if (_this.state.sortDirectionAsc) {
          if (a[field] > b[field]) return 1;else if (a[field] < b[field]) return -1;else return 0;
        } else {
          if (a[field] > b[field]) return -1;else if (a[field] < b[field]) return 1;else return 0;
        }
      });
      _this.setState({
        data: sortedData,
        sortDirectionAsc: !_this.state.sortDirectionAsc,
        sortField: field
      });
    };

    _this.handleEdit = function (code, field, value) {
      console.log(code, field, value);
      var data = _this.state.data;
      var itemIndex = data.findIndex(function (item) {
        return item.code === code;
      });
      data[itemIndex][field] = value;
      _this.setState({ data: data });
    };

    _this.state = {
      sortDirectionAsc: true,
      sortField: "",
      data: [{
        code: "j000",
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 2
      }, {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",
        phone: "0416957846",
        required: 1
      }, {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      }, {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub dfdsfsjl xlksdlfjs d lksdfjslfjs sldkfjsdlfjs  skfjsfjsld sfksbf skdjfskddfhs k",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      }, {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      }],
      fields: {
        code: {
          id: 0,
          type: 'text',
          label: 'Code',
          min: 1,
          max: 100,
          disabled: true
        },
        title: {
          id: 1,
          type: 'text',
          label: 'Title',
          min: 1,
          max: 100,
          disabled: true
        },
        company: {
          id: 2,
          type: 'text',
          label: 'Company',
          min: 1,
          max: 100
        },
        contact: {
          id: 3,
          type: 'text',
          label: 'Contact',
          min: 1,
          max: 100
        },
        phone: {
          id: 4,
          type: 'integer',
          label: 'Phone',
          min: 1,
          max: 100
        },
        required: {
          id: 0,
          type: 'integer',
          label: 'Required',
          min: 1,
          max: 100
        }

      }
    };

    return _this;
  }

  _createClass(App, [{
    key: 'handleClick',
    value: function handleClick(code, field, value) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(_AllInOneTable2.default, {
          data: this.state.data,
          fields: this.state.fields,
          sortField: this.state.sortField,
          sortDirection: this.state.sortDirectionAsc,
          sortAction: this.handleSort,
          editAction: this.handleEdit,
          clickAction: this.handleClick })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;