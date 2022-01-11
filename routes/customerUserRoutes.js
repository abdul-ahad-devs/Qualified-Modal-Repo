import DashboardStaff from "views/CustomerStaff/Dashboard";
import ViewSurveyForm from "views/Common/SurveyForms/ViewSurveyForm";
import ProfileManageStaff from "views/CustomerStaff/Profile-Manage";
import EditSurveyForm from "views/Common/SurveyForms/EditSurveyForm";

export const customerUserRoutes = [
  // STAFF STORIES

  {
    path: "/dashboard",
    name: "Staff Dashboard",
    component: DashboardStaff,
    layout: "/customerUser",
  },

  {
    path: "/dashboard/survey-form/:inquiryTypeId/edit-survey-form/:inquiryId",
    name: "Edit Staff Survey Form",
    component: EditSurveyForm,
    layout: "/customerUser",
  },

  {
    path:
      "/dashboard/survey-form/:inquiryTypeId/view-survey-form/:inquiryId/:customerUserId",
    name: "View Staff Survey Form",
    component: ViewSurveyForm,
    layout: "/customerUser",
  },
  {
    path: "/manage-profile",
    name: "Customer Profile",
    component: ProfileManageStaff,
    layout: "/customerUser",
  },
];
