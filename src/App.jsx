import React, { useState, useEffect } from "react";
import FormLayout from "./components/layout/FormLayout";
import reducer from "./reducers/userReducer";
import useWindowSize from "./hooks/useWindowSize";
import ContentLayout from "./components/layout/ContentLayout";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";

const initialState = {
  name: "John",
  bio: "This is my bio ✨",
  jobTitle: "Software Engineer",
  surname: "Doe",
  country: "Turkey",
  linkedin: "linkedin.com",
  github: "github.com",
  website: "vfurkanguner.com",
  summary: "You can edit this summary from the form on the left.",
};
// const initialState = {
//   name: "",
//   bio: "",
//   jobTitle: "",
//   surname: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: "",
//   country: "",
//   linkedin: "",
//   github: "",
//   website: "",
//   summary: "",
// };
const INITIAL_WIDTH = window.innerWidth / 2;

function App() {
  const size = useWindowSize();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const [experienceBlocks, setExperienceBlocks] = useState([]);
  const [educationBlocks, setEducationBlocks] = useState([]);
  const [skillBlocks, setSkillBlocks] = useState([]);
  const [socialBlocks, setSocialBlocks] = useState({});
  const [projectBlocks, setProjectBlocks] = useState([]);
  const [contentSize, setContentSize] = useState(INITIAL_WIDTH);
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [positionX, setPositionX] = useState(window.innerWidth / 2);

  const onMouseDown = (e) => {
    setIsDragging(true);
  };

  const onMouseUp = (e) => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      const x = size.width - e.clientX;
      setContentSize(x);
      setPositionX(e.clientX);
    }
  };

  const handleChange = React.useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_INPUTS", payload: { name, value } });
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const initialHtml = (content) => `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style type="text/tailwindcss">
        @layer base {
          html {
            @apply text-zinc-900 h-full bg-gray-100;
          }

          body {
            @apply h-full py-16 overflow-y-auto;
          }
        }
      </style>
  </head>
  <body>
      ${content}
  </body>
  </html>
  `;

  const onClickDownloadAsHtml = () => {
    const element = document.createElement("a");
    const content = document.getElementById("content").innerHTML;
    const finalHtml = initialHtml(content);

    const file = new Blob([finalHtml], {
      type: "text/html",
    });
    element.href = URL.createObjectURL(file);
    element.download = "resume.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="relative flex flex-col">
      <div
        style={{
          left: positionX,
        }}
        className="hidden lg:fixed lg:flex top-0 bottom-0  bg-slate-50 z-[60]"
      >
        <div
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={classNames(
            "w-px h-full fixed",
            isDragging ? "bg-blue-600" : "bg-whşte"
          )}
        />
        <button
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="bg-black absolute cursor-move -left-5 z-[51] top-[50%] border flex items-center justify-center rounded-lg w-10 h-10"
        >
          <ArrowsPointingOutIcon
            className="h-6 w-6 text-white"
            aria-hidden="true"
          />
        </button>
      </div>

      <main className="lg:fixed bg-slate-50 left-0 top-0 overflow-y-auto bottom-0 bg-shadow lg:w-1/2 py-8">
        <FormLayout
          state={state}
          setAvatar={setAvatar}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          avatar={avatar}
          handleChange={handleChange}
          experienceBlocks={experienceBlocks}
          setExperienceBlocks={setExperienceBlocks}
          educationBlocks={educationBlocks}
          setEducationBlocks={setEducationBlocks}
          skillBlocks={skillBlocks}
          setSkillBlocks={setSkillBlocks}
          socialBlocks={socialBlocks}
          setSocialBlocks={setSocialBlocks}
          projectBlocks={projectBlocks}
          setProjectBlocks={setProjectBlocks}
        />
      </main>

      <aside
        style={{ width: size.width > 1024 ? contentSize : "100%" }}
        className="bg-zinc-200 text-zinc-900  lg:fixed lg:right-0 z-[52] w-full lg:top-0 lg:bottom-0 lg:w-1/2 overflow-y-auto"
      >
        <div className="relative h-full">
          <div className="text-white flex flex-col p-3 md:p-0 text-center md:text-left md:flex-row md:sticky bg-black top-0 border-b flex items-center justify-center z-[55] px-10">
            <span className="text-sm px-8">
              You can download your resume as html file and use it on your
              website.
            </span>
            <button
              onClick={onClickDownloadAsHtml}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 m-2  rounded-md"
            >
              Download
            </button>
          </div>

          <ContentLayout
            state={state}
            avatar={avatar}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            isDragging={isDragging}
            experienceBlocks={experienceBlocks}
            educationBlocks={educationBlocks}
            skillBlocks={skillBlocks}
            socialBlocks={socialBlocks}
            projectBlocks={projectBlocks}
          />
        </div>
      </aside>
    </div>
  );
}

export default App;
