import React, { Component,useContext } from 'react';
import axios from 'axios';

export default class Userprofile extends Component {
    constructor(props){
        super(props);

        this.state={
            users:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/user/profile/${id}`).then(res=>{
            if(res.data.success){
                this.setState({
                    users:res.data.users
                });
                console.log(this.state.users);
            }
        });

    }

    render() {

        const {name,username,phone,email,nic,gender,role} = this.state.users;

        return (
            <div className="col-md-4" style={{marginLeft:'300px',marginTop:'100px',background:'#fff',padding:'30px',height:'400px',width:'650px', borderRadius:'10px',boxShadow:'1px 1px 1px 1px #000'}}>
            <div style={{marginTop:'20px'}}>
            <h4 className="display-1">{username}</h4>
            <hr/>

            <dl class="row">
            <dt class="col-sm-3">Name</dt>
            <dd class="col-sm-9">{name}</dd>
            <dt class="col-sm-3">Phone Number</dt>
            <dd class="col-sm-9">{phone}</dd>
            <dt class="col-sm-3">Email Address</dt>
            <dd class="col-sm-9">{email}</dd>
            <dt class="col-sm-3">NIC Number</dt>
            <dd class="col-sm-9">{nic}</dd>
            <dt class="col-sm-3">Gender</dt>
            <dd class="col-sm-9">{gender}</dd>
            <dt class="col-sm-3">Role</dt>
            <dd class="col-sm-9">{role}</dd>

            </dl>
                
            </div>
        </div>
        )
    }
}

