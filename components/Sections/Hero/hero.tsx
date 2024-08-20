import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className=" bg-gradient-to-t lg:bg-gradient-to-r from-white to-yellow-300 py-16 px-4 sm:px-8 w-full lg:h-screen  flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center pt-20 md:pt-0 gap-5">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            The <span className="bg-purple-600 text-white px-2 rounded">Leading</span> Agency
            <br />
            For Digital <span className="bg-blue-600 text-white px-2 rounded">Influencer</span> Marketing
          </h1>
          <p className="text-black text-sm sm:text-base md:text-lg">
            Loopthru started as a modest platform, driven by a deep passion for connecting brands with influential storytellers.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md shadow-md">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-md shadow-md">
              Discover Our Work
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end space-x-4 px-4 sm:px-0">
     
           
           <img
         src="/group.svg"
         alt="Influencer 2"
         className=" "
       />
     
         
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
