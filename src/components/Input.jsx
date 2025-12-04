"use client";
import { useState } from "react";

export default function FloatingLabelInput({
  label,
  type = "text",
  inputname,
  value,
  onChange,
  className = "",
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        value={value}
        name={inputname}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className={`block w-full border-b-2 border-[#616569] bg-transparent px-2 pt-4 pb-1 text-[17px] text-[#34393E] font-[500] h-[62px]
        focus:outline-none transition-all duration-300`}
      />
      <label
        className={`absolute left-2 text-[#34393E] transition-all duration-300 pointer-events-none font-[500] uppercase leading-[28px] tracking-[-0.6px] flex
          ${focused || value
            ? "text-[17px] -top-1 text-[#34393E]"
            : "text-[#34393E] top-3"
          }`}
      >
        {label}<div className="mt-[-3px]">*</div>
      </label>
    </div>
  );
}
