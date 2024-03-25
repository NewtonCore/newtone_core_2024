import loadable from '@loadable/component'


import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { NEWTON_LOADING_IMAGE } from "../constants/AppImages";
import { COMPANY_ROUTE, HOME_ROUTES, TALENT_ROUTE } from "./RouteLinks";
import UploadSkillTest from '../components/pages/company/CompanySkillTest/UploadSkillTest';
import DownloadSkillResult from '../components/pages/company/CompanySkillTest/DownloadSkillResult';

const About = React.lazy(() => import('../components/pages/applicant/About/About'))
const AppImage = React.lazy(() => import('../components/organisms/AppImage/AppImage'))
const ApplicantBlog = React.lazy(() => import('../components/pages/applicant/ApplicantBlog/ApplicantBlog'))
const ViewCompany = React.lazy(() => import('../components/pages/applicant/AboutCompany/AboutCompany'))
const ViewBlog = React.lazy(() => import('../components/pages/applicant/ApplicantBlog/ViewBlog/pagecomponents/ViewBlog'))
const ApplicantFAQ = React.lazy(() => import('../components/pages/applicant/ApplicantFAQ/ApplicantFAQ'))
const ApplicantHome = React.lazy(() => import('../components/pages/applicant/ApplicantHome/ApplicantHome'))
const ConfirmJobOffer = React.lazy(() => import('../components/pages/applicant/ConfirmJobOffer/ConfirmJobOffer'))
const ResultsPage = React.lazy(() => import('../components/pages/applicant/Tests/ResultsPage'))
const CompanyJobs = React.lazy(() => import('../components/pages/company/CompanyJobs/CompanyJobs'))
const PrivacyPolicy = React.lazy(() => import('../components/pages/applicant/PrivacyPolicy/PrivacyPolicy'))
const CompanyMakePayment = React.lazy(() => import('../components/pages/company/CompanyMakePayment/CompanyMakePayment'))
const CompanyScheduleCall = React.lazy(() => import('../components/pages/company/CompanyScheduleCall/CompanyScheduleCall'))
const AsTalent = React.lazy(() => import('../components/pages/homepage/AsTalent/AsTalent'))

const AsCompany = React.lazy(() => import('../components/pages/homepage/AsCompany/AsCompany'))
const ListOfSkills = React.lazy(() => import('../components/pages/homepage/ListOfSkills/ListOfSkills'))
const ScrollToTop = React.lazy(() => import('./ScrollToTop'))
const PasswordResetPage = React.lazy(() => import('./../components/pages/homepage/ResetPassword/PasswordReset'))
const ResetPassword = React.lazy(() => import('../components/pages/homepage/ResetPassword/ResetPassword'))
const UploadGorillaResult = React.lazy(() => import('../components/pages/company/CompanyGorillaTest/UploadGorillaResult'))
const AppDataProvider = React.lazy(() => import("./Providers/AppDataProvider"));
const TermsOfUse = React.lazy(() =>
  import("../components/pages/TermsOfUse/TermsOfUse")
);
const AuthProvider = React.lazy(() => import("./Providers/AuthProvider"));
const ProtectedTalent = React.lazy(() => import("./Layouts/ProtectedTalent"));
const Protectedcompany = React.lazy(() => import("./Layouts/ProtectedCompany"));
const NotFound = React.lazy(() =>
  import("../components/pages/NotFound/NotFound")
);
const AccountActivation = React.lazy(() =>
  import("../components/pages/homepage/AccountActivation/AccountActivation")
);
const CompanyDashboard = React.lazy(() =>
  import("../components/pages/company/CompanyDashboard/CompanyDashboard")
);
const CompanyEditProfile = React.lazy(() =>
  import("../components/pages/company/CompanyProfile/CompanyEditProfile")
);
const CompanyChangePass = React.lazy(() =>
  import("../components/pages/company/CompanyChangePass/CompanyChangePass")
);

