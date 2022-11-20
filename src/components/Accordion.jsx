import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Accordion({ children, title }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="">
      <div className="flex justify-between items-center">
      <div>
        <h1 className="text-md font-medium">Websites & Social Links</h1>
        <p className="text-sm font-light text-gray-400">
          Add links to your social media profiles and websites.
        </p>
      </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-300"
        >
          <ChevronDownIcon className="w-6 h-6 text-zinc-600" />
        </button>
      </div>
      
        {isOpen && (<div className="mt-4">{children}</div>)}
    </div>
  );
}
