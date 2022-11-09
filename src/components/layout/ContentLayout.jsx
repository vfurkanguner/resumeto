import React from "react";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";

export default function ContentLayout({
  experienceBlocks,
  educationBlocks,
  skillBlocks,
  socialBlocks,
  projectBlocks,
  state,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  isDragging,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative h-full py-16">
      <div>
        <div
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={classNames(
            "w-1 h-full absolute left-0 top-0 bottom-0",
            isDragging ? "bg-blue-600" : "bg-black"
          )}
        />
        <button
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="bg-black absolute cursor-move -left-4 top-[50%] border flex items-center justify-center rounded-lg w-10 h-10"
        >
          <ArrowsPointingOutIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="px-4">
        <div className="bg-slate-900 rounded-md container mx-auto h-full p-8">
          <aside className="flex items-center">
            <figure>
              <img
                src="https://i.pravatar.cc/300"
                alt="Trulli"
                className="rounded-full h-32 w-32"
              />
            </figure>
            <h1 className="text-3xl font-semibold capitalize">{`${state?.name} ${state?.surname}`}</h1>
          </aside>
        </div>
      </div>
    </div>
  );
}
