
import React from "react";
import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'


const features = [
  {
    name: 'Starting Capital',
    description: 'We offer each team 50 000kr for basic business expanses, marketing or R&D costs. We invest before angels or VCs are willing to, because we work with you to ensure the startup is a success.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Office Space',
    description:
      'We provide 6 months of office space for your team, in a private office at the IT University of Copenhagen. We can help you grow your team and establish your brand at the university.',
    icon: ScaleIcon,
  },
  {
    name: 'Product Development',
    description:
      'We provide you with product development expertise and more resources (such as cloud computing credits) to get your product launched.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Business & Legal advice',
    description:
      'In-house business consultants, external legal and financial advice for some of the most experienced partners we have.',
    icon: MailIcon,
  },
]

const faqs = [
  {
    question: 'We think we are a good fit for your incubator, what do we do now?',
    answer:
      'We invest in startups we know. That mean we require them to go through our Startup Pipeline, where we can ensure that enough work has been done to validate the problem/solution fit, the founding team has the required skills and most importantly - that at least one of the founders is a student or recent graduate of ITU',
  },
  {
    question: 'How do you invest?',
    answer:
      'We provide a convertible loan of 200 000kr with a valuation cap of 5mil kr, a maturity date of 24mths and a standard interest rate of 8%. If this sounds confusing, no worries - we will explain everything.',
  },
  
  
]

export default function IncubatorOffer() {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to launch your startup and get traction.
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