import * as React from "react";
import Navbar from '../components/navbar';
import Header from '../components/header';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Photo from '../images/contact-header.jpeg';

class ContactPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'Contact us',
            description: 'Partnerships, questions or any other requests. Feel free to reach out and we will get back to you asap.', 
            image: Photo,
            };
    };
    
    render() {
        return(
        <main>
            <title>ITU Startup Incubator for ITU Students</title>
            <Navbar />
            <Header image={this.state.image} title={this.state.title} description={this.state.description}/>
            <Contact />
            <Footer />
    </main>
        );

    }

}

export default ContactPage
