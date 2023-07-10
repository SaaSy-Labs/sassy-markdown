import React from "react";
import "./MarkdownViewer.css";
import "normalize.css";
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
export interface Term {
    name: string;
    markdown: string;
    injectedRules?: InjectedRule[];
}
type MarkdownViewerProps = {
    terms: Term[];
    dynamicData: string;
    containerCustomStyle?: React.CSSProperties;
    ONCHAIN_PROMISOR_SIGNATURE?: string;
    ONCHAIN_OFFERER_SIGNATURE?: string;
};
declare const MarkdownViewer: ({ terms, dynamicData, containerCustomStyle, ONCHAIN_PROMISOR_SIGNATURE, ONCHAIN_OFFERER_SIGNATURE, }: MarkdownViewerProps) => React.JSX.Element;
export default MarkdownViewer;
