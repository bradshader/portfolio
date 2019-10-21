import React from "react";
import Layout from "../components/layout";
import Project from "../components/project";


export default () => 

    <Layout>
        <div className = "container">
            <div className="about right-col">
                <h2 style={{border:"none"}}>Hello!</h2>
                <p>My name is Brad Shader and I'm a creative web developer and graphic designer based in Louisville, KY. Throughout my eight years of experience, I have worked with many businesses, creating compelling designs and bringing websites to life with dynamic code. </p>
            </div>

            <div className="projects">

                <h2>Projects</h2>

                <div className = "right-col">

                    <Project 
                        name="The Craftery"
                        desc="Branding, Design, Development"
                        url="/the-craftery"
                    />

                    <Project 
                        name="Humana"
                        desc="Development, Page Build, Web Accessibility"
                        url="/humana"
                    />

                    <Project 
                        name="Baptist Health"
                        desc="Design, Development"
                        url="/baptist-health"
                    />

                    <Project 
                        name="Fur Traders &amp; Rendezvous"
                        desc="Design, Development"
                        url="/alfred-jacob-miller"
                    />

                    <Project 
                        name="Great Flood Brewing Co."
                        desc="Branding, Design"
                        url="/great-flood"
                    />

                    <Project 
                        name="Crossroads Ministry"
                        desc="Design"
                        url="/crossroads"
                    />

                </div>

            </div>
        </div>
        
    </Layout>
    

