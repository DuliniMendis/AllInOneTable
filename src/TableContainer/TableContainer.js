import React from "react";
import TableColumn from "../TableColumn";
import './TableContainer.css';
import { SortablePane, Pane } from 'react-sortable-pane';


export default class TableContainer extends React.Component { 




  render() {


   let columnNum = Object.keys(this.props.data[0]).length;
   let columnWidth = Math.floor(this.props.width/(columnNum));
   let leftoverWidth = this.props.width-(columnNum-1)*columnWidth;
   let columnLabels = Object.keys(this.props.fields);

   // let value = document.getElementById('myDiv').clientHeight

   return (

    <div className="sort-container">
    <SortablePane    
    direction="horizontal"
    onResize={(id, dir, size, rect) => null}
    onOrderChange={(panes) => null}
    disableEffect={true}
    className="sortable-pane"
    >       


    {columnLabels.map((item,i)=>{
      return <Pane
      id={"sp"+i}
      key={"sp"+i}
      width={(i<columnNum-1)?columnWidth:leftoverWidth}
      height="100%"
      className="sort-panel"
      isResizable={{ x: true, y: false, xy: false }}        
      >
      <TableColumn 
      key={"tc"+i} 
      value={item}
      type={this.props.fields[item].type} 
      label={this.props.fields[item].label} 
      disabled={this.props.fields[item].disabled}
      mask={this.props.fields[item].mask} 
      placeholder={this.props.fields[item].placeholder}             
      regex={this.props.fields[item].regex}      
      min={this.props.fields[item].min}
      max={this.props.fields[item].max}
      options={this.props.fields[item].options}
      data={this.props.data} 
      sortField={this.props.sortField}
      sortDirection={this.props.sortDirection} 
      sortAction={this.props.sortAction}         
      editAction={this.props.editAction} 
      clickAction={this.props.clickAction}  />
      </Pane>
    })}


    </SortablePane>
    </div>


    );


 }
}




