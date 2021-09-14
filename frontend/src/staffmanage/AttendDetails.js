import React, { Component } from 'react';
import axios from 'axios';

export default class AttendDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            attend:{}
        };
    }
    componentDidMount(){
        const id  = this.props.match.params.id;
        axios.get(`http://localhost:8070/attend/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    attend:res.data.attend
                });
                console.log(this.state.attend);
            }
        });
    }
    //test
    render() {
        const{name, staffId, date, time, attendanceType} = this.state.attend;
        return (
            <div style={{marginTop:'20px'}}>
                <h4>{name}</h4>
                <hr/>

                <d1 className="row">
                <dt className="col-sm-3">staffId</dt>
                <dd className="col-sm-9">{staffId}</dd>

                <dt className="col-sm-3">date</dt>
                <dd className="col-sm-9">{date}</dd>

                <dt className="col-sm-3">time</dt>
                <dd className="col-sm-9">{time}</dd>

                <dt className="col-sm-3">attendanceType</dt>
                <dd className="col-sm-9">{attendanceType}</dd>

                </d1>
            </div>
        )
    }
}
