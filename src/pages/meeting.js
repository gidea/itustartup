import React from "react";
import Navbar from "../components/navbar";
import Team from "../components/team";
import Footer from "../components/footer";
import HeaderPhoto from "../images/process.jpg";
import { InlineWidget } from "react-calendly";


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
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
               <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block">Book a meeting</span>
                </h2> 
                <p className="mt-4 text-lg text-gray-500">
                You can find a timeslot which best fits you below. 
                </p>
            </div>
            <InlineWidget url="https://calendly.com/gidea/meeting" styles={{height: '800px'}}/>
            </div>
            <Team />
            <Footer />
             </main>
        );
    }

}

export default MeetingPage