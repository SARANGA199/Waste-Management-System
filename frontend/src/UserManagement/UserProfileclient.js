import React, {useContext,useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import './Styles/profile.css'

const Clientprof = props =>{
    const {user} = useContext(AuthContext);
    console.log(user._gender);

    const uname = user.name

    return(

        <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div class="row container d-flex justify-content-center">
                <div class="col-xl-10 col-md-12">
                    <div class="card user-card-full">
                        <div class="row m-l-0 m-r-0">
                            <div class="col-sm-4 bg-c-lite-green user-profile">
                                <div class="card-block text-center text-white">
                                    <div class="m-b-25"> <img src={user.image} class="rounded-circle" width="150" alt="User-Profile-Image"/> </div>
                                    <h6 class="f-w-600">{uname}</h6>
                                    <p>{user.role}</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    <a href={`/updatedp`} style={{height:'50px'}}>
                                    <i className="fas fa-camera"></i>&nbsp;Update
                                    </a>
                                    <br/>
                                    <br/>
                                    <div class="m-b-25"> <img src="https://img.icons8.com/external-justicon-flat-justicon/100/000000/external-coins-st-patricks-day-justicon-flat-justicon.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                    <h6 class="f-w-600">Loyalty Ponits</h6>
                                    <p>####</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="card-block">
                                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Your Profile Information</h6>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Name</p>
                                            <h6 class="text-muted f-w-400">{uname}</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Username</p>
                                            <h6 class="text-muted f-w-400">{user.username}</h6>
                                        </div>
                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Phone</p>
                                            <h6 class="text-muted f-w-400">{user.phone}</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Email</p>
                                            <h6 class="text-muted f-w-400">{user.email}</h6>
                                        </div>
                                    </div>
                                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">NIC</p>
                                            <h6 class="text-muted f-w-400">{user.nic}</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Gender</p>
                                            <h6 class="text-muted f-w-400">{user.gender}</h6>
                                        </div>
                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Role</p>
                                            <h6 class="text-muted f-w-400">{user.role}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/>
            <a className="btn btn-success" style={{marginLeft:"540px"}} href={`/editprofile/${user._id}`}>
            <i className="fas fa-edit"></i>&nbsp;Edit
            </a>
            &nbsp;
            <a className="btn btn-danger" style={{marginLeft:"50px"}} href={`/deleteprofile/${user._id}`}>
            <i className="fas fa-trash-alt"></i>&nbsp;Delete
            </a>
        </div>
    </div>
    
    )
    }


export default Clientprof;