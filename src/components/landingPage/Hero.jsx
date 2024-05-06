import React from 'react'

const Hero = () => {
  return (
    <div className="pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">Halo Semua 👋, saya <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">Suhaeri</span></h1>
            <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">Programmer | Software Enginer</h2>
            <p className="mb-10 font-medium leading-relaxed text-black dark:text-white">I am a Full Stack Engineer with work experience at PT Okta Prima Mulya and Platon, and have attended various trainings at Dicoding, Altera, Binar Academy, and others. I am determined to continue developing as a programmer and deepen my understanding of system security. With skills in JavaScript, PHP, and Golang, I am ready to collaborate on creative projects in the future.</p>
            <a href="file/Suhaeri-cv.pdf" download={true} target="_blank" className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:text-primary hover:bg-white border-primary border-2 hover:dark:bg-dark">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="inline"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
                />
              </svg>
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <img src="image/suhaeri.png" alt="suhaeri" className="relative z-10 mx-auto max-w-full" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-8 md:mb-0 md:scale-125">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#14b8a6"
                    d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero