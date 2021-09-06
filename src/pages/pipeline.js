import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import PipelineOffer from "../components/pipelineoffer";
import Testimonials from "../components/testimonials";
import Team from "../components/team";
import Footer from "../components/footer";
import HeaderPhoto from "../images/process.jpg";


class PipelinePage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'ITU Startup Pipeline',
            description: 'Free advice on how to build your idea into a startup.', 
            image: HeaderPhoto,
            };
    };

    render() {

        return(
            <main>
            <title>ITU Startup Pipeline- Free startup advice for ITU Students</title>
            <Navbar />
            <Header image={this.state.image} title={this.state.title} description={this.state.description}/>
            <PipelineOffer />
            <Testimonials />
            <Team />
            <Footer />
             </main>
        );
    }

}

export default PipelinePage