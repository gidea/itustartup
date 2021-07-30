import React from "react";
// import { StaticImage } from "gatsby-plugin-image";

class Header extends React.Component {
    render() {
        return(
    <div className="relative ">
      <div className="absolute inset-0">
      {/* <StaticImage className="h-full w-full object-cover" src={this.props.image} alt={this.props.title}/> */}
        <img
          className="w-full h-full object-cover"
          src={this.props.image}
          alt={this.props.title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-yellow-600 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{this.props.title}</h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
        {this.props.description}
        </p>
      </div>
    </div>
        )
    }
}

export default Header