import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { useLocation } from "react-router-dom";
import { getResumeData } from "./api";
import ContentLayout from "./components/layout/ContentLayout";
import { useAPI } from "./hooks/useAPI";
import jsPDF from "jspdf";
import HTMLBase from "./templates/HTMLBase";


const ResumeView = () => {
  const location = useLocation();
  const stateData = location?.state;

  const { loading, data: rawData } = useAPI(getResumeData, { slug: "/" });
  if (loading) {
    return <div>loading...</div>;
  }

  const data = stateData || rawData;

  const onClickDownloadAsHtml = () => {
    const element = document.createElement("a");
    const finalHtml = ReactDOMServer.renderToStaticMarkup(
      <HTMLBase>{renderContent()}</HTMLBase>
    );

    const file = new Blob([finalHtml], {
      type: "text/html",
    });
    element.href = URL.createObjectURL(file);
    element.download = "resume.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const renderContent = () => (
    <main>
      <div className="pb-12">
        <ContentLayout
          Footer={
            <div className="text-center mt-8">
              Made with{" "}
              <strong>
                <a href="https://resumeto.com">Resumeto</a>
              </strong>
            </div>
          }
          {...data}
        />
        <div className="fixed inset-0 bg-gray-100 -z-10" />
      </div>
    </main>
  );

  return (
    <div className="py-4">
      <div className="border bg-white my-4 p-4 rounded-md w-full lg:max-w-4xl lg:mx-auto h-full lg:p-8 md:flex text-center md:text-left justify-between items-center ">
        For now you can download the resume as HTML file.
        <button
          onClick={onClickDownloadAsHtml}
          className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 m-2  rounded-md"
        >
          Download
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default ResumeView;
