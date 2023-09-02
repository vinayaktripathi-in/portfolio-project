"use client";
import { useState } from "react";

interface Props {
  lefticon?: string;
  label?: string;
  labelicon?: string;
  righticon?: string;
  name?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  type?: string;
  required?: boolean;
  value?: string;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  accept?: string;
  readOnly?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  errors?: string;
}

export const Input: React.FC<Props> = ({
  lefticon,
  labelicon,
  righticon,
  label,
  name,
  type,
  value,
  style,
  accept,
  required,
  readOnly,
  className,
  inputClassName,
  labelClassName,
  onChange,
  onBlur,
  onFocus,
  onClick,
  onKeyDown,
  errors,
  ...restInput
}) => {
  const [ringColor, setRingColor] = useState(
    "focus-within:ring-1 focus-within:ring-blue-700"
  );

  const handleRingColor = (isFocused: boolean) => {
    if (isFocused) {
      setRingColor("focus-within:ring-1 focus-within:ring-blue-700");
    } else {
      setRingColor("focus-within:ring-1 focus-within:ring-red-700");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleRingColor(false);
    onBlur && onBlur(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    handleRingColor(true);
    onFocus && onFocus(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setRingColor("focus-within:ring-1 focus-within:ring-blue-700");
    onClick && onClick(e);
  };

  return (
    <div className={`${className} + w-full relative`}>
      <input
        {...restInput}
        type={type}
        id={label}
        value={value}
        className={`${
          lefticon ? "px-10" : "px-2.5"
        } ${ringColor} + ${inputClassName} + block w-full text-sm text-black dark:text-white bg-gray-100 dark:bg-gray-950 rounded-lg appearance-none focus:outline-none peer`}
        placeholder=" "
        autoComplete="off"
        required={required}
        style={style}
        name={name}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        accept={accept}
        onKeyDown={onKeyDown}
      />
      <label
        htmlFor={label}
        className={`${lefticon ? "mx-3 ring-blue-700 bg-red-700" : "px-2"} ${
          labelicon ? "flex justify-center items-center px-2.5" : "px-2"
        } absolute rounded-lg text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-gray-100 dark:bg-gray-950 peer-focus:px-2 peer-focus:text-bee-primary peer-focus:dark:text-bee-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 ${labelClassName}`}
      >
        <span className={labelicon && "mr-2"}>{labelicon}</span>
        {label}
      </label>
      <i className="absolute top-1/2 -translate-y-1/2 ml-4">{lefticon}</i>
      <i className="absolute top-1/2 -translate-y-1/2 right-0 mr-3">
        {righticon}
      </i>
      {errors}
    </div>
  );
};