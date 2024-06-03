import React from 'react'

const CardProjects = ({img, judul, deskripsion}) => {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3 ">
        <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800 dark:shadow-slate-700">
            <img src={img} alt="Programming" className="w-full" />
            <div className="py-8 px-6">
            <h3>
                <a href="#" className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">{judul}</a>
            </h3>
            <p className="mb-6 text-base font-medium text-secondary">{deskripsion}</p>
            <a href="#" className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Baca Selengkapnya</a>
            </div>
        </div>
    </div>
  )
}

export default CardProjects