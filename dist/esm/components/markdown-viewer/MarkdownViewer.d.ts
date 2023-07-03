import React from "react";
import "./MarkdownViewer.css";
import "normalize.css";
type MarkdownViewerProps = {
    terms: string[];
    dynamicData: string;
    customStyle?: React.CSSProperties;
};
declare const MarkdownViewer: ({ terms, dynamicData, customStyle, }: MarkdownViewerProps) => React.JSX.Element;
export default MarkdownViewer;
