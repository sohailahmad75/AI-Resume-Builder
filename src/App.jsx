import "./App.css";
import { Navigate, Outlet } from "react-router";
import { useUser } from "@clerk/clerk-react";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!user) return Navigate({ to: "/auth/sign-in" });
  return <Outlet />;
}

export default App;
