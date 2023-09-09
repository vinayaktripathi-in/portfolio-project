import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Verify({
  dispatchState,
  dispatchSlice,
  routeLink,
}: {
  dispatchState: () => {
    loading: boolean;
    success: boolean;
    error: boolean;
  };
  dispatchSlice: () => string;
  routeLink: () => string;
}) {
  const [otp, setOtp] = useState("");

  const { loading, success, error } = dispatchState();

  const handleVerifySubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    if (event) {
      event.preventDefault();
    }
    dispatchSlice();
    toast.error("An error occurred.");
  };

  useEffect(() => {
    if (success) {
      routeLink();
      toast.success("OTP verified successfully");
    } else if (error) {
      toast.error("An error occurred");
    }
  }, [success, error, routeLink]);

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-slate-50 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Verify OTP
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Do you have an account?{" "}
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
                    fontWeight: "700",
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
                  Submit
                  {loading && (
                    <AiOutlineLoading3Quarters className="animate-spin h-4 w-4" />
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
