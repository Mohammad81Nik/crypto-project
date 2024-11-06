import Image from "next/image";

const CryptoIconContainer = ({
  iconUrl,
  alt,
}: {
  iconUrl: string;
  alt: string;
}) => {
  return (
    <div className={`relative min-[500px]:w-[61px] min-[500px]:h-[61px] w-[43px] h-[43px]`}>
      <Image
        src={iconUrl}
        alt={alt}
        fill
        
      />
    </div>
  );
};

export default CryptoIconContainer;
