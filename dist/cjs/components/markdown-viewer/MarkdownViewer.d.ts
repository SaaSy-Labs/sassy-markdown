import React from "react";
type MarkdownViewerProps = {
    terms: string[];
    dynamicData: string;
};
declare const MarkdownViewer: ({ terms, dynamicData }: MarkdownViewerProps) => React.JSX.Element;
export default MarkdownViewer;