import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Startups from "../components/startups";
import Offer from "../components/incubatoroffer";
import Footer from "../components/footer";
import Photo from "../images/portfolio-image.jpeg";

class PortfolioPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Startup Portfolio',
            description: 'These are some of the companies which have managed to finish our incubation programme and have created a company with our investment.', 
            image: Photo,
            };
    };
    
    render(){
        return(
            <main>
            <title>ITU Startup Incubator for ITU Students</title>
            <Navbar />
            <Header image={this.state.image} title={this.state.title} description={this.state.description}/>
            <Startups />
            <Offer />
            <Footer />
    </main>
        );
    }
}
export default PortfolioPage