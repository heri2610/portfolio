import React from 'react'

const Projects = () => {
  return (
    <div className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
      <div class="container">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 max-w-xl text-center">
            <h4 class="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
            <h2 class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Projects</h2>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3 ">
            <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800 dark:shadow-slate-700">
              <img src="https://source.unsplash.com/360x200?programming" alt="Programming" class="w-full" />
              <div class="py-8 px-6">
                <h3>
                  <a href="#" class="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">Berkat Karimar Mandiri (BKM)</a>
                </h3>
                <p class="mb-6 text-base font-medium text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?</p>
                <a href="#" class="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800 dark:shadow-slate-700">
              <img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="Mechanical Keyboard" class="w-full" />
              <div class="py-8 px-6">
                <h3>
                  <a href="#" class="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">Iroiro</a>
                </h3>
                <p class="mb-6 text-base font-medium text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi facilis illum in.</p>
                <a href="#" class="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800 dark:shadow-slate-700">
              <img src="https://source.unsplash.com/360x200?coffee" alt="Coffee" class="w-full" />
              <div class="py-8 px-6">
                <h3>
                  <a href="#" class="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">Jayarasa</a>
                </h3>
                <p class="mb-6 text-base font-medium text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, totam .</p>
                <a href="#" class="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects