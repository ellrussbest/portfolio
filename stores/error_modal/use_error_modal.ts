import { create } from "zustand";

interface Ierrormodal_state {
  show_error_modal: boolean;
}
interface Ierrormodal_actions {
  set_show_error_modal: (show: boolean) => void;
}
type errormodal_store_t = Ierrormodal_state & Ierrormodal_actions;

export const errormodal_store = create<errormodal_store_t>((set) => ({
  show_error_modal: false,
  set_show_error_modal: (show) =>
    set((state) => ({ ...state, show_error_modal: show })),
}));

export default function useErrorModal() {
  return errormodal_store();
}
