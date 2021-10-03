import React, { Component } from 'react'
import axios from 'axios'

export default class discompanies extends Component {

    constructor(props){
        super(props);
      
      
      this.state={
    
        compnies:[]
    
      }
    }
    
      componentDidMount(){
        this.retrivecompany();
      }
    
      retrivecompany(){
          axios.get("http://localhost:8070/Company/posts").then(res =>{
            if(res.data.success){
              this.setState({
                compnies:res.data.existingcompnies
              });
            console.log(this.state.compnies)
              
            }
          });
     
      }
    
      onDelete = (id)=>{

        let ans = window.confirm("Do you want to delete this record ?");

        if(ans){
    
          axios.delete('http://localhost:8070/Company/removecompany/'+id).then((res)=>{
    
                  alert("delete successfully")
                  this.retrivecompany()
        
          })

        }
    
      }
      
    
      render() {
        return (
          <div className="container">
            <h1 style={{paddingTop:'5',paddingLeft:'300px'}}>All Registered Companies</h1>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Companyname</th>
                  <th scope="col">Register Number</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                {this.state.compnies.map((compnies,index)=>(
                  <tr key={index}>
                    <th  scope="row">{index+1}</th>
                    <td>{compnies.companyName}</td>
                    <td>{compnies.regNumber}</td>
                    <td>{compnies.companyLocation}</td>
                    <td>
                        <a className = "btn btn-warning" href={'/upcompany/'+ compnies._id}>
                        <i className= "fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className = "btn btn-danger" href="#" onClick={()=>this.onDelete(compnies._id)}>
                        <i className= "fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                        
                    </td>
                  </tr> 
                ))}
              </tbody>
              </table>
              <button type="button" className="btn btn-success"><a href='/addcompany' style={{textDecoration:"none",color:'white'}}>Register New company</a></button>
              &nbsp;
              &nbsp;
              <button type="button" className="btn btn-success"><a href='/addcompanyitems' style={{textDecoration:"none",color:'white'}}>+ Add Item Capacity</a></button>
          </div>
        )
      }
}
