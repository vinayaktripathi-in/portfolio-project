"use client";
import { useEffect, useRef, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "@/lib/redux/slices/verifySlice";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ReduxState } from "@/lib/redux/store";
import RefreshTwoToneIcon from "@mui/icons-material/RefreshTwoTone";

// interface FormData {
//   otp: string;
// }

export default function Verify() {
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch<any>();
  const verifyState = useSelector((state: ReduxState) => state.verify);
  const { loading, success, error } = verifyState;
  const router = useRouter();
  const searchParams = useSearchParams(); // Import and use useSearchParams to read query parameters
  const emailRef = useRef<string | null>(null);
  const email = searchParams?.get("email");

  const handleVerifySubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    if (event) {
      event.preventDefault();
    }

    if (email) {
      const verifyData = { email, otp };
      emailRef.current = email; // Store the email in the ref
      dispatch(verifyUser(verifyData));
    } else {
      toast.error("Email not found in URL.");
    }
  };

  useEffect(() => {
    if (success) {
      router.push(`/createpassword?email=${emailRef.current}`);
      toast.success("OTP verified successfully");
    } else if (error) {
      toast.error("An error occurred");
    }
  }, [success, error, router]);

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-slate-50 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Verify OTP
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?{" "}
              <Link
                href="/signin"
                className="text-blue-600 decoration-2 hover:underline font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleVerifySubmit}>
              <div className="grid content-center gap-y-4">
                <OtpInput
                  containerStyle={`w-full flex flex-wrap justify-center item-center`}
                  shouldAutoFocus={true}
                  inputStyle={{
                    border: "1px solid transparent",
                    borderRadius: "8px",
                    width: "35px",
                    height: "35px",
                    fontSize: "16px",
                    // color: "#000",
                    fontWeight: "700",
                    // caretColor: "blue",
                    // backgroundColor: "darkgray",
                  }}
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Reset password{" "}
                  {loading && (
                    <RefreshTwoToneIcon className="animate-spin h-4 w-4" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
