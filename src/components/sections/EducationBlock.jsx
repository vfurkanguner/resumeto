import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Input from "../Input";
import TextArea from "../TextArea";

export default function EducationBlock({ setBlocks, blocks, index, block }) {
  const [blockVisible, setBlockVisible] = useState(true);

  const onChange = (e) => {
    let newArr = [...blocks];
    newArr[index][e.target.name] = e.target.value;
    setBlocks(newArr);
  };

  return (
    <div className="space-y-4 border rounded-md border-gray-200 p-4">
      <aside className="flex justify-between">
        <h1 className="font-semibold">
          {!block.school ? "Not specified" : block.school}
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
        <main className="w-full text-gray-400">
          <div className="grid grid-cols-2 gap-2">
            <Input
              label="School"
              name="school"
              type="text"
              onChange={onChange}
            />

            <Input
              label="Degree"
              name="degree"
              type="text"
              onChange={onChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Start Date"
              name="startDate"
              type="number"
              onChange={onChange}
            />

            <Input
              label="End Date"
              name="endDate"
              type="number"
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
              onChange={onChange}
            />
          </div>
        </main>
      ) : null}
    </div>
  );
}
