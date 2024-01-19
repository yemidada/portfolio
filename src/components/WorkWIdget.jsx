import PropTypes from 'prop-types';

function WorkWidget({
  title, codeLink, demoLink, about, image,
}) {
  return (
    <div className="border border-stone-100 w-full rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl">
      <div className="  p-6">
        <div className="pb-3 mb-4 border-b border-stone-200 text-xs font-medium flex justify-between items-center gap-5 text-blue-900">
          <a
            href={demoLink}
            target="_blank"
            className="text-center inline-flex items-center text-white bg-[#1e3a8a] justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"
            rel="noreferrer"
          >
            See demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            className="text-center inline-flex hover:ring-gray-400 hover:bg-gray-100 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:mt-0 sm:ml-3 sm:w-auto"
            rel="noreferrer"
          >
            Source code
          </a>
        </div>
        <h3 className="mb-4 font-semibold  text-2xl text-blue-900">{title}</h3>
        <p className="text-sky-800 text-sm mb-0">{about}</p>
      </div>
      <div className="mt-auto">
        <img
          src={image}
          alt=""
          className="w-full h-48 object-cover"
        />
      </div>
    </div>
  );
}

WorkWidget.propTypes = {
  codeLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WorkWidget;
