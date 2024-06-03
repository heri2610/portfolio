import React from 'react'
import CardProjects from './Ui/CardProjects'

const Projects = () => {
  return (
    <div className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Projects</h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          <CardProjects img="https://source.unsplash.com/360x200?programming" judul="Berkat Karimar Mandiri (BKM)" deskripsion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?" />
          <CardProjects img="https://source.unsplash.com/360x200?mechanical+keyboard" judul="Iroiro" deskripsion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi facilis illum in." />
          <CardProjects img="https://source.unsplash.com/360x200?coffee" judul="Jayarasa" deskripsion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, totam ." />
        </div>
        
      </div>
    </div>
  )
}

export default Projects