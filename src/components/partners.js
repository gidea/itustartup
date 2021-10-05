import React from "react";
import Hubspot from '../images/partners/hubspot.png';
import Microsoft from '../images/partners/microsoft.png';
import AWS from '../images/partners/aws.png';
import Google from '../images/partners/google.png';
import Billy from '../images/partners/billy.png';
import LegalMonster from '../images/partners/legalmonster.png';
import Cuttles from '../images/partners/cuttles.png';
import ContractBook from '../images/partners/contractbook.png';
import Capdesk from '../images/partners/capdesk.png';
import StartupCentral from '../images/partners/startupcentral.png';
import VentureCup from '../images/partners/venturecup.png';

class Partners extends React.Component {
    render() {

        const partnerList = [
          {
            name: 'Hubspot',
            href: '#',
            logo: Hubspot,
          },
          {
            name: 'Microsoft',
            href: '#',
            logo: Microsoft,
          },  
          {
                name: 'AWS',
                href: '#',
                logo: AWS,
              },
              {
                name: 'Google',
                href: '#',
                logo: Google,
              },
              {
                name: 'Billy',
                href: '#',
                logo: Billy,
              },
              {
                name: 'LegalMonster',
                href: '#',
                logo: LegalMonster,
              },
              {
                name: 'Cuttles',
                href: '#',
                logo: Cuttles,
              },
              {
                name: 'CapDesk',
                href: '#',
                logo: Capdesk,
              },
              {
                name: 'ContractBook',
                href: '#',
                logo: ContractBook,
              },
              {
                name: 'StartupCentral',
                href: '#',
                logo: StartupCentral,
              },
              {
                name: 'VentureCup',
                href: '#',
                logo: VentureCup,
              },  
          ]

    return (
  <div className="bg-white p-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              We're not the only ones comitted to helping student startups
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              We are working together with many exceptional partners who also believe in our mission of supporting the student entreprenewurs of tomorrow.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="/contact"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Become a partner
                </a>
              </div>
              
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-2 lg:mt-0 lg:grid-cols-2 sm:grid-cols-2">
          {partnerList.map((partner) => (
            <div key={partner.name} className="col-span-1 flex justify-center py-4 px-4 bg-gray-50">
              <a href={partner.url}><img
                className="max-h-16"
                src={partner.logo}
                alt={partner.name}
              />
              </a>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );

    }
}

export default Partners