import SignupPage from "views/User/SignupPage";
import LoginPage from "views/User/LoginPage";
import ForgetPasswordPage from "views/User/ForgetPasswordPage";
import ResetPasswordPage from "views/User/ResetPasswordPage";
import VerifyTokenPage from "views/User/VerifyTokenPage";
import NotFoundPage from "views/User/NotFoundPage";

export const authRoutes = [
  {
    path: "/signup/:encryptedOrgName/:encryptedEmail",
    name: "Staff Signup",
    component: SignupPage,
    layout: "/auth",
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
    layout: "/auth",
  },
  {
    path: "/forget-password",
    name: "Forget Password",
    component: ForgetPasswordPage,
    layout: "/auth",
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    component: ResetPasswordPage,
    layout: "/auth",
  },
  {
    path: "/verify-token",
    name: "Verify Token",
    component: VerifyTokenPage,
    layout: "/auth",
  },
  {
    path: "/page-not-found",
    name: "Page Not Found",
    component: NotFoundPage,
    layout: "/auth",
  },
];
