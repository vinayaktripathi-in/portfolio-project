"use client";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  postBlogUser,
  resetSuccessState,
} from "@/lib/redux/slices/postBlogSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ReduxState } from "@/lib/redux/store";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

interface formData {
  title: string;
  content: string;
  // email: string;
  // image: File | null;
}

const schema = yup.object().shape({
  title: yup.string().required("title is required"),
  content: yup.string().required("content is required"),
  // email: yup.string().email().required("email is required"),
  image: yup.mixed().required("File is required"),
  // Add other form fields validation here
});

export default function BlogPost() {
  const dispatch = useDispatch<any>();
  const postBlogState = useSelector((state: ReduxState) => state.postBlog);
  const userDataState = useSelector((state: ReduxState) => state.userData);
  const { isLoading, error, isSuccess } = postBlogState;
  const { data } = userDataState;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handlepostBlogSubmit: SubmitHandler<formData> = async (data, event) => {
    console.log("triggered");
    if (event) {
      event.preventDefault();
    }

    const token = localStorage.getItem("token");
    if (token) {
      const postBlogData = {
        userData: {
          title: data.title,
          content: data.content,
          coverImage: selectedImage || null,
        },
        token: token,
      };
      dispatch(postBlogUser(postBlogData));
    }
  };
  console.log(selectedImage);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Update the selectedImage state when a file is selected
      setSelectedImage(e.target.files[0]);
      // setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Blog posted successfully!!`);
      dispatch(dispatch(resetSuccessState()));
      router.push("/blog");
    } else if (error) {
      toast.error("An error occurred");
    }
  }, [isSuccess, error, router, dispatch]);

  return (
    <>
      {/* Card Section */}
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <form onSubmit={handleSubmit(handlepostBlogSubmit)}>
          {/* Card */}
          <div className="bg-white rounded-xl shadow dark:bg-slate-900">
            <div className="relative h-40 rounded-t-xl bg-[url('/images/insight-img-03.avif')] bg-no-repeat bg-cover bg-center">
              <div className="absolute top-0 right-0 p-4">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                  </svg>
                  Upload header
                </button>
              </div>
            </div>
            <div className="pt-0 p-4 sm:pt-0 sm:p-7">
              {/* Grid */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="sr-only">Product photo</label>
                  <div className="grid sm:flex sm:items-center sm:gap-x-5">
                    <Image
                      className="-mt-8 relative z-[9] inline-block h-24 w-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-gray-800"
                      unoptimized
                      width={100}
                      height={100}
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                    <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                        Upload logo
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-red-600 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-red-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-project-name"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Blog Title
                  </label>
                  <input
                    {...register("title", { required: true })}
                    id="af-submit-app-project-name"
                    type="text"
                    className="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Enter blog title"
                  />
                  {errors.title && (
                    <p className="text-xs text-red-600 mt-2">
                      {errors.title.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-project-url"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Project URL
                  </label>
                  <input
                    id="af-submit-project-url"
                    type="text"
                    className="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="https://example.so"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-upload-images"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Preview image
                  </label>
                  <label
                    htmlFor="af-submit-app-upload-images"
                    className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700"
                  >
                    <input
                      {...register("image", { required: true })}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      id="af-submit-app-upload-images"
                      name="af-submit-app-upload-images"
                      className="sr-only"
                    />
                    {errors.image && (
                      <p className="text-xs text-red-600 mt-2">
                        {errors.image.message}
                      </p>
                    )}
                    {/* <Image
                      width={100}
                      height={100}
                      alt=""
                      src={previewImage}
                    /> */}
                    <svg
                      className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                      />
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                    </svg>
                    <span className="mt-2 block text-sm text-gray-800 dark:text-gray-200">
                      Browse your device or{" "}
                      <span className="group-hover:text-blue-700 text-blue-600">
                        drag &apos;n drop&apos;
                      </span>
                    </span>
                    <span className="mt-1 block text-xs text-gray-500">
                      Maximum file size is 2 MB
                    </span>
                  </label>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-category"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Category
                  </label>
                  <select
                    id="af-submit-app-category"
                    className="py-2 px-3 pr-9 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  >
                    <option selected>Select a category</option>
                    <option>Ecommerce</option>
                    <option>Finance</option>
                    <option>Marketplace</option>
                    <option>Social</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-description"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Description
                  </label>
                  <textarea
                    {...register("content", { required: true })}
                    id="af-submit-app-description"
                    className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    rows={6}
                    placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* End Grid */}
              <div className="mt-5 flex justify-center gap-x-2">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Post Blog
                  {isLoading && (
                    <AiOutlineLoading3Quarters className="animate-spin h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* End Card */}
        </form>
      </div>
      {/* End Card Section */}
    </>
  );
}
