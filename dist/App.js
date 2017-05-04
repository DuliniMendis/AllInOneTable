'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AllInOneTable = require('./components/AllInOneTable');

var _AllInOneTable2 = _interopRequireDefault(_AllInOneTable);

require('./App.css');

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
    value: function handleSort(value) {
      this.setState({ data: newData });
    }
  }, {
    key: 'handleEdit',
    value: function handleEdit(code, value) {}
  }, {
    key: 'handleClick',
    value: function handleClick(code, value) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(AllInOneTable, {
          data: this.state.data,
          sortAction: this.handleSort.bind(this),
          editAction: this.handleEdits.bind(this),
          clickAction: this.hanldeClick.bind(this) })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;