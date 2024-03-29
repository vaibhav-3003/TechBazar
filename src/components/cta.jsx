import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="w-11/12 md:w-4/5 px-5 mx-auto bg-orange-100 rounded-lg py-8 flex justify-between mb-16">
      <h3 className="text-md font-semibold text-gray-800">
        Ready to Get Started? <br />
        Talk to us today
      </h3>
      <button className="btn bg-orange-400 hover:bg-orange-500 text-white px-5 text-md">
        <Link to="/contact">Get Started</Link>
      </button>
    </div>
  );
}

export default CTA
