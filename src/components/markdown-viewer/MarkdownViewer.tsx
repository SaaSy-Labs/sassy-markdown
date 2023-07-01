import React from "react";
import ReactMarkdown from "react-markdown";
import { replaceTermsWithValues } from "./utils/replaceTermsWithValues";

export interface MarkdownViewerProps {
  // array of terms as markdown string
  terms: string[];
  // dynamicData json as a string to replace the values inside the markdown
  dynamicData: string;
}

const MarkdownViewer = ({ terms, dynamicData }: MarkdownViewerProps) => {
  const displayMarkdown = replaceTermsWithValues(
    terms,
    JSON.parse(dynamicData)
  );
  console.log({ displayMarkdown });
  return <ReactMarkdown>{displayMarkdown?.join("\n")}</ReactMarkdown>;
};

export default MarkdownViewer;
