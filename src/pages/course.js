import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CoursePhoto from "../images/course2.jpg";
import UlrikPhoto from "../images/ulrik.jpeg";
import UllaProfile from "../images/ulla.jpeg";
import HeiniProfile from "../images/heini.jpg";
import MortenProfile from "../images/morten.jpeg";
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'

const courseBoxes = [
    {
      name: 'Weekly Sessions',
      description:
        'The course runs over a 6 week period with different modules focused on specific building blocks for succesful technology startups.',
      icon: PhoneIcon,
    },
    {
      name: 'Practice + Toolbox',
      description:
        'Bring your own startup idea, or work together with others and apply your learning. We will support you and provide the tools needed.',
      icon: SupportIcon,
    },
    {
      name: 'Expert Guest Speakers',
      description:
        'Highly successful startup founders will share their experience, and how the real-world might end up looking different than planned for.',
      icon: NewspaperIcon,
    },
  ]

  const guestSpeakers = [
    {
      name: 'Ulla Hald',
      role: 'Founder & CEO',
      startup: 'Faves',
      href: 'https://thefavesapp.com/',
      imageUrl: UllaProfile,
    },
    {
      name: 'Heini Zachariassen',
      role: 'Founder & CEO',
      startup: 'Vivino',
      href: 'https://vivino.com',
      imageUrl: HeiniProfile,
    },
    {
      name: 'Morten Primdahl',
      role: 'Founder & CTO',
      startup: 'Zendesk',
      href: 'https://zendesk.com',
      imageUrl: MortenProfile,
    },
  ]


class CoursePage extends React.Component {
    

