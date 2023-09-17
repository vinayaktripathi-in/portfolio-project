import Image from "next/image";

type Props = {};

export default function Services({}: Props) {
  

  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <Image
              unoptimized
              width={900}
              height={900}
              className="w-full h-full rounded-xl"
              src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  We tackle the challenges start-ups face
                </h2>
                <p className="text-gray-500">
                  Besides working with start-up enterprises as a partner for
                  digitalization, we have built enterprise products for common
                  pain points that we have encountered in various products and
                  projects.
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">Easy &amp; fast</span> designing
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    Powerful <span className="font-bold">features</span>
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    User Experience Design
                  </span>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
      <>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
              Explore tools
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
              The powerful and flexible theme for all kinds of businesses.
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
            {/* Icon Block */}
            <div className="col-span-6 sm:col-span-4 text-center">
              <svg
                className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Responsive
                </h3>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="col-span-6 sm:col-span-4 text-center">
              <svg
                className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
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
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Customizable
                </h3>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
              <svg
                className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  24/7 Support
                </h3>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Grid */}
          {/* Grid */}
          <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
            <div className="hidden md:block col-span-4 md:col-span-3">
              <Image
                unoptimized
                width={100}
                height={100}
                className="w-full h-full rounded-xl"
                src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
            <div className="col-span-4 md:col-span-3">
              <Image
                unoptimized
                width={100}
                height={100}
                className="w-full h-full rounded-xl"
                src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
            <div className="col-span-4 md:col-span-3">
              <Image
                unoptimized
                width={100}
                height={100}
                className="w-full h-full rounded-xl"
                src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
            <div className="col-span-4 md:col-span-3">
              <Image
                unoptimized
                width={100}
                height={100}
                className="w-full h-full rounded-xl"
                src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </>
    </>
  );
}
