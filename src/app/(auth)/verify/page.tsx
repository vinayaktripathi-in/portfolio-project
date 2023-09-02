"use client";
import { useEffect, useRef, useState } from "react";
import OtpInput from "react-otp-input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "@/lib/redux/slices/verifySlice";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ReduxState } from "@/lib/redux/store";
import RefreshTwoToneIcon from "@mui/icons-material/RefreshTwoTone";

interface formData {
  otp: string;
}

const schema = yup.object().shape({
  otp: yup.string().min(1).required("OTP is required"),
});

export default function Verify() {
  const [otp, setOtp] = useState("");
  

  // Write other logics here
  const dispatch = useDispatch<any>();
  const verifyState = useSelector((state: ReduxState) => state.verify);
  const { loading, success, error } = verifyState;
  const router = useRouter();
  const searchParams = useSearchParams(); // Import and use useSearchParams to read query parameters

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleVerifySubmit: SubmitHandler<formData> = async (data, event) => {
    if (event) {
      event.preventDefault();
    }
    
    // Extract the email from the URL
    const email = searchParams.get("email");
    console.log(email, data.otp)

    if (email) {
      // Include the extracted email when calling the verify action
      const verifyData = { email: email, otp: data.otp };
      dispatch(verify(verifyData));
    } else {
      toast.error("Email not found in URL.");
    }
  };
  useEffect(() => {
    if (success) {
      router.push(`/createpassword`);
    }
    if (success) {
      toast.success(`OTP verified successfully`);
    } else if (error) {
      toast.error("An error occurred");
    }
  }, [success, error]);
  

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-slate-50 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Verify OTP
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
            <form onSubmit={handleVerifySubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
                {/* <div id="otp" className="flex justify-center space-x-6 mt-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <input
                      {...register("otp", { required: true })}
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-10 leading-5 relative py-2 px-3 rounded text-slate-800 bg-white border border-slate-300 overflow-x-auto focus:outline-none focus:border-slate-400 focus:ring-0 dark:text-slate-300 dark:bg-slate-700 dark:border-slate-700 dark:focus:border-slate-600"
                      id={`exampleInputotp${index + 1}`}
                      ref={(input) => (inputsRef.current[index] = input!)} // Use non-null assertion operator (!)
                    />
                  ))}
                </div> */}
                {errors.otp && <p className="text-red-600">OTP is required.</p>}
                {/* End Form Group */}
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Reset password
                  {loading && (
                    <RefreshTwoToneIcon className="animate-spin h-4 w-4" />
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
