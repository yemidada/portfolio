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
      ],
    },
  ];
  return (
    <div id="resume">
      <div className=" flex w-full justify-center items-center">
        <h2 className="font-black pb-5 mb-5 lg:pb-10 lg:mb-10 text-2xl lg:text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
          Experience
        </h2>
      </div>
      <div className="w-full flex flex-col gap-6 lg:gap-12 pb-4">
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
