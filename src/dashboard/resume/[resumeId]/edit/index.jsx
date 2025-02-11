import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import FormSection from "@/dashboard/resume/components/FormSection.jsx";
import ResumePreview from "@/dashboard/resume/components/ResumePreview.jsx";
import dummy from "@/data/dummy.jsx";

const EditResume = () => {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState({});
  useEffect(() => {
    setResumeInfo(dummy);
  }, [params.resumeId]);
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
