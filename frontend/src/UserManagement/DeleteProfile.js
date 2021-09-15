import React, { Component } from 'react';
import axios from 'axios';
import './Styles/deleteprof.css'

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


    onDelete = (id) =>{
        axios.delete(`/user/deleteUser/${id}`).then((res)=>{
            alert("Deleted Successfully");
            this.props.history.push("/");
        })
    }

    render() {
        const {_id,name,username,phone,email,nic,gender,role} = this.state.users;

        return (
            <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>{name}</h4><br/>
                      <p>User ID</p>
                      <p>{_id}</p>
                    </div><br/>
                    <div class="row">
                    <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(_id)}>
                <i className="fas fa-trash-alt"></i>&nbsp;Delete
            </a><br/>
                </div>
                  </div>
                </div>
              </div>
              </div>
            <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                  {name}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Username</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {username}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Phone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {phone}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {email}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">NIC</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {nic}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Gender</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {gender}
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Role</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {role}
                  </div>
                </div>
              </div>
            </div>
            </div>
</div>
        )
    }
}


