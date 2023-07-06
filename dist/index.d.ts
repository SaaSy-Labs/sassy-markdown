import React from 'react';

interface InjectedRule {
    key: string;
    displayName: string;
    description?: string;
    positionIndex: number;
    regExp?: string;
    minLength?: number;
    maxLength?: number;
    isRequired?: ["proposal" | "counter-sign"];
    type: "text" | "number";
}
interface Term {
    name: string;
    markdown: string;
    injectedRules?: InjectedRule[];
}
type MarkdownViewerProps = {
    terms: Term[];
    dynamicData: string;
    containerCustomStyle?: React.CSSProperties;
};
declare const MarkdownViewer: ({ terms, dynamicData, containerCustomStyle, }: MarkdownViewerProps) => React.JSX.Element;

export { MarkdownViewer };
