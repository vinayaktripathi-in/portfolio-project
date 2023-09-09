"use client";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "@/lib/redux/slices/signUpSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ReduxState } from "@/lib/redux/store";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

interface formData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().min(1).required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords must match")
    .required("confirm password is required"),
  // Add other form fields validation here
});

export default function SignUp() {
  const dispatch = useDispatch<any>();
  const signUpState = useSelector((state: ReduxState) => state.signUp);
  const { isLoading, error, isSuccess } = signUpState;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUpSubmit: SubmitHandler<formData> = async (data, event) => {
    if (event) {
      event.preventDefault();
    }
    dispatch(signUpUser(data));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Account created successfully!!`);
      router.push("/");
    } else if (error) {
      toast.error("An error occurred");
    }
  }, [isSuccess, error, router]);

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-slate-50 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="/signin"
              >
                Sign in here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <FcGoogle className="text-xl" />
              Sign up with Google
            </button>
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit(handleSignUpSubmit)}>
              <div className="grid gap-y-4">
                <div className="flex gap-2">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        {...register("firstName", { required: true })}
                        autoComplete="true"
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        aria-describedby="name-error"
                      />

                      {errors.firstName && (
                        <p className="text-xs text-red-600 mt-2">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        {...register("lastName", { required: true })}
                        autoComplete="true"
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        aria-describedby="name-error"
                      />

                      {errors.lastName && (
                        <p className="text-xs text-red-600 mt-2">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      autoComplete="true"
                      type="email"
                      id="email"
                      // name="email"
                      {...register("email", { required: true })}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      aria-describedby="email-error"
                    />

                    {errors.email && (
                      <p className="text-xs text-red-600 mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* End Form Group */}
                <div className="flex gap-2">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        autoComplete="true"
                        type="password"
                        id="password"
                        //name="password"
                        {...register("password", { required: true })}
                        className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        aria-describedby="password-error"
                      />

                      {errors.password && (
                        <p className="text-xs text-red-600 mt-2">
                          {errors.password.message}
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
                        // name="confirm-password"
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
                </div>
                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm dark:text-white"
                    >
                      I accept the{" "}
                      <Link
                        className="text-blue-600 decoration-2 hover:underline font-medium"
                        href="#"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Sign up
                  {isLoading && (
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