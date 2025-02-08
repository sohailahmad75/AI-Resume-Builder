import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" alt="appication_logo" height={100} width={100} />
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button variant="secondary">Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
