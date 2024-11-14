import { useEffect, useState } from "react";

type state_t = "initial" | "loading" | "error" | "success";

export default function useDownloadPdf() {
  const [state, set_state] = useState<state_t>("initial");
  const [pdf_url, set_pdf_url] = useState<string>("");

  useEffect(() => {
    const download_pdf = async () => {
      try {
        set_state("loading");

        const res = await fetch("/api/download");

        if (res.ok) {
          const blob = await res.blob();
          const url = window.URL.createObjectURL(blob);
          set_pdf_url(url);
          set_state("success");
        } else {
          set_state("error");
        }
      } catch (error) {
        console.error(error);
        set_state("error");
      }
    };

    download_pdf();
  }, []);

  return { state, pdf_url };
}