    render() {


        return(
            <main>
            <title>ITU Startup - Entrepreneruship Course - Free startup advice for ITU Students</title>
            <Navbar />
            <div className="bg-white">
            {/* Header */}
            <div className="relative pb-32 bg-gray-600">
                <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src={CoursePhoto}
                    alt="Students studying"
                />
                <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Entrepreneurship Course</h1>
                <h2 className="text-3xl tracking-tight text-white">Building a business from idea to first commercial sales</h2>
                <p className="mt-6 max-w-3xl text-xl text-gray-300">
                    A 6 week programme to help you understand the building blocks of successful startups and learn from the founders of some of the biggest Danish tech startups
                </p>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-8 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                {courseBoxes.map((box) => (
                    <div className="flex flex-col bg-white rounded-2xl shadow-xl">
                    <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <div className="absolute top-0 p-5 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2">
                        <box.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">{box.name}</h3>
                        <p className="mt-4 text-base text-gray-500">{box.description}</p>
                    </div>
                    </div>
                ))}
                </div>

                <div className="mt-16 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                    <a
                      href="https://forms.gle/KBPaziG2sB39ZViu5"
                      className="inline-flex items-center justify-center px-20 py-6 border border-transparent text-xl font-normal rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Enroll in the course
                    </a>
                </div>
                </div>

            </section>
            </div>
            
            <div className="relative  bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          
          <p className="mt-8 text-xl text-gray-500 leading-8">
          This short course will go through the first phase of building a successful business - from idea to first commercial sales.
          It will cover topics related to product, market, team and how to build the first business model and execute the opportunity.
          Students will learn from visiting Entrepreneurs throughout the course - both people who bootstrapped their business and people
          who raised several hundred million DKK in investments. Among the visitors will be founder of Vivino Heini Zachariasen as well
          as co-founder of Zendesk <a href="https://www.nasdaq.com/market-activity/stocks/zen" title="Zendesk">(Nasdaq:ZEN)</a> Morten Primdah who is also an ITU alumni.
          </p>
        </div>
        <div className="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
          <p>
          The course covers the key elements that need to be addressed in the journey from idea to initial commercial business.
          Focus will be on applied entrepreneurship providing frameworks that are relevant to use in the process of building a viable startup.
          Less focus will be on theoretical considerations and scientific research in the area of Entrepreneurship.
          </p>

          <p><strong>The course will be taught over six in class teaching sessions of two hours duration each.</strong></p>
          
          <h3>The outline of sessions are as follows:</h3>
          <ul>
            <li><strong>Oct 6 - Course introduction:</strong> What is a startup? What does it take to succeed? An overview of the startup journey, ideas and how to think about them using the business model canvas.</li>
            <li><strong>Oct 13 - Market and Customer Validation:</strong> How to get customer and market information, how to size the opportunity, the customer value proposition, thinking big and starting  small - does that make it less ambitious?</li>
            <li><strong>Oct 20 - 🍂 Autumn break 💆</strong> </li>
            <li><strong>Oct 27 - Building the first product:</strong> How to scope the product, things to consider when defining your Minimal Viable Product (MVP) and Product-Market Fit</li>
            <li><strong>Nov 3 - Getting the first customer:</strong> Go-to-market strategies, understanding the customer, the customer decision process, pricing, closing your first sales.</li>
            <li><strong>Nov 10 - Team and Execution:</strong> Founders and co-founders, team diversity and energy, what are the skills required to execute the opportunity?, cost effective execution, team dynamics</li>
            <li><strong>Nov 17 - Financials and Financing:</strong> Key financial metrics, financing options and things to consider: bootstrap - friends - angels - VC’s, course wrap-up and course evaluation.</li>
          </ul>
          <h2>Guest speakers</h2>
          <p>We are glad to welcome world-renowed entrepreneurs which have built and scaled some of the most succesful technology companies to date.</p>
          <div className="mx-autospace-y-16 grid sm:grid-cols-1 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {guestSpeakers.map((person) => (
              <div className= "items-center align-center" key={person.name}>
                    <img className="mx-auto space-y-6 h-40 w-40 rounded-full" src={person.imageUrl} alt="speaker" />
                    <div className="text-lg text-center leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-small text-gray-600">{person.role},</p>
                      <a className="text-gray-400 hover:text-gray-500" href={person.href} title={person.startup}>{person.startup}</a>
                    </div>                
              </div>
            ))}
          </div>
          <h2>From beginner to founder in 6 weeks</h2>
          <p>
          This course is relevant for students interested in building new businesses.
          Both students that out of curiosity want to get a better understanding of what it takes to build a viable
          business from scratch and students that consider an entrepreneurial pathway.
          </p>
          <p>
          Sessions will be a combination of in class teaching, exercises and visiting entrepreneurs that will share
          their early stage stories and present some of their main challenges. Expect one hour preparation per session.
          </p>
            <strong>Max participants: 30 students</strong><br/>
            <strong>Expected course workload: 3 hours per week (incl. 2 hour course)</strong><br/>
            <strong>The course is free of charge and there is no exam (no ECTS credits).</strong><br/>
            
          <blockquote>
            <p>
              This course is a pilot-initiative aiming to bring a more hands-on approach to entrepreneurship, and decide if a permanent Applied Entrepreneruship course should be provided to ITU students.
            </p>

          </blockquote>
          <p className="text-right text-xl text-gray-500">
            MARTIN TVEDE ZACHARIASEN, ITU Vice Chancellor</p>


        </div>

        <div className="mt-16 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                    <a
                      href="https://forms.gle/KBPaziG2sB39ZViu5"
                      className="inline-flex items-center justify-center px-20 py-6 border border-transparent text-xl font-normal rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Enroll in the course
                    </a>
                </div>
                </div>

      </div>
    </div>

    <div className="bg-white pt-16 lg:py-24">
      <div className="pb-16 bg-green-700 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src={UlrikPhoto}
                  alt="Ulrik Jensen"
                />
              </div>
            </div>
          </div>
              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                      <div>
                      <div>
                  <h2 className="text-base text-green-200 font-semibold tracking-wide uppercase">Taught by</h2>
                  <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Ulrik Jensen
                  </h3>
                  <p className="mt-6 text-lg font-medium text-white">
                  Over the past 20 years, Ulrik has been working with startups as an executive and as an investor.
                  He is currently the chairman of iMotions, Writereader and ITU Business Development and holds
                  a Master degree in engineering and a business degree from Stanford University.
                  </p>
                </div>
              </div>  
          </div>
          </div>
        </div>
      </div>
    </div>


            {/* <CourseDescription /> */}
            
            
            
            <Footer />
             </main>
        );
    }

}

export default CoursePage