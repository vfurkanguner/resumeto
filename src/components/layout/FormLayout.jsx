import React from "react";
import Input from "../Input";
import TextArea from "../TextArea";

export default function FormLayout() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-4 px-6">
      <h1 className="text-3xl font-bold">Resumeto</h1>

      <div className="bg-green-100  rounded-xl p-4 font-medium text-green-600">
        <span>Hi there🤘🏻</span>
        <p>
          You can create CV totally free. Just fill the form below and download
          ⚡️
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Wanted Job Title" />
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Email" />

        <Input label="Github Link" />
      </section>

      <TextArea
        label="Professional Summary"
        description="Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills."
      />

      {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
    </div>
  );
}
