import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextArea({
  label = "",
  type,
  name,
  value,
  onChange,
  description = "",
}) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg font-medium text-zinc-900">{label}</label>
      <span className="text-xs font-light text-slate-400">{description}</span>
      <ReactQuill theme="snow" onChange={onChange} value={value} />
    </div>
  );
}
