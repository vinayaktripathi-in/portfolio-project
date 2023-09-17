"use client";
import { ReduxState, fetchUserData } from "@/lib/redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

export default function Profile({}: Props) {
  // const dispatch = useDispatch<any>();
  // useEffect(() => {
  //   // Dispatch the action to fetch user data when the component mounts
  //   dispatch(fetchUserData());
  // }, [dispatch]);
  const userDataState = useSelector((state: ReduxState) => state.userData);
  const { data } = userDataState;

  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
            Hey, {data?.firstName} {data?.lastName}
          </h2>
          <p className="mt-3 text-gray-800 dark:text-gray-200">
            How you&apos;r feeling today?
          </p>
        </div>
        <div className="text-center">
          <img
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
      </div>
      {/* End Card Blog */}
    </>
  );
}
