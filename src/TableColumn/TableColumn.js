import React from "react";
import './TableColumn.css'
import TableCell from "../TableCell";

export default class TableColumn extends React.Component {



  render() {

   return (

    <div className={"table-column"}>
   
      <TableCell key={"tc-header"+this.props.value} 
        type="header" 
        text={this.props.value} 
        label={this.props.label}
        sortField={this.props.sortField}
        sortDirection={this.props.sortDirection} 
        sortAction={this.props.sortAction}    />

      {this.props.data.map((item,i)=>{
        return <TableCell 
          key={"tc"+this.props.value+"-"+i} 
          position={i}
          type="cell" 
          code={item.code}
          field={this.props.value}
          text={item[this.props.value]}  
          type={this.props.type} 
          disabled={this.props.disabled}
          mask={this.props.mask} 
          placeholder={this.props.placeholder}             
          regex={this.props.regex}      
          min={this.props.min}
          max={this.props.max}
          options={this.props.options}         
          editAction={this.props.editAction} 
          clickAction={this.props.clickAction}     />
      })}

    </div>


    );
  }
}
