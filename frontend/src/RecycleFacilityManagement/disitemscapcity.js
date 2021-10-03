import React, { Component } from 'react'
import axios from 'axios'

export default class discompanies extends Component {

    constructor(props){
        super(props);
      
      
      this.state={
    
        companiesItem:[]
    
      }
    }

    componentDidMount(){
        this.retrivecompanyItem();
      }
    
      retrivecompanyItem(){
          axios.get("http://localhost:8070/CompanyItem/posts").then(res =>{
            if(res.data.success){
              this.setState({
                companiesItem:res.data.existingcompanyitems
              });
            console.log(this.state.companiesItem)
              
            }
          });
     
      }
    
      onDelete = (id)=>{
          

        let ans = window.confirm("Do you want to delete this record ?");

        if(ans){
    
          axios.delete("http://localhost:8070/CompanyItem/removecompanyitem/"+id).then((res)=>{
    
                  alert("delete successfully")
                  this.retrivecompanyItem()
        
          })

        }
    
      }
      
    
      render() {
        return (
          <div className="container">
            <h1 style={{paddingTop:'5',paddingLeft:'300px'}}>All Companies Item Capacity</h1>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {this.state.companiesItem.map((companiesItem,index)=>(
                  <tr key={index}>
                    <th  scope="row">{index+1}</th>
                    <td>{companiesItem.companyName}</td>
                    <td>{companiesItem.itemName}</td>
                    <td>{companiesItem.Date}</td>
                    <td>{companiesItem.capacity}</td>
                    <td>
                        {/* <a className = "btn btn-warning" href={'/upcompany/'+ companiesItem._id}>
                        <i className= "fas fa-edit"></i>&nbsp;Edit
                        </a> */}
                        &nbsp;
                        <a className = "btn btn-danger" href="#" onClick={()=>this.onDelete(companiesItem._id)}>
                        <i className= "fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                        
                    </td>
                  </tr> 
                ))}
              </tbody>
              </table>
              {/* <button type="button" className="btn btn-success"><a href='/addcompany' style={{textDecoration:"none",color:'white'}}>Register New company</a></button>
              &nbsp;
              &nbsp;
              <button type="button" className="btn btn-success"><a href='/addcompanyitems' style={{textDecoration:"none",color:'white'}}>+ Add Item Capacity</a></button> */}
          </div>
        )
      }
}
