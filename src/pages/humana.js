import React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default () => 

    <Layout>
        <div className="details container">
            <div className="project-name right-col">
                <h2>Humana employer marketplace</h2>
                <p>Responsive HTML &amp; CSS, jQuery, Sitecore</p>
                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>
                
            </div>
            
            
            <div className="right-col">
                <div className="images">
                    <h3>Select plans</h3>
                    <img src="/img/humana/select_gridview2.png" alt="Humana employer marketplace" />

                    <h3>Compare plans</h3>
                    <img src="/img/humana/compare2.png" alt="Humana employer marketplace" />

                    <h3>Cost breakdown</h3>
                    <img src="/img/humana/CnC2.png" alt="Humana employer marketplace" />

                    <h3>Company information</h3>
                    <img src="/img/humana/companyinfo2.png" alt="Humana employer marketplace" />

                    <h3>Review benefits</h3>
                    <img src="/img/humana/review2.png" alt="Humana employer marketplace" />
                    
                </div>

                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>

            </div>

        </div>
    </Layout>

    
    

