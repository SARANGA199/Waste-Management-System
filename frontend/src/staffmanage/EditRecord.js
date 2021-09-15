import React, { Component } from 'react';
import axios from 'axios';

export default class EditRecord extends Component {

    constructor(props){
        super(props);
        this.state={
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
        const id  = this.props.match.params.id;
        const {OTHours, attendance} = this.state;
        const data  ={
            OTHours:OTHours,
            attendance:attendance
        }

        console.log(data)
        axios.put(`http://localhost:8070/record/update/${id}`,data).then((res) => {
            if(res.data.success){
                alert("Updated Successfully")
                this.setState(
                    {
                       OTHours:"",
                       attendance:""
                    }
                )
            }
        })
    }


    componentDidMount(){
        const id  = this.props.match.params.id;
        axios.get(`http://localhost:8070/record/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    OTHours:res.data.record.OTHours,
                    attendance:res.data.record.attendance
                });
                console.log(this.state.record);
            }
        });
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Record</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>OT Hours</label>
                        <input type="text"
                        className="form-control"
                        name="OTHours"
                        placeholder="Enter OT Hours"
                        value={this.state.OTHours}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Attendance</label>
                        <input type="text"
                        className="form-control"
                        name="attendance"
                        placeholder="Enter Attendance"
                        value={this.state.attendance}
                        onChange={this.handleInputChange}/>
                    </div>
                    
                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp;Update
                    </button>

                </form>

            </div>
        )
    }
}
