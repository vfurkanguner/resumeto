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
}) {
  return (
    <div className="space-y-4 px-10">
      <h1 className="text-3xl font-bold">Resumeto</h1>
      <div className="bg-zinc-900  rounded-xl p-4 font-medium text-zinc-200">
        <span>Hi there🤘🏻</span>
        <p>
          You can create CV totally free. Just fill the form below and download
          ⚡️
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          label="Last Name"
          value={state.email}
          name="email"
          onChange={handleChange}
        />

        <Input
          label="Github Link"
          value={state.github}
          name="github"
          onChange={handleChange}
        />
      </section>
      <TextArea
        label="Professional Summary"
        description="Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills."
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
      <SkillBlock setBlocks={setSkillBlocks} blocks={skillBlocks} />

      <AccordionBox
        title="Project"
        desc="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
        type="project"
        blocks={projectBlocks}
        setBlocks={setProjectBlocks}
      />

      <SocialBlock setBlocks={setSocialBlocks} blocks={socialBlocks} />

      {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
    </div>
  );
}
