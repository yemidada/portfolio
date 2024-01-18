import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import WorkWidget from './WorkWIdget';
import BudgetImage from '../assets/budget.jpg';
import HairImage from '../assets/hair.jpg';
import TodoImage from '../assets/todo.jpg';
import CalculatorImage from '../assets/calculator.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function WorkScreen() {
  const works = [
    {
      id: 1,
      title: 'Todo List',
      about:
        'Our intuitive interface simplifies task management. Effortlessly mark tasks as complete using a checkbox (or undo with a simple uncheck). The app automatically saves updates locally, delivering a seamless task management experience crafted with precision in HTML, CSS, and Javascript.',
      codeLink: 'https://github.com/yemidada/todo-list',
      demoLink: 'https://yemidada.github.io/todo-list/dist/',
      image: TodoImage,
    },
    {
      id: 2,
      title: ' Hair Style Application',
      about:
        'This is a react capstone project is an adaptive web application that showcases various hairstyles and corresponding hair details sourced from an open API. Developed using React, Redux, HTML, and CSS, this project ensures a responsive user experience.',
      codeLink: 'https://github.com/yemidada/metric-webapp',
      demoLink: 'https://hairstyles.onrender.com',
      image: HairImage,
    },
    {
      id: 3,
      title: 'My Budget',
      about:
        'This Ruby on Rails capstone project is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. ',
      codeLink: 'https://github.com/yemidada/MyBudget',
      demoLink: 'https://mybudget-lf89.onrender.com/',
      image: BudgetImage,
    },
    {
      id: 4,
      title: 'Math Magicians',
      about:
        'Introducing the Math Magician application, meticulously crafted using HTML, CSS, and React. This cutting-edge Single Page App (SPA) empowers users to perform a wide array of mathematical computations effortlessly.',
      codeLink: 'https://github.com/yemidada/math-magicians',
      demoLink: 'https://math-magicians-sngg.onrender.com/',
      image: CalculatorImage,
    },
  ];
  return (
    <>
      <div id="works" className="header flex w-full justify-center">
        <h2 className="font-black pb-10 mb-10 text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
          Projects
        </h2>
      </div>
      <div className="w-full">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <WorkWidget
                title={work.title}
                codeLink={work.codeLink}
                demoLink={work.demoLink}
                about={work.about}
                image={work.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
