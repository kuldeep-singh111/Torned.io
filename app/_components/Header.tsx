import React from 'react'
import Image from "next/image";
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
const Header = () => {
  return (
    <header className="">
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Image src='/logo-1.png' alt='logo'
    width={50}
    height={100}
    />
       
  
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-white transition hover:text-gray-300" href="#"> About </a>
            </li>
  
            <li>
              <a className="text-white transition hover:text-gray-300" href="#"> Careers </a>
            </li>
  
            <li>
              <a className="text-white transition hover:text-gray-300" href="#"> History </a>
            </li>
  
            <li>
              <a className="text-white transition hover:text-gray-300" href="#"> Services </a>
            </li>
  
            <li>
              <a className="text-white transition hover:text-gray-300" href="#"> Projects </a>
            </li>
  
            <li>
              <a className="text-white transition hover:text-gray-300" href="#"> Blog </a>
            </li>
          </ul>
        </nav>
  
        <div className="flex items-center gap-4">
          
            <a
              className="block rounded-md  px-5 py-2.5 text-sm font-medium text-white transition "
              href="#"
            >
            <LoginLink postLoginRedirectURL='/dashboard'>Login</LoginLink>  
           
            </a>
  
            <a
              className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-slate-600 "
              href="#"
            >
             <RegisterLink> Register</RegisterLink>  
             
            </a>
          
  
        </div>
      </div>
    </div>
  </header>
  )
}
 
export default Header