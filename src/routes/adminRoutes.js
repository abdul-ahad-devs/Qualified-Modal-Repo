import CustomersProfileManagement from "views/SuperAdmin/Customers-Profile-Management";
import InquiryManagement from "views/SuperAdmin/Inquiry-Management";
import CreateInquiryType from "views/SuperAdmin/Inquiry-Management/Inquiry-Types/CreateInquiryType";
import ViewInquiryType from "views/SuperAdmin/Inquiry-Management/Inquiry-Types/ViewInquiryType";
import EditInquiryType from "views/SuperAdmin/Inquiry-Management/Inquiry-Types/EditInquiryType";
import ManagePathways from "views/SuperAdmin/Inquiry-Management/Manage-Pathways";
import ManageDiagnostic from "views/SuperAdmin/Inquiry-Management/Diagnostic-Questions";
import CreatePathway from "views/SuperAdmin/Inquiry-Management/Manage-Pathways/CreatePathway";
import ViewPathway from "views/SuperAdmin/Inquiry-Management/Manage-Pathways/ViewPathway";
import EditPathway from "views/SuperAdmin/Inquiry-Management/Manage-Pathways/EditPathway";
import CreateDiagnosticQuestion from "views/SuperAdmin/Inquiry-Management/Diagnostic-Questions/CreateDiagnosticQuestion";
import IntakeQuestion from "views/SuperAdmin/Inquiry-Management/Intake-Question";
import CreateIntakeQuestion from "views/SuperAdmin/Inquiry-Management/Intake-Question/CreateIntakeQuestion";
import ViewIntakeQuestion from "views/SuperAdmin/Inquiry-Management/Intake-Question/ViewIntakeQuestion";
import EditIntakeQuestion from "views/SuperAdmin/Inquiry-Management/Intake-Question/EditIntakeQuestion";
import ViewDiagnosticQuestion from "views/SuperAdmin/Inquiry-Management/Diagnostic-Questions/ViewDiagnosticQuestion";
import EditDiagnosticQuestion from "views/SuperAdmin/Inquiry-Management/Diagnostic-Questions/EditDiagnosticQuestion";
import EditCustomerAdmin from "views/SuperAdmin/Customers-Profile-Management/Customers-Admin/EditCustomerAdmin";
import ViewCustomerAdmin from "views/SuperAdmin/Customers-Profile-Management/Customers-Admin/ViewCustomerAdmin";
import EditCustom from "views/SuperAdmin/CustomMetricsAdmin/EditCustomMetrics";
import ViewCustom from "views/SuperAdmin/CustomMetricsAdmin/ViewCustomMetrics";
import Findings from "views/SuperAdmin/Findings";
import ViewFindings from "views/SuperAdmin/Findings/ViewFindings";
import EditFindings from "views/SuperAdmin/Findings/EditFindings";
import CreateFindings from "views/SuperAdmin/Findings/CreateFindings";
//Recommendation management
import RecommendationManagement from "views/SuperAdmin/RecommendationManagement";
import ViewRecommendation from "views/SuperAdmin/RecommendationManagement/ViewRecommendation";
import EditRecommendation from "views/SuperAdmin/RecommendationManagement/EditRecommendation";
import CreateRecommendation from "views/SuperAdmin/RecommendationManagement/CreateRecommendation";

import MonitorActivity from "views/SuperAdmin/MonitorActivity";
import SurveyFormRespondents from "views/SuperAdmin/MonitorActivity/SurveyFormRespondents";
import CustomerUser from "views/SuperAdmin/Customers-Profile-Management/Customers-User";
import ViewCustomerUser from "views/SuperAdmin/Customers-Profile-Management/Customers-User/ViewCustomerUser";
import EditCustomerUser from "views/SuperAdmin/Customers-Profile-Management/Customers-User/EditCustomerUser";
// WE HAVE SAME DASHBOARD SCREEN FOR Super ADMIN AND CUSTOMER ADMIN
import CommonDashboard from "views/Common/Dashboard";
import ViewSurveyForm from "views/Common/SurveyForms/ViewSurveyForm";
import CustomMetrics from "views/Common/CustomMetrics/CustomMetrics";

// importing view insights
import ViewInsights from "views/Common/ViewInsights";
import Participants from "views/Common/ViewInsights/Overview/Participants";
import Documents from "views/Common/ViewInsights/Overview/Documents";
import AdvanceInsights from "views/Common/ViewInsights/Overview/AdvancedInsights";
import CreateRoadmap from "views/SuperAdmin/RoadmapManagement/CreateRoadmap";
import ViewRoadmap from "views/SuperAdmin/RoadmapManagement/ViewRoadmap";
import EditRoadmap from "views/SuperAdmin/RoadmapManagement/EditRoadmap";
import RoadmapManagement from "views/SuperAdmin/RoadmapManagement";

