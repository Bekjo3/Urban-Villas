import { useCallback } from "react";
import PropertyRentCard from "./property-rent-card";
import { useRouter } from "next/router";

const RentPropertiesForm = () => {
  const router = useRouter();

  const onCTA1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center gap-[30px] text-left text-base text-gray-white">
          <PropertyRentCard />
          <PropertyRentCard propBackgroundImage={`url("/card-21@3x.png")`} />
          <PropertyRentCard propBackgroundImage={`url("/card-31@3x.png")`} />
          <PropertyRentCard propBackgroundImage={`url("/card-41@3x.png")`} />
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-steelblue"
        onClick={onCTA1Click}
      >
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesForm;
