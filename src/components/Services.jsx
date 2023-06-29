import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb';
import {MdSecurity} from 'react-icons/md';
import {GiReceiveMoney} from 'react-icons/gi';
import {RiSecurePaymentLine} from 'react-icons/ri';

const Services = () => {
  return (
    <div className="w-full py-10 mb-10">
      <div className="w-full md:w-11/12 lg:w-4/5 mx-auto grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-4 gap-8 px-5">
        <div className="md:row-span-2 bg-orange-100 flex justify-center items-center flex-col py-20 rounded-lg shadow-lg">
          <div className="bg-white p-2 rounded-full mb-2">
            <TbTruckDelivery className="text-2xl text-orange-500" />
          </div>
          <h3 className="text-md md:text-sm text-center font-semibold text-orange-950">
            Super Fast and Free Delivery
          </h3>
        </div>
        <div className="md:col-span-2 row-span-2 grid gap-8">
          <div className="md:row-span-1 bg-orange-100 flex flex-col md:flex-row justify-center items-center rounded-lg shadow-lg">
            <div className="bg-white p-2 rounded-full md:mr-3 mb-2 md:mb-0">
              <MdSecurity className="text-2xl text-orange-500" />
            </div>
            <h3 className="text-md text-center font-semibold text-orange-950">
              Non-contact Shipping
            </h3>
          </div>
          <div className="md:row-span-1 bg-orange-100 flex flex-col md:flex-row justify-center items-center rounded-lg shadow-lg">
            <div className="bg-white p-2 rounded-full mr-3 mb-2 md:mb-0">
              <GiReceiveMoney className="text-2xl text-orange-500" />
            </div>
            <h3 className="text-md font-semibold text-orange-950">
              Money-back Guaranteed
            </h3>
          </div>
        </div>
        <div className="md:row-span-2 bg-orange-100 flex justify-center items-center flex-col py-20 rounded-lg shadow-lg">
          <div className="bg-white p-2 rounded-full mb-2">
            <RiSecurePaymentLine className="text-2xl text-orange-500" />
          </div>
          <h3 className="text-md md:text-sm text-center font-semibold text-orange-950">
            Super Secure Payment System
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Services
