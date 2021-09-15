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

    }

    handleInputChange = (e) =>{
        const {name,value}= e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {name,username,phone,email,nic,gender,password,image,role} = this.state;

        const data ={
            name:name,
            username:username,
            phone:phone,
            email:email,
            nic:nic,
            gender:gender,
            password:password,
            image:image,
            role:role
        }

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

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/user/profile/${id}`).then(res=>{
            if(res.data.success){
                this.setState({
                    name:res.data.users.name,
                    username:res.data.users.username,
                    phone:res.data.users.phone,
                    email:res.data.users.email,
                    nic:res.data.users.nic,
                    gender:res.data.users.gender,
                    password:res.data.users.password,
                    image:res.data.users.image,
                    role:res.data.users.role
                });
                console.log(this.state.users);
            }
        });

    }

    render() {
        return (
        <div class="col-md-6" style={{marginLeft:'300px',marginTop:'30px',background:'#fff',padding:'30px',borderRadius:'10px',boxShadow:'2px 2px 2px 2px #000'}}>
	        <h1 className="h3 mb-3 font-weight-normal">Edit User</h1>
		        <form className="needs-validation" noValidate>
                <label style={{marginBottom:'5px'}}>Name</label>
                <input type = "text"
                        name = "name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        className = "form-control"
                        placeholder = "Enter name"/>
                <label style={{marginBottom:'5px'}}>Username</label>
                <input type = "text"
                        name = "username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        className = "form-control"
                        placeholder = "Enter username"/>
                <label style={{marginBottom:'5px'}}>Phone</label>
                <input type = "text"
                        name = "phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        className = "form-control"
                        placeholder = "Enter phone"/>
                <label style={{marginBottom:'5px'}}>Email</label>
                <input type = "text"
                        name = "email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        className = "form-control"
                        placeholder = "Enter email"/>
                <label style={{marginBottom:'5px'}}>NIC</label>
                <input type = "text"
                        name = "nic"
                        value={this.state.nic}
                        onChange={this.handleInputChange}
                        className = "form-control"
                        placeholder = "Enter NIC"/>
                <label style={{marginBottom:'5px'}}>Gender</label>
                <input type = "text"
                        name = "gender"
                        value={this.state.gender}
                        onChange={this.handleInputChange}
                        className = "form-control"
                        placeholder = "Enter Gender"/>
                <label style={{marginBottom:'5px'}}>Role</label>
                {this.state.role === "User" ?
                <input type = "text"
                        name = "role"
                        value={this.state.role}
                        onChange={this.handleInputChange}
                        className = "form-control"
                        readonly="true"
                        placeholder = "Enter Password"/>:null}
                {this.state.role === "admin" ?
                        <input type = "text"
                        name = "role"
                        value={this.state.role}
                        onChange={this.handleInputChange}
                        className = "form-control"
                        placeholder = "Enter Password"/>:null}
                    <br/>
                    <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp;update
                    </button>

                </form>
        </div>
        )
    }
}