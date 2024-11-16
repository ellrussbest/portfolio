import { create } from "zustand";

interface Idownloadpdf_state {
  download: boolean;
}
interface Idownloadpdf_actions {
  set_download: (is_downloading: boolean) => void;
}
type downloadpdf_store_t = Idownloadpdf_state & Idownloadpdf_actions;

export const isdownloading_pdf = create<downloadpdf_store_t>((set) => ({
  download: false,
  set_download: (is_downloading) =>
    set((state) => ({ ...state, download: is_downloading })),
}));

export default function useIsDownloadingPDF() {
  return isdownloading_pdf();
}
