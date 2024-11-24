"use client";

import Loader from "@/components/loader";
import PageTransition from "@/components/page_transition";
import { useEffect, useRef, useState } from "react";

const url =
  "https://docs.google.com/document/d/e/2PACX-1vSh94CGWIAHmbORvgovc2RQHybsm7lRQKRaD2EypQHCTN_fZXABxOlig33kDb0FBqDfpF4_j-mQ88nh/pub?embedded=true";

const style = `
::-webkit-scrollbar {
  width: 5px;
  border-radius: 10px
}

::-webkit-scrollbar-track {
  background: #999999;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #ff4d4d;
  border-radius: 10px;
}
  
::-webkit-scrollbar-thumb:hover {
  background: #f29871;
}
`;

export default function Resume() {
  const iframe = useRef<HTMLIFrameElement>(null);
  const [ratio, set_ratio] = useState(1);
  const [show_loader, set_show_loader] = useState(true);

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
    if (window.innerWidth < 1080) {
      set_ratio(0.8);
    } else {
      set_ratio(1.2);
    }

    const handle_resize = () => {
      set_ratio(window.innerWidth < 1080 ? 0.8 : 1.2);
    };

    window.addEventListener("resize", handle_resize);

    return () => {
      window.removeEventListener("resize", handle_resize);
    };
  }, []);

  return (
    <>
      {show_loader && <Loader />}
      <PageTransition>
        <div className="flex justify-center h-[100vh] pt-6 bg-transparent">
          <iframe
            ref={iframe}
            src={`/api/proxy?url=${url}`}
            width="840"
            height="100%"
            style={{
              zoom: ratio,
            }}
            onLoad={() => {
              iframeSettings();
              set_show_loader(false);
            }}
            className={`${show_loader && "hidden"}`}
          />
        </div>
      </PageTransition>
    </>
  );
}
