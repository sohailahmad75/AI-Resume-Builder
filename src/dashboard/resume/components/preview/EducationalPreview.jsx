import React from "react";

const EducationalPreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center text-sm mb-2 font-bold"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.education?.map((edu, index) => {
        return (
          <div key={edu?.degree || index} className="my-5">
            <h2
              className="text-sm font-bold"
              style={{
                color: resumeInfo?.themeColor,
              }}
            >
              {edu?.universityName || ""}
            </h2>
            <div className="flex justify-between text-xs ">
              <h2>
                {edu?.degree || ""} in {edu.major || ""}
              </h2>
              <h2>
                {edu?.startDate || ""} - {edu.endDate || "Present"}
              </h2>
            </div>
            <p className="text-xs my-2">{edu?.description || ""}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationalPreview;
