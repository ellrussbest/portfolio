import Image from "next/image";

export default function ErrorModal() {
  return (
    <div className="z-[100] left-0 absolute w-full h-full flex justify-center items-center bg-[url(/images/background.png)] bg-[0_0] bg-[size:200px] bg-[rgba(22,23,27,.8)]">
      <div className="shadow-[0_0_0_1px_rgba(255,255,255,.2)] h-[24rem] w-[30rem] xd:h-[20rem] xd:w-[20rem] flex flex-col justify-center items-center bg-[#16171b] rounded-3xl bg-[url(/images/background.png)] bg-[0px_0px] bg-[size:200px]">
        <Image width={50} height={50} src="/icons/error.png" alt="" />
        <span className="mt-3">Error Downloading</span>
      </div>
    </div>
  );
}
