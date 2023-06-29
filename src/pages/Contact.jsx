import React from 'react'

const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-between">
      <div className="w-1/2 h-full absolute -left-full lg:relative lg:left-0">
        <img src="./images/map.jpg" alt="" className="h-full bg-cover" />
      </div>
      <div className="w-11/12 md:w-3/4 rounded-xl lg:w-1/2 mt-24 h-fit mx-auto lg:h-fit lg:bg-white lg:rounded-none lg:mt-16">
        <div className="w-full mt-4 lg:mt-0 lg:py-4 py-4">
          <h2 className="text-center text-3xl md:text-5xl text-gray-700 font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-center absolute -left-full md:relative md:left-0 w-3/4 mx-auto px-4 mb-4">
            Let's get this conversation started. Tell us about yourself and
            we'll get in touch as soon as we can
          </p>
        </div>
        <div className="w-full md:w-3/4 mx-auto px-4 py-2">
          <form action="https://formspree.io/f/xeqbjkno" method="POST">
            <label
              htmlFor="username"
              className="block text-md text-gray-400 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              required
              className="border w-full block py-1.5 px-2 outline-none shadow-sm rounded-md focus:shadow-md focus:shadow-orange-400 mb-4"
            />
            <label
              htmlFor="username"
              className="block text-md text-gray-400 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              required
              className="border w-full block py-1.5 px-2 outline-none shadow-sm rounded-md focus:shadow-md focus:shadow-orange-400 mb-4"
            />
            <label
              htmlFor="username"
              className="block text-md text-gray-400 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              autoComplete="off"
              id=""
              cols="5"
              rows="4"
              className="w-full border mb-4 outline-none shadow-sm rounded-md focus:shadow-md focus:shadow-orange-400 resize-none px-2 py-1"
            ></textarea>

            <button
              type="submit"
              className="btn bg-orange-400 text-white px-10 normal-case text-lg hover:bg-orange-500 mb-4 lg:mb-0"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
