import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { replaceTermsWithValues } from "./utils/replaceTermsWithValues";
import "./MarkdownViewer.css";
import "normalize.css";
import { createPortal } from "react-dom";

type MarkdownViewerProps = {
  // array of terms as markdown string
  terms: string[];
  // dynamicData json as a string to replace the values inside the markdown
  dynamicData: string;
  customStyle?: React.CSSProperties;
};

const MarkdownViewer = ({
  terms,
  dynamicData,
  customStyle,
}: MarkdownViewerProps) => {
  const [ref, setRef] = useState();
  const container = ref?.contentWindow?.document?.body;
  const displayMarkdown = replaceTermsWithValues(
    terms,
    JSON.parse(dynamicData)
  );

  return (
    <div className="markdown-viewer container">
      <iframe ref={setRef} frameBorder="0" width={"100%"} height={"600px"}>
        {container &&
          createPortal(
            <ReactMarkdown className="text-white">
              {displayMarkdown?.join("\n")}
            </ReactMarkdown>,
            container
          )}
      </iframe>
    </div>
  );
};

export default MarkdownViewer;
