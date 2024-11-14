import { create } from "zustand";

interface Ihambuger_state {
  phoneMenuClicked: boolean;
}
interface Ihambuger_actions {
  set_phone_menu_clicked: () => void;
}
type hambuger_store_t = Ihambuger_state & Ihambuger_actions;

export const hambuger_store = create<hambuger_store_t>((set) => ({
  phoneMenuClicked: false,
  set_phone_menu_clicked: () =>
    set((state) => ({ phoneMenuClicked: !state.phoneMenuClicked })),
}));

export default function useHamburgerStore() {
  return hambuger_store();
}
