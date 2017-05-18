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

var _FormComponent = require('FormComponent');

var _FormComponent2 = _interopRequireDefault(_FormComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableCell = function (_React$Component) {
	_inherits(TableCell, _React$Component);

	function TableCell(props) {
		_classCallCheck(this, TableCell);

		var _this = _possibleConstructorReturn(this, (TableCell.__proto__ || Object.getPrototypeOf(TableCell)).call(this, props));

		_this.handleDoubleClick = function (evt) {

			if (_this.state.isEditable === true) _this.setState({ isEditing: true });
		};

		_this.handleClick = function (evt) {
			_this.props.clickAction(_this.props.code);
		};

		_this.handleChange = function (id, value) {
			_this.props.editAction(_this.props.code, _this.props.field, value);
		};

		_this.handleClickOutside = function (e) {

			_this.setState({
				isEditing: false,
				value: _this.state.initialVlaue
			});
			if (_this.state.value !== _this.state.initialVlaue) _this.props.editAction(_this.props.code, _this.props.field, _this.state.value);
		};

		_this.handleHeaderClick = function (evt) {
			_this.props.sortAction(_this.props.text);
		};

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

		// handleOnChange = (evt) => {

		// 	this.setState({
		//     		value:evt.target.value
		//     	});		


		// }


		// handleKeyPress = (evt) =>  {

		// 	if(evt.key === 'Enter') { //Enter keycode
		//     	this.setState({	    		
		//     		isEditing: false
		//     	});
		//    	this.props.editAction(this.props.code,this.props.field,this.state.value);
		// 	}

		// }

	}, {
		key: 'render',
		value: function render() {

			var styles = {
				style: {
					fontSize: '14px',
					height: '40px',
					width: '90%'
				},
				inputStyle: {
					paddingLeft: '5px',
					paddingRight: '5px',
					textAlign: 'center',
					boxSizing: 'border-box'
				},
				underlineStyle: {}
			};

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
						{ className: 'sort-text', onClick: this.handleHeaderClick },
						this.props.label,
						sortIcon
					)
				);
			} else {
				if (!this.props.disabled) {
					if (this.state.isEditing === false) return _react2.default.createElement(
						'div',
						{ className: 'table-cell',
							onDoubleClick: this.handleDoubleClick },
						_react2.default.createElement(
							'div',
							{ className: 'cell-text' },
							this.state.value
						)
					);else {
						return _react2.default.createElement(
							'div',
							{ className: 'table-cell isEditing' },
							_react2.default.createElement(
								'div',
								{ className: 'cell-text' },
								_react2.default.createElement(_FormComponent2.default, {
									id: this.props.code,
									type: this.props.type,
									value: this.props.text,
									mask: this.props.mask,
									placeholder: this.props.placeholder,
									regex: this.props.regex,
									min: this.props.min,
									max: this.props.max,
									options: this.props.options,
									styles: styles,
									changeComponent: this.handleChange })
							)
						);
					}
				} else {

					return _react2.default.createElement(
						'div',
						{ className: "table-cell clickable",
							onClick: this.handleClick(this.props.code, this.props.value),
							onDoubleClick: this.handleDoubleClick },
						_react2.default.createElement(
							'div',
							{ className: 'cell-text' },
							this.state.value
						)
					);
				}
			}
		}
	}]);

	return TableCell;
}(_react2.default.Component);

exports.default = (0, _reactOnclickoutside2.default)(TableCell);