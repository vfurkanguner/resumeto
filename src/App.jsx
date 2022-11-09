import React, { useState, useEffect } from "react";
import FormLayout from "./components/layout/FormLayout";
import reducer from "./reducers/userReducer";
import useWindowSize from "./hooks/useWindowSize";
import ContentLayout from "./components/layout/ContentLayout";

const initialState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  linkedin: "",
  github: "",
  website: "",
  summary: "",
};
const INITIAL_WIDTH = window.innerWidth / 2;

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const [experienceBlocks, setExperienceBlocks] = useState([]);
  const [educationBlocks, setEducationBlocks] = useState([]);
  const [skillBlocks, setSkillBlocks] = useState([]);
  const [socialBlocks, setSocialBlocks] = useState([]);
  const [projectBlocks, setProjectBlocks] = useState([]);
  const [contentSize, setContentSize] = useState(INITIAL_WIDTH);
  const [isDragging, setIsDragging] = useState(false);

  const size = useWindowSize();

  const onMouseDown = (e) => {
    setIsDragging(true);

    if (isDragging) {
      const x = size.width - e.clientX;
      setContentSize(x);
    }
  };

  const onMouseUp = (e) => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      const x = size.width - e.clientX;
      setContentSize(x);
    }
  };

  const handleChange = React.useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_INPUTS", payload: { name, value } });
  }, []);

  return (
    <div className="relative flex flex-col">
      <main className="md:fixed  bg-slate-50 left-0 top-0 overflow-y-auto bottom-0 bg-shadow md:w-1/2 py-8">
        <FormLayout
          state={state}
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
        style={{ width: contentSize }}
        className="md:fixed right-0 top-0 bottom-0 md:w-1/2  bg-slate-900  text-white"
      >
        <ContentLayout
          state={state}
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
      </aside>
    </div>
  );
}

export default App;
