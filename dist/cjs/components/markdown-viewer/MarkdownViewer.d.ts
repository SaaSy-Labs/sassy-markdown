import React from "react";
import "./MarkdownViewer.css";
import "normalize.css";
type MarkdownViewerProps = {
    terms: string[];
    dynamicData: string;
};
declare const MarkdownViewer: ({ terms, dynamicData }: MarkdownViewerProps) => React.JSX.Element;
export default MarkdownViewer;
