import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  LinkIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function ContentLayout({
  experienceBlocks,
  educationBlocks,
  skillBlocks,
  socialBlocks,
  projectBlocks,
  state,
  avatar,
}) {
  return (
    <div id="content" className="relative w-full h-full py-16 ">
      <div className="px-4 flex flex-col items-center justify-center">
        <div className="border bg-white p-8 rounded-md lg:max-w-4xl lg:mx-auto h-full lg:p-8 ">
          <section className="space-y-8">
            {/*Header */}
            <header className="flex flex-col lg:flex-row lg:space-x-8 w-full space-y-8 lg:space-y-0">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Avatar"
                  className="rounded-full flex-shrink-0 object-cover w-32 h-32 md:h-48 md:w-48 ring-2 ring-white"
                />
              ) : (
                <div>
                  <UserCircleIcon className="h-32 w-32 md:h-48 md:w-48 ring-2 ring-white rounded-full" />
                </div>
              )}
              <div className="space-y-4">
                <div className=" space-y-1">
                <h1 className="text-4xl md:text-5xl font-semibold capitalize">{`${state?.name} ${state?.surname}`}</h1>
                <p className="text-lg capitalize">{state?.jobTitle}</p>
                </div>
                <p className="font-light text-sm ">{state.bio}</p>
                <ul className="flex gap-2 flex-wrap">
                  {Object.entries(socialBlocks).map(([key, value]) => {
                    return (
                      <li key={key} className="inline-block bg-amber-100 px-4 py-1 rounded-md border border-amber-500">
                        <a
                          href={value}
                          target="_blank"
                          rel="noreferrer"
                          className="text-amber-500 capitalize hover:text-amber-600"
                        >
                          {key}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </header>
            {/*Professional Summary */}
            <div className="flex-wrap">
              <h2 className="text-2xl items-center font-medium border-b py-4 mb-4">
                Professional Summary
              </h2>
              <p className="flex-wrap flex">{state?.summary}</p>
            </div>
            {/*Experience */}
            <div>
              <h2 className="text-2xl items-center font-medium border-b py-4 mb-4 flex">
                <div className="flex items-center justify-center mr-2 bg-indigo-100 ring-2 ring-indigo-500 p-2 rounded-full">
                  <BriefcaseIcon className="h-6 w-6 inline-block  text-indigo-600" />
                </div>
                Experience
              </h2>
              <ul className="space-y-4">
                {experienceBlocks?.map((block, index) => (
                  <div
                    key={index}
                    className="space-y-1  bg-slate-100 p-4 md:p-8 rounded-lg"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h3 className="text-xl font-semibold capitalize">
                        {block.jobtitle}
                      </h3>
                      <p className="font-light text-sm capitalize">
                        {`${block.startDate}-${block.endDate}`}
                      </p>
                    </div>
                    <p className="text-lg font-medium capitalize ">
                      {block.employer}
                    </p>
                    <p className="flex-wrap">{block.description}</p>
                  </div>
                ))}
              </ul>
            </div>
            {/*Education*/}
            <div>
              <h2 className="text-2xl items-center font-medium border-b py-4 mb-4 flex">
                <div className="flex items-center justify-center mr-2 bg-green-100 ring-2 ring-green-500 p-2 rounded-full">
                  <AcademicCapIcon className="h-6 w-6 inline-block text-green-600" />
                </div>
                Education
              </h2>
              <ul className="space-y-4">
                {educationBlocks?.map((block, index) => (
                  <div
                    key={index}
                    className="space-y-1 bg-slate-100 p-4 md:p-8 rounded-lg"
                  >
                    <div className="flex flex-col md:flex-row  justify-between md:items-center">
                      <h3 className="text-xl font-semibold capitalize">
                        {block.school}
                      </h3>
                      <p className="font-light text-sm capitalize">
                        {`${block.startDate}-${block.endDate}`}
                      </p>
                    </div>
                    <p className="text-lg font-medium capitalize">
                      {block.degree}
                    </p>
                  </div>
                ))}
              </ul>
            </div>

            {/*Projects*/}
            <div>
              <h2 className="text-2xl items-center font-medium border-b py-4 mb-4 flex">
                <div className="flex items-center justify-center mr-2 bg-blue-100 ring-2 ring-blue-500 p-2 rounded-full">
                  <ComputerDesktopIcon className="h-6 w-6 inline-block text-blue-600" />
                </div>
                Projects
              </h2>
              <ul className="space-y-4">
                {projectBlocks?.map((block, index) => (
                  <div
                    key={index}
                    className="space-y-1 bg-slate-100 p-8 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold capitalize">
                        {block.projectTitle}
                      </h3>
                    </div>
                    <p className="w-48 text-sm hover:text-slate-400  hover:underline truncate">
                      {block.link ? (
                        <LinkIcon className="h-4 w-4 inline-block mr-2" />
                      ) : null}
                      <a href={block.link}>{block.link}</a>
                    </p>
                    <p className="flex-wrap flex">{block.description}</p>
                  </div>
                ))}
              </ul>
            </div>
            {/*Skills */}
            <div>
            <h2 className="text-2xl items-center font-medium border-b py-4 mb-4 flex">
                <div className="flex items-center justify-center mr-2 bg-amber-100 ring-2 ring-amber-500 p-2 rounded-full">
                  <SparklesIcon className="h-6 w-6 inline-block text-amber-600" />
                </div>
                Skills
              </h2>
              <ul className="gap-4 flex flex-wrap">
                {skillBlocks?.map((block, index) => (
                  <div
                    key={index}
                    className=" bg-slate-200 px-6 py-2 rounded-lg"
                  >
                    <span className="text-sm capitalize">{block.name}</span>
                  </div>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
