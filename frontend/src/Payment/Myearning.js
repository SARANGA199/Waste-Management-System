import React, { Component } from 'react';
import axios from 'axios';

export default class Profile extends Component {
constructor(props){
    super(props);

    this.state={
        users:[]
    };
}

componentDidMount(){
    this.retrieveUsers();
}

retrieveUsers(){
    axios.get("/user/profiles").then(res=>{
        if(res.data.success){
            this.setState({
                users:res.data.existingUsers
            });
        }
    });
}

render() {
    return (
        <div>
            <h1>My Earning</h1> <br />

            <ul>
                <li>Name</li>
                <li>No of Trips</li>
                <li>Paymnet</li>
            </ul> 

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((users,index) => (
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{users.name}</td>
                            <a href={`/profile/${users._id}`} style={{textDecoration:'none'}}>
                            <td>{users.username}</td>
                            </a>
                            <td>{users.phone}</td>
                            <td>{users.email}</td>
                            <td>{users.nic}</td>
                            <td>{users.gender}</td>
                            <td>{users.role}</td>
                            <td>
                                <a className="btn btn-success" href={`/editprofile/${users._id}`}>
                                <i className="fas fa-edit"></i>&nbsp;Edit
                                </a>
                                &nbsp;
                                <a className="btn btn-danger" href={`/deleteprofile/${users._id}`}>
                                <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
    }
}