import React from 'react'

const Footers = () => {
  return (
  <>
    <footer className="text-white body-font !mt-60 !pt-10 bg-black justify-center flex flex-col items-center md:!h-60 !h-100 na2">
  <div className="container !px-5 !py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="!w-64 flex-shrink-0 md:!mx-0 !mx-auto text-center md:text-left md:!mt-0 !mt-10">By
      <a className="flex title-font font-medium  md:justify-start justify-center items-center md:items-start text-white">
        <img src="../favicon.ico" alt="Logo" />
        <span className="ml-3 text-xl">ClonicalClone</span>
      </a>
      <p className="mt-2 text-sm text-gray-200">Aesthic Watch brand.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:!pr-20 !-mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4  w-full !px-4">
        <h2 className="title-font font-medium  tracking-widest  mb-3 text-xl">Links</h2>
        <nav className="list-none mb-10 flex gap-4 w-full items-center justify-center md:justify-start">
          <li>
            <a className=" hover:text-gray-400 " href='/'>Home</a>
          </li>
          <li>
            <a className=" hover:text-gray-400" href='/Product'>Products</a>
          </li>
          <li>
            <a className=" hover:text-gray-400"  href='/About'>About</a>
          </li>
          <li>
            <a className=" hover:text-gray-400"  href='/Contact'>Contacts</a>
          </li>
        </nav>
        
        <h2 className="title-font font-medium text-white tracking-widest  mb-3 !mt-5 text-xl ">Other</h2>
        <nav className="list-none mb-10 flex gap-4 items-center justify-center md:justify-start">
        <li>
            <a className=" hover:text-gray-400">Cart</a>
          </li>
          <li>
            <a className=" hover:text-gray-400">Discounts</a>
          </li>
          <li>
            <a className=" hover:text-gray-400">Offers</a>
          </li>
          <li>
            <a className=" hover:text-gray-400">Expensives</a>
          </li>
        </nav>
      </div>
      
     
      
    </div>
  </div>
  <div >
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row gap-7 !-mt-10 !mb-1 text-white">
      <p className=" text-sm text-center sm:text-left ">© 2025 ClonicalClone  —
        
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-2">
        <a className="">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="!ml-3 ">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="!ml-3 ">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="!ml-3 ">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
</>
  )
}

export default Footers
