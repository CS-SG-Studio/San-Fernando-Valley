import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import EventsPage from "./EventsPage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <div>
        <ProfilePage />
        <EventsPage />
        </div>
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;
