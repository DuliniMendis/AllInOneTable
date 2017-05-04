'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TableCell.css');

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableCell = function (_React$Component) {
	_inherits(TableCell, _React$Component);

	function TableCell(props) {
		_classCallCheck(this, TableCell);

		var _this = _possibleConstructorReturn(this, (TableCell.__proto__ || Object.getPrototypeOf(TableCell)).call(this, props));

		_this.state = {
			isEditable: props.type === "header" ? false : true,
			isEditing: false,
			value: props.text,
			initialVlaue: props.text
		};
		return _this;
	}

	_createClass(TableCell, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				isEditable: nextProps.type === "header" ? false : true,
				isEditing: false,
				value: nextProps.text,
				initialVlaue: nextProps.text
			});
		}
	}, {
		key: 'handleDoubleClick',
		value: function handleDoubleClick(evt) {

			if (this.state.isEditable === true) this.setState({ isEditing: true });
		}
	}, {
		key: 'handleClick',
		value: function handleClick(evt) {
			this.props.clickAction(this.props.code);
		}
	}, {
		key: 'handleOnChange',
		value: function handleOnChange(evt) {

			this.setState({
				value: evt.target.value
			});
		}
	}, {
		key: 'handleKeyPress',
		value: function handleKeyPress(evt) {

			if (evt.key === 'Enter') {
				//Enter keycode
				this.setState({
					isEditing: false
				});
				this.props.editAction(this.props.code, this.props.field, this.state.value);
			}
		}
	}, {
		key: 'handleClickOutside',
		value: function handleClickOutside(e) {

			this.setState({
				isEditing: false,
				value: this.state.initialVlaue
			});
			if (this.state.value !== this.state.initialVlaue) this.props.editAction(this.props.code, this.props.field, this.state.value);
		}
	}, {
		key: 'handleHeaderClick',
		value: function handleHeaderClick() {
			this.props.sortAction(this.props.text);
		}
	}, {
		key: 'render',
		value: function render() {

			var sortIcon = _react2.default.createElement('i', { className: 'fa fa-sort', 'aria-hidden': 'true' });
			if (this.props.sortField === this.props.text) {
				if (this.props.sortDirection) sortIcon = _react2.default.createElement('i', { className: 'fa fa-sort-desc', 'aria-hidden': 'true' });else sortIcon = _react2.default.createElement('i', { className: 'fa fa-sort-asc', 'aria-hidden': 'true' });;
			}

			if (this.props.type === "header") {

				return _react2.default.createElement(
					'div',
					{ className: 'table-header-cell' },
					_react2.default.createElement(
						'div',
						{ className: 'sort-text', onClick: this.handleHeaderClick.bind(this) },
						this.state.value,
						sortIcon
					)
				);
			} else {
				if (this.props.field !== "title") {
					if (this.state.isEditing === false) return _react2.default.createElement(
						'div',
						{ className: 'table-cell',
							onDoubleClick: this.handleDoubleClick.bind(this) },
						_react2.default.createElement(
							'div',
							{ className: 'cell-text' },
							this.state.value
						)
					);else {
						return _react2.default.createElement(
							'div',
							{ className: 'table-cell isEditing' },
							_react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleOnChange.bind(this), onKeyPress: this.handleKeyPress.bind(this) })
						);
					}
				} else {
					if (this.state.isEditing === false) return _react2.default.createElement(
						'div',
						{ className: "table-cell clickable",
							onClick: this.props.handleClick(this.props.code, this.props.value),
							onDoubleClick: this.handleDoubleClick.bind(this) },
						this.state.value
					);else {
						return _react2.default.createElement(
							'div',
							{ className: 'table-cell isEditing' },
							_react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleOnChange.bind(this), onKeyPress: this.handleKeyPress.bind(this) })
						);
					}
				}
			}
		}
	}]);

	return TableCell;
}(_react2.default.Component);

exports.default = (0, _reactOnclickoutside2.default)(TableCell);