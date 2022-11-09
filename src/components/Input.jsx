import React from "react";

export default function Input({
  label = "",
  type = "text",
  name,
  value,
  onChange,
  description = "",
}) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-zinc-900">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-400"
      />
      <span className="text-xs font-light text-slate-400">{description}</span>
    </div>
  );
}
