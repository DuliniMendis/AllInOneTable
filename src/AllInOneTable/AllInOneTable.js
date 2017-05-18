import React from "react";
import TableContainer from '../TableContainer';
import './AllInOneTable.css';
import ContainerDimensions from 'react-container-dimensions';

export default class DnDOverlay extends React.Component {

  

render() {

  let fieldKeys = Object.keys(this.props.fields);
  let dataKeys = Object.keys(this.props.data[0]);
  let error = false;
  
  for(let i=0;i<fieldKeys.length;i++){
    if(fieldKeys[i]!==dataKeys[i])
      error = true;
  }
  if(error===false)

  return (
  	<div className="full-width-height">
    <ContainerDimensions>
    { ({ width, height }) =>
    <TableContainer
        width={width}
        height={height}
        data={this.props.data}  
        fields={this.props.fields}
        sortField={this.props.sortField}
        sortDirection={this.props.sortDirection} 
        sortAction={this.props.sortAction}         
        editAction={this.props.editAction}
        clickAction={this.props.clickAction}/> 
     }
    </ContainerDimensions>  
    </div>
    
    );

  else
    return (<div>Fields and data mismatch</div>);
}
}

