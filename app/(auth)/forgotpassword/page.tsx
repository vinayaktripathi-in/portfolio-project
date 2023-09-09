"use client";
import { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "@/lib/redux/slices/forgotPasswordSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ReduxState } from "@/lib/redux/store";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface formData {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required("email is required"),
});

export default function ForgotPassword() {
  const dispatch = useDispatch<any>();
  const forgotPasswordState = useSelector(
    (state: ReduxState) => state.forgotPassword
  );
  const { isLoading, isSuccess, error } = forgotPasswordState;
  const router = useRouter();
  const emailRef = useRef<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForgotPasswordSubmit: SubmitHandler<formData> = async (
    data,
    event
  ) => {
    if (event) {
      event.preventDefault();
    }
    emailRef.current = data.email; // Store the email in the ref
    dispatch(forgotPassword(data));
  };
  useEffect(() => {
    if (isSuccess && emailRef.current) {
      // Redirect to the verify page with the email as a query parameter
      router.push(`/verify?email=${emailRef.current}`);
    }
    if (isSuccess) {
      toast.success(`OTP sent successful`);
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
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="/signin"
              >
                Sign in here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={handleSubmit(handleForgotPasswordSubmit)}>
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
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Reset password
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
