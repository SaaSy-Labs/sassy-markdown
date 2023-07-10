import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { replaceTermsWithValues } from "./utils/replaceTermsWithValues";
import "./MarkdownViewer.css";
import "normalize.css";
import { createPortal } from "react-dom";

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
  // array of terms as markdown string
  terms: Term[];
  // dynamicData json as a string to replace the values inside the markdown
  dynamicData: string;
  containerCustomStyle?: React.CSSProperties;
  ONCHAIN_PROMISOR_SIGNATURE?: string;
  ONCHAIN_OFFERER_SIGNATURE?: string;
};

const MarkdownViewer = ({
  terms,
  dynamicData,
  containerCustomStyle,
  ONCHAIN_PROMISOR_SIGNATURE,
  ONCHAIN_OFFERER_SIGNATURE,
}: MarkdownViewerProps) => {
  const [ref, setRef] = useState<HTMLIFrameElement | null>();
  //@ts-ignore
  const container = ref?.contentWindow?.document?.body;
  const displayMarkdown = replaceTermsWithValues(
    terms.map((c) => c.markdown),
    {
      ...JSON.parse(dynamicData),
      ONCHAIN_PROMISOR_SIGNATURE: ONCHAIN_PROMISOR_SIGNATURE || "",
      ONCHAIN_OFFERER_SIGNATURE: ONCHAIN_OFFERER_SIGNATURE || "",
    }
  );

  return (
    <div className="markdown-viewer container" style={containerCustomStyle}>
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
