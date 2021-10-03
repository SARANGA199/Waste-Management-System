
import React, { Component } from 'react'
import axios from 'axios';
import './Styles/login.css'

export default class EditProfile extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            username:"",
            phone:"",
            email:"",
            nic:"",
            gender:"",
            password:"",
            image:"",
            role:""
        }

import React, {useState, useEffect,useContext}  from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { AuthContext } from '../Context/AuthContext';



export default function EditRouteRequest()  {

  let history = useHistory();
    
    const [uid, setuid] = useState();
    const [name, setname] = useState();
    const [username, setusername] = useState();
    const [phone, setphone] = useState();
    const [email, setemail] = useState();
    const [nic, setnic] = useState();
    const [gender, setgender] = useState();
    const [role, setrole] = useState();


    useEffect(() => {

        setuid(localStorage.getItem('uid'));
        setname(localStorage.getItem('name'));
        setusername(localStorage.getItem('username'));
        setphone(localStorage.getItem('phone'))
        setemail(localStorage.getItem('email'));
        setnic(localStorage.getItem('nic'));
        setgender(localStorage.getItem('gender'))
        setrole(localStorage.getItem('role'));
       


    },[] );


    function onSubmit(e) {
        e.preventDefault();
        const editprof = {
              
            uid,
            name,
            username,
            phone,
            email,
            nic,
            gender,
            role


        axios.put(`/user/updateUser/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Profile Updated successfully");
                this.props.history.push("/profiles"); 
                this.setState(
                    {
                        name:"",
                        username:"",
                        phone:"",
                        email:"",
                        nic:"",
                        gender:"",
                        password:"",
                        image:"",
                        role:""
                    }
                )
            }

        });

        }


        axios.put(`/user/updateUser/${uid}`,editprof).then(()=>{

            alert("Account Update successfully");
            history.push('/profiles');
    
         }).catch((err)=>{
    
            alert(err);
         })
    

    }

    const {user} = useContext(AuthContext);
    console.log(user._gender);
    
        return (
        <div class="col-md-6" style={{marginLeft:'300px',marginTop:'30px',background:'#fff',padding:'30px',borderRadius:'10px',boxShadow:'2px 2px 2px 2px #000'}}>
	        <h1 className="h3 mb-3 font-weight-normal">Edit User</h1>
		        <form className="needs-validation" noValidate>
                <label style={{marginBottom:'5px'}}>Name</label>
                <input type = "text"
                        name = "name"
                        value={name}
                        onChange={e=>{
                  
                            setname(e.target.value);
                    
                        }}
                        className = "form-control"
                        placeholder = "Enter name"/>
                <label style={{marginBottom:'5px'}}>Username</label>
                <input type = "text"
                        name = "username"
                        value={username}
                        onChange={e=>{
                  
                            setusername(e.target.value);
                    
                        }}
                        className = "form-control"
                        placeholder = "Enter username"/>
                <label style={{marginBottom:'5px'}}>Phone</label>
                <input type = "text"
                        name = "phone"
                        value={phone}
                        onChange={e=>{
                  
                            setphone(e.target.value);
                    
                        }}
                        className = "form-control"
                        placeholder = "Enter phone"/>
                <label style={{marginBottom:'5px'}}>Email</label>
                <input type = "text"
                        name = "email"
                        value={email}
                        onChange={e=>{
                  
                            setemail(e.target.value);
                    
                        }}
                        className = "form-control"
                        placeholder = "Enter email"/>
                <label style={{marginBottom:'5px'}}>NIC</label>
                <input type = "text"
                        name = "nic"
                        value={nic}
                        onChange={e=>{
                  
                        setnic(e.target.value);

                        }}
                        className = "form-control"
                        placeholder = "Enter NIC"/>
                <label style={{marginBottom:'5px'}}>Gender</label>
                <input type = "text"
                        name = "gender"
                        value={gender}
                        onChange={e=>{
                  
                        setgender(e.target.value);

                        }}
                        className = "form-control"
                        placeholder = "Enter Gender"/>
                <label style={{marginBottom:'5px'}}>Role</label>
                {user.role === "User" ?
                <input type = "text"
                        name = "role"
                        value={role}
                        onChange={e=>{
                  
                        setrole(e.target.value);

                        }}
                        className = "form-control"
                        readonly="true"
                        placeholder = "Enter Password"/>:null}
                        {user.role === "admin" ?
                        <input type = "text"
                        name = "role"
                        value={role}
                        onChange={e=>{
                  
                        setrole(e.target.value);

                        }}
                        className = "form-control"
                        placeholder = "Enter Password"/>:null}

                    <br/>
                    <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onSubmit}>


                    <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={onSubmit}>
        <i className="far fa-check-square"></i>
                        &nbsp;update
                    </button>

                </form>
        </div>
        )
    }