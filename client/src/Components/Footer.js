import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-600">
      <div className="container mx-auto py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h3 className=" mb-2 ml-3">
              <svg class="h-24 w-24 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="17" r="2" />  <circle cx="18" cy="17" r="2" />  <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />  <polyline points="16 5 17.5 12 22 12" />  <line x1="2" y1="10" x2="17" y2="10" />  <line x1="7" y1="5" x2="7" y2="10" />  <line x1="12" y1="5" x2="12" y2="10" /></svg>
            </h3>
            <p className="mb-1 ml-2">
            redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.
            </p>
            <p className="mb-2 ml-3">Contact: redbus.bus@redbus.com</p>
          </div>
          <div className="text-center md:text-left">
            <h6 className="uppercase font-bold mb-4 text-lg">About</h6>
            <p className="mb-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                About Us
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Contact Us
              </a>
            </p>
          </div>
          <div className="text-center md:text-left">
            <h6 className="uppercase font-bold mb-4 text-lg">Useful Links</h6>
            <p className="mb-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Careers
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                FAQ
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Terms & Conditions
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Blog
              </a>
            </p>
          </div>
          <div className="text-center md:text-left">
            <h6 className="uppercase font-bold mb-4 text-lg">Follow Us</h6>
            <div className="flex justify-center md:justify-start">
              <a href="#!" className="mr-6 text-gray-600 hover:text-gray-800">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="mr-6 text-gray-600 hover:text-gray-800">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-400 mx-auto" />
      <div className="text-center py-4 bg-gray-300">
        <p className="text-gray-600 font-semibold">
          &copy; {new Date().getFullYear()} All rights reserved - Reserve
        </p>
      </div>
    </footer>
  );
};

export default Footer;
