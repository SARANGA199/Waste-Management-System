import React, { Component } from 'react'
import axios from 'axios';
import './Styles/login.css'

export default class resetProfile extends Component {

    constructor(props){
        super(props);
        this.state={
            password:""
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
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        console.log(id);

        const {password} = this.state;

        const data ={
            password:password
        }

        axios.put(`/user/reset/${id}`,data).then((res) =>{
            if(res.data.success){
                window.location.reload(false);
                alert("Password changed successfully");
                this.props.history.push('/login');
                this.setState(
                    {
                        password:""
                    }
                )
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
                        name = "password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        className = "form-control"
                        placeholder = "Enter PW"/>
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