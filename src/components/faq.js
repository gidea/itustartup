
import React from "react";

const faqs = [
  {
    question: 'We think we are a good fit for your incubator, what do we do now?',
    answer:
      'We invest in startups we know. That means we require them to go through our Startup Pipeline first, where we can ensure that enough work has been done to validate the problem/solution fit, that the founding team has the required skills and most importantly - that at least one of the founders is a student or recent graduate of ITU. If you would like to onboard a cofounder from ITU, contact us and we can see if we can help you depending on the case.',
  },
  {
    question: 'How do you invest?',
    answer:
      'We provide a convertible loan of 200 000kr with a 30% discount rate and a valuation cap of 5mil kr. The maturity date of the loan is 24 months and a standard interest rate of 8% is applied if we do not convert our loan into shares. If this sounds confusing, no worries - we will explain everything.',
  },
  
  
]

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? <br/>Reach out to our{' '}
              <a href="/contact" className="font-medium text-indigo-600 hover:text-indigo-500">
                investment team
              </a>{' '}
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}