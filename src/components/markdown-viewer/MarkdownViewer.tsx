import React from "react";
import ReactMarkdown from "react-markdown";
import { replaceTermsWithValues } from "./utils/replaceTermsWithValues";
import "./MarkdownViewer.css";
import "normalize.css";

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
  const displayMarkdown = replaceTermsWithValues(
    terms,
    JSON.parse(dynamicData)
  );

  return (
    <div className="markdown-viewer container" style={customStyle}>
      <ReactMarkdown>{displayMarkdown?.join("\n")}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
