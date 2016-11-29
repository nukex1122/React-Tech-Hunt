import React from 'react'
import { render } from 'react-dom'

var SignIn = React.createClass({
  getInitialState:function(){
    return{
    }
  },
  handleSubmit:function(e){
    e.preventDefault();

    var creds = {
      "Username":this.uname.value,
      "Password":this.pass.value
    }
    $.ajax({
        url: '/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(creds),
        success:function(data){
          console.log(data);
          if (data == "loggedIn") {
            console.log("Successfull");
            window.location.replace('/play.html');
          }else {
            console.log("Not Successfull");
          }
        }
    });
  },
  render(){
    return <div>
            <form style= {{'marginTop':"5%"}} onSubmit = {this.handleSubmit}>
              <input type = "text" ref = {(input) => this.uname = input} placeholder = "Username" className = "input" style = {{"marginTop":"2%"}} required/><br></br>
              <input type = "password" ref = {(input) => this.pass = input} placeholder = "Password" className = "input" style = {{"marginTop":"1%"}} required/><br></br>
              <button type = "submit" className="button" style = {{"width":"22%","marginTop":"2%"}}>Sign In</button>
            </form>
            <div style = {{
              "marginTop":"2%",
              "color":"#999"
            }}>Forgot Your Password?</div>
          </div>
  }
})

render(<SignIn/> ,document.getElementById('app'));
