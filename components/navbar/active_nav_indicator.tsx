export default function ActionNavIndicator({ show }: { show: boolean }) {
  return (
    <span
      className={`${
        show ? "opacity-100" : "opacity-0"
      } absolute bottom-[-17px] left-0 right-0 h-[3px] bg-gradient-to-r from-[#f29871] to-[#ff4d4d]`}
    ></span>
  );
}
