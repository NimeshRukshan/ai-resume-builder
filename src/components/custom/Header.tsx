import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Header() {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="p-3 px-5 flex justify-between shadow-md">
        <img
          src="/icon/logo.png"
          alt="AI Resume Builder App logo"
          className="h-10"
        />
        {isSignedIn ? (
          <div className="flex gap-2 items-center px-2-">
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
              <UserButton />
            </Link>
          </div>
        ) : (
          <Link to="/auth/sign-in">
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Header;
