"use client";
import { ReduxState, fetchUserData } from "@/lib/redux";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function Work() {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    // Dispatch the action to fetch user data when the component mounts
    dispatch(fetchUserData());
  }, [dispatch]);
  const userDataState = useSelector((state: ReduxState) => state.userData);
  const { data, loading } = userDataState;

  return (
    <>
      <div className="text-black dark:text-white">This is my works.</div>
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : data ? (
        `${data?.firstName ?? ""} ${data?.lastName ?? ""}`.trim() || "Sign in"
      ) : (
        "Sign in"
      )}
    </>
  );
}
