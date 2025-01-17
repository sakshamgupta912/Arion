import React from 'react';

const AboutUs = () => {
  return (<section id = "about" className="py-24 relative xl:mr-0 lg:mr-5 mr-0 lg:min-h-screen">
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                className="text-custom-hover-3 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Dedicated to Excellence in Cancer Care
                            </h2>
                            <p
                                className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                At Arion Radiotherapy Cancer Care Center, our story is one of innovation, compassion, 
                                and dedication. We are committed to delivering personalized cancer treatment, 
                                combining advanced technology with holistic patient care to empower healing and hope.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex-col justify-center items-start gap-6 flex">
                        <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div
                                className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">20+ Years</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">Providing World-className Care</p>
                            </div>
                            <div
                                className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">15,000+ Patients</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">Lives Touched and Transformed</p>
                            </div>
                        </div>
                        <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div
                                className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">50+ Awards</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">Recognized for Excellence</p>
                            </div>
                            <div
                                className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Satisfaction</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">Committed to Patient Care</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
                <div
                    className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                    <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                        src="/about.jpg" alt="about us" />
                </div>
            </div>
        </div>
    </div>
</section>
);
};

export default AboutUs;
