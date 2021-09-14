import React from "react";
// import Image from "../images/hero-section.jpeg";
import { StaticImage } from "gatsby-plugin-image";

class Hero extends React.Component {
    render() {
        return (
      <main>
        <div>
          {/* Hero card */}
          <div className="relative bg-gray-200">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-200" />
            <div className="max-w-7xl pt-20 mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl  sm:overflow-hidden">
                <div className="absolute inset-0">
                <StaticImage className="h-full w-full object-cover" src="../images/hero-section.jpeg" alt="People working on laptops" />
                  {/* <img
                    className="h-full w-full object-cover"
                    src={StaticImage}
                    alt="People working on laptops"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block font-mono text-white mb-4">The startup incubator</span>
                    <span className="block font-mono text-indigo-200">for ITU students</span>
                  </h1>
                  <p className="mt-16 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                    We provide the right resources, mentorship &amp; financial support for students<br/>
                    to create new technology startups at the IT University of Copenhagen.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="https://forms.office.com/Pages/ResponsePage.aspx?id=timivgh6hkC0THH1f3Fr21NFSFCP4kNMgDz9einVqfBUNVc0VkwwUEVBNVgwQ0kxS0QzUVdHMzM0TiQlQCN0PWcu"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Join the incubator
                      </a>
                      <a
                        href="/cofounders"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Find a cofounder
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          {/* <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div> */}
         {/* End logo cloud */}

    </div>
</main>
        );
    }
}

export default Hero