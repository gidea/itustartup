import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Offer from "../components/incubatoroffer";
import Testimonials from "../components/testimonials";
import Team from "../components/team";
import Footer from "../components/footer";
import HeaderPhoto from "../images/incubator.jpg";


class IncubatorPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'ITU Startup Incubator',
            description: 'We invest in the best startups at ITU and provide them with capital, office space, advice and many more resources needed for them to launch their product and get traction.', 
            image: HeaderPhoto,
            };
    };

    render() {

        return(
            <main>
            <title>ITU Startup Pipeline- Free startup advice for ITU Students</title>
            <Navbar />
            <Header image={this.state.image} title={this.state.title} description={this.state.description}/>
            <Offer />
            <Testimonials />
            <Team />
            <Footer />
             </main>
        );
    }

}

export default IncubatorPage