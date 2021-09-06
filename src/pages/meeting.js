import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import PipelineOffer from "../components/pipelineoffer";
import Testimonials from "../components/testimonials";
import Team from "../components/team";
import Footer from "../components/footer";
import HeaderPhoto from "../images/process.jpg";


class MeetingPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'Book a meeting',
            description: 'You can find a timeslot which fits you below.', 
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

export default MeetingPage