function AboutScreen() {
  return (
    <div id="about">
      <div className="header flex w-full justify-center">
        <h2 className="font-black pb-10 mb-10 text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
          About me
        </h2>
      </div>

      <p className="pb-2 text-[15px]">
        Greetings! I&apos;m Adeyemi Dada, a results-driven software developer
        with expertise in HTML, CSS, JavaScript, PHP, and React. I completed my
        education at Microverse, renowned for its project-centric learning and
        collaborative pair programming approach.
      </p>

      <p className="pb-2 text-[15px]">
        With a wealth of experience, I led the development of Nigeria&apos;s
        stock market trading platform and engineered a connecting platform for
        buyers and sellers. My Microverse experience honed my problem-solving
        and teamwork skills in diverse settings, placing a strong emphasis on
        attention to detail and creativity in project management.
      </p>

      <p className="pb-2 text-[15px]">
        Currently, I specialize in crafting user-friendly web applications using
        cutting-edge technologies. My approach seamlessly combines technical
        prowess with a discerning eye for design and user experience. I thrive
        on tackling new challenges and continuously refine my skills in dynamic,
        cross-cultural, and international environments.
      </p>

      <p className="pb-2 text-[15px]">
        What distinguishes me is my dedication to producing clean and efficient
        code that meets both functional and aesthetic requirements. I excel in
        remote, asynchronous settings, fostering seamless collaboration with
        global teams.
      </p>

      <div className="pt-5 header flex w-full justify-center">
        <h2 className="font-black pb-10 mb-10 text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
          Key Skills and Expertise
        </h2>
      </div>

      {/* <div className="grid grid-cols-2 pt-3 gap-4"> */}
      <ul className="divide-y">
        <li className=" flex justify-between items-center my-2">
          <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl px-6 whitespace-nowrap">
            Front-End . . . . .
          </strong>
          {' '}
          <span className="w-full text-right  p-3">
            JavaScript | React | Redux | HTML5 | CSS3 | Tailwind
          </span>
        </li>

        <li className=" flex justify-between items-center my-2">
          <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl px-6 whitespace-nowrap">
            Back-End . . . . .
          </strong>
          {' '}
          <span className="w-full text-right  p-3">
            Ruby | Rails | SQL | MongoDB | PostgreSQL | MySQL
            {' '}
          </span>
        </li>

        <li className=" flex justify-between items-center my-2">
          <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl px-6 whitespace-nowrap">
            Tools and Methods . . . . .
          </strong>
          {' '}
          <span className="w-full text-right  p-3">
            Git | GitHub | Vercel | Webpack | Mobile/Responsive Development
          </span>
        </li>

        <li className=" flex justify-between items-center my-2">
          <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl px-6 whitespace-nowrap">
            Professional . . . . .
          </strong>
          {' '}
          <span className="w-full text-right  p-3">
            Collaborations | Remote pair-programming | Teamwork | Mentoring
          </span>
        </li>
      </ul>
    </div>
  );
}

export default AboutScreen;
