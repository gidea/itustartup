import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import PipelineOffer from "../components/pipelineoffer";
import Testimonials from "../components/testimonials";
import Team from "../components/team";
import Footer from "../components/footer";
import HeaderPhoto from "../images/process.jpg";


class CofoundersPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'ITU Startup Matchmaking',
            description: 'Join our mailing list to meet other potential cofounders and learn about events and networking opportunities in the near future.', 
            image: HeaderPhoto,
            };
    };

    render() {

        return(
            <main>
            <title>ITU Startup Pipeline- Free startup advice for ITU Students</title>
            <Navbar />
            <Header image={this.state.image} title={this.state.title} description={this.state.description}/>
            
            
            
            <Footer />
             </main>
        );
    }

}

export default CofoundersPage