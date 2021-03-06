import React from "react";
import './TableCell.css'
import onClickOutside from 'react-onclickoutside';
import FormComponent from 'FormComponent';

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

	handleDoubleClick = (evt) => {
		
		if(this.state.isEditable===true)
			this.setState({isEditing:true});

	}


	handleClick = (evt) => {
		this.props.clickAction(this.props.code);
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

	handleChange = (id,value) => {
		this.props.editAction(this.props.code,this.props.field,value);
	}

	handleClickOutside = (e) => {
		
		this.setState({	    		
	    		isEditing: false,
	    		value: this.state.initialVlaue
	    	});
		if(this.state.value !== this.state.initialVlaue)
			this.props.editAction(this.props.code,this.props.field,this.state.value);

	}

	handleHeaderClick = (evt) => {
		this.props.sortAction(this.props.text);
	}

	render() {

		let styles={     
	      style:{
	        fontSize:'14px',
	        height:'40px',	
	        width:'90%'      
	      },
	      inputStyle:{
	        paddingLeft:'5px',
	        paddingRight:'5px',
	        textAlign:'center',
	        boxSizing:'border-box'
	      },
	      underlineStyle:{
	      	
	      }
	    }

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
						<div className="sort-text" onClick={this.handleHeaderClick}>
						{this.props.label}{sortIcon}
						</div>
					</div>   
					);
		}
		else{
			if(!this.props.disabled){
				if(this.state.isEditing===false)
					return (
						<div className="table-cell" 
						onDoubleClick={this.handleDoubleClick}>
						<div className="cell-text">
						{this.state.value}
						</div>
						</div>   
						);
				else{
					return (
						<div className="table-cell isEditing">
						<div className="cell-text">
						<FormComponent
				          id={this.props.code}
				          type={this.props.type} 
				          value={this.props.text}          
				          mask={this.props.mask} 
				          placeholder={this.props.placeholder}             
				          regex={this.props.regex}      
				          min={this.props.min}
				          max={this.props.max}
				          options={this.props.options}
				          styles={styles}
				          changeComponent={this.handleChange}/>
						
						</div>
						</div>   
						);
				}
			}
			else{
				
					return (
						<div className={"table-cell clickable"}
						onClick={this.handleClick(this.props.code,this.props.value)}
						onDoubleClick={this.handleDoubleClick}>
						<div className="cell-text">
						{this.state.value}
						</div>
						</div>   
						);

			}
		}
			
	
	}
}

export default onClickOutside(TableCell);
