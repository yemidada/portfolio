import PropTypes from 'prop-types';

function ExperienceWidget({
  period, role, features, company,
}) {
  return (
    <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600">{period}</span>
        <div className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
          {company}
        </div>
      </div>
      <div className="mt-2">
        <div className="text-2xl font-bold text-gray-700">
          {role}
        </div>

        <ul>
          {features && features.map((val) => (
            <li className="mt-2 text-gray-600" key={val}>
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ExperienceWidget.propTypes = {
  period: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  features: PropTypes.objectOf.isRequired,
};

export default ExperienceWidget;
