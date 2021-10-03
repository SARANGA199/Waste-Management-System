import React, {useState,useContext} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../UserManagement/Message';
import {AuthContext} from '../Context/AuthContext';
import './Styles/login.css'

const Login = props=>{
    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            console.log(data);
            const { isAuthenticated,user,message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/');
            }
            else
                alert("Invalid username or password");
                setMessage(message);
        });
    }



    return(
<div class="container-fluid ps-md-0">
  <div class="row g-0">
    <div class="d-none d-md-flex col-md-4 col-lg-6 logimage"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">Welcome back!</h3>

              <form onSubmit={onSubmit}>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" name="username" required onChange={onChange} placeholder="Username"></input>
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" name="password" required onChange={onChange} placeholder="Password"></input>
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"></input>
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>

                <div class="d-grid">
                  <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                  <a className="btn btn-success" href={"/register"} style={{height:'50px'}}>
                  <i className="fas fa-edit"></i>&nbsp;Sign Up
                  </a>
                  <div class="text-center">
                    <a class="small" href="#">Forgot password?</a>
                  </div>
                </div>

              </form>
              {message ? <Message message={message}/> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Login;