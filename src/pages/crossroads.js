import React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default () => 

    <Layout>
        <div className="details container">
            <div className="project-name right-col">
                <h2>Crossroads Ministry</h2>
                <p>Design</p>
                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>
                
            </div>
            
            
            <div className="right-col">
                <div className="images">
                    <h3>Annual report 2018</h3>
                    <img src="/img/crossroads/AnnualReport2018_1.jpg" alt="Crossroads Ministry annual report 2018" />
                    <img src="/img/crossroads/AnnualReport2018_2.jpg" alt="Crossroads Ministry annual report 2018" />
                    <img src="/img/crossroads/AnnualReport2018_3.jpg" alt="Crossroads Ministry annual report 2018" />
                    <img src="/img/crossroads/AnnualReport2018_4.jpg" alt="Crossroads Ministry annual report 2018" />
                    <img src="/img/crossroads/AnnualReport2018_5.jpg" alt="Crossroads Ministry annual report 2018" />
                </div>

                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>

            </div>

        </div>
    </Layout>

    
    

