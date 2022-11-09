import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Input from "../Input";
import TextArea from "../TextArea";


export default function ExperienceBlock({ setBlocks, blocks, index, block }) {
  const [blockVisible, setBlockVisible] = useState(true);

  
  const onChange = (e) => {
    let newArr = [...blocks];
    newArr[index][e.target.name] = e.target.value;
    setBlocks(newArr);
  };

  return (
    <div className="space-y-4 border w-full rounded-lg  p-4">
      <aside className="flex justify-between">
        <h1 className="font-semibold">
          {!block.jobtitle ? "Not specified" : block?.jobtitle}
        </h1>

        <button onClick={() => setBlockVisible(!blockVisible)}>
          {!blockVisible ? (
            <ChevronDownIcon className="w-6 h-6 mr-2" />
          ) : (
            <ChevronUpIcon className="w-6 h-6 mr-2" />
          )}
        </button>
      </aside>
      {blockVisible ? (
        <main className="w-full text-gray-400 transition-all">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Job title"
              name="jobtitle"
              type="text"
              onChange={onChange}
            />

            <Input
              label="Employer"
              name="employer"
              type="text"
              onChange={onChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Start date"
              name="startDate"
              type="date"
              onChange={onChange}
            />

            <Input
              label="End date"
              name="endDate"
              type="date"
              onChange={onChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input label="City" name="city" type="text" onChange={onChange} />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <TextArea
              label="Description"
              name="description"
              htmlFor="description"
              onChange={onChange}
            />
          </div>
        </main>
      ) : null}
    </div>
  );
}
