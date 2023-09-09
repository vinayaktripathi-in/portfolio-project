import Card from "../../card";
import Image from "next/image";
import { userData } from "./userdata";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import InsightImg01 from "/public/images/insight-img-01.avif";
import InsightImg02 from "/public/images/insight-img-02.avif";

type Props = {};

export const Content = ({}: Props) => {
  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Project Features
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            This is what I bring to the table!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800"
            href="#"
          >
            <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Responsive
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Responsive, and mobile-first project on the web
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800"
            href="#"
          >
            <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Customizable
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Components are easily customized and extendable
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800"
            href="#"
          >
            <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Documentation
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Every component and plugin is well documented
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800"
            href="#"
          >
            <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                24/7 Support
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Contact us 24 hours a day, 7 days a week
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </a>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Icon Blocks */}

      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Insights
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Stay in the know with insights from industry experts.
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image
                unoptimized
                width={100}
                height={100}
                className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src={InsightImg01}
                alt="Image Description"
              />
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                Sponsored
              </span>
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Studio by Preline
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Produce professional, reliable streams easily leveraging
                Preline`&apos;`s innovative broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
                Read more
                <MdOutlineKeyboardArrowRight />
              </p>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image
                unoptimized
                width={100}
                height={100}
                className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src={InsightImg02}
                alt="Image Description"
              />
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Onsite
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Optimize your in-person experience with best-in-class
                capabilities like badge printing and lead retrieval
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
                Read more
                <MdOutlineKeyboardArrowRight />
              </p>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition] bg-[url('/images/insight-img-03.avif')]"
            href="#"
          >
            <div className="flex-auto p-4 md:p-6">
              <h3 className="text-xl dark:text-white/[.9] group-hover:text-white">
                <span className="font-bold">Preline</span> Press publishes books
                about economic and technological advancement.
              </h3>
            </div>
            <div className="pt-0 p-4 md:p-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium dark:text-white group-hover:text-white/[.7]">
                Visit the site
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}

      {/* Recommendations */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Recomendations
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            for creative people
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userData.map((data, index) => (
            <Card
              key={index}
              name={data.name}
              designation={data.designation}
              message={data.message}
              twitter={data.twitter}
              github={data.github}
              slack={data.slack}
            />
          ))}
          <a
            className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700"
            href="#"
          >
            <h3 className="text-lg text-gray-800 dark:text-gray-200">
              We are hiring!
            </h3>
            <div>
              <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
                See all opening positions
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </a>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* Recommendations */}
    </>
  );
};
