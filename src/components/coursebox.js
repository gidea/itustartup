import React from "react";
import { ExternalLinkIcon } from '@heroicons/react/solid';
import { StaticImage } from "gatsby-plugin-image";
import CoursePhoto from "../images/course2.jpg";


class MeetingBox extends React.Component {
    render() {
        return (
            <div className="relative bg-gradient-to-r from-pink-600 to-yellow-600 mix-blend-multiply">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 ">
      <StaticImage className="h-full w-full object-cover" src="../images/course2.jpg" alt="People asking questions" />
        {/* <img
          className="w-full h-full object-cover "
          src={CoursePhoto}
          alt="People receiving help from an advisor"
        /> */}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-100">Deadline soon!</h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Entrepreneurship Course</p>
          <p className="mt-3 text-lg text-gray-100">
          A 6 week programme to help you understand the building blocks of succesful startups and learn from the founders of some of the biggest Danish tech startups.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/course"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Read more &amp; enroll
                <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
    }
}
export default MeetingBox