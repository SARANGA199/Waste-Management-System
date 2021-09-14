import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {
     constructor(props){
         super(props);
         this.state={
             userName:"",
             roleName:"",
             OTRate:"",
             basicSalary:""
         } 
     }

     handleInputChange =(e) =>{
         const {name,value} = e.target;
         this.setState({
             ...this.state,
             [name]:value
         })
     }

     onSubmit =(e) =>{
         e.preventDefault();
         const {userName, roleName, OTRate, basicSalary} = this.state;
         const data  ={
             userName:userName,
             roleName:roleName,
             OTRate:OTRate,
             basicSalary:basicSalary
         }

         console.log(data)
         axios.post("http://localhost:8070/post/save",data).then((res) => {
             if(res.data.success){
                 this.setState(
                     {
                        userName:"",
                        roleName:"",
                        OTRate:"",
                        basicSalary:""
                     }
                 )
             }
         })
     }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add New Member</h1>
                <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>User Name</label>
                        <input type="text"
                        className="form-control"
                        name="userName"
                        placeholder="Enter User Name"
                        value={this.state.userName}
                        onChange={this.handleInputChange}/>
                    </div>
                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Role Name</label>
                        <input type="text"
                        className="form-control"
                        name="roleName"
                        placeholder="Enter Role Name"
                        value={this.state.roleName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>OT Rate</label>
                        <input type="number"
                        className="form-control"
                        name="OTRate"
                        placeholder="Enter OT Rate"
                        value={this.state.OTRate}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Basic Salary</label>
                        <input type="number"
                        className="form-control"
                        name="basicSalary"
                        placeholder="Enter Basic Salary"
                        value={this.state.basicSalary}
                        onChange={this.handleInputChange}/>
                    </div>
                    
                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp;save
                    </button>

                </form>

            </div>
        )
    }
}
