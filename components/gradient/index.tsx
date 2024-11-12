import Image from "next/image";

export default function Gradient() {
  return (
    <div className="z-[-1] mix-blend-hard-light inset-0 w-full h-[100%] absolute">
      <Image
        src="/images/orange-red-gradient-bg.png"
        alt=""
        fill={true}
        className="max-w-full align-middle overflow-clip"
        objectFit="cover"
      />
    </div>
  );
}
