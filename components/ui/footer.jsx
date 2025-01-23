import Link from "next/link"
import { Twitter, Facebook, Dribbble, Github, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="relative bg-primary pt-8 pb-6 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-white">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <Button variant="outline" size="icon" className="bg-white text-blue-400 mr-2">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                            <Button variant="outline" size="icon" className="bg-white text-blue-600 mr-2">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Button>
                        
                          
                            <Button variant="outline" size="icon" className="bg-white text-pink-600 mr-2">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Button>
                            <Button variant="outline" size="icon" className="bg-white text-blue-700 mr-2">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/" className="text-white hover:text-custom-hover-3  block pb-2 text-sm">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-white hover:text-custom-hover-3  block pb-2 text-sm">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-white hover:text-custom-hover-3  block pb-2 text-sm">
                                            Services
                                        </Link>
                                    </li>
                                  
                                    <li>
                                        <Link
                                            href="/appointments"
                                            className="text-white hover:text-custom-hover-3  block pb-2 text-sm"
                                        >
                                            Book a Appointment
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link
                                            href="/faq"
                                            className="text-white hover:text-custom-hover-3 block pb-2 text-sm"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms" className="text-white hover:text-custom-hover-3 block pb-2 text-sm">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/privacy"
                                            className="text-white hover:text-custom-hover-3 block pb-2 text-sm"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="text-white hover:text-custom-hover-3 block pb-2 text-sm"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-white  py-1">
                            Copyright © {new Date().getFullYear()} Your Company Name. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
