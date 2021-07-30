import React from 'react'
import { UserGroupIcon, LightningBoltIcon, LightBulbIcon } from '@heroicons/react/outline';



class Stages extends React.Component {
    render() {

          const supportLinks = [
            {
              name: 'Matchmaking',
              href: '#',
              description:
                'Fill the cofounder signup form and we will provide you with a list of other students looking for cofounders & invite you to our networking events.',
              icon: UserGroupIcon,
            },
            {
              name: 'Idea Pipeline',
              href: '#',
              description:
                'Join a 3-month programme in which you receive dedicated mentorship to improve your startup idea & get customer validation.',
              icon: LightBulbIcon,
            },
            {
              name: 'Incubator',
              href: '#',
              description:
                'A 6-month incubation programme where you get the resources needed to develop your business, your product and launch your startup.',
              icon: LightningBoltIcon,
            },
          ]

          
            let step1 = 'Find cofounders';
            let description1 ='You must get those around you as excited for your vision as you are! You will need a lot of help to build this company!';

            let step2 = 'Research your problem area';
            let description2 ='Talking to potential customers allows you to iterate rapidly and identify how to deliver the highest value to customers.';
            
            let step3 = 'Build a working prototype';
            let description3 = 'Show, don\'t tell! Have a basic prototype of your solution ready for feedback and further development.';

            let step4 = 'Define your business plan & pitch deck';
            let description4 = 'With the learning you\'ve had by this point you can write a much more compelling business plan & pitch deck for potential investors.';
          
        

        return(
            <section class="text-gray-600 bg-gray-200 body-font">

            <div className="text-center max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <p className="mt-1 text-4xl font-mono font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                start to build.now()
                </p>
                <p className="max-w-3xl font-mono mt-5 mx-auto text-xl text-gray-600">
                Life is too short to work for a boring company. <br/>
                We bring the resources, you bring the ambition. 
                </p>
            </div>

            <section
                className="mt-16 max-w-7xl mx-auto relative z-10 pb-20 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                Learn more
                </h2>
                {/*                 

                Problem with flex flex-1 classes between divs. couldn't center icons. pure voodoo
                
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                {supportLinks.map((link) => (
                    <div key={link.name} className="flex flex-col shadow-xl">
                    <div className="flex-1 bg-white relative pt-16 px-6 pb-8 md:px-8">
                        <div className="absolute top-0 p-6 inline-block bg-indigo-600 rounded-full shadow-lg transform -translate-y-1/2 ">
                        <link.icon className="h-16 w-16 p-2 m-auto text-white" aria-hidden="true" />
                        </div>

                        <h3 className="text-2xl pt-8 text-center font-medium text-gray-900">{link.name}</h3>
                        <p className="mt-4 p-6 text-base text-center text-gray-500">{link.description}</p>
                    </div>
                    
                    <div className="p-6 bg-indigo-50 text-center md:px-8">
                        <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                        Learn more<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                    </div>
                ))}
                </div> */}

                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">

                {supportLinks.map((link) => (
                    <div key={link.name} className="flex bg-white items-center justify-center flex-col shadow-xl pt-16 px-6 pb-8 md:px-8">
                        <div className="absolute top-0 p-6 inline-block bg-indigo-600 rounded-full shadow-lg transform -translate-y-1/2 ">
                        <link.icon className="h-16 w-16 p-2 m-auto text-white" aria-hidden="true" />
                        </div>

                        <h3 className="text-2xl pt-8 text-center font-medium text-gray-900">{link.name}</h3>
                        <p className="mt-4 p-6 text-base text-center text-gray-500">{link.description}</p>
                    
                    <div className="p-6 w-full bg-indigo-50 text-center md:px-8">
                        <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                        Learn more<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                    </div>
                ))}
                </div>


            </section>
            <p className="max-w-3xl mt-5 font-mono mx-auto text-xl text-gray-600">
                Yes, building a startup is hard and takes a lot of effort.
                </p>
                <p className="max-w-3xl mt-5 font-mono mx-auto text-xl text-gray-600">
                There are many things that you need to figure out, but you don't need to do everything all at the same time.<br />
            </p>
                <p className="max-w-3xl mt-5 font-mono mx-auto text-xl text-gray-600">
                    In reality it is simply a sequence of steps taking you closer to your goal. And we are there to support you on that journey.
                    </p>

            <div class="container mx-auto sm:px-6 lg:px-8 mt-16 max-w-7xl mx-auto relative z-10 px-4">
                
              <div class="flex relative pt-10 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                <div class="flex-grow m-12 p-9 bg-white shadow-xl md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="text-2xl pb-4 font-medium text-gray-900">{step1}</h2>
                    <p class="leading-relaxed">{description1}</p>
                  </div>
                </div>
              </div>
              <div class="flex relative sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                <div class="flex-grow m-12 p-9 bg-white shadow-xl md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="text-2xl pb-4 font-medium text-gray-900">{step2}</h2>
                    <p class="leading-relaxed">{description2}</p>
                  </div>
                </div>
              </div>
              <div class="flex relative sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                <div class="flex-grow m-12 p-9 bg-white shadow-xl md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="text-2xl pb-4 font-medium text-gray-900">{step3}</h2>
                    <p class="leading-relaxed">{description3}</p>
                  </div>
                </div>
              </div>
              <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                <div class="flex-grow m-12 p-9 bg-white shadow-xl md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="text-2xl pb-4 font-medium text-gray-900">{step4}</h2>
                    <p class="leading-relaxed">{description4}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </section>

        );
    }
}

export default Stages;