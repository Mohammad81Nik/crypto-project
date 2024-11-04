import React from "react";

const AdditionalInfo = ({
  about,
  crypto_name,
}: {
  about: string;
  crypto_name: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-4 text-right items-center custom-tablet:items-end">
      <h2 className="font-extrabold text-[20px] custom-tablet:text-[30px] text-center mb-4">{`توضیحات بیشر درباره ی ${crypto_name}`}</h2>
      <p className="text-right custom-tablet:text-[16px] min-[500px]:text-[14px] text-[12px]">{about}</p>
      <p className="text-right custom-tablet:text-[16px] min-[500px]:text-[14px] text-[12px]">{about}</p>
    </div>
  );
};

export default AdditionalInfo;
