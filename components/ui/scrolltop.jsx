// components/ScrollToTop.js
"use client"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <Button onClick={scrollToTop} className="fixed bottom-4 right-4 rounded-full p-3 ">
        <ChevronUp className="h-6 w-6" />
        <span className="sr-only">Go to top</span>
      </Button>
    )
  );
};

export default ScrollToTop;


