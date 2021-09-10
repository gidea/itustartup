import * as React from "react";
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Stages from '../components/stages';
import Partners from '../components/partners';
import MeetingBox from '../components/meetingbox';
import Footer from '../components/footer';
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";




export default function IndexPage () {
  return (
    <main>
      <Helmet>
            <meta charSet="utf-8" />
            <title>ITU Startup - Incubator for ITU Students</title>
            <link rel="icon" type="image/png" href="./../images/divefm-logo.svg" sizes="16x16" />
            <meta name="description" content="We provide the right resources, mentorship &amp; financial support for students to create new technology startups at the IT University of Copenhagen."/>
            <script src={withPrefix('legalmonster.js')} />
      </Helmet>
      <Navbar />
      <Hero />
      <Stages />
      <MeetingBox />
      <Partners />
      <Footer />
    </main>
  );
  }