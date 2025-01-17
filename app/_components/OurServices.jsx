import React from "react";
const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center  group relative cursor-pointer overflow-hidden bg-white  shadow-[rgba(0,0,0,0.35)_0px_5px_10px] ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[rgba(0,0,0,0.35)_0px_5px_10px] sm:mx-auto sm:max-w-xs sm:rounded-lg ">

        <span className="absolute top-16 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>

        <div className="relative px-4 sm:h-96 md:h-[320px] m-4 z-10 mx-auto max-w-sm flex flex-wrap justify-center items-center space-y-2 content-start">
          <span className="grid h-32 w-32 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary">
            <div className="h-27 w-27 rounded-full overflow-hidden">
              <img
                src={icon}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
          </span>

          <div className="content">
            <div className="pt-3 text-sm text-center font-semibold leading-6">
              <p className="text-primary transition-all duration-300 text-center group-hover:text-white text-xl text-bold">
                {title}
              </p>
            </div>
            <div className="space-y-4 pt-3 md:text-sm leading-6 text-gray-600 transition-all duration-300 group-hover:text-white/90 text-center sm:text-lg">
              <p>{details}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const servicesData = [
  {
    icon: "../x-ray.png",
    title: <>X-Ray<br /><span>&nbsp;</span></>,
    details:
      "X-rays are commonly used to evaluate bone fractures, infections, or lung conditions. Fast and effective, this procedure is often one of the first steps in diagnosing a variety of health issues.",
  },
  {
    icon: "../mri.jpg",
    title: <>MRI <br></br>(Magnetic Resonance Imaging)</>,
    details:
      "MRI scans use magnets and radio waves to create detailed images of soft tissues like the brain, spine, muscles, and organs. They are non-invasive, radiation-free, and helpful for diagnosing various conditions.",
  },
  {
    icon: "../ct-scan.jpg",
    title: <>CT Scan <br></br> (Computed Tomography)</>,
    details:
      "CT scans combine X-ray images with computer processing to create cross-sectional images of the body. This technology helps identify complex conditions like cancer, vascular problems, and internal injuries.",
  },
  {
    icon: "../ultrasound.jpg",
    title: "Ultrasound",
    details:
      "Ultrasound imaging uses high-frequency sound waves to capture real-time images of organs and tissues. It is commonly used in obstetrics and gynecology, cardiology, and abdominal assessments.",
  },
  {
    icon: "../mammography.jpg",
    title: "Mammography",
    details:
      "Our specialized mammography services provide breast cancer screening for early detection. With digital mammography technology, we deliver clear and precise images, ensuring quick and accurate results.",
  },
  {
    icon: "../fluoroscopy.jpg",
    title: "Fluoroscopy",
    details:
      "Fluoroscopy is a type of X-ray that provides real-time images, helping doctors guide procedures like biopsies, catheter placements, and gastrointestinal evaluations.",
  },
];
 

const Service = () => {
  return (
    <section id="services" className=" lg:min-h-screen dark:bg-dark  ">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[510px] text-center my-5">
              <span className="mt-mb-4 text-4xl font-extrabold leading-[1.2] text-dark text-primary sm:text-4xl md:text-[40px]">
                Our Services
              </span>
              <br></br>
              <p className="mt-2 text-base text-body-color dark:text-dark-6">
                We offer a wide range of diagnostic imaging services designed to meet the needs of patients and healthcare providers alike.
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-wrap justify-center align-center">

          <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-center items-center gap-10">


            
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                details={service.details}
              />
            ))}


          </div>


        </div>
      </div>
    </section>
  );
};

export default Service;

