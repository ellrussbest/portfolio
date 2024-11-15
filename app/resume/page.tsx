"use client";

import PageTransition from "@/components/page_transition";
import { useEffect, useRef, useState } from "react";

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
  const [ratio, set_ratio] = useState(window.innerWidth < 1080 ? 0.8 : 1.2);

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

  useEffect(() => {
    const handle_resize = () => {
      set_ratio(window.innerWidth < 1080 ? 0.8 : 1.2);
    };

    window.addEventListener("resize", handle_resize);

    return () => {
      window.removeEventListener("resize", handle_resize);
    };
  }, []);

  return (
    <PageTransition>
      <div className="flex justify-center h-[100vh] pt-6 bg-transparent mix-blend-soft-light">
        <iframe
          ref={iframe}
          src="/api/proxy"
          width="840"
          height="95%"
          style={{
            zoom: ratio,
          }}
        />
      </div>
    </PageTransition>
  );
}
