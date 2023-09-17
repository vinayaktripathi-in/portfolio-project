import Image from "next/image";

type Props = {};

export default function Team({}: Props) {
  return (
    <>
      {/* Team */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our leadership
          </h2>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <Image
              unoptimized
              width={100}
              height={100}
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                David Forren
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Founder / CEO
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <Image
              unoptimized
              width={100}
              height={100}
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Amil Evara
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                UI/UX Designer
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <Image
              unoptimized
              width={100}
              height={100}
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Ebele Egbuna
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Support Consultant
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <Image
              unoptimized
              width={100}
              height={100}
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Maria Powers
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Director of sales
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <Image
              unoptimized
              width={100}
              height={100}
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Delia Pawelke
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Front-end Developer
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <Image
              unoptimized
              width={100}
              height={100}
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Tom Lowry
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                UI/UX Designer
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <Image
              unoptimized
              width={100}
              height={100}
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Louise Donadieu
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Support Consultant
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <Image
              unoptimized
              width={100}
              height={100}
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Jeff Fisher
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Project Manager
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center">
            <Image
              unoptimized
              width={100}
              height={100}
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Sophia Harrington
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Project Manager
              </p>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Team */}
    </>
  );
}
