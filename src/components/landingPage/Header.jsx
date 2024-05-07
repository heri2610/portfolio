import React from 'react'
import { useState, useEffect } from 'react'

const Header = ({headerRef}) => {
  const [them, setThem] = useState("dark")
  const [hamAct, SetHamAct] = useState(false)
  
  useEffect(() => {
    const theem = window.localStorage.getItem("them")
    if(!theem) {
      window.localStorage.setItem("them", "dark")
      document.documentElement.classList.add('dark');
      setThem("dark") 
    }else{
      document.documentElement.classList.add(theem);
      setThem(theem)
    }
  }, [])

  const swichClick = ()=>{
    if (them == "light") {
        setThem("dark")
        window.localStorage.setItem("them", "dark")
        document.documentElement.classList.add('dark');
    } else {
        setThem("light")
        window.localStorage.setItem("them", "light")
        document.documentElement.classList.remove('dark');
    }
  }

  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent" ref={headerRef}>
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a href="#home" className="block py-6 text-lg font-bold text-primary">Suhaeri</a>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className={`absolute right-4 block lg:hidden ${hamAct ? "hamburger-active" : ""}`} onClick={()=>SetHamAct((prev)=>!prev)}>
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            <nav
              id="nav-menu"
              className={`absolute right-4 top-full ${hamAct ? "" :"hidden"} w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Beranda</a>
                </li>
                <li className="group">
                  <a href="#about" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Tentang Saya</a>
                </li>
                <li className="group">
                  <a href="#portfolio" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Portfolio</a>
                </li>
                <li className="group">
                  <a href="#clients" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Clients</a>
                </li>
                <li className="group">
                  <a href="#blog" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Blog</a>
                </li>
                <li className="group">
                  <a href="#contact" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Contact</a>
                </li>
                <li className="mt-3 flex items-center pl-8 lg:mt-0">
                  <div className="flex">
                    <button 
                        className="w-10 h-6 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
                        onClick={swichClick}
                        >
                        <div
                            id="switch-toggle"
                            className={`w-6 h-6 relative rounded-full transition duration-500 transform p-1 text-white ${them == "light" ? "bg-yellow-500 -translate-x-2" : "bg-gray-700 translate-x-full" } `}>
                              {them == "light" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                              </svg>}
                        </div>
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header