import React, { useContext, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import GlobalApi from "../../../../../service/GlobalApi.js";
import { useParams } from "react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const PersonalDetails = ({ setEnableNext }) => {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setEnableNext(false);
    setResumeInfo({ ...resumeInfo, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEnableNext(true);

    try {
      const { data } = await GlobalApi.UpdateResumeDetails(
        formData,
        params.resumeId,
      );
      setLoading(false);
      toast.success("Personal Details Saved Successfully.");
    } catch (error) {
      toast.error("Error Saving Personal Details. Please try again.");
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="p-5 shadow-lg border-t-primary rounded-lg border-t-4 mt-5">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-1 flex-wrap gap-3 mt-4 md:grid-cols-2">
          <div className="col-span-1">
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              required
              onChange={handleChange}
              defaultValue={resumeInfo.firstName}
            />
          </div>

          <div className="col-span-1">
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={handleChange}
              defaultValue={resumeInfo.lastName}
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              onChange={handleChange}
              defaultValue={resumeInfo.jobTitle}
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              required
              onChange={handleChange}
              defaultValue={resumeInfo.address}
            />
          </div>
          <div className="col-span-1">
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              onChange={handleChange}
              defaultValue={resumeInfo.phone}
            />
          </div>
          <div className="col-span-1">
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              onChange={handleChange}
              defaultValue={resumeInfo.email}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button disable={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