export const adminRoutes = [
  // DASHBOARD ROUTES
  {
    path: "/dashboard",
    name: "Dashboard",
    component: CommonDashboard,
    layout: "/superAdmin",
  },

  // INQUIRY TYPES ROUTES
  {
    path: "/inquiry-type-management",
    name: "Inquiry Management",
    component: InquiryManagement,
    layout: "/superAdmin",
  },
  {
    path: "/inquiry-type-management/create",
    name: "Inquiry Management",
    component: CreateInquiryType,
    layout: "/superAdmin",
  },
  {
    path: "/inquiry-type-management/view/:Id",
    name: "Inquiry Management",
    component: ViewInquiryType,
    layout: "/superAdmin",
  },
  {
    path: "/inquiry-type-management/edit/:id",
    name: "Inquiry Management",
    component: EditInquiryType,
    layout: "/superAdmin",
  },

  // DEFINE PATHWAYS
  {
    path: "/inquiry-type-management/:inquiryParamId/pathways",
    name: "Define Pathways",
    component: ManagePathways,
    layout: "/superAdmin",
  },
  {
    path: "/inquiry-type-management/:inquiryParamId/pathways/create",
    name: "Define Pathways Create",
    component: CreatePathway,
    layout: "/superAdmin",
  },
  {
    path: "/inquiry-type-management/:inquiryParamId/pathways/view/:pathwayId",
    name: "Define Pathways View",
    component: ViewPathway,
    layout: "/superAdmin",
  },
  {
    path: "/inquiry-type-management/:inquiryParamId/pathways/edit/:pathwayId",
    name: "Define Pathways Edit",
    component: EditPathway,
    layout: "/superAdmin",
  },
  {
    path: "/inquiry-type-management/:inquiryParamId/intake-questions",
    name: "Intake Question",
    component: IntakeQuestion,
    layout: "/superAdmin",
  },
  {
    path: "/inquiry-type-management/:inquiryParamId/intake-questions/create",
    name: "Intake Question Create",
    component: CreateIntakeQuestion,
    layout: "/superAdmin",
  },
  {
    path:
      "/inquiry-type-management/:inquiryParamId/intake-questions/view/:intakeQuestionId",
    name: "Intake Question View",
    component: ViewIntakeQuestion,
    layout: "/superAdmin",
  },
  {
    path:
      "/inquiry-type-management/:inquiryParamId/intake-questions/edit/:intakeQuestionId",
    name: "Intake Question View",
    component: EditIntakeQuestion,
    layout: "/superAdmin",
  },

  // Diagnostic Questions
  {
    path:
      "/inquiry-type-management/:inquiryParamId/pathways/:pathwayParamId/diagnostic-questions",
    name: "Define Diagnostic",
    component: ManageDiagnostic,
    layout: "/superAdmin",
  },
  {
    path:
      "/inquiry-type-management/:inquiryParamId/pathways/:pathwayParamId/diagnostic-questions/create",
    name: "Define Diagnostic Create",
    component: CreateDiagnosticQuestion,
    layout: "/superAdmin",
  },
  {
    path:
      "/inquiry-type-management/:inquiryParamId/pathways/:pathwayParamId/diagnostic-questions/view/:diagnosticParamId",
    name: "Define Diagnostic Create",
    component: ViewDiagnosticQuestion,
    layout: "/superAdmin",
  },
  {
    path:
      "/inquiry-type-management/:inquiryParamId/pathways/:pathwayParamId/diagnostic-questions/edit/:diagnosticParamId",
    name: "Define Diagnostic Create",
    component: EditDiagnosticQuestion,
    layout: "/superAdmin",
  },

  // CUSTOMER PROFILE MANAGEMENT
  {
    path: "/manage-customers-profile",
    name: "Customers Profile Management",
    component: CustomersProfileManagement,
    layout: "/superAdmin",
  },
  {
    path: "/manage-customers-profile/customers-users/:customersUserParamId",
    name: "Customers Profile Users",
    component: CustomerUser,
    layout: "/superAdmin",
  },
  {
    path:
      "/manage-customers-profile/customers-users/:customersUserParamId/view/:CustomerUserParamId",
    name: "Customers Profile Users",
    component: ViewCustomerUser,
    layout: "/superAdmin",
  },
  {
    path:
      "/manage-customers-profile/customers-users/:customersUserParamId/edit/:CustomerUserParamId",
    name: "Customers Profile Users",
    component: EditCustomerUser,
    layout: "/superAdmin",
  },
  {
    path: "/manage-customers-profile/view/:CustomerAdminParamId",
    name: "Customers Profile Management",
    component: ViewCustomerAdmin,
    layout: "/superAdmin",
  },
  {
    path: "/manage-customers-profile/edit/:CustomerAdminParamId",
    name: "Customers Profile Management",
    component: EditCustomerAdmin,
    layout: "/superAdmin",
  },
  {
    path: "/custom-metrics",
    name: "Custom Metrics",
    component: CustomMetrics,
    layout: "/superAdmin",
  },
  {
    path: "/custom-metrics/inquiry/:inquiryParamId/edit/:CustomParamId",
    name: "Custom Metrics",
    component: EditCustom,
    layout: "/superAdmin",
  },
  {
    path: "/custom-metrics/inquiry/:inquiryParamId/view/:CustomParamId",
    name: "Custom Metrics",
    component: ViewCustom,
    layout: "/superAdmin",
  },
  {
    path: "/findings",
    name: "Admin Findings",
    component: Findings,
    layout: "/superAdmin",
  },
  {
    path: "/findings/create",
    name: "Admin Findings Create",
    component: CreateFindings,
    layout: "/superAdmin",
  },
  {
    path: "/findings/view/:FindingsParamId",
    name: "Admin Findings View",
    component: ViewFindings,
    layout: "/superAdmin",
  },
  {
    path: "/findings/edit/:FindingsParamId",
    name: "Admin Findings Edit",
    component: EditFindings,
    layout: "/superAdmin",
  }, //Adding RecommendationManagement routes
  {
    path: "/manage-recommendations",
    name: "Admin Recommendation",
    component: RecommendationManagement,
    layout: "/superAdmin",
  },
  {
    path: "/manage-recommendations/create",
    name: "Admin Recommendation Create",
    component: CreateRecommendation,
    layout: "/superAdmin",
  },
  {
    path: "/manage-recommendations/view/:RecommendationsParamId",
    name: "Admin Recommendation View",
    component: ViewRecommendation,
    layout: "/superAdmin",
  },
  {
    path: "/manage-recommendations/edit/:RecommendationsParamId",
    name: "Admin Recommendation Edit",
    component: EditRecommendation,
    layout: "/superAdmin",
  },
  //Adding Roadmap management components routes
  {
    path: "/manage-roadmap",
    name: "Admin roadmap",
    component: RoadmapManagement,
    layout: "/superAdmin",
  },
  {
    path: "/manage-roadmap/create",
    name: "Admin roadmap Create",
    component: CreateRoadmap,
    layout: "/superAdmin",
  },
  {
    path: "/manage-roadmap/view/:roadmapId",
    name: "Admin roadmap View",
    component: ViewRoadmap,
    layout: "/superAdmin",
  },
  {
    path: "/manage-roadmap/edit/:roadmapId",
    name: "Admin roadmap Edit",
    component: EditRoadmap,
    layout: "/superAdmin",
  },
  {
    path: "/monitor-activity",
    name: "Monitor Activity",
    component: MonitorActivity,
    layout: "/superAdmin",
  },
  {
    path: "/monitor-activity/view-respondents/:inquiryId",
    name: "View Respondents",
    component: SurveyFormRespondents,
    layout: "/superAdmin",
  },
  {
    path: "/monitor-activity/view-survey-form/:inquiryId/:customerUserId",
    name: "View Survey Form from Monitor Activity",
    component: ViewSurveyForm,
    layout: "/superAdmin",
  },

  // view insights routes
  {
    path: "/dashboard/view-insights/:inquiryId/overview",
    name: "View Insights Overview",
    component: ViewInsights,
    layout: "/superAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/overview/participants",
    name: "View Insights Overview",
    component: Participants,
    layout: "/superAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/overview/documents",
    name: "View Insights Overview",
    component: Documents,
    layout: "/superAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/overview/advance-insights",
    name: "View Insights Overview",
    component: AdvanceInsights,
    layout: "/superAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/findings",
    name: "View Insights Findings",
    component: ViewInsights,
    layout: "/superAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/scenarios",
    name: "View Insights Scenarios",
    component: ViewInsights,
    layout: "/superAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/inputs",
    name: "View Insights Inputs",
    component: ViewInsights,
    layout: "/superAdmin",
  },
  {
    path: "/dashboard/view-insights/:inquiryId/roadmap",
    name: "View Insights Roadmap",
    component: ViewInsights,
    layout: "/superAdmin",
  },
];
