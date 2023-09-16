import React from "react";

interface Props {
  loading?: boolean; // A boolean indicating whether loading is in progress.
}

export const ProgressBar = (props: Props) => {
  const { loading } = props;

  return (
    <>
      {loading && (
        <div className="sticky z-10 top-0 w-full bg-gray-200 h-2.5 dark:bg-gray-700">
          <div className={`bg-blue-600 h-2.5 animate-loading`} />
        </div>
      )}
    </>
  );
};
