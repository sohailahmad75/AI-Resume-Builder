import "./App.css";
import { Navigate, Outlet } from "react-router";
import { useUser } from "@clerk/clerk-react";
import Header from "@/components/custom/Header.jsx";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!user && isSignedIn) return Navigate({ to: "/auth/sign-in" });
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
