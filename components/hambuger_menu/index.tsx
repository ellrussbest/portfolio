import use_hambuger_store from "@/stores/hambuger_menu/use_hambuger_store";

export default function HambugerMenu() {
  const { phoneMenuClicked, set_phone_menu_clicked } = use_hambuger_store();

  return (
    <div
      className="xd:block float-right cursor-pointer text-[24px] relative"
      onClick={() => set_phone_menu_clicked()}
    >
      <div
        className={`w-[48px] h-[48px] flex flex-col justify-center mr-[-.5rem] pb-0 pr-0`}
      >
        <div
          className={`transition ease-in-out delay-100 ${
            phoneMenuClicked && "transform translate-y-[8px] rotate-[-45deg]"
          } w-[24px] h-[2px] bg-white pb-0 pr-0`}
        ></div>
        <div
          className={`transition ease-in-out delay-300 flex ${
            phoneMenuClicked
              ? "transform scale-0 w-0 h-[2px]"
              : "w-[24px] h-[2px]"
          } bg-white justify-center items-center mt-[6px] mb-[6px] pb-0 pr-0`}
        >
          <div className={`w-[4px] h-0 pb-0 pr-0`}></div>
        </div>
        <div
          className={`transition ease-in-out delay-100 ${
            phoneMenuClicked && "transform translate-y-[-8px] rotate-45"
          } w-[24px] h-[2px] bg-white pb-0 pr-0`}
        ></div>
      </div>
    </div>
  );
}
