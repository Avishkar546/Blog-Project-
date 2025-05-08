import React, { useId } from "react";

const Select = ({ label, options, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        ref={ref}
        {...props}
        className={`w-full px-3 py-2 rounded-lg bg-white text-black focus:bg-gray-50 duration-200 border border-gray-100 outline-none ${className}`}
      >
        {options?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
