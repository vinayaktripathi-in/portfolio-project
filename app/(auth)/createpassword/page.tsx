"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createPassword } from "@/lib/redux/slices/createPasswordSlice";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ReduxState } from "@/lib/redux/store";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

interface FormData {
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  password: yup.string().min(1).required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function CreatePassword() {
  const dispatch = useDispatch<any>();
  const createPasswordState = useSelector(
    (state: ReduxState) => state.createPassword
  );
  const userData = useSelector((state: ReduxState) => state.userData);
  const { loading, success, error } = createPasswordState;
  const router = useRouter();
  const searchParams = useSearchParams(); // Import and use useSearchParams to read query parameters
  const email = searchParams?.get("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleCreatePasswordSubmit: SubmitHandler<FormData> = async (data) => {
    if (email) {
      const createPasswordData = {
        email: email as string,
        password: data.password,
      }; // Include the 'password' property
      dispatch(createPassword(createPasswordData));
    } else {
      toast.error("Email not found in URL.");
    }
  };

  useEffect(() => {
    if (success) {
      router.push("/signin");
      toast.success(`Change password successful ${userData.data?.firstName}!!`);
    } else if (error) {
      toast.error("An error occurred");
    }
  }, [success, error, userData, router]);

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-slate-50 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Create Password
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="/signin"
              >
                Sign In here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit(handleCreatePasswordSubmit)}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <div className="flex justify-start items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      aria-describedby="password-error"
                    />
                    {errors.password && (
                      <p className="text-xs text-red-600 mt-2">
                        Password is required.
                      </p>
                    )}
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      autoComplete="true"
                      type="password"
                      id="confirmPassword"
                      {...register("confirmPassword", { required: true })}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      aria-describedby="confirm-password-error"
                    />

                    {errors.confirmPassword && (
                      <p className="text-xs text-red-600 mt-2">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* End Form Group */}
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Create
                  {loading && (
                    <AiOutlineLoading3Quarters className="animate-spin h-4 w-4" />
                  )}
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </main>
  );
}
