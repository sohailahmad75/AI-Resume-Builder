import React from "react";

const SkillsPreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center text-sm mb-2 font-bold"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      <div className="grid grid-cols-2 flex-wrap justify-center gap-2 md:gap-5 my-2">
        {resumeInfo?.skills?.map((skill, index) => (
          <div key={skill || index} className="w-full my-1">
            <div className="grid grid-cols-2 flex-wrap lg:grid-cols-5 align-middle items-center gap-2">
              <h2 className="text-xs col-span-1 lg:col-span-2">{skill.name}</h2>
              <div className="w-full h-2 bg-gray-200 rounded-full col-span-1 lg:col-span-3">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.rating}%`,
                    backgroundColor: resumeInfo?.themeColor,
                    opacity: 0.7,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPreview;
