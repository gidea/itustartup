import React from 'react'
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Banner() {
  return (
    <div className="bg-green-600">
      <div className="sticky max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            
            <span className="flex p-2 rounded-lg bg-green-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Deadline soon!</span>
              <span className="hidden md:inline">Deadline soon! Enroll in the Entrepreneurship Course before Oct 1st!</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="/course"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-green-50"
            >
              Learn more &amp; enroll
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}
