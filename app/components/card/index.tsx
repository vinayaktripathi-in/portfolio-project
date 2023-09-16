import Image from "next/image";
import UserImg from "/public/images/user-img.avif";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineSlack } from "react-icons/ai";

interface Props {
  name?: string;
  designation?: string;
  message?: string;
  twitter?: string;
  github?: string;
  slack?: string;
}

export default function Card({
  name,
  designation,
  message,
  twitter,
  github,
  slack,
}: Props) {
  return (
    <>
      <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
        <div className="flex items-center gap-x-4">
          <Image
            unoptimized
            width={100}
            height={100}
            className="rounded-full w-20 h-20"
            src={UserImg}
            alt="Image Description"
          />
          <div className="grow">
            <h3 className="font-medium text-gray-800 dark:text-gray-200">
              {name}
            </h3>
            <p className="text-xs uppercase text-gray-500">{designation}</p>
          </div>
        </div>
        <p className="mt-3 text-gray-500">{message}</p>
        {/* Social Brands */}
        <div className="mt-3 space-x-1">
          <a
            className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
            href={twitter}
          >
            <RiTwitterXFill />
          </a>
          <a
            className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
            href={github}
          >
            <AiFillGithub />
          </a>
          <a
            className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
            href={slack}
          >
            <AiOutlineSlack />
          </a>
        </div>
        {/* End Social Brands */}
      </div>
    </>
  );
}
