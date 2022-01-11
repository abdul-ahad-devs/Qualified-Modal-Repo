import jwtDecode from "jwt-decode";

export const isInFullScreenFn = () => {
  return (
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement &&
      document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null)
  );
};

export const toggleFullScreen = (setIsInFullScreen) => {
  const isFS = isInFullScreenFn();

  const docElm = document.documentElement;
  if (!isFS) {
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  setIsInFullScreen(!isFS);
};

export const handleClickProfile = (event, openProfile, setOpenProfile) => {
  if (openProfile && openProfile.contains(event.target)) {
    setOpenProfile(null);
  } else {
    setOpenProfile(event.currentTarget);
  }
};
export const handleCloseProfile = (history, setOpenProfile) => {
  localStorage.clear();
  history.push("/auth/login");
  setOpenProfile(null);
};

export const handleClickAway = (setOpenProfile) => {
  setOpenProfile(null);
};

export const handleClickNotifications = (
  event,
  openNotifications,
  setOpenNotifications
) => {
  if (openNotifications && openNotifications.contains(event.target)) {
    setOpenNotifications(null);
  } else {
    setOpenNotifications(event.currentTarget);
  }
};
export const handleCloseNotifications = (setOpenNotifications) => {
  setOpenNotifications(null);
};

export const getLoggedInName = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = jwtDecode(token);
    const firstName = decodedToken.firstname;
    const lastName = decodedToken.lastname;

    return firstName + " " + lastName;
  }

  // IF NO TOKEN IS NULL, RETURN FALSE
  return false;
};

export const getRole = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    return role;
  }
  return false;
};

export const filterInquiryTypeName = (data, inquiryParamId) => {
  let index = data.InquiryTypeIds.findIndex(
    (item) => item === Number(inquiryParamId)
  );
  return data.InquiryTypeNames[index];
};

// function that verifies if value contains only numbers
// const verifyNumber = (value) => {
//   var numberRex = new RegExp("^[0-9]+$");
//   if (numberRex.test(value)) {
//     return true;
//   }
//   return false;
// };
