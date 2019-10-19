import React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default () => 

    <Layout>
        <div className="details container">
            <div className="project-name right-col">
                <h2>Baptist Health Kentucky</h2>
                <p>Design, Responsive HTML &amp; CSS</p>
                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>
                
            </div>
            
            
            <div className="right-col">
                <div className="images">
                    <h3>Homepage</h3>
                    <img src="/img/baptist-health/mockup-desktop.png" alt="Baptist health website" />

                    <h3>Navigation dropdown</h3>
                    <img src="/img/baptist-health/mockup-dropdown.png" alt="Baptist health website" />

                    <h3>Service landing page</h3>
                    <img src="/img/baptist-health/mockup-interior-desktop.png" alt="Baptist health website" />

                    <h3>Basic interior page</h3>
                    <img src="/img/baptist-health/interior2-desktop.png" alt="Baptist health website" />
                    
                </div>

                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>

            </div>

        </div>
    </Layout>

    
    

