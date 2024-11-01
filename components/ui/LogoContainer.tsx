import Image from "next/image";

const LogoContainer = ({
  logoPath,
  alt,
}: {
  logoPath: string;
  alt: string;
}) => {
  return (
    <div className="w-[31.91px] h-[31.91px] border-[1px] border-nav-background rounded-[50%] relative">
      <Image
        width={15.31}
        height={15.31}
        src={logoPath}
        alt={alt}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
};

export default LogoContainer;
