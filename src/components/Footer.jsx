import React from 'react'
import {Link } from "react-router-dom";

const Footer = () => {
  return (
    
      <footer className="w-full bg-orange-800 py-4">
        <div className="w-11/12 lg:w-4/5 mx-auto py-10 flex justify-between px-5 flex-wrap">
          <div className="w-1/3">
            <h3 className="text-2xl font-bold text-white mb-2">Tech Bazar</h3>
            <p className="text-sm text-white">
              Lorem ipsum Lorem ipsum dolor sit amet. <br />
              Lorem ipsum dolor sit amet. Lorem, ipsum
            </p>
          </div>
          <div className="w-1/3">
            <div className="w-1/2 mx-auto flex flex-col">
              <h3 className="text-md font-bold mb-2 text-white uppercase">
                Quick Links
              </h3>
              <Link to="/" className="link link-hover text-white">
                Home
              </Link>
              <Link to="/" className="link link-hover text-white">
                About
              </Link>
              <Link to="/" className="link link-hover text-white">
                Contact
              </Link>
              <Link to="/" className="link link-hover text-white">
                Products
              </Link>
            </div>
          </div>
          <div>
            <span className="text-md uppercase font-bold text-white">
              Newsletter
            </span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">
                  Enter your email address
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn bg-orange-400 hover:bg-orange-500 absolute top-0 right-0 rounded-l-none text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
  );
}

export default Footer
