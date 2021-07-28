import * as React from "react";
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Stages from '../components/stages';
// import CallToAction from '../components/calltoaction'
// import Portfolio from '../components/portfolio';
import Partners from '../components/partners';
// import Contact from '../components/contact';

export default function IndexPage () {
  return (
      
      <main>
      <title>ITU Startup Incubator for ITU Students</title>
      <Navbar />
      <Hero />
      <Stages />
      <Partners />
      {/* <CallToAction />
      <Portfolio />
      <Partners />
      <Contact> */}
    </main>
  );
  }