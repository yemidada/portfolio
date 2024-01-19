function AboutScreen() {
  return (
    <div id="about">
      <div className=" flex w-full justify-center items-center">
        <h2 className="font-black pb-5 mb-5 lg:pb-10 lg:mb-10 text-2xl lg:text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
          About me
        </h2>
      </div>

      <p className="pb-2 text-[15px] w-full text-justify">
        Hello! I&apos;m Adeyemi Dada, a results-driven
        software developer with expertise in HTML, CSS, JavaScript,
        PHP, and React, educated at Microverse with a project-centric
        learning approach. I led the development of Nigeria&apos;s stock market
        trading platform and a connecting platform for buyers and sellers,
        refining my problem-solving and teamwork skills.
      </p>

      <p className="pb-2 text-[15px] w-full text-justify">
        Currently specializing in crafting user-friendly web applications,
        I seamlessly blend technical prowess with a discerning eye for design.
        Thriving on new challenges, I excel in remote, asynchronous settings,
        dedicated to producing clean and efficient code that meets functional
        and aesthetic requirements.
      </p>

      <div className="pt-5 lg:pt-10 flex w-full justify-center items-center">
        <h2 className="font-black pb-5 mb-5 lg:pb-10 lg:mb-10 text-2xl lg:text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
          Key Skills and Expertise
        </h2>
      </div>

      <ul className="divide-y">
        <li className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center my-2">
          <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl px-6 whitespace-nowrap">
            Front-End . . . . .
          </strong>
          <span className="w-full lg:text-right  p-3">
            JavaScript | React | Redux | HTML5 | CSS3 | Tailwind
          </span>
        </li>

        <li className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center my-2">
          <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl px-6 whitespace-nowrap">
            Back-End . . . . .
          </strong>
          <span className="w-full lg:text-right  p-3">
            Ruby | Rails | SQL | MongoDB | PostgreSQL | MySQL
          </span>
        </li>

        <li className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center my-2">
          <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl px-6 whitespace-nowrap">
            Tools and Methods . . . . .
          </strong>
          <span className="w-full lg:text-right  p-3">
            Git | GitHub | Vercel | Webpack | Mobile/Responsive Development
          </span>
        </li>

        <li className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center my-2">
          <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl px-6 whitespace-nowrap">
            Professional . . . . .
          </strong>
          <span className="w-full lg:text-right  p-3">
            Collaborations | Remote pair-programming | Teamwork | Mentoring
          </span>
        </li>
      </ul>
    </div>
  );
}

export default AboutScreen;
