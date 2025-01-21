import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 relative xl:mr-0 lg:mr-5 mr-0 lg:min-h-screen">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              {/* Heading and Intro */}
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-custom-hover-3 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Experts in Radiotherapy Care
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    At Arion Radiotherapy Cancer Care Center, we specialize in advanced radiotherapy treatments, 
                    using cutting-edge technology to target and treat cancer with precision and care. Our mission 
                    is to provide hope and healing by delivering personalized cancer care through innovative radiation 
                    solutions.
                  </p>
                </div>
              </div>

              {/* Highlights Section */}
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {/* Highlight 1 */}
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Precision Technology</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Utilizing the latest radiotherapy equipment for accurate cancer targeting.
                    </p>
                  </div>
                  {/* Highlight 2 */}
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Holistic Care</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Supporting patients with tailored treatment plans and compassionate care.
                    </p>
                  </div>
                </div>

                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {/* Highlight 3 */}
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Comprehensive Expertise</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Specialists in external beam and internal radiotherapy techniques.
                    </p>
                  </div>
                  {/* Highlight 4 */}
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Over 99% Satisfaction</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Ensuring patient comfort and delivering exceptional outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="./about.jpg"
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



