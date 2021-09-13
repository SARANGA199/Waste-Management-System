import React, { Component } from 'react'
import axios from 'axios';

export default class discompanyitems extends Component {

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

    render() {
        return (
            <div className="container">
               <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Company Name</th>
                    <th scope="col">Items Name</th>
                    <th scope="col">Capacity</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.compnies.map((compnies,index)=>(
                  <tr key={index}>
                    <td>{compnies.companyName}</td>
                    <td><input value={compnies.itemId} readOnly></input></td>
                    <td><div class="input-group">
                        <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                        <span class="input-group-text">Kg</span>
                        </div>
                        </td>
                    <td>
                        <a className = "btn btn-warning" href={'/upcompany/'+ compnies._id}>
                                +Add
                        </a>
                        
                    </td>
                  </tr> 
                ))}
              </tbody>
                </table>
                <button type="button" class="btn btn-secondary">Add</button>
            </div>
        )
    }
}
