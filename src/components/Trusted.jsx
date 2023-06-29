import React from 'react'

const Trusted = () => {
  return (
    <div className="w-full py-10 bg-orange-100 flex flex-col justify-center items-center mb-16">
      <div className="w-full mb-10 grayscale">
        <h3 className="text-center text-gray-500 text-2xl font-semibold">
          Trusted By 1000+ Companies
        </h3>
      </div>
      <div className="w-11/12 lg:w-4/5 py-5 flex items-center flex-wrap justify-between px-5 grayscale">
        <img src="./images/google.png" alt="google" className="mb-4 md:mb-0" />
        <img
          src="./images/atlassian.png"
          alt="atlassian"
          className="mb-4 md:mb-0"
        />
        <img
          src="./images/dropbox.png"
          alt="dropbox"
          className="mb-4 md:mb-0"
        />
        <img src="./images/shopify.png" alt="shopify" />
        <img src="./images/slack.png" alt="slack" />
      </div>
    </div>
  );
}

export default Trusted
