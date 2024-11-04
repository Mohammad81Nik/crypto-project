import Image from "next/image";

const CryptoIconContainer = ({
  iconUrl,
  alt,
  width,
  height,
}: {
  iconUrl: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return (
    <div className={` min-w-[73px] min-h-[73px] relative`}>
      <Image
        src={iconUrl}
        alt={alt}
        fill
        
      />
    </div>
  );
};

export default CryptoIconContainer;
