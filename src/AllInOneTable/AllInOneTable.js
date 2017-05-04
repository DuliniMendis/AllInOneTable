import React from "react";
import TableContainer from '../TableContainer';
import './AllInOneTable.css';
import ContainerDimensions from 'react-container-dimensions';

export default class DnDOverlay extends React.Component {

  

render() {

  return (
  	<div className="full-width-height">
    <ContainerDimensions>
    { ({ width, height }) =>
    <TableContainer
        width={width}
        height={height}
        data={this.props.data}  
         sortField={this.props.sortField}
        sortDirection={this.props.sortDirection} 
        sortAction={this.props.sortAction}         
        editAction={this.props.editAction}
        clickAction={this.props.clickAction}/> 
     }
    </ContainerDimensions>  
    </div>
    
    );
}
}

