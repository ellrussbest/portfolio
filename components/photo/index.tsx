import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="xd:w-[298px] xd:h-[298px] w-[498px] h-[498px] overflow-hidden rounded-full relative border-8 xd:border-[6px] border-[rgba(255,77,77,.5)] border-dotted bg-white/5">
        <Image
          src="/images/profile.jpg"
          priority
          quality={100}
          width={853}
          height={1280}
          alt="Profile Image"
        />
      </div>
    </div>
  );
}
