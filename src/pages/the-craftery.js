import React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default () => 

    <Layout>
        <div className="details container">
            <div className="project-name right-col">
                <h2>The Craftery</h2>
                <p>Design, Responsive HTML &amp; CSS, WordPress</p>
                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>
                
            </div>
            
            
            <div className="right-col">
            <h3>Logo</h3>
                <div className="images">
                    <img src="/img/craftery/logo.jpg" alt="The Craftery logo" />
                    <img src="/img/craftery/icon-light.jpg" className="half" alt="The Craftery icon light" />
                    <img src="/img/craftery/icon-dark.jpg" className="half" alt="The Craftery icondark" />
                </div>

                <h3>Website design and WordPress development</h3>
                <div className="images">
                    <img src="/img/craftery/website-home.jpg" alt="The Craftery website home page" />
                </div>
                
                <h3>Business cards</h3>
                <div className="images">
                    <img src="/img/craftery/business-card1.jpg" className="third" alt="The Craftery business card design" />
                    <img src="/img/craftery/business-card2.jpg" className="third" alt="The Craftery business card design" />
                    <img src="/img/craftery/business-card3.jpg" className="third" alt="The Craftery business card design" />
                    <img src="/img/craftery/business-card4.jpg" className="third" alt="The Craftery business card design" />
                    <img src="/img/craftery/business-card5.jpg" className="third" alt="The Craftery business card design" />
                    <img src="/img/craftery/business-card6.jpg" className="third" alt="The Craftery business card design" />
                </div>

                <h3>Informational handout</h3>
                <div className="images">
                    <img src="/img/craftery/handout1.jpg" className="half" alt="The Craftery handout" />
                    <img src="/img/craftery/handout2.jpg" className="half" alt="The Craftery handout" />
                </div>

                <h3>Craft menu</h3>
                <div className="images">
                    <img src="/img/craftery/craft-menu.jpg" alt="The Craftery craft menu" />
                </div>
                
                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>

            </div>
        </div>
    </Layout>

    
    

