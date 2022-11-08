import React from "react";

export default function Input({
  label = "",
  type,
  name,
  value,
  onChange,
  description = "",
}) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-zinc-900">{label}</label>
      <input
        type="text"
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-400"
      />
      <span className="text-xs font-light text-slate-400">{description}</span>
    </div>
  );
}
