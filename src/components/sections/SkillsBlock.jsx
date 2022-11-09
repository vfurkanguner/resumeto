import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Input from "../Input";
import TextArea from "../TextArea";
import { PlusIcon, TrashIcon } from "@heroicons/react/20/solid";

export default function SkillBlock({ setBlocks, blocks }) {
  const [text, setText] = useState("");

  const preSkills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
    { id: 5, name: "Node" },
    { id: 6, name: "Express" },
    { id: 7, name: "MongoDB" },
    { id: 8, name: "MySQL" },
    { id: 9, name: "Git" },
    { id: 10, name: "GitHub" },
    { id: 11, name: "Heroku" },
    { id: 12, name: "Netlify" },
    { id: 13, name: "VS Code" },
    { id: 14, name: "Adobe XD" },
    { id: 15, name: "Adobe Photoshop" },
    { id: 16, name: "Adobe Illustrator" },
    { id: 17, name: "Adobe InDesign" },
    { id: 18, name: "Adobe Premiere Pro" },
    { id: 19, name: "Adobe After Effects" },
    { id: 20, name: "Adobe Lightroom" },
    { id: 21, name: "Adobe Audition" },
    { id: 22, name: "Adobe Animate" },
    { id: 23, name: "Adobe Spark" },
    { id: 24, name: "Adobe Spark Post" },
    { id: 25, name: "Adobe Spark Video" },
    { id: 26, name: "Adobe Spark Page" },
  ];

  const onAddSelect = (skill) => {
    let newArr = [...blocks];
    newArr.push({ name: skill.name });
    setBlocks(newArr);
  };

  const onAddClick = () => {
    let newArr = [...blocks];
    newArr.push({ name: text, id: Math.random() });
    setBlocks(newArr);
    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="w-full space-y-4">
      <div>
        <h1 className="text-md font-medium">Skills</h1>
        <p className="text-sm font-light text-gray-400">
          Add up to 5 skills to your profile (e.g. HTML, CSS, JavaScript, etc.)
        </p>
      </div>

      <ul className="flex gap-4 flex-wrap">
        {preSkills.map((skill) => (
          <li
            className="flex rounded hover:bg-zinc-900 cursor-pointer hover:text-slate-100 bg-slate-200 px-4 py-2 text-xs text-slate-600 font-light"
            key={skill.id}
            onClick={() => {
              blocks.length >= 5 && alert("You can only add up to 5 skills");
              blocks.length < 5 && onAddSelect(skill);
            }}
            disabled={blocks.length >= 5}
          >
            {skill.name}
            <PlusIcon className="w-4 h-4 ml-1" />
          </li>
        ))}
      </ul>

      <aside className="flex space-x-2">
        <input
          onChange={onChange}
          value={text}
          className="border w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-400"
          placeholder="Add custom skill"
        />

        <button
          onClick={() => {
            blocks.length >= 5 && alert("You can only add up to 5 skills");
            blocks.length < 5 && onAddClick();
          }}
          className="bg-zinc-900 flex-shrink-0 text-white rounded-md p-2"
        >
          <PlusIcon className="w-6 h-6" />
        </button>
      </aside>
      <br />

      <div className="space-y-4">
        {blocks.map((block, index) => (
          <div
            className="flex justify-between items-center border rounded-md border-gray-200 p-4"
            key={index}
          >
            {block.name}
            <button
              className="text-zinc-600 bg-zinc-100 hover:bg-zinc-200 rounded-md p-2"
              onClick={() => {
                let newArr = [...blocks];
                newArr.splice(index, 1);
                setBlocks(newArr);
              }}
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
