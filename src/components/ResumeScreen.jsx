import ExperienceWidget from './ExperienceWidget';

function ResumeScreen() {
  const works = [
    {
      id: 1,
      period: 'Feb 2018 - Present',
      role: 'Team Lead',
      company: 'traDirect.com',
      features: [
        'Provided mentorship to a cohort of 10 developers, fostering their professional growth and skill development.',
        'Developing a free shopping portal for Nigeria with a dynamic domain for each seller',
        'Development of a uniform communication for smooth conversation between sellers and buy',
      ],
    },
    {
      id: 2,
      period: 'Aug 2016 - Jan 2018 ',
      role: 'Software Manager',
      company: 'Meristem Nigeria',
      features: [
        'Spearheaded the creation of a pioneering investment gaming application, successfully launched at the Nigerian Stock Exchange.',
        "Designed and implemented an asset management portal using ASP.NET language, enhancing the firm's technological capabilities.",
        "Engineered a probate management application tailored for the firm's registrar business unit, optimizing efficiency in legal processes.",
        "Played a pivotal role as the technical mastermind behind strategy and product development, contributing to the firm's overall success.",
        "Played a pivotal role in boosting sales by 15% through the enhancement of client experiences.- Spearheaded the creation of a pioneering investment gaming application, successfully launched at the Nigerian Stock Exchange. - Designed and implemented an asset management portal using ASP.NET language, enhancing the firm's technological capabilities. - Engineered a probate management application tailored for the firm's registrar business unit, optimizing efficiency in legal processes. - Played a pivotal role as the technical mastermind behind strategy and product development, contributing to the firm's overall success. - Innovatively developed a sub-broker portal, empowering partner brokerage firm clients to execute trades with ease and efficiency. Played a pivotal role in boosting sales by 15% through the enhancement of client experiences. ",
      ],
    },
  ];
  return (
    <div id="resume">
      <div className="header flex w-full justify-center">
        <h2 className="font-black pb-10 mb-10 text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
          Experience
        </h2>
      </div>
      <div className="w-full flex flex-col gap-12 pb-4">
        {works.map((work) => (
          <ExperienceWidget
            key={work.id}
            period={work.period}
            role={work.role}
            features={work.features}
            company={work.company}
          />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center text-white bg-[#1e3a8a] justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"
        >
          View my Resume
        </a>
      </div>
    </div>
  );
}

export default ResumeScreen;
