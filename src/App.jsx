import React, { useState, useEffect } from "react";
import ReactDOMServer from 'react-dom/server';
import FormLayout from "./components/layout/FormLayout";
import reducer from "./reducers/userReducer";
import ContentLayout from "./components/layout/ContentLayout";
import { HTMLBase } from './templates';
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";

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


function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const [experienceBlocks, setExperienceBlocks] = useState([]);
  const [educationBlocks, setEducationBlocks] = useState([]);
  const [skillBlocks, setSkillBlocks] = useState([]);
  const [socialBlocks, setSocialBlocks] = useState({});
  const [projectBlocks, setProjectBlocks] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatar, setAvatar] = useState(null);


  const handleChange = React.useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_INPUTS", payload: { name, value } });
  }, []);



  const renderContent = (isPassive = false ) => {
    const ContainerRenderer = isPassive ? 
    (({ children }) => children) :  // Empty Container
    ({ children }) => <div id="content" className="relative w-full h-full py-16 ">{ children}</div>;
    return  (<ContentLayout
      ContainerRenderer={ContainerRenderer}
      state={state}
      avatar={avatar}
      experienceBlocks={experienceBlocks}
      educationBlocks={educationBlocks}
      skillBlocks={skillBlocks}
      socialBlocks={socialBlocks}
      projectBlocks={projectBlocks}
      Footer={<div className="text-center"> <span className="font-semibold">Resumeto</span> - Best Resume Creator</div>}
    />);
  }

  const onClickDownloadAsHtml = () => {
    const element = document.createElement("a");
    const finalHtml = ReactDOMServer.renderToStaticMarkup(
      <HTMLBase>
        {renderContent(true)}
      </HTMLBase>
    );

    const file = new Blob([finalHtml], {
      type: "text/html",
    });
    element.href = URL.createObjectURL(file);
    element.download = "resume.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const allStates = {
    state,
    experienceBlocks,
    educationBlocks,
    skillBlocks,
    socialBlocks,
    projectBlocks,
    selectedFile,
    avatar,
  };

  return (
    <div className="relative flex flex-col">
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
        className="bg-zinc-200 text-zinc-900  lg:fixed lg:right-0 z-[52] w-full lg:top-0 lg:bottom-0 lg:w-1/2 overflow-y-auto"
      >
        <div className="relative h-full">
          <div className="text-white flex-col p-3 md:p-0 text-center md:text-left md:flex-row md:sticky bg-black top-0 border-b flex items-center justify-center z-[55] px-10">
            <span className="text-sm px-8">
              You can download your resume as html file and use it on your
              website.
            </span>
            <Link
              to={`/cv/${state.name.toLowerCase()}-${state.surname.toLowerCase()}`}
              className="border px-6 py-2 m-2  rounded-md"
              state={allStates}
            >
              Preview 
            </Link>
            <button
              onClick={onClickDownloadAsHtml}
              // onClick={generatePDF}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 m-2  rounded-md"
            >
              Download
            </button>
          </div>

          {renderContent()}
        </div>
      </aside>
    </div>
  );
}

export default App;
