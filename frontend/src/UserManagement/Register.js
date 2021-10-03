import React, {useState,useRef,useEffect} from "react";
import AuthService from "../Services/AuthService";
import Message from '../UserManagement/Message';
import './Styles/register.css'

const Register = props=>{
    const [user,setUser] = useState({username: "", password: ""});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const resetFrom = ()=>{
        setUser({username: "", password: "",role : ""});
    }

    const onSubmit = e =>{

      if(document.getElementById("pwd1").value == document.getElementById("pwd2").value)
      {	
        e.preventDefault();
        AuthService.register(user).then(data=>{
            const {message} = data;
            setMessage(message);
            resetFrom();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                },2000)
            }
        });
      }
      else 
      {
        alert("Passwords Missmatched")
      }
    }

    return(

<div class="container-fluid ps-md-0">
  <div class="row g-0">
    <div class="d-none d-md-flex col-md-4 col-lg-6 regimage"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
              <div class="card-body p-md-5 text-black">
              <form onSubmit={onSubmit}>
                <h3 class="login-heading mb-6">Let's Get Started</h3><br/>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name = "name" class="form-control form-control-lg" onChange = {onChange} required />
                      <label class="form-label" for="form3Example1m" >Name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name = "username" class="form-control form-control-lg" onChange = {onChange} required />
                      <label class="form-label" for="form3Example1n" >Username</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name = "phone" class="form-control form-control-lg" maxlength="10" minLength="10" pattern="(?=.*[0-9]).{10,}" title="Re-check the phone number" onChange = {onChange} required />
                      <label class="form-label" for="form3Example1m1" >Phone Number</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name = "nic" class="form-control form-control-lg" maxlength="10" minLength="10" required pattern="(?=.*\d)(?=.*[0-9])(?=.*[V]).{10,}" title="use correct pattern" onChange = {onChange} required />
                      <label class="form-label" for="form3Example1n1" >NIC number</label>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" name = "email" class="form-control form-control-lg" onChange = {onChange} required />
                  <label class="form-label" for="form3Example8" >Email Address</label>
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="femaleGender"
                      onChange = {onChange}
                      value="Female"
                    />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="maleGender"
                      onChange = {onChange}
                      value="Male"
                    />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                </div>

                <div class="form-outline mb-4">
                  <input type="password" name = "password1" id="pwd1" class="form-control form-control-lg" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                  <label class="form-label" for="form3Example9" >Password</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" name = "password" id="pwd2" class="form-control form-control-lg" onChange = {onChange} required />
                  <label class="form-label" for="form3Example90" >Repeat Password</label>
                </div>

                <div class="d-flex justify-content-end pt-3">
                  <button type="submit" class="btn btn-success btn-lg ms-2">Submit form</button>
                </div>
                </form>
            {message ? <Message message={message}/> : null}
            </div>
        </div>
</div>
</div>
</div>


    )
}

export default Register;