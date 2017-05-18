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
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",               
        phone: "0416234098",
        required: 2      
      },
      {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",        
        phone: "0416957846",
        required: 1
      },
      {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      },
      {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j000",
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",               
        phone: "0416234098",
        required: 2      
      },
      {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",        
        phone: "0416957846",
        required: 1
      },
      {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      },
      {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j000",
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",               
        phone: "0416234098",
        required: 2      
      },
      {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",        
        phone: "0416957846",
        required: 1
      },
      {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      },
      {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j000",
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",               
        phone: "0416234098",
        required: 2      
      },
      {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",        
        phone: "0416957846",
        required: 1
      },
      {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      },
      {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j000",
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",               
        phone: "0416234098",
        required: 2      
      },
      {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",        
        phone: "0416957846",
        required: 1
      },
      {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      },
      {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j000",
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",               
        phone: "0416234098",
        required: 2      
      },
      {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",        
        phone: "0416957846",
        required: 1
      },
      {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      },
      {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j000",
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",               
        phone: "0416234098",
        required: 2      
      },
      {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",        
        phone: "0416957846",
        required: 1
      },
      {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      },
      {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j000",
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",               
        phone: "0416234098",
        required: 2      
      },
      {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",        
        phone: "0416957846",
        required: 1
      },
      {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      },
      {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j000",
        title: "Software Engineer",
        company: "OutcomeHub",
        contact: "Dom",               
        phone: "0416234098",
        required: 2      
      },
      {
        code: "j001",
        title: "Business Analyst",
        company: "OutcomeHub",
        contact: "Adam",        
        phone: "0416957846",
        required: 1
      },
      {
        code: "j002",
        title: "Project Manager",
        company: "OutcomeHub",
        contact: "Gerard",
        phone: "0416099284",
        required: 1
      },
      {
        code: "j003",
        title: "Marketing Intern",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      },
      {
        code: "j004",
        title: "UI/UX Designer",
        company: "OutcomeHub",
        contact: "Dom",
        phone: "0416234098",
        required: 1
      }
      ],    
    fields:{
       code: {
        id:0,
        type:'text',
        label:'Code',
        min:1,
        max:100,
        disabled:true
      },
      title: {
        id:1,
        type:'text',
        label:'Title',
        min:1,
        max:100,
        disabled:true
      },
      company: {
        id:2,
        type:'text',
        label:'Company',
        min:1,
        max:100
      },
      contact: {
        id:3,
        type:'text',
        label:'Contact',
        min:1,
        max:100
      },
      phone: {
        id:4,
        type:'integer',
        label:'Phone',
        min:1,
        max:100
      },
      required: {
        id:0,
        type:'integer',
        label:'Required',
        min:1,
        max:100
      }

    }
    }
    
  }

  handleSort = (field) => {
    
    let data = this.state.data.slice();

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

 handleEdit = (code,field,value) =>  {   
  console.log(code,field,value)
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
        fields={this.state.fields}
        sortField={this.state.sortField}
        sortDirection={this.state.sortDirectionAsc} 
        sortAction={this.handleSort}         
        editAction={this.handleEdit}
        clickAction={this.handleClick}/> 


    </div>
    );
}
}
