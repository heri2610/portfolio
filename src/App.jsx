import { useEffect, useRef } from 'react';
import './App.css'
import Header from './components/landingPage/Header'
import Hero from './components/landingPage/Hero'
import Footer from './components/landingPage/Footer'
import Projects from './components/landingPage/Projects';
import Skils from './components/landingPage/Skils';
import Experience from './components/landingPage/Experience';
import Education from './components/landingPage/Education';

function App() {
  const headerRef = useRef(null);
  const toTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const toTop = toTopRef.current;
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
      } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Header headerRef={headerRef}/>
      <Hero/>
      <Projects/>
      <Skils/>
      <Experience/>
      <Education/>
      <Footer/>
      <a href="#home" className="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse" ref={toTopRef}>
        <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
      </a>
    </>
  )
}

export default App
