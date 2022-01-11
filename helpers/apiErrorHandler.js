import { NotificationManager } from "components/common/ReactNotifications";

export const apiErrorHandler = (error, history) => {
  if (error.response === undefined) {
    NotificationManager.error(
      "Network Error",
      "Please Check your Internet Connection",
      5000
    );
  } else if (
    error.response.data.status === "401" ||
    error.response.data.status === 401
  ) {
    NotificationManager.error(
      error.response.data.title,
      error.response.data.errorMessage,
      5000
    );
    history.push("/auth/login");
  } else {
    NotificationManager.error(
      error.response.data.title,
      error.response.data.errorMessage,
      5000
    );
  }
};
