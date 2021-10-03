import React,{useState} from 'react';
import './Styles/login.css'
import './ResetPw.js'
import axios from "axios";

const Forgetpass = props=>{

  const [email,setEmail] = useState("");
  const [emailSent,setEmailSent] = useState(false);

  function emailhandler(e){
    e.preventDefault();

    const body = {
      email
    };

    axios
      .post("/user/forgot",body)
      .then(res => {
      setEmailSent(true);
    })
  }

  let body;
  if(emailSent){
      <span>An email was send</span>
  }


    return(
<div class="container-fluid ps-md-0">
  <div class="row g-0">
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">Forgot Password</h3>

              <form action="" onSubmit={emailhandler} method="post">
                <div class="form-floating mb-3">
                  <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} class="form-control" name="email" required placeholder="Email"></input>
                  <label for="floatingInput">Email</label>
                </div>

                <div class="d-grid">
                  <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Forgetpass;