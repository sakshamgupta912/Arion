import React, { useState, useEffect } from 'react';

const CustomComponent = ({ image, buttonContent = [], title, description }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Get the height of the header
    const header = document.querySelector('.header');
    if (header) {
      const headerHeight = header.offsetHeight;
      setHeaderHeight(headerHeight);
    }
  }, []); // Runs once after the component is mounted

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        minHeight: `calc(100vh - ${headerHeight}px)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          minHeight: `calc(100vh - ${headerHeight}px)`,
          display: 'flex',
          alignItems: 'center',
        }}
        className="container mx-auto max-w-screen-xl px-4"
      >
        <div className="container">
          <div className="text-black space-y-6 max-w-lg ">
            <div className=''>{title}</div>
            <div>{description}</div>
            <div className="flex space-x-4 text-center">
            {buttonContent.map((button, index) => (
                    <button
                    key={index}
                    onClick={() => (window.location.href = button.href)}
                    className={`relative flex h-[50px] w-40 items-center justify-center overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full ${
                        button.type === 'primary'
                        ? 'bg-primary before:bg-custom-hover-3 hover:shadow-custom-hover-3 hover:before:h-56 hover:before:w-56'
                        : 'bg-custom-hover-3 before:bg-primary hover:shadow-primary hover:before:h-56 hover:before:w-56'
                    } before:duration-500 before:ease-out`}
                    >
                    <span className="relative z-10">{button.text}</span>
                    </button>
                ))}
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
