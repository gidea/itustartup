import React from "react";
import AboutPhoto from "../images/about-header.jpeg";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Mission from "../components/mission";
import Team from "../components/team";
import Footer from "../components/footer";



class AboutPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'About us',
            description: 'We help student startups develop products & services that create value for people & society.', 
            image: AboutPhoto,
            };
    };

    render() {

        return(
            <main>
            <title>ITU Startup Incubator for ITU Students</title>
            <Navbar />
            <Header image={this.state.image} title={this.state.title} description={this.state.description}/>
            <Mission />
            <Team />
            <Footer />
             </main>
        );
    }

}

export default AboutPage