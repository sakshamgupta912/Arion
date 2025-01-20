import React from 'react'

const ChooseUsCard = ({ icon, title, details }) => {
    return (
        <>
            <div className='lg:w-3/12 sm:p-10 md:p-6 text-center'>
                <p className='mb-4  dark:bg-primary-900'><i className={icon}></i></p>
                <h3 className="mb-2 text-xl font-bold text-white dark:text-white">{title}</h3>
                <p className="text-white text-opacity-90 dark:text-gray-400">{details}</p>
            </div>
        </>
    );
}
const data = [
    { 
        id: 1, 
        icon: "fa-solid fa-user-doctor fa-3x text-white", 
        title: "Experienced Radiologists", 
        details: "Our board-certified radiologists have years of experience interpreting images and providing accurate diagnoses. They work closely with your healthcare providers to ensure the best possible care." 
    },
    { 
        id: 2, 
        icon: "fa-solid fa-microscope fa-3x text-white", 
        title: "State-of-the-Art Equipment", 
        details: "We use the latest imaging technology to provide precise, high-resolution images for better diagnoses. Our advanced equipment ensures a more comfortable experience while delivering optimal results." 
    },
    { 
        id: 3, 
        icon: "fa-solid fa-hand-holding-heart fa-3x text-white", 
        title: "Compassionate Care", 
        details: "At ARC, we understand that medical imaging can sometimes be stressful. Our compassionate team is dedicated to making your visit as comfortable and stress-free as possible." 
    },
    { 
        id: 4, 
        icon: "fa-solid fa-calendar-check fa-3x text-white", 
        title: "Convenient Scheduling", 
        details: "We offer flexible hours and same-day or next-day appointments to ensure you get the imaging services you need as soon as possible." 
    },
    { 
        id: 5, 
        icon: "fa-solid fa-file-invoice-dollar fa-3x text-white", 
        title: "Insurance and Billing", 
        details: "We accept most major insurance plans and work directly with your provider to ensure that your billing is as smooth and transparent as possible." 
    }
];

const WhyChooseUs = () => {
    return (
        <div>
            <section className="bg-primary dark:bg-gray-900 py-4  lg:min-h-screen lg:flex lg:flex-col lg:justify-evenly">
                <div className='px-4 mx-auto max-w-screen-xl  lg:px-6 mb-10'>
                    <div className=" flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto max-w-[510px] text-center mb-5">
                                    <span className="mb-4 text-4xl font-extrabold leading-[1.2] text-dark text-white sm:text-4xl md:text-[40px]">
                                        Why Choose Us?
                                    </span>
                                    <br></br>
                                    <p className="mt-2 text-base text-body-color dark:text-dark-6 text-white text-opacity-90">
                                        We provide precise, compassionate diagnostic imaging using advanced technology. Trusted by patients and providers, we deliver exceptional care every step of the way!
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
         
                <div className=" px-4 mx-auto max-w-screen-xl  lg:px-6">
                  

                    <div className="flex flex-wrap justify-center align-center gap-12">
                        {data.map((item) => (
                            <ChooseUsCard key={item.id} icon={item.icon} title={item.title} details={item.details} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUs