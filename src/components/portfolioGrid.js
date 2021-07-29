import React from "react";
import HeyLouise from "../images/startups/heylouise.png";

class PortfolioGrid extends React.Component {
  
    render() {

      const startups = [
        {
          name: 'KARL',
          vertical: 'SaaS',
          logo: HeyLouise,
          link: 'https://karl.farm',
        },
        {
          name: 'Autoscopia Interactive',
          vertical: 'SaaS',
          logo: HeyLouise,
          link: 'https://autoscopiainteractive.com/',
        },
        {
          name: 'HeyLouise',
          vertical: 'SaaS',
          logo: HeyLouise,
          link: 'https://heylouise.com',
        },
        {
          name: 'Resolved',
          vertical: 'SaaS',
          logo: HeyLouise,
          link: 'https://resolved.io',
        }, 
        {
          name: 'Marionette',
          vertical: 'SaaS',
          logo: HeyLouise,
          link: 'https://marionettexr.com',
        }, 
      ]

        return(
          <div className="text-center max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {startups.map((startup) => (
        <li key={startup.name} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <a href={startup.link} title={startup.name}>
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

export default PortfolioGrid