import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  getInitialState:function(){
    return{
      signedIn:false
    }
  },
  render(){
    var a;
    if (this.state.signedIn) {
      console.log("Play");
      a = <Link to = "/play" activeClassName = "active"><li>Play</li></Link>
    }else {
      console.log("Sign");
      a = <Link to = "/signIn" activeClassName = "active"><li>Sign In</li></Link>
    }
    return <div className = "container">
            <div className = "navbar">
              <Link to = "/" style = {{"textDecoration":"none","color":"#67adff","float":"left","marginTop":"2%","marginLeft":"15%","fontWeight":"300","fontSize":"1.3em"}}><span>Techathlon-3000</span></Link>
              <nav>
                <ul style = {{"width":"60%","marginRight":"15%"}}>
                  <Link to = "/rules" activeClassName = "active"><li>Rules</li></Link>
                  <Link to = "/home" activeClassName = "active"><li>Home</li></Link>
                  {a}
                </ul>
              </nav>
            </div>
              {this.props.children}
          </div>
  }
})
