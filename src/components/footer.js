import React, { Component } from 'react';
import ContactForm from "../components/contactform"

class Footer extends Component {
    render() {

        return(
        <>
        <div className = "container">
            <div className="bar"></div>
        </div>
        
        <footer>
            <div className="contact">
                <div className = "container">
                    <h2>Get in touch</h2>
                    <ContactForm />
                </div>
            </div>
            <div className = "copyright">
                <div className = "container">
                    <p>&copy; Brad Shader 2019</p>
                </div>
            </div>
        </footer>
        </>
        
        );
      }
  }
  
  export default Footer;