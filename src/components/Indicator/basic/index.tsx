import ButtonDropDown from "@/utils/Button/Button";
import React from "react";

const IndicatorContainer = () => {
  return (
    <div className="w-[100%] tracking-wide min-h-[120vh] bg-[#fff] rounded-2xl py-[20px] relative">
      <div className="w-[260px]">
        <p className="text-[#8A9099] ml-[35px] mb-[6px] font-medium">
          Indicator Type
        </p>
        <ButtonDropDown
          light={true}
          text={"Completed"}
          height={39}
          border={true}
          id={1}
          dropdown={true}
          list={[]}
        />
      </div>
      <div className="w-[260px] mt-[18px] relative">
        <p className="text-[#8A9099] tracking-wide ml-[35px] mb-[6px] font-medium">
          Indicator Category
        </p>
        <ButtonDropDown
          light={true}
          height={39}
          text={"Call Purpose"}
          border={true}
          id={1}
          dropdown={true}
          list={[]}
        />
      </div>
      <div className="w-[180px] absolute top-[30px] right-[30px]">
        <ButtonDropDown
          light={false}
          height={39}
          text={"Call Purpose"}
          border={true}
          id={1}
          dropdown={true}
          list={[]}
        />
      </div>
    </div>
  );
};

export default IndicatorContainer;