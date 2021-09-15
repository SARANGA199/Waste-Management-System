import React, { Component } from 'react';
import axios from 'axios';

export default class CreateAttend extends Component {
     constructor(props){
         super(props);
         this.state={
             name:"",
             staffId:"",
             date:"",
             time:"",
             attendanceType:""

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
         const {name, staffId, date, time, attendanceType} = this.state;
         const data  ={
             name:name,
             staffId:staffId,
             date:date,
             time:time,
             attendanceType:attendanceType
         }

         console.log(data)
         axios.post("http://localhost:8070/attend/save",data).then((res) => {
             if(res.data.success){
           this.setState(
                      {
                        name:"",
                        staffId:"",
                        date:"",
                        time:"",
                        attendanceType:""
                     }
                 )
             }
         })
     }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add New Attendance</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Staff ID</label>
                        <input type="number"
                        className="form-control"
                        name="staffId"
                        placeholder="Enter Staff ID"
                        value={this.state.staffId}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Date</label>
                        <input type="date"
                        className="form-control"
                        name="date"
                        placeholder="Enter Date"
                        value={this.state.date}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Time</label>
                        <input type="time"
                        className="form-control"
                        name="time"
                        placeholder="Enter Time"
                        value={this.state.time}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Attendance Type</label>
                        <input type="text"
                        className="form-control"
                        name="attendanceType"
                        placeholder="Enter Attendance Type"
                        value={this.state.attendanceType}
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
