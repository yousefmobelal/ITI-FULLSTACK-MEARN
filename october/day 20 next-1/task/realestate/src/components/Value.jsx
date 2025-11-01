import Image from "next/image";

function Value({ icon, title, description }) {
  return (
    <div>
      <div className="flex flex-col items-start gap-3">
        <div className="flex justify-center items-center gap-2 text-2xl text-white">
          <div className="h-15 w-15 rounded-full flex justify-center items-center border border-[#703BF7]">
            <Image src={icon} className="h-6 w-6" />
          </div>
          <span>{title}</span>
        </div>
        <p className="text-[#999999]">{description}</p>
      </div>
    </div>
  );
}

export default Value;
