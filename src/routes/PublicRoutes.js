import React from "react";
import Forbidden from "../components/NotFound/Forbidden";
import NotFound from "../components/NotFound/NotFound";
import ForgotPassword from "../components/Authentication/ForgotPassword";

// Authentication Components
import AuthenticationWizard from "../components/Authentication/AuthenticationWizard";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
import VerifyAccount from "../components/Authentication/VerifyAccount";

const publicRoutes = [
  { path: "/authentication", element: <AuthenticationWizard />},
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/verify", element: <VerifyAccount /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/error-404", element: <NotFound /> },
  { path: "/error-505", element: <Forbidden /> }
];

export default publicRoutes;