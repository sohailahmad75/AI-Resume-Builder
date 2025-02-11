import React from "react";

const PersonalDetails = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-sm text-center font-medium">
        {resumeInfo?.firstName} {resumeInfo?.jobTitle}
      </h2>
      <h2 className="text-xs text-center font-normal">{resumeInfo?.address}</h2>
      <div className="flex justify-between mt-2">
        <h2 className="text-xs font-normal">{resumeInfo?.phone}</h2>
        <span className="border-r-[1px] h-auto"></span>
        <h2 className="text-xs font-normal">{resumeInfo?.email}</h2>
      </div>

      <hr
        className="border-[1.5px] my-2 "
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
    </div>
  );
};

export default PersonalDetails;
