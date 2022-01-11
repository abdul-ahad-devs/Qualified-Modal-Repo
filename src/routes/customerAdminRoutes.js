import ProfileManage from "views/CustomerAdmin/Profile-Manage";

import CreateInquiry from "views/CustomerAdmin/Inquirylogs-Management/CreateInquiry";
import IntakeQuestionsResponse from "views/CustomerAdmin/Inquirylogs-Management/IntakeQuestionsResponse";
import IntakeAnswersProgressMeter from "views/CustomerAdmin/Inquirylogs-Management/IntakeAnswersProgressMeter";
import CustomMetrics from "views/Common/CustomMetrics/CustomMetrics";
import InquiryLogs from "views/CustomerAdmin/Inquirylogs-Management";
import CreateCustomMetrics from "views/CustomerAdmin/CustomMetricsCustomer/CreateCustomMetrics";
import EditCustomMetrics from "views/CustomerAdmin/CustomMetricsCustomer/EditCustomMetrics";
import ViewCustomMetrics from "views/CustomerAdmin/CustomMetricsCustomer/ViewCustomMetrics";
import SelectAndManageRespondents from "views/CustomerAdmin/ManageRespondents";
import CustomerAdminSurveyForms from "views/CustomerStaff/Dashboard";
// WE HAVE SAME DASHBOARD SCREEN FOR PORTAL ADMIN AND CUSTOMER ADMIN
import CommonDashboard from "views/Common/Dashboard";

// importing view insights
import ViewInsights from "views/Common/ViewInsights";
import Participants from "views/Common/ViewInsights/Overview/Participants";
import Documents from "views/Common/ViewInsights/Overview/Documents";
import AdvanceInsights from "views/Common/ViewInsights/Overview/AdvancedInsights";
import EditSurveyForm from "views/Common/SurveyForms/EditSurveyForm";
import ViewSurveyForm from "views/Common/SurveyForms/ViewSurveyForm";

export const customerAdminRoutes = [
  // CUSTOMER ADMIN DASHBOARD
  {
    path: "/dashboard",
    name: "Customer Admin Dashboard",
    component: CommonDashboard,
    layout: "/customerAdmin",
  },
  {
    path: "/custom-metrics",
    name: "Custom Metrics Customer",
    component: CustomMetrics,
    layout: "/customerAdmin",
  },
  {
    path: "/inquiry-logs/custom-metrics/inquiry/:inquiryParamId/create",
    name: "Custom Metrics Customer Create",
    component: CreateCustomMetrics,
    layout: "/customerAdmin",
  },
  {
    path: "/custom-metrics/inquiry/:inquiryParamId/edit/:CustomParamId",
    name: "Custom Metrics Customer Edit",
    component: EditCustomMetrics,
    layout: "/customerAdmin",
  },
  {
    path: "/custom-metrics/inquiry/:inquiryParamId/view/:CustomParamId",
    name: "Custom Metrics Customer Edit",
    component: ViewCustomMetrics,
    layout: "/customerAdmin",
  },
  {
    path: "/inquiry-logs",
    name: "Customer Inquiry Log",
    component: InquiryLogs,
    layout: "/customerAdmin",
  },
  {
    path: "/manage-profile",
    name: "Customer Profile",
    component: ProfileManage,
    layout: "/customerAdmin",
  },
  {
    path: "/inquiry-logs/create",
    name: "Create New Inquiry from Inquiry Logs",
    component: CreateInquiry,
    layout: "/customerAdmin",
  },
  {
    path: "/inquiry-logs/progress-meter/:inquiryId",
    name: "Intake Answers Progress Meter",
    component: IntakeAnswersProgressMeter,
    layout: "/customerAdmin",
  },
  {
    path: "/inquiry-logs/manage-respondents/:inquiryId",
    name: "Select and Manage Respondents",
    component: SelectAndManageRespondents,
    layout: "/customerAdmin",
  },
  {
    path: "/inquiry-logs/inquiry-types/:inquiryTypeId/inquiry/:inquiryId",
    name: "Intake Questions Response",
    component: IntakeQuestionsResponse,
    layout: "/customerAdmin",
  },
  // survey form routes for customer admin
  {
    path: "/survey-forms",
    name: "Survey Forms for Customer Admin",
    component: CustomerAdminSurveyForms,
    layout: "/customerAdmin",
  },
  {
    path: "/survey-forms/:inquiryTypeId/edit-survey-form/:inquiryId",
    name: "Customer Admin Edit Survey Form",
    component: EditSurveyForm,
    layout: "/customerAdmin",
  },
  {
    path:
      "/survey-forms/:inquiryTypeId/view-survey-form/:inquiryId/:customerUserId",
    name: "Customer Admin View Survey Form",
    component: ViewSurveyForm,
    layout: "/customerAdmin",
  },

  // view insights routes
  {
    path: "/dashboard/view-insights/:inquiryId/overview",
    name: "View Insights Overview",
    component: ViewInsights,
    layout: "/customerAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/overview/participants",
    name: "View Insights Overview",
    component: Participants,
    layout: "/customerAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/overview/documents",
    name: "View Insights Overview",
    component: Documents,
    layout: "/customerAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/overview/advance-insights",
    name: "View Insights Overview",
    component: AdvanceInsights,
    layout: "/customerAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/findings",
    name: "View Insights Findings",
    component: ViewInsights,
    layout: "/customerAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/scenarios",
    name: "View Insights Scenarios",
    component: ViewInsights,
    layout: "/customerAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/inputs",
    name: "View Insights Inputs",
    component: ViewInsights,
    layout: "/customerAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/roadmap",
    name: "View Insights Roadmap",
    component: ViewInsights,
    layout: "/customerAdmin",
  },
];
