import React from 'react'
import Sosmed from './Ui/Sosmed'

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-8">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-8 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h3 className="mb-2 text-2xl font-bold">Contact Us</h3>
            <p>suhaeriheri45@gmail.com</p>
            <p>Serang, Banten 42162</p>
          </div>
          <div className="mb-6 w-full px-4 md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold text-white">Tautan</h3>
            <ul className="text-slate-300 grid grid-rows-3 grid-flow-col gap-2">
              <li>
                <a href="#home" className="mb-2 inline-block text-base hover:text-primary">Beranda</a>
              </li>
              <li>
                <a href="#portfolio" className="mb-2 inline-block text-base hover:text-primary">Portfolio</a>
              </li>
              <li>
                <a href="#clients" className="mb-2 inline-block text-base hover:text-primary">Clients</a>
              </li>
              <li>
                <a href="#blog" className="mb-2 inline-block text-base hover:text-primary">Blog</a>
              </li>
              <li>
                <a href="#contact" className="mb-2 inline-block text-base hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-slate-700 pt-10">
          <div className="mb-5 flex items-center justify-center">
            <Sosmed/>
          </div>
          <p className="text-center text-xs font-medium text-slate-400">
            Created with <span className="text-pink-500">❤️</span> by <a href="https://www.linkedin.com/in/suhaeri-0b9882215" target="_blank" className="font-bold text-primary">Suhaeri</a>
          </p>
          <p className="text-center text-xs font-medium text-slate-400">
            2024 © All Rights Reservesed
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer