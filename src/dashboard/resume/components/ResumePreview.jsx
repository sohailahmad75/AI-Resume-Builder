import React, { useContext } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import PersonalDetails from "@/dashboard/resume/components/preview/PersonalDetails.jsx";
import SummeryPreview from "@/dashboard/resume/components/preview/SummeryPreview.jsx";
import ExperiencePreview from "@/dashboard/resume/components/preview/ExperiencePreview.jsx";
import EducationalPreview from "@/dashboard/resume/components/preview/EducationalPreview.jsx";
import SkillsPreview from "@/dashboard/resume/components/preview/SkillsPreview.jsx";

const ResumePreview = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className={`shadow-lg h-full p-14 py-8 border-t-[10px] `}
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/*  Personal Details*/}
      <PersonalDetails resumeInfo={resumeInfo} />
      {/*  Summary*/}
      <SummeryPreview resumeInfo={resumeInfo} />
      {/*  Professional Experience*/}
      <ExperiencePreview resumeInfo={resumeInfo} />
      {/*  Educational*/}
      <EducationalPreview resumeInfo={resumeInfo} />
      {/*  Skills*/}

      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
