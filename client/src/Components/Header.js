import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-40 border-b-4">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#991b1b]">
        <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokewidth="2" stroke="currentColor" fill="none" stroke-linecap="round" strokelinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="17" r="2" />  <circle cx="18" cy="17" r="2" />  <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />  <polyline points="16 5 17.5 12 22 12" />  <line x1="2" y1="10" x2="17" y2="10" />  <line x1="7" y1="5" x2="7" y2="10" />  <line x1="12" y1="5" x2="12" y2="10" /></svg>
          <Link to="/" className="pb-2" onClick={() => props.setAuthentication(false)}>
             TravelBus
          </Link>
          <div className="ml-8">
          <svg class="h-5 w-5 text-black"  width="24" height="24" viewBox="0 0 24 24" strokewidth="2" stroke="currentColor" fill="none" stroke-linecap="round" strokelinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="15" y1="5" x2="15" y2="7" />  <line x1="15" y1="11" x2="15" y2="13" />  <line x1="15" y1="17" x2="15" y2="19" />  <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" /></svg>
          </div>
          <div className="m-1 text-[#000000]">
         <Link > Ticket </Link>
    </div>

        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`font-bold md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
        
          {!props.authentication && (
            <>
              <button
                className="bg-[#991b1b] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
              >
                Login
              </button>
              <li className="md:ml-8 text-xl md:my-0 my-7"></li>
            </>
          )}
          {props.authentication && (
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href="/"
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                <div className="flex justify-center items-center">
                  <div className="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono h-[40px] w-[40px] text-xl bg-[orange]">
                    N
                  </div>
                  <div className="mt-2 ml-2">My Profile</div>
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
