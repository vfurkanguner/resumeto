import React, { useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import SocialBlock from "./sections/SocialLinksBlock";
import EducationBlock from "./sections/EducationBlock";
import ExperienceBlock from "./sections/ExperienceBlock";
import SkillsBlock from "./sections/SkillsBlock";
import ProjectBlock from "./sections/ProjectBlock";
// import ProjectsBlock from "./Blocks/ProjectsBlock";

export default function AccordionBox({ title, desc, type, blocks, setBlocks }) {
  const handleAddBlock = () => {
    setBlocks([
      ...blocks,
      {
        description: "",
        endDate: "",
        city: "",
        startDate: "",
        employer: "",
        jobtitle: "",
      },
    ]);
  };

  const handleDeleteBlock = (index) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  const getBoxType = ({ type, block, index }) => {
    switch (type) {
      case "education":
        return (
          <EducationBlock
            blocks={blocks}
            block={block}
            setBlocks={setBlocks}
            index={index}
          />
        );
      case "experience":
        return (
          <ExperienceBlock
            blocks={blocks}
            setBlocks={setBlocks}
            index={index}
            block={block}
          />
        );
      case "project":
        return (
          <ProjectBlock
            blocks={blocks}
            setBlocks={setBlocks}
            index={index}
            block={block}
          />
        );
      case "social":
        return (
          <SocialBlock
            blocks={blocks}
            setBlocks={setBlocks}
            index={index}
            block={block}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-md font-medium">{title}</h1>
        <p className="text-sm font-light text-gray-400">{desc}</p>
      </div>

      {blocks
        ? blocks?.map((block, index) => (
            <div key={index} className="relative">
              {getBoxType({ type, block, index })}{" "}
              <button
                className="absolute h-full -right-7 top-0 hover:text-slate-500 text-slate-200 ml-4"
                onClick={() => handleDeleteBlock(index)}
              >
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>
          ))
        : null}

      <button
        onClick={handleAddBlock}
        className="flex text-zinc-50 black px-6 py-2 bg-zinc-900 rounded-full"
      >
        <PlusIcon className="w-6 h-6 mr-2" />
        Add {name}
      </button>
    </div>
  );
}
