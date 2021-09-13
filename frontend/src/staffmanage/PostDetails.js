import React, { Component } from 'react';
import axios from 'axios';

export default class PostDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            post:{}
        };
    }
    componentDidMount(){
        const id  = this.props.match.params.id;
        axios.get(`http://localhost:8070/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }
    
    render() {
        const{roleName, OTRate, basicSalary} = this.state.post;
        return (
            <div style={{marginTop:'20px'}}>
                <h4>{roleName}</h4>
                <hr/>

                <d1 className="row">
                <dt className="col-sm-3">OTRate</dt>
                <dd className="col-sm-9">{OTRate}</dd>

                <dt className="col-sm-3">basicSalary</dt>
                <dd className="col-sm-9">{basicSalary}</dd>

                </d1>
            </div>
        )
    }
}
