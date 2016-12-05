import React from 'react'
import { render } from 'react-dom'

var Play = React.createClass({
  getInitialState : function(){
    console.log("Test");

    return {
          loggedIn:false,
          user:{
            name:"",
            level:0
          },
          clues:{la:""}
        }
  },
  loadDataFromServer:function(){
    $.ajax({
			url: '/login',
			type: 'GET',
			contentType: 'application/json',
			success: function(data){
        console.log({user:data.user,clues:data.clues,id:data.id});
        this.setState({user:data.user,clues:data.clues,id:data.id})
			}.bind(this)
		});
	},
  componentDidMount:function(){
    this.loadDataFromServer();
  },
  handleSubmit:function(e){
    e.preventDefault();
    $.ajax({
        url: '/play',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({"Answer":this.input.value,level:this.state.user.level,id:this.state.id}),
        success:function(data){
          console.log(data);
          if (data == "Correct") {
            console.log("wooohooo");
            location.reload();
          }else if(data == "Wrong Answer") {

          }
        }
    })
  },
  handleLogout:function(e){
    e.preventDefault();
    $.ajax({
        url: '/logout',
        type: 'GET',
        contentType: 'application/json',
        success:function(data){
          console.log("loggedOut");
          window.location.replace('home.html')
        }
    });

  },
  render() {
    return <div className = "container">
  		<div className = "navbar">
  			<a href = "/" style = {{"textDecoration":"none","color":"#67adff","float":"left","marginTop":"2%","marginLeft":"15%","fontWeight":"300","fontSize":"1.3em"}}><span>Techathlon-3000</span></a>
  			<nav>
  				<ul style = {{"width":"60%","marginRight":"15%"}}>
  					<a href = "#" className = "active" onClick = {this.handleLogout}><li>Log Out</li></a>
  					<a href = "/rules.html"><li>Rules</li></a>
  					<a href = "/home.html" ><li>Home</li></a>
  				</ul>
  			</nav>
  		</div><div style = {{"marginTop":"3%"}}>
        <h1 style = {{"fontWeight":"300"}}>Welcome {this.state.user.name} </h1>
        <h3 style = {{"fontWeight":"300"}}>You are on Level {this.state.user.level}</h3>

        <div style = {{"marginTop":"2%"}}>
          <h2>{this.state.clues.la}</h2>
          <form onSubmit = {this.handleSubmit}>
            <input type = "text" ref = {(input) => this.input = input} placeholder = "Enter Your Answer" className = "input" style = {{"marginTop":"2%"}}/><br></br>
            <button type = "submit" className="button" style = {{"width":"22%","marginTop":"2%"}}>Submit</button>
          </form>
        </div>
     </div>
   </div>
  }
})

module.exports = Play;
render(<Play/> ,document.getElementById('app'));
