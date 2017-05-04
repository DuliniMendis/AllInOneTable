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

    _this.state = {
      sortDirectionAsc: true,
      sortField: "",
      data: [{
        code: "j000",
        label: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",
        requiredNum: 2,
        phone: "0416234098",
        applied: 5,
        screened: 0,
        interviewed: 0,
        shortlisted: 0,
        offer: 0,
        placed: 0
      }, {
        code: "j001",
        label: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",
        requiredNum: 1,
        phone: "0416957846",
        applied: 4,
        screened: 0,
        interviewed: 0,
        shortlisted: 0,
        offer: 0,
        placed: 0
      }, {
        code: "j002",
        label: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        requiredNum: 1,
        phone: "0416099284",
        applied: 4,
        screened: 0,
        interviewed: 0,
        shortlisted: 0,
        offer: 0,
        placed: 0
      }, {
        code: "j003",
        label: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        requiredNum: 2,
        phone: "0416234098",
        applied: 3,
        screened: 0,
        interviewed: 0,
        shortlisted: 0,
        offer: 0,
        placed: 0
      }, {
        code: "j004",
        label: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        requiredNum: 1,
        phone: "0416234098",
        applied: 1,
        screened: 0,
        interviewed: 0,
        shortlisted: 0,
        offer: 0,
        placed: 0
      }]
    };
    return _this;
  }

  _createClass(App, [{
    key: 'handleSort',
    value: function handleSort(field) {
      var _this2 = this;

      var data = this.state.data.slice();

      console.log(data[0][field] > data[1][field]);
      var sortedData = data.sort(function (a, b) {
        if (_this2.state.sortDirectionAsc) {
          if (a[field] > b[field]) return 1;else if (a[field] < b[field]) return -1;else return 0;
        } else {
          if (a[field] > b[field]) return -1;else if (a[field] < b[field]) return 1;else return 0;
        }
      });
      this.setState({
        data: sortedData,
        sortDirectionAsc: !this.state.sortDirectionAsc,
        sortField: field
      });
    }
  }, {
    key: 'handleEdit',
    value: function handleEdit(code, field, value) {
      var data = this.state.data;
      var itemIndex = data.findIndex(function (item) {
        return item.code === code;
      });
      data[itemIndex][field] = value;
      this.setState({ data: data });
    }
  }, {
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
          sortField: this.state.sortField,
          sortDirection: this.state.sortDirectionAsc,
          sortAction: this.handleSort.bind(this),
          editAction: this.handleEdit.bind(this),
          clickAction: this.handleClick.bind(this) })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;