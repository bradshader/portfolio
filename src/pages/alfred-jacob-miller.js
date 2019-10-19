import React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default () => 

    <Layout>
        <div className="details container">
            <div className="project-name right-col">
                <h2>Fur Traders &amp; Rendezvous</h2>
                <p>Design, Responsive HTML &amp; CSS</p>
                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>
                
            </div>
            
            
            <div className="right-col">
                <div className="images">
                    <h3>Homepage</h3>
                    <img src="/img/alfred-jacob-miller/home.png" alt="The Alfred Jacob Miller online catalogue" />

                    <h3>Artworks</h3>
                    <img src="/img/alfred-jacob-miller/artworks.png" alt="The Alfred Jacob Miller online catalogue" />

                    <h3>Timeline</h3>
                    <img src="/img/alfred-jacob-miller/timeline.png" alt="The Alfred Jacob Miller online catalogue" />

                    <h3>Explore</h3>
                    <img src="/img/alfred-jacob-miller/explore.png" alt="The Alfred Jacob Miller online catalogue" />

                    <h3>Search</h3>
                    <img src="/img/alfred-jacob-miller/search.png" alt="The Alfred Jacob Miller online catalogue" />
                    
                </div>

                <p>
                    <AniLink paintDrip to="/" color="yellow" className="back">Back</AniLink>
                </p>

            </div>

        </div>
    </Layout>

    
    