const Tests = React.lazy(() =>
  import("../components/pages/applicant/Tests/Tests")
);
const TalentDashboard = React.lazy(() =>
  import("../components/pages/applicant/TalentDashboard/TalentDashboard")
);

const ApplicantFindJob = React.lazy(() =>
  import("../components/pages/applicant/ApplicantFindJob/ApplicantFindJob")
);

const ViewJob = React.lazy(() =>
  import("../components/pages/AppPages/ViewJob/ViewJob")
);

const JobAvailability = React.lazy(() =>
  import("../components/pages/applicant/JobAvailability/JobAvailability")
);

const Updates = React.lazy(() =>
  import("../components/pages/applicant/Updates/Updates")
);

const CompanyUpdates = React.lazy(() =>
  import("../components/pages/company/CompanyUpdates/CompanyUpdates")
);

const EditProfile = React.lazy(() =>
  import("../components/pages/applicant/EditProfile/EditProfile")
);
const Settings = React.lazy(() =>
  import("../components/pages/applicant/Settings/Settings")
);

const TestStepTwo = React.lazy(() =>
  import("../components/pages/applicant/Tests/TestStepTwo")
);

const TestStepThree = React.lazy(() =>
  import("../components/pages/applicant/Tests/TestStepThree")
);

const MyJobStatus = React.lazy(() =>
  import("../components/pages/applicant/MyJobStatus/MyJobStatus")
);

const CompanyHiredTalents = React.lazy(() =>
  import("../components/pages/company/CompanyHiredTalents/CompanyHiredTalents")
);

const CompanyViewTalents = React.lazy(() =>
  import("../components/pages/applicant/MyJobStatus/CompanyViewTalents")
);

const CompanyPostJob = React.lazy(() =>
  import("../components/pages/company/CompanyPostJob/CompanyPostJob")
);

const AboutTalent = React.lazy(() =>
  import("../components/pages/applicant/AboutTalent/AboutTalent")
);

const JobOfferLetter = React.lazy(() =>
  import("../components/pages/applicant/JobOfferLetter/JobOfferLetter")
);

