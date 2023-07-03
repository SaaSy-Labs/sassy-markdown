import React from 'react';

type MarkdownViewerProps = {
    terms: string[];
    dynamicData: string;
    customStyle?: React.CSSProperties;
};
declare const MarkdownViewer: ({ terms, dynamicData, customStyle, }: MarkdownViewerProps) => React.JSX.Element;

export { MarkdownViewer };
