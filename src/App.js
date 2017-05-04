import React, { Component } from 'react';
import AllInOneTable from './AllInOneTable';
import './App.css';

import FontAwesome from 'react-fontawesome';


export default class App extends Component {
  constructor(){
    super();
    this.state={
      sortDirectionAsc:true,
      sortField:"",
      data : [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
      ]
    }
  }

  handleSort (field) {
    
    let data = this.state.data.slice();

    console.log(data[0][field]>data[1][field]);
    let sortedData = data.sort((a,b)=>{
      if(this.state.sortDirectionAsc) {
        if(a[field]>b[field])
            return 1;
        else if(a[field]<b[field])
            return -1;
        else
            return  0;
    }
      else{
        if(a[field]>b[field])
            return -1;
        else if(a[field]<b[field])
            return 1;
        else
            return  0;
    }
    });
    this.setState({
        data:sortedData, 
        sortDirectionAsc:!this.state.sortDirectionAsc,
        sortField:field
    });
   
 }

 handleEdit (code,field,value)  {   
    let data = this.state.data;
    let itemIndex = data.findIndex((item)=>{return item.code===code;});
    data[itemIndex][field] = value;
    this.setState({data:data});
 }

handleClick (code,field,value)  {

}


 render() {
  return (
    <div className="App">

     <AllInOneTable        
        data={this.state.data} 
        sortField={this.state.sortField}
        sortDirection={this.state.sortDirectionAsc} 
        sortAction={this.handleSort.bind(this)}         
        editAction={this.handleEdit.bind(this)}
        clickAction={this.handleClick.bind(this)}/> 


    </div>
    );
}
}
