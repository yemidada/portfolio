import AboutScreen from '../components/AboutScreen';
import ContactScreen from '../components/ContactScreen';
import ResumeScreen from '../components/ResumeScreen';
import WorkScreen from '../components/WorkScreen';

function HomePage() {
  return (
    <div className="flex flex-col justify-normal items-start gap-3 lg:gap-12 w-full">
      <AboutScreen />

      <WorkScreen />

      <ResumeScreen />

      <ContactScreen />
    </div>
  );
}

export default HomePage;
