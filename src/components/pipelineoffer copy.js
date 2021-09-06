
import React from "react";
import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Business Model',
    description: 'Starting with the basics of your business idea document your value proposition and define what is the problem area you are addressing.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Customer Development',
    description:
      'Define the customer segments with the largest pain points that you have identified and start talking to potential users to validate your assumptions.',
    icon: ScaleIcon,
  },
  {
    name: 'Solution Prototype',
    description:
      'Turn feedback into a tangible solution, a high fidelity prototype which can prove that you are solving a problem in an elegant (and feasible) way.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Pitch deck',
    description:
      'If you have uncovered a clever solution to the problem, it might be time to turn your idea into a startup. But first, you must convince the investors!',
    icon: MailIcon,
  },
]

export default function PipelineOffer() {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              4 meetings, <br/>4 milestones,<br/> 4 months!
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
