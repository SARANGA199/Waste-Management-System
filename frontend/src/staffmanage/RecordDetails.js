import React, { Component } from 'react';
import axios from 'axios';

export default class RecordDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            record:{}
        };
    }
    componentDidMount(){
        const id  = this.props.match.params.id;
        axios.get(`http://localhost:8070/record/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    record:res.data.record
                });
                console.log(this.state.record);
            }
        });
    }
    
    render() {
        const{OTHours, attendance} = this.state.record;
        return (
            <div style={{marginTop:'20px'}}>
                <h4>{OTHours}</h4>
                <hr/>

                <d1 className="row">
                <dt className="col-sm-3">attendance</dt>
                <dd className="col-sm-9">{attendance}</dd>

                </d1>
            </div>
        )
    }
}
