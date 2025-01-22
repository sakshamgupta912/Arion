import Link from "next/link";
import React from "react";
const ServiceCard = ({ icon, title, details, slug }) => {
  return (
    <>
       <Link href={`/services/${slug}`}>
      <div className="flex flex-wrap justify-center items-center  group relative cursor-pointer overflow-hidden bg-white  shadow-[rgba(0,0,0,0.35)_0px_5px_10px] ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[rgba(0,0,0,0.35)_0px_5px_10px] sm:mx-auto sm:max-w-xs sm:rounded-lg ">

        <span className="absolute top-16 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>

        <div className="relative px-4 sm:h-96 md:h-[320px] m-4 z-10 mx-auto max-w-sm flex flex-wrap justify-center items-center space-y-2 content-start">
          <span className="grid h-32 w-32 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary">
            <div className="h-27 w-27 rounded-full overflow-hidden">
              <img style={{aspectRatio: '1/1'}}
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
        </Link>
    </>
  );
};

const servicesData = [
  {
    icon: "./radiation-therapy.jpg",
    title: <>Radiation Therapy<br /><span>&nbsp;</span></>,
    slug: "radiation-therapy", 
    details:
      "Radiation therapy uses high doses of radiation to kill cancer cells and shrink tumors. It is a precise and effective treatment for many types of cancer, tailored to minimize damage to healthy tissues.",
  },
   {
    icon: "./nuclear-medicine.jpg",
     title: <>Nuclear Medicine<br /><span>&nbsp;</span></>,
     slug: "nuclear-medicine",
    details:
      "Nuclear medicine uses small amounts of radioactive material to diagnose and treat diseases. It provides insights into organ function and structure, helping to identify conditions like tumors, infections, and more.",
  },
  {
    icon: "./gene-profiling.jpg",
    title: <>Gene Profiling<br /><span>&nbsp;</span></>,
      slug: "gene-profiling",
    details:
      "Gene profiling analyzes the activity of multiple genes to uncover insights about health, disease progression, and individual traits. It aids in personalized treatments and healthcare decisions.",
  },
  {
    icon: "./routine-diagnostics.webp",
     slug: "routine-diagnostics",
    title: <>Routine Diagnostics<br /><span>&nbsp;</span></>,
    details:
      "Routine blood and urine tests help assess overall health, detect medical conditions, and monitor ongoing treatments. These essential diagnostics provide valuable insights into various health indicators.",
  },
  {
    icon: "./chemotherapy.webp",
     slug: "chemotherapy",
    title: <>Chemotherapy<br /><span>&nbsp;</span></>,
    details:
      "Chemotherapy uses powerful drugs to kill or control cancer cells. It is often used alone or in combination with other treatments to target and manage various types of cancer effectively.",
  },
  {
    icon: "./x-ray.png",
     slug: "x-ray",
    title: <>X-Ray<br /><span>&nbsp;</span></>,
    details:
      "X-rays are commonly used to evaluate bone fractures, infections, or lung conditions. This fast and effective procedure is often one of the first steps in diagnosing a variety of health issues.",
  },
  {
    icon: "./mri.jpg",
     slug: "mri",
    title: <>MRI<br /><span>(Magnetic Resonance Imaging)</span></>,
    details:
   "MRI scans use magnets and radio waves to create detailed, radiation-free images of soft tissues, aiding in diagnosing neurological and musculoskeletal conditions.",
},
  {
    icon: "./ct-scan.jpg",
     slug: "ct-scan",
    title: <>CT Scan<br /><span>(Computed Tomography)</span></>,
    details:
      "CT scans combine X-ray images with advanced computer processing to create cross-sectional images of the body. They are used to identify complex conditions like cancer, vascular problems, and internal injuries.",
  },
  {
    icon: "./ultrasound.jpg",
     slug: "ultrasound",
    title: <>Ultrasound<br /><span>&nbsp;</span></>,
    details:
      "Ultrasound imaging uses high-frequency sound waves to capture real-time images of organs and tissues. It is frequently utilized in obstetrics, gynecology, cardiology, and abdominal assessments.",
  },
  {
    icon: "./mammography.jpg",
     slug: "mammography",
    title: <>Mammography<br /><span>&nbsp;</span></>,
    details:
      "Our specialized mammography services provide breast cancer screening for early detection. Utilizing digital mammography technology, we ensure precise imaging and quick, accurate results.",
  },
  {
    icon: "./fluoroscopy.jpg",
     slug: "fluoroscopy",
    title: <>Fluoroscopy<br /><span>&nbsp;</span></>,
    details:
      "Fluoroscopy is a real-time X-ray imaging technique that aids procedures like biopsies, catheter placements, and gastrointestinal evaluations, ensuring precision and safety.", },
 
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
                slug={service.slug}
              />
            ))}


          </div>


        </div>
      </div>
    </section>
  );
};

export default Service;

