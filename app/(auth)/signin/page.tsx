"use client";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "@/lib/redux/slices/signInSlice";
import { fetchUserData } from "@/lib/redux";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ReduxState } from "@/lib/redux/store";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

interface formData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required("email is required"),
  password: yup.string().min(1).required("password is required"),
});

export default function SignIn() {
  const dispatch = useDispatch<any>();
  const signInState = useSelector((state: ReduxState) => state.signIn);
  const userDataState = useSelector((state: ReduxState) => state.userData);
  const { isLoading, isSuccess, error, token } = signInState;
  const { data } = userDataState;
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignInSubmit: SubmitHandler<formData> = async (data, event) => {
    if (event) {
      event.preventDefault();
    }
    dispatch(signInUser(data));
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      router.push("/");
    }
    if (isSuccess) {
      toast.success(`Sign in successful!!`);
    } else if (error) {
      toast.error("An error occurred");
    }
  }, [token, isSuccess, error, router]);

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-slate-50 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Don&apos;t have an account yet?
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="/signup"
              >
                Sign up here
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
            <form onSubmit={handleSubmit(handleSignInSubmit)}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      aria-describedby="email-error"
                    />
                    {errors.email && (
                      <p className="text-red-600">Email is required.</p>
                    )}
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <Link
                      className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                      href="/forgotpassword"
                    >
                      Forgot password?
                    </Link>
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
                      <p className="text-red-600">Password is required.</p>
                    )}
                  </div>
                </div>
                {/* End Form Group */}
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
                      Remember me
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Sign in
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
