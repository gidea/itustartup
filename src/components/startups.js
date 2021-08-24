import React from "react";
import HeyLouise from "../images/startups/heylouise.png";
import KARL from "../images/startups/karl.png";
import AutoscopiaInteractive from "../images/startups/forgotten.png";
import Resolved from "../images/startups/resolved.png";
import Marionette from "../images/startups/marionette.png";

class Startups extends React.Component {
  
    render() {

      const startupList = [
        {
          name: 'KARL',
          vertical: 'SaaS, AgriTech',
          logo: KARL,
          link: 'https://karl.farm',
        },
        {
          name: 'Autoscopia Interactive',
          vertical: 'Games',
          logo: AutoscopiaInteractive,
          link: 'https://autoscopiainteractive.com/',
        },
        {
          name: 'HeyLouise',
          vertical: 'SaaS, MarTech',
          logo: HeyLouise,
          link: 'https://heylouise.com',
        },
        {
          name: 'Resolved',
          vertical: 'SaaS, Fintech',
          logo: Resolved,
          link: '#',
        }, 
        {
          name: 'Marionette',
          vertical: 'SaaS, AR/VR',
          logo: Marionette,
          link: 'https://marionettexr.com',
        }, 
      ]

        return(
          <div className="text-center max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-3 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {startupList.map((startup) => (
        <li key={startup.name} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <a href={startup.link} title={startup.name} target='_blank' rel="noreferrer">
            <img src={startup.logo} alt={startup.name} className="object-cover pointer-events-none group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View website for {startup.name}</span>
            </button>
            </a>
          </div>
          <p className="mt-2 block text-2xl font-medium text-gray-900 truncate pointer-events-none">{startup.name}</p>
          <p className="block text-lg font-medium text-gray-500 pointer-events-none">{startup.vertical}</p>
        </li>
      ))}
    </ul>
    </div>         

    );
  } 
}

export default Startups