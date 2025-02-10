import React from "react";
import { PlusSquare } from "lucide-react";

const AddResume = ({ ...props }) => {
  return (
    <div {...props}>
      <div
        className="p-14 py-24 border items-center flex
      justify-center bg-secondary rounded-lg h-[280px]
      hover:scale-105 transition-all hover:shadow cursor-pointer border-dashed"
      >
        <PlusSquare />
      </div>
    </div>
  );
};

export default AddResume;
