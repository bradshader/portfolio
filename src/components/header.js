import React, { Component } from 'react';

class Header extends Component {
    render() {

        return(
            <>
            <img src="/img/stripe.jpg" className="stripe" data-aos="fade-right" data-aos-delay="300" alt="" />
            <header>
                <div className = "container">
                <h1>Brad<br/><span className="indent">Shader.</span></h1>
                </div>
                {/* <h2 style={{border: "none", textAlign: "right", float:"right", padding:"1rem"}}>Designer<br/>Developer</h2> */}
            </header>
            </>

        );
      }
  }
  
  export default Header;