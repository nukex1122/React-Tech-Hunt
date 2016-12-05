import React from 'react'
import {render} from 'react-dom'

var SignUp = React.createClass({
  getInitialState:function(){
    return{
    }
  },
  handleSubmit:function(e){
    e.preventDefault();

    var creds = {
      name:this.name.value,
      id:this.uname.value,
      password:this.pass.value
    }
    $.ajax({
        url: '/login/addUser',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(creds),
        success:function(data){
          console.log(data);
          if (data == "SignedUp") {
            console.log("Successfull");
            window.location.replace('/signIn.html');
          }else {
            console.log("Not Successfull");
            //add test cases for same id etc.
          }
        }
    });
  },
  render(){
    return <div>
        <div className = "sign-up-status"></div>
        <form style= {{'marginTop':"5%"}} onSubmit = {this.handleSubmit}>
          <input type = "text" ref = {(input) => this.name = input} placeholder = "Full Name" className = "input" style = {{"marginTop":"2%"}} required/><br></br>
          <input type = "text" ref = {(input) => this.uname = input} placeholder = "Username" className = "input" style = {{"marginTop":"1%"}} required/><br></br>
          <input type = "password" ref = {(input) => this.pass = input} placeholder = "Password" className = "input" style = {{"marginTop":"1%"}} required/><br></br>
          <button type = "submit" className="button" style = {{"width":"22%","marginTop":"2%"}}>Register</button>
        </form>
      </div>
  }
})

render(<SignUp/>,document.getElementById('app'))
