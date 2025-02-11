import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center text-sm mb-2 font-bold"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.experience?.map((exp, index) => {
        const workSummary = `
  Designed, developed, and maintained full-stack applications using React and Node.js.• Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers.• Maintaining the React Native in-house organization application.• Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end and back-end systems.
`;
        const bulletPoints = workSummary
          .split("•")
          .filter((point) => point.trim() !== "");
        return (
          <div key={exp?.title || index} className="my-3">
            <h2
              className="text-sm font-bold"
              style={{
                color: resumeInfo?.themeColor,
              }}
            >
              {exp.title}
            </h2>
            <div className="flex justify-between">
              <h2 className="text-xs font-medium mb-2">
                {exp?.companyName || ""}, {exp?.city || ""}, {exp?.state || ""}
              </h2>
              <h2 className="text-xs font-normal">
                {exp?.startDate || ""} - {exp.endDate || "Present"}
              </h2>
            </div>
            <div className="space-y-1">
              {bulletPoints.map((point, i) => (
                <p
                  key={`${exp?.title || index}-${i}`}
                  className="text-xs font-normal flex items-start"
                >
                  <span className="mr-2">•</span>
                  {point.trim()}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperiencePreview;
