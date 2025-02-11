import React, { useState } from "react";
import PersonalDetails from "@/dashboard/resume/components/forms/PersonalDetails.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-1">
        <Button variant="outline" className="sm">
          <LayoutGrid /> Theme
        </Button>
        <div className="flex items-center gap-2">
          {activeFormIndex > 1 && (
            <Button
              variant="outline"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft /> Back
            </Button>
          )}
          {activeFormIndex < 5 ? (
            <Button
              onClick={() => setActiveFormIndex(activeFormIndex + 1)}
              disabled={!enableNext}
            >
              Next <ArrowRight />
            </Button>
          ) : (
            <Button>Submit</Button>
          )}
        </div>
      </div>
      {/*  Personal Details*/}
      {activeFormIndex === 1 && (
        <PersonalDetails setEnableNext={setEnableNext} />
      )}
      {/*  Summary*/}

      {/*  Professional Experience*/}

      {/*  Educational*/}

      {/*  Skills*/}
    </div>
  );
};

export default FormSection;
