import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  BiSolidHome,
  BiSolidFoodMenu,
  BiSolidContact,
  BiSolidBriefcase,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
} from 'react-icons/bi';
import logo from './assets/logo.png';
import pic from './assets/pic.jpg';
import HomePage from './pages/HomePage';

function Root() {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState('Home');

  const links = [
    {
      name: 'Home',
      link: '#',
      icon: (
        <BiSolidHome color={active === 'Home' ? '#1e3a8a' : ''} size={24} />
      ),
    },
    {
      name: 'Experience',
      link: '#resume',
      icon: (
        <BiSolidFoodMenu
          color={active === 'Experience' ? '#1e3a8a' : ''}
          size={24}
        />
      ),
    },
    {
      name: 'Projects',
      link: '#works',
      icon: (
        <BiSolidBriefcase
          color={active === 'Projects' ? '#1e3a8a' : ''}
          size={24}
        />
      ),
    },
    {
      name: 'Contact',
      link: '#contact',
      icon: (
        <BiSolidContact
          color={active === 'Contact' ? '#1e3a8a' : ''}
          size={24}
        />
      ),
    },
  ];
  return (
    <div className="p-12  bg-gradient-to-r from-blue-400 to-indigo-500">
      <nav className="sticky top-0 z-30  border-gray-200 mb-10 text-[30px] shadow-lg rounded-2xl bg-white p-4">
        <div className="w-full mx-auto">
          <div className="mx-2 flex flex-wrap items-center justify-between">
            <img width={80} src={logo} alt="logo" />
            <div className="flex md:hidden md:order-2">
              <button
                onClick={() => {
                  setMenu((active) => !active);
                }}
                data-collapse-toggle="mobile-menu-3"
                type="button"
                className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                aria-controls="mobile-menu-3"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                !menu ? 'block' : 'hidden'
              } md:flex justify-between items-end w-full md:w-auto md:order-1`}
              id="mobile-menu-3"
            >
              <ul className="flex-col gap-4 md:flex-row flex md:space-x-12 mt-4 md:mt-0 md:text-sm md:font-medium">
                {links.map((row) => (
                  <li key={row.name}>
                    <a
                      href={row.link}
                      onClick={() => {
                        setActive(row.name);
                      }}
                      className="flex md:flex-col flex-row justify-start md:justify-center items-center gap-1"
                    >
                      {row.icon}
                      <p
                        className={`${
                          active === row.name ? 'text-[#1e3a8a]' : 'after:'
                        } text-[16px]`}
                      >
                        {row.name}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full gap-5">
        <div className="shadow-lg rounded-2xl bg-white p-6  grid grid-cols-1 md:grid-cols-12 space-x-4 gap-12 md:gap-0  md:divide-x md:divide-gray-200 md:divide-solid">
          <div className="md:sticky md:top-24 md:h-max md:col-span-5 flex flex-col justify-center items-center gap-3">
            <div className="w-[200px] rounded-full overflow-hidden">
              <img src={pic} alt="pic" />
            </div>
            <h1 className="font-bold text-xl text-blue-900 md:block">
              I am Adeyemi Dada
            </h1>

            <div className="text-center text-blue-900 text-5xl pb-5">
              <p>
                I am skillful
                {' '}
                <p />
                <TypeAnimation
                  sequence={[
                    'as a web designer',
                    1000,
                    'in ruby on rails',
                    1000,
                    'in postgreSQL',
                    1000,
                    'in mySQL',
                    1000,
                    'in nestjs',
                    1000,
                  ]}
                  wrapper="span"
                  className="font-bold"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>

            <div className="flex justify-center items-center gap-2">
              <a
                target="_blank"
                href="https://github.com/yemidada"
                className="p-2 bg-[#7dd3fc] rounded-full"
                rel="noreferrer"
                aria-label="Github"
              >
                <BiLogoGithub color="#1e3a8a" size={24} />
                <span />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/yemidada/"
                className="p-2 bg-[#7dd3fc] rounded-full"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BiLogoLinkedinSquare color="#1e3a8a" size={24} />
              </a>

              <a
                href="https://twitter.com/yemidada"
                target="_blank"
                className="p-2 bg-[#7dd3fc] rounded-full"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <BiLogoTwitter color="#1e3a8a" size={24} />
              </a>
            </div>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center text-white bg-[#1e3a8a] justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"
              >
                Contact me
              </a>
              <a
                to="#works"
                className="inline-flex hover:ring-gray-400 hover:bg-gray-100 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto"
              >
                See my work
              </a>
            </div>
          </div>
          <div className="md:pl-10 md:col-span-7 overflow-y-auto ">
            <HomePage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
