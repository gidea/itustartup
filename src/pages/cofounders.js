import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import PipelineOffer from "../components/pipelineoffer";
import CofounderForm from "../components/cofounderform";
import Team from "../components/team";
import Footer from "../components/footer";
import HeaderPhoto from "../images/pitching2.jpg";


class CofoundersPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'ITU Startup Matchmaking',
            description: 'Join our cofounder list to meet other potential cofounders and learn about events and networking opportunities in the near future.', 
            image: HeaderPhoto,
            };
    };

    render() {

        return(
            <main>
            <title>ITU Startup Pipeline- Free startup advice for ITU Students</title>
            <Navbar />
            <Header image={this.state.image} title={this.state.title} description={this.state.description}/>
            <CofounderForm />
            <Team />
            <Footer />
             </main>
        );
    }

}

export default CofoundersPage