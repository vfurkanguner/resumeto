import React, { useState } from "react";
import Input from "../Input";

export default function SocialBlock({ setBlocks, blocks }) {
  const onChange = (e) => {
    setBlocks({ ...blocks, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4  w-full">
      <div>
        <h1 className="text-md font-medium">Websites & Social Links</h1>
        <p className="text-sm font-light text-gray-400">
          Add links to your social media profiles and websites.
        </p>
      </div>

      <ul className="border w-full rounded-lg grid grid-cols-2 gap-x-4  p-4">
        <Input label="Email" name="email" type="text" onChange={onChange} />
        <Input label="Website" name="website" type="text" onChange={onChange} />
        <Input label="Twitter" name="twitter" type="text" onChange={onChange} />
        <Input
          label="LinkedIn"
          name="linkedin"
          type="text"
          onChange={onChange}
        />
        <Input label="Github" name="github" type="text" onChange={onChange} />
      </ul>
    </div>
  );
}
