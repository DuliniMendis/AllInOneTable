import React from "react";
import './TableCell.css'
import onClickOutside from 'react-onclickoutside';


class TableCell extends React.Component {

	constructor(props){
		super(props);
		this.state={
			isEditable: props.type==="header" ? false : true,
			isEditing: false,
			value: props.text,
			initialVlaue: props.text
		}
	}

	componentWillReceiveProps(nextProps){
	    this.setState({
	      isEditable: nextProps.type==="header" ? false : true,
			isEditing: false,
			value: nextProps.text,
			initialVlaue: nextProps.text
	    });
	  }

	handleDoubleClick (evt) {
		
		if(this.state.isEditable===true)
			this.setState({isEditing:true});

	}


	handleClick (evt) {
		this.props.clickAction(this.props.code);
	}

	handleOnChange (evt) {
		
		this.setState({
	    		value:evt.target.value
	    	});		

		
	}


	handleKeyPress (evt)  {
		
		if(evt.key === 'Enter') { //Enter keycode
	    	this.setState({	    		
	    		isEditing: false
	    	});
	    	this.props.editAction(this.props.code,this.props.field,this.state.value);
		}

	}

	handleClickOutside (e) {
		
		this.setState({	    		
	    		isEditing: false,
	    		value: this.state.initialVlaue
	    	});
		if(this.state.value !== this.state.initialVlaue)
			this.props.editAction(this.props.code,this.props.field,this.state.value);

	}

	handleHeaderClick(){
		this.props.sortAction(this.props.text);
	}

	render() {

		let sortIcon= (<i className="fa fa-sort" aria-hidden="true"></i>);
		if(this.props.sortField===this.props.text){
			if(this.props.sortDirection)
				sortIcon = (<i className="fa fa-sort-desc" aria-hidden="true"></i>);
			else
				sortIcon =  (<i className="fa fa-sort-asc" aria-hidden="true"></i>);;
		}
	
		if(this.props.type==="header"){
			
			return (
					<div className="table-header-cell" >
						<div className="sort-text" onClick={this.handleHeaderClick.bind(this)}>
						{this.state.value}{sortIcon}
						</div>
					</div>   
					);
		}
		else{
			if(this.props.field!=="title"){
				if(this.state.isEditing===false)
					return (
						<div className="table-cell" 
						onDoubleClick={this.handleDoubleClick.bind(this)}>
						<div className="cell-text">
						{this.state.value}
						</div>
						</div>   
						);
				else{
					return (
						<div className="table-cell isEditing">
						<input type="text" value={this.state.value} onChange={this.handleOnChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
						</div>   
						);
				}
			}
			else{
				if(this.state.isEditing===false)
					return (
						<div className={"table-cell clickable"}
						onClick={this.props.handleClick(this.props.code,this.props.value)}
						onDoubleClick={this.handleDoubleClick.bind(this)}>
						{this.state.value}
						</div>   
						);
				else{
					return (
						<div className="table-cell isEditing">
						<input type="text" value={this.state.value} onChange={this.handleOnChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
						</div>   
						);
				}
			}
		}
			
	
	}
}

export default onClickOutside(TableCell);
