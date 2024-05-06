import React from 'react'
import Sosmed from './Ui/Sosmed'

const Footer = () => {
  return (
    <footer class="bg-dark pt-24 pb-12">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h3 class="mb-2 text-2xl font-bold">Hubungi Kami</h3>
            <p>suhaeriheri45@gmail.com</p>
            <p>Link.Kepandean Got, Jl. Takari, Taktakan, Kec. Taktakan, Kota Serang, Banten 42162</p>
          </div>
          <div class="mb-12 w-full px-4 md:w-1/3">
            <h3 class="mb-5 text-xl font-semibold text-white">Kategori Tulisan</h3>
            <ul class="text-slate-300">
              <li>
                <a href="#" class="mb-3 inline-block text-base hover:text-primary">Programming</a>
              </li>
              <li>
                <a href="#" class="mb-3 inline-block text-base hover:text-primary">Teknologi</a>
              </li>
              <li>
                <a href="#" class="mb-3 inline-block text-base hover:text-primary">Gaya Hidup</a>
              </li>
            </ul>
          </div>
          <div class="mb-12 w-full px-4 md:w-1/3">
            <h3 class="mb-5 text-xl font-semibold text-white">Tautan</h3>
            <ul class="text-slate-300">
              <li>
                <a href="#home" class="mb-2 inline-block text-base hover:text-primary">Beranda</a>
              </li>
              <li>
                <a href="#portfolio" class="mb-2 inline-block text-base hover:text-primary">Portfolio</a>
              </li>
              <li>
                <a href="#clients" class="mb-2 inline-block text-base hover:text-primary">Clients</a>
              </li>
              <li>
                <a href="#blog" class="mb-2 inline-block text-base hover:text-primary">Blog</a>
              </li>
              <li>
                <a href="#contact" class="mb-2 inline-block text-base hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full border-t border-slate-700 pt-10">
          <div class="mb-5 flex items-center justify-center">
            <Sosmed/>
          </div>
          <p class="text-center text-xs font-medium text-slate-500">
            Dibuat dengan <span class="text-pink-500">❤️</span> oleh <a href="https://instagram.com/sandhikagalih" target="_blank" class="font-bold text-primary">Suhaeri</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer