import jwtDecode from "jwt-decode";
import { adminRoutes } from "routes/adminRoutes";
import { authRoutes } from "routes/authRoutes";
import { customerAdminRoutes } from "routes/customerAdminRoutes";
import { customerUserRoutes } from "routes/customerUserRoutes";
import authStore from "store/authStore";

export const appRoutes = () => {
  const token = authStore((state) => state.userToken);

  const appRoutes = [];
  let decodedToken = "";
  if (token) {
    decodedToken = jwtDecode(token);
  }

  authRoutes.map((route) => {
    appRoutes.push(route);
  });

  if (token) {
    if (decodedToken.role.toLowerCase() === "superadmin") {
      adminRoutes.map((route) => appRoutes.push(route));
    } else if (decodedToken.role.toLowerCase() === "customeradmin") {
      customerAdminRoutes.map((route) => appRoutes.push(route));
    } else if (decodedToken.role.toLowerCase() === "customeruser") {
      customerUserRoutes.map((route) => appRoutes.push(route));
    }
  }

  return appRoutes;
};
