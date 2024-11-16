import { create } from "zustand";

interface Ihambuger_state {
  phoneMenuClicked: boolean;
}
interface Ihambuger_actions {
  set_phone_menu_clicked: (is_clicked: boolean) => void;
}
type hambuger_store_t = Ihambuger_state & Ihambuger_actions;

export const hambuger_store = create<hambuger_store_t>((set) => ({
  phoneMenuClicked: false,
  set_phone_menu_clicked: (is_clicked) =>
    set((state) => ({ ...state, phoneMenuClicked: is_clicked })),
}));

export default function useHamburgerStore() {
  return hambuger_store();
}
