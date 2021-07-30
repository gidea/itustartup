import * as React from "react";
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Stages from '../components/stages';
import Partners from '../components/partners';
import MeetingBox from '../components/meetingbox';
import Footer from '../components/footer';



export default function IndexPage () {
  return (
      <main>
      <title>ITU Startup Incubator for ITU Students</title>
      <Navbar />
      <Hero />
      <Stages />
      <MeetingBox />
      <Partners />
      <Footer />
    </main>
  );
  }