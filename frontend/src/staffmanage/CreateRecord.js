import React, { Component } from 'react';
import axios from 'axios';

export default class CreateRecord extends Component {
     constructor(props){
         super(props);
         this.state={
             userName:"",
             OTHours:"",
             attendance:""
             
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
         const {userName, OTHours, attendance} = this.state;
         const data  ={
             userName:userName,
             OTHours:OTHours,
             attendance:attendance
         }

         console.log(data)
         axios.post("http://localhost:8070/record/save",data).then((res) => {
             if(res.data.success){
                 this.setState(
                     {
                        userName:"",
                        OTHours:"",
                        attendance:""
                     }
                 )
             }
         })
     }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add New Record</h1>
                <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>userName</label>
                        <input type="text"
                        className="form-control"
                        name="userName"
                        placeholder="Enter userName"
                        value={this.state.userName}
                        onChange={this.handleInputChange}/>
                    </div>
                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>OTHours</label>
                        <input type="number"
                        className="form-control"
                        name="OTHours"
                        placeholder="Enter OTHours"
                        value={this.state.OTHours}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Attendance</label>
                        <input type="number"
                        className="form-control"
                        name="attendance"
                        placeholder="Enter Attendance"
                        value={this.state.attendance}
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
