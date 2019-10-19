import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./header.js";
import Footer from "./footer.js";


class Layout extends Component {

    componentDidMount(){
        AOS.init({
          duration : 1000,
          once: true,
          offset: 80
        })
      }

    render() {

        const { children } = this.props

        return(

            <div data-aos="fade-right">
                <Header />
                {children}
                <Footer />
            </div>

        );
    }
}
  
export default Layout;