const JobRejectLetter = React.lazy(() =>
  import("../components/pages/applicant/JobRejectLetter/JobRejectLetter")
);

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <center>
          <LinearProgress />
          <AppImage
            style={{ height: 30, marginTop: 20 }}
            image={NEWTON_LOADING_IMAGE}
          />
        </center>
      }
    >
      <ScrollToTop />
      <AuthProvider>
        <AppDataProvider>
          <Routes>
            <Route exact path={HOME_ROUTES.index} element={<ApplicantHome />} />

            <Route exact path={HOME_ROUTES.home} element={<ApplicantHome />} />
            <Route path="*" element={<NotFound></NotFound>} />
            <Route path={HOME_ROUTES.blog} element={<ApplicantBlog />} />
            <Route path={HOME_ROUTES.viewBlog} element={<ViewBlog />} />
            <Route path={HOME_ROUTES.about} element={<About />} />
            <Route path={HOME_ROUTES.asTalent} element={<AsTalent />} />
            <Route path={HOME_ROUTES.asCompany} element={<AsCompany />} />
            <Route path={HOME_ROUTES.viewJobID} element={<ViewJob />} />
            <Route
              exact
              path={HOME_ROUTES.accountActivationID}
              element={<AccountActivation />}
            />

            <Route
              exact
              path={HOME_ROUTES.passwordResetPage}
              element={<PasswordResetPage />}
            />

            <Route
              exact
              path={HOME_ROUTES.resetPassword}
              element={<ResetPassword />}
            />

            <Route
              exact
              path={HOME_ROUTES.listOfSkills}
              element={<ListOfSkills />}
            />

            <Route path={TALENT_ROUTE.findjob} element={<ApplicantFindJob />} />

            <Route path={HOME_ROUTES.faqs} element={<ApplicantFAQ />} />
            <Route
              path={HOME_ROUTES.privacyPolicy}
              element={<PrivacyPolicy />}
            />
            <Route path={HOME_ROUTES.termsOfUse} element={<TermsOfUse />} />

            <Route path={TALENT_ROUTE.index} element={<ProtectedTalent />}>
              <Route
                path={TALENT_ROUTE.dashboard}
                element={<TalentDashboard />}
              />

              <Route
                path={TALENT_ROUTE.jobAvailability}
                element={<JobAvailability />}
              />
              <Route path={TALENT_ROUTE.updates} element={<Updates />} />
              <Route path={TALENT_ROUTE.settings} element={<Settings />} />
              <Route path={TALENT_ROUTE.tests} element={<Tests />} />
              <Route path={TALENT_ROUTE.testsID} element={<TestStepTwo />} />

              <Route
                path={TALENT_ROUTE.testsIDskillID}
                element={<TestStepThree />}
              />
              <Route
                path={TALENT_ROUTE.editProfile}
                element={<EditProfile />}
              />
              <Route path={TALENT_ROUTE.jobStatus} element={<MyJobStatus />} />
              <Route
                path={TALENT_ROUTE.viewProfile}
                element={<AboutTalent />}
              />

              <Route
                path={TALENT_ROUTE.viewCompanyID}
                element={<ViewCompany />}
              />
              <Route path={TALENT_ROUTE.recenttest} element={<ResultsPage />} />

              <Route
                path={TALENT_ROUTE.acceptJobOfferID}
                element={<ConfirmJobOffer />}
              />
            </Route>

            <Route path={COMPANY_ROUTE.index} element={<Protectedcompany />}>
              <Route
                path={COMPANY_ROUTE.update_password}
                element={<CompanyChangePass />}
              />
              <Route
                path={COMPANY_ROUTE.dashboard}
                element={<CompanyDashboard />}
              />
              <Route
                path={COMPANY_ROUTE.profile}
                element={<CompanyEditProfile />}
              />

              <Route
                path={COMPANY_ROUTE.updates}
                element={<CompanyUpdates />}
              />
              <Route
                path={COMPANY_ROUTE.post_job}
                element={<CompanyPostJob />}
              />

              <Route path={COMPANY_ROUTE.my_jobs} element={<CompanyJobs />} />
              <Route path={COMPANY_ROUTE.viewJobID} element={<ViewJob />} />

              <Route
                path={COMPANY_ROUTE.hired_talents}
                element={<CompanyHiredTalents />}
              />

              <Route
                path={COMPANY_ROUTE.schedule}
                element={<CompanyScheduleCall />}
              />

              <Route
                path={COMPANY_ROUTE.view_talentsID}
                element={<CompanyViewTalents />}
              />

              <Route
                path={COMPANY_ROUTE.viewTalentID}
                element={<AboutTalent />}
              />
              <Route
                path={COMPANY_ROUTE.offerJobIdApplyId}
                element={<JobOfferLetter />}
              />
              <Route
                path={COMPANY_ROUTE.rejectJobIdApplyId}
                element={<JobRejectLetter />}
              />

              <Route
                path={COMPANY_ROUTE.viewCompany}
                element={<ViewCompany />}
              />

              <Route
                path={COMPANY_ROUTE.viewCompanyID}
                element={<ViewCompany />}
              />

              <Route
                path={COMPANY_ROUTE.makePaymentForTalentID}
                element={<CompanyMakePayment />}
              />
              <Route path={COMPANY_ROUTE.TestGorillaResult} element={<UploadGorillaResult />} />
              <Route path={COMPANY_ROUTE.TestQuestion} element={<UploadSkillTest />} />
              <Route path={COMPANY_ROUTE.TestQuestion} element={<UploadSkillTest />} />
              <Route path={COMPANY_ROUTE.DownloadSkillResult} element={<DownloadSkillResult />} />




            </Route>

          </Routes>
        </AppDataProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default AppRoutes;
