import React from 'react'

export default React.createClass({
  render(){
    return <div style = {{	"position": "absolute",
            	"left": "50%",
            	"top": "42%",
            	"transform": "translate(-50%,-50%)",
              "fontSize":"1.4em"
            }}>
            <div style = {{"fontWeight":"500","fontFamily":"Oswald","fontSize":"1.7em","color":"#67adff"}}>29 - 31 February</div>
            <p style = {{"marginBottom":"10%","fontSize":"1.2em"}}>
              The worldwide cryptic hunt is almost here. Gear Up.
            </p>
            <button className='button' style = {{fontSize:"0.8em"}}>Sign Up</button>
          </div>
  }
})
