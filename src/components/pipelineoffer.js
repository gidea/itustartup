
import React from "react";
import { CheckIcon } from '@heroicons/react/outline'


export default function PipelineOffer() {

  const features = [
    {
      name: 'Business Model',
      description: 'Starting with the basics of your business idea document your value proposition and define what is the problem area you are addressing.',
    },
    {
      name: 'Customer Development',
      description: 'Define the customer segments with the largest pain points that you have identified and start talking to potential users to validate your assumptions.',
    },
    {
      name: 'Solution Prototype',
      description: 'Turn feedback into a tangible solution, a high fidelity prototype which can prove that you are solving a problem in an elegant (and feasible) way.',
    },
    {
      name: 'Pitch Deck',
      description: 'If you have uncovered a clever solution to the problem, it might be time to turn your idea into a startup. But first, you must convince the investors!',
    },
  ]
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
         <span className="block">Do you have a startup idea?</span>
        </h2> 
          
          <p className="mt-4 text-lg text-gray-500">
          A step-by-step programme on how to get from idea to startup. 
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="/schedule"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Book a meeting to learn more
            </a>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    
  )
}
