import React from "react";

function MorProjects({ color, getUpdatedStyles }) {
  return (
    <div
      terid="box-flex"
      className="flex w-[406px] flex-col gap-[20px] rounded-2xl bg-[#f5f5f5] p-[20px] m-6"
    >
      <div id="Box1" className="h-[225px] rounded-2xl bg-white"></div>
      <div className="flex items-start">
        <button
          className="rounded-2xl bg-[#ea4335] px-7 py-1 font-mono font-semibold text-white"
          style={getUpdatedStyles(color)}
        >
          TLDR
        </button>
      </div>
      <h2 className="font-sans text-[28px] font-bold">
        Lorem ipsum dolor sit amet consectetur.
      </h2>
    </div>
  );
}

export default MorProjects;
