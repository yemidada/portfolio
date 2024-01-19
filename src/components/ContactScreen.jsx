import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function ContactScreen() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    reset();
    toast('Your message has been sent successfully', {
      type: 'success',
    });
  };
  const firstName = register('firstName', { required: true });
  const lastName = register('lastName', { required: true });
  const email = register('email', { required: true });
  const company = register('company');
  const message = register('message', { required: true });

  return (
    <div id="contact" className="w-full">
      <div>
        <div className=" flex w-full justify-center items-center">
          <h2 className="font-black pb-5 mb-5 lg:pb-10 lg:mb-10 text-2xl lg:text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
            Get in Touch
          </h2>
        </div>

        <div className="w-full h-[250px]">
          <iframe
            title="m"
            className="w-full h-full"
            src="https://www.google.com/maps/embed/v1/place?q=Ikeja,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 pt-3 gap-0 lg:gap-4">
          <ul className="divide-y">
            <li className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center my-2">
              <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl w-full">
                Address . . . . .
              </strong>
              {' '}
              <span className="w-full lg:text-right  p-3">Lagos, Nigeria</span>
            </li>

            <li className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center my-2">
              <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl w-full">
                Phone . . . . .
              </strong>
              {' '}
              <span className="w-full lg:text-right  p-3">+2347039362601</span>
            </li>
          </ul>

          <ul className="divide-y">
            <li className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center my-2">
              <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl w-full">
                Email . . . . .
              </strong>
              {' '}
              <span className="w-full lg:text-right  p-3">
                <a href="mailto:yemidada@gmail.com">yemidada@gmail.com</a>
              </span>
            </li>
            <li className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center my-2">
              <strong className="text-blue-900 bg-sky-300 p-2 rounded-xl w-full">
                Freelance . . . . .
              </strong>
              {' '}
              <span className="w-full lg:text-right  p-3">Available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="header flex w-full justify-center pt-5">
        <h2 className="font-black pb-10 mb-10 text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
          Contact Form
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor={firstName.id}
              className="block text-sm font-semibold leading-6 text-black"
            >
              <p> First name *</p>
              <div className="mt-2.5">
                <input
                  onChange={firstName.onChange}
                  onBlur={firstName.onBlur}
                  name={firstName.name}
                  ref={firstName.ref}
                  type="text"
                  id="firstName"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
                {errors.firstName && (
                  <p className="text-red-500">First name is required</p>
                )}
              </div>
            </label>
          </div>
          <div>
            <label
              htmlFor={lastName.id}
              className="block text-sm font-semibold leading-6 text-black"
            >
              <p> Last name *</p>
              <div className="mt-2.5">
                <input
                  onChange={lastName.onChange}
                  onBlur={lastName.onBlur}
                  name={lastName.name}
                  ref={lastName.ref}
                  type="text"
                  id="lastName"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
                {errors.lastName && (
                  <p className="text-red-500">Last name is required</p>
                )}
              </div>
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor={company.id}
              className="block text-sm font-semibold leading-6 text-black"
            >
              <p> Company</p>
              <div className="mt-2.5">
                <input
                  onChange={company.onChange}
                  onBlur={company.onBlur}
                  name={company.name}
                  ref={company.ref}
                  type="text"
                  id="company"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor={email.id}
              className="block text-sm font-semibold leading-6 text-black"
            >
              <p> Email *</p>

              <div className="mt-2.5">
                <input
                  onChange={email.onChange}
                  onBlur={email.onBlur}
                  name={email.name}
                  ref={email.ref}
                  type="email"
                  id="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
            </label>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={message.id}
              className="block text-sm font-semibold leading-6 text-black"
            >
              <p> Message *</p>

              <div className="mt-2.5">
                <textarea
                  id="first-name"
                  onChange={message.onChange}
                  onBlur={message.onBlur}
                  name={message.name}
                  ref={message.ref}
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                {errors.message && (
                  <p className="text-red-500">Message is required</p>
                )}
              </div>
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-900 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactScreen;
