import React, { useState } from "react";
import AddResume from "@/dashboard/components/AddResume.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "../../service/GlobalApi.js";
import { useUser } from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const onCreateResume = async () => {
    const uuid = uuidv4();
    console.log("Create new resume with title: ", user);
    try {
      setLoading(true);
      const { data } = await GlobalApi.CreateNewResume({
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user.fullName,
      });
      console.log("datadata", data);
      setLoading(false);
    } catch (error) {
      console.error("CreateNewResume -> error", error);
    }
  };
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-blod text-3xl">My Resume</h2>
      <p>
        Start Creating A Resume to your next job with our easy to use resume
        builder.
      </p>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10"
        onClick={() => setOpen(true)}
      >
        <AddResume />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              Add a title for your new resume
            </DialogDescription>
            <Input
              className="mt-2"
              placeholder="Ex. Full stack developer resume"
              value={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreateResume()}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
