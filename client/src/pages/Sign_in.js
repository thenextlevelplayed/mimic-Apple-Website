import "../css/sign_in.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React, { useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';
import context from "../components/context"

const Sign_in = () => {
    const [appleID,SetAppleID] = useState('')
    const [password,SetPassword] = useState('')
    const [token, setToken] = useState(localStorage.getItem("token"));


    const login=()=>{
        if (appleID !== "" && password !== "") {
            if (appleID !== "" && password !== "") {
                Axios({
                    method:'POST',
                    url:'http://localhost:3001/login',
                    data:{
                            email:appleID,
                            password:password
                    }
                }).then((res)=>{
                    console.log(res.data.success);
                    if(res.data.success===true){
                        // window.sessionStorage.setItem('name',response.data.name)
                        window.sessionStorage.setItem('token',res.data.token)
                        // window.sessionStorage.setItem('user',response.data.login)
                        window.sessionStorage.setItem('email',res.data.email)
                        // window.sessionStorage.setItem('res',response.data.success)
                        // props.onHistory.push('/')
                        // 跳轉
                        alert('登入成功')
                        window.location="http://localhost:3000/member-info"
                    }else{
                        alert("account or password is wrong")
                    }}).catch((e)=>{
                        if(e.response.error){
                            alert("account or password is wrong")
                        }
                    })
                }

            // Axios.post("http://localhost:3001/login" , {
            //     email:appleID,
            //     password:password
            // }).then((res) => {
            //     alert("login!");
            //     // console.log(res.data)
            // }).catch((e)=>{
            //     if (e.response.error){
            //         alert("account or password is wrong")
            //     }
            // })

    }
    

}


    



    return (
      
      <>
      <Navbar/>
      <div className="login-page">
      <div>
          <h1>Apple ID</h1>
          <div className="sign-up">sign in</div>
          <a className="rs-account-sign-up" href="/sign-up">Create Your Apple ID</a>
          <br />
      </div>
      <div className="login-page_header">
      </div>
  </div>
  <div className="landing">
      <div className="landing-top">
          <div className="landing-interaction">
              <div className="sign-in">
                  <div className="sign-in-auth">
                      <div className="sign-in-title">
                          <h1 className="appleid">Apple ID</h1>
                          <p>Manage your Apple account</p>
                      </div>
                      <div className="form-sign-in ">
                          <div className="form-container" >
                              <div className="form-textbox">
                                  <input type="text" id="email" onChange={(event)=>{
                                    SetAppleID(event.target.value)
                                  }} required/>
                                  <span className="sign-in-firstName_label">Apple ID</span>
                              </div>
                              <div className="form-textbox">
                                  <input type="password" id="assword" onChange={(event)=>{
                                    SetPassword(event.target.value)
                                  }} required/>
                                  <span className="sign-in-firstName_label">Password</span>
                              </div>
                              <div className="overlay-change">
                                  <button   className="btn" onClick={login}>
                                      <span className="arrow-right"></span>
                                  </button>
                              </div>
                              <div className="remember-password">
                                  <input type="checkbox" name="" id="remember-me"/>
                                  <label htmlFor="remember-me">
                                      <span>
                                          Remember me
                                      </span>
                                  </label>
                              </div>                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div className="rs-chat">
      <div className="rs-chat-container">
          <div>
              Need some help? or call 1‑800‑MY‑APPLE.
          </div>
      </div>
  </div>

  <div id="apple-footer">
      <div className="copyright">
          <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
      </div>
  </div>
  </>
    )
  };
  
  export default Sign_in;