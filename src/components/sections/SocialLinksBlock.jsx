import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Input from "../Input";
import TextArea from "../TextArea";

export default function SocialBlock({ setBlocks, blocks, index, block }) {
  const [blockVisible, setBlockVisible] = useState(true);

  const onChange = (e) => {
    let newArr = [...blocks];
    newArr[index][e.target.name] = e.target.value;
    setBlocks(newArr);
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
