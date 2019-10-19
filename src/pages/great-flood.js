import React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default () => 

    <Layout>
        <div className="details container">
            <div className="project-name right-col">
                <h2>Great Flood Brewing Co.</h2>
                <p>Design</p>
                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>
                
            </div>
            
            
            <div className="right-col">
                <div className="images">
                    <h3>Logo</h3>
                    <img src="/img/great-flood/logo.png" alt="Great Flood logo" />

                    <h3>T-shirts</h3>
                    <img src="/img/great-flood/greatflood-shirt.jpg" alt="Great Flood shirt" />
                    <img src="/img/great-flood/greatflood-shirt2.jpg" alt="Great Flood shirt" />
                    
                </div>

                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>

            </div>

        </div>
    </Layout>

    
    

