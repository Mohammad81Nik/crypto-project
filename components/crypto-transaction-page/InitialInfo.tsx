import Image from "next/image";

const InitialInfo = ({
  about,
  crypto_name,
}: {
  about: string;
  crypto_name: string; 
}) => {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row-reverse gap-4">
      <div className="w-full lg:w-[50%] text-right flex flex-col items-center lg:items-end gap-[47px] lg:justify-evenly">
        <h2 className="text-[20px] custom-tablet:text-[30px] font-extrabold">
          درباره ی <span className="text-buy-button-color">{crypto_name}</span>
        </h2>
        <div className="flex lg:hidden w-full justify-center">
          <Image
            src={'/about-bitcoin.svg'}
            alt="about image"
            height={321}
            width={555}
          
            className="rounded-[30px] max-w-[555px] w-[100%] sm:w-[80%] h-[194px] sm:h-[321px]"
          />
        </div>
        <p className=" text-[12px] custom-tablet:text-[14px] lg:text-[16px] font-normal leading-[32px]">{about}</p>
      </div>
      <div className="hidden lg:block relative w-[555px] h-[321px]">
        <Image
          src={'/about-bitcoin.svg'}
          width={555}
          height={321}
          alt="about image"
          className="rounded-[30px]"
        />
      </div>
    </div>
  );
};

export default InitialInfo;
