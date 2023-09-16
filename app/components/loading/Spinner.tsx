interface Props {}

export const Spinner = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-[100px] h-[23px] text-[#2563eb] flex justify-center items-center gap-[5px] ">
          <span className="w-[6px] h-[23px] bg-[#2563eb] animate-bounce"></span>
          <span className="w-[6px] h-[23px] bg-[#2563eb] animate-bounce"></span>
          <span className="w-[6px] h-[23px] bg-[#2563eb] animate-bounce"></span>
          <span className="w-[6px] h-[23px] bg-[#2563eb] animate-bounce"></span>
        </div>
      </div>
    </>
  );
};
