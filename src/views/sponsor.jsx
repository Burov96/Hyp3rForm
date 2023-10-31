import React from 'react';
import { redirect } from 'react-router';
import kuhnq from "/src/views/path_to_a_cool_image.webp"

const SponsorshipComponent = () => {
    return (
    <div className='duration-200 h-[110vh] -translate-y-6 flex justify-center items-center backdrop-blur-md'>

        <div className=" -mt-[200px] w-screen bg-gradient-to-br from-black to-gray-800 p-10 h-auto md:h-96 flex flex-col md:flex-row items-center justify-between relative overflow-hidden space-y-8 md:space-y-0 md:space-x-10">

            <div className="flex-shrink-0 w-full md:w-1/3">
                <img src={kuhnq} alt="Promotional Image" className="rounded-xl shadow-2xl object-cover w-full h-64" />
            </div>

            <div className="z-10 text-white space-y-6 w-full md:w-2/3">
                <h2 className="text-6xl font-extrabold leading-tight tracking-tighter mb-4">
                    Join the Elite!
                </h2>
                <div className="border-b-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-32 mb-4"></div>
                <p className="text-xl font-light leading-relaxed mb-6">
                    Become our ambassador. Radiate energy, promote top-tier pre-workouts, and reap the rewards. The spotlight awaits you.
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-2 px-8 rounded-full font-semibold shadow-xl transition-transform transform hover:scale-105 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50" onClick={(e) => {
    e.stopPropagation();
    window.location.href = 'https://www.linkedin.com/in/teodor-burov-b5ba12bb/';
}}>
                    Dive In Now
                </button>
            </div>
            
            <div className="absolute top-0 left-0 w-48 h-48 bg-purple-400 opacity-10 rounded-full z-0 transform -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400 opacity-10 rounded-full z-0 transform translate-x-1/3 translate-y-1/3"></div>
        </div>
        </div>
    );
}

export default SponsorshipComponent;
