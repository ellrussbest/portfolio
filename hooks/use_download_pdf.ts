import useIsDownloadingPDF from "@/stores/is_downloading_pdf/use_is_downloading_pdf";
import { useEffect, useState } from "react";

type state_t = "initial" | "loading" | "error" | "success";

export default function useDownloadPdf() {
  const [state, set_state] = useState<state_t>("initial");
  const [pdf_url, set_pdf_url] = useState<string>("");
  const { download } = useIsDownloadingPDF();

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

    if (download) download_pdf();
  }, [download]);

  return { state, pdf_url, set_state, set_pdf_url };
}
