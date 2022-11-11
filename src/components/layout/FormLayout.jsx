import React, { useState, useReducer } from "react";
import AccordionBox from "../AccordionBox";
import Input from "../Input";
import TextArea from "../TextArea";
import SkillBlock from "../sections/SkillsBlock";
import SocialBlock from "../sections/SocialLinksBlock";

export default function FormLayout({
  state,
  handleChange,
  experienceBlocks,
  setExperienceBlocks,
  educationBlocks,
  setEducationBlocks,
  skillBlocks,
  setSkillBlocks,
  socialBlocks,
  setSocialBlocks,
  projectBlocks,
  setProjectBlocks,
  avatar,
  setAvatar,
  selectedFile,
  setSelectedFile,
}) {
  React.useEffect(() => {
    if (!selectedFile) {
      setAvatar(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setAvatar(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="space-y-4 px-4 md:px-10">
      <h1 className="text-3xl font-bold">Resumeto</h1>
      <div className="bg-zinc-900  rounded-xl p-4 font-medium text-zinc-200">
        <span>Hi there🤘🏻</span>
        <p>
          You can create CV totally free. Just fill the form below and download
          ⚡️
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col  space-y-1 justify-between">
          <p className="text-sm font-medium text-zinc-900">Avatar</p>
          <label htmlFor="file-upload" className="h-full cursor-pointer">
            <p className="border bg-zinc-200 rounded-md  hover:bg-zinc-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-400">
              {avatar ? "Selected" : "Select Image"}
            </p>
            <input
              accept="image/*"
              className="hidden"
              id="file-upload"
              type="file"
              onChange={onSelectFile}
            />
          </label>
        </div>

        <Input
          label="Current Position"
          value={state.jobTitle}
          name="jobTitle"
          onChange={handleChange}
        />

        <Input
          label="First Name"
          value={state.name}
          name="name"
          onChange={handleChange}
        />
        <Input
          label="Last Name"
          value={state.surname}
          name="surname"
          onChange={handleChange}
        />

        <Input
          label="Bio"
          value={state.bio}
          name="bio"
          onChange={handleChange}
        />
      </section>

      <SocialBlock setBlocks={setSocialBlocks} blocks={socialBlocks} />

      <TextArea
        label="Professional Summary"
        description="Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills."
        name="summary"
        onChange={handleChange}
      />

      <AccordionBox
        title="Experience"
        desc="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
        type="experience"
        blocks={experienceBlocks}
        setBlocks={setExperienceBlocks}
      />

      <AccordionBox
        title="Education"
        desc="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
        type="education"
        blocks={educationBlocks}
        setBlocks={setEducationBlocks}
      />

      <AccordionBox
        title="Project"
        desc="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
        type="project"
        blocks={projectBlocks}
        setBlocks={setProjectBlocks}
      />

      <SkillBlock setBlocks={setSkillBlocks} blocks={skillBlocks} />

      {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
    </div>
  );
}
