import React from "react";
import { PopupButton } from '@typeform/embed-react';

class CofounderForm extends React.Component {
    render() {
        return(
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
             <span className="block">Do you want to network with other students?</span>
            </h3> 
              
              <p className="mt-4 text-lg text-gray-500">
              We know that it can be hard to find the right cofounder who shares your vision,
              but we also know that the first step is to get out of your comfort zone and talk to other people about your idea.
              We will provide you with a list of other students who filled the form below, and we will also invite you
              to regular networking sessions at ITU where you can meet other students interested in finding cofounders or joining an existing startup.
              </p>

            <div className="mt-16 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                <PopupButton id="rMZAAX4M" style={{ fontSize: 20 }} className="inline-flex items-center justify-center px-20 py-6 border border-transparent text-xl font-normal rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Fill the Cofounder Form
                </PopupButton>
                </div>

                
                </div>
                <p className="mt-4 text-lg text-gray-500"> </p>
                </div>
                
            </div>
        );
    }
}
export default CofounderForm
