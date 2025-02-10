import React from "react";
import { Notebook } from "lucide-react";
import { Link } from "react-router";

const ResumeCardItem = ({ resume }) => {
  const { title = "", resumeId = "" } = resume;
  return (
    <Link to={`/dashboard/resume/${resumeId}/edit`}>
      <div
        className="p-14 bg-secondary flex items-center flex-col
      justify-center h-[280px] border border-primary rounded-lg
      hover:scale-105 transition-all hover:shadow-md shadow-primary"
      >
        <Notebook />
        <h2 className="text-center my-1">{title}</h2>
      </div>
    </Link>
  );
};

export default ResumeCardItem;
