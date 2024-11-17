"use client";

import { use, useRef, useState, useEffect } from "react";
import blogs from "../blog_blog";
import Loader from "@/components/loader";

const style = `
::-webkit-scrollbar {
  width: 0px;
}
`;

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [show_loader, set_show_loader] = useState(true);
  const iframe = useRef<HTMLIFrameElement>(null);
  const slug = use(params).slug;

  const iframeSettings = () => {
    if (iframe.current && iframe.current.contentDocument) {
      const iframeDocument = iframe.current.contentDocument;

      const metaTag = iframeDocument.createElement("meta");
      const styleTag = iframeDocument.createElement("style");

      metaTag.name = "darkreader-lock";
      styleTag.innerHTML = style;

      iframeDocument.head.appendChild(metaTag);
      iframeDocument.head.appendChild(styleTag);
    }
  };

  useEffect(() => {
    const iframeElement = iframe.current;

    const onIframeLoad = () => {
      iframeSettings();
      set_show_loader(false);
    };

    if (iframeElement) {
      iframeElement.onload = onIframeLoad;
    }

    return () => {
      if (iframeElement) {
        iframeElement.onload = null;
      }
    };
  }, []);

  return (
    <>
      {show_loader && <Loader />}
      <div className="w-full h-full py-4">
        <iframe
          ref={iframe}
          src={`/api/proxy?url=${blogs[slug].url}`}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}
