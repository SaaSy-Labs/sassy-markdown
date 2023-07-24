import React, { useEffect, useState } from "react";
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
  onReachedBottom?: () => void;
};

const MarkdownViewer = ({
  terms,
  dynamicData,
  containerCustomStyle,
  ONCHAIN_PROMISOR_SIGNATURE,
  ONCHAIN_OFFERER_SIGNATURE,
  onReachedBottom,
}: MarkdownViewerProps) => {
  const [ref, setRef] = useState<HTMLIFrameElement | null>();
  const [scrollListenerAdded, setScrollListenerAdded] = useState(false);
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

  useEffect(() => {
    const iframeWindow = ref?.contentWindow;
    if (iframeWindow && !scrollListenerAdded) {
      iframeWindow.addEventListener("scroll", handleIframeScroll);
      console.log({ w: window.innerWidth });
      if (window.innerWidth < 450) {
        const iframe: any = document.getElementById("markdown-viewer-iframe");
        const style = document.createElement("style");
        style.textContent = "blockquote { margin:0}";
        iframe?.contentDocument.head.appendChild(style);
      }
      setScrollListenerAdded(true);
    }

    return () => {
      if (iframeWindow && scrollListenerAdded) {
        iframeWindow.removeEventListener("scroll", handleIframeScroll);
        setScrollListenerAdded(false);
      }
    };
  }, [ref, scrollListenerAdded]);

  const handleIframeScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } =
      ref!.contentDocument!.body;
    console.log({ scrollHeight, scrollTop, clientHeight });
    if (scrollHeight - scrollTop <= clientHeight - 50) {
      if (onReachedBottom) {
        onReachedBottom();
      }
    }
  };

  return (
    <div
      className="markdown-viewer container"
      onScroll={() => console.log("scrolld")}
      style={containerCustomStyle}
    >
      <iframe
        ref={setRef}
        id="markdown-viewer-iframe"
        onScroll={() => console.log("scrollI")}
        frameBorder="0"
        width={"100%"}
        height={"600px"}
      >
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
