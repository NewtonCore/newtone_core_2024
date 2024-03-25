let HOME_ROUTES = {
  index:"/",
  home:"",
  about:"about",
  blog:"blog",
  faqs:"faqs",
  viewBlog:"view-blog",
  asTalent:"as-a-talent",
  asCompany:"as-a-company",
  privacyPolicy:"privacy-policy",
  termsOfUse:"terms-of-use",
  listOfSkills:"list-of-skills",
  findjob: "find-job",
  viewJobID: "view-job/:jobID/",
  viewJob: "view-job/",
  accountActivation: "activate/",
  accountActivationID: "activate/:param1/:param2",
  resetPassword: "reset-password/:param1/:param2",
  passwordResetPage: "password-reset/",



  // rejectJobIdApplyId: "view-job/reject/:jobID/:ApplyId",


}

let TALENT_ROUTE = {
  index: "talent/",
  dashboard: "dashboard",
  dashboard2: "dashboard2",
  findjob: "find-job",
  jobAvailability: "job-availability",
  updates: "updates",
  settings: "settings",
  tests: "tests/",
  testsID: "tests/:testID/",
  testsIDskillID: "tests/:testID/:skillID",
  editProfile: "edit-profile",
  jobStatus: "job-status",
  viewProfile: "view-profile/",
  viewJobID: "view-job/:jobID/",
  viewJob: "view-job/",
  viewCompanyID: "view-company/:companyID/",
  viewCompany: "view-company/",
  recenttest: "result-test/",
  acceptJobOffer: "accept-job-offer/",
  acceptJobOfferID: "accept-job-offer/:jobOfferID/",

};

let COMPANY_ROUTE = {
  index: "company/",
  dashboard: "dashboard",
  profile: "profile",
  update_password: "update-password",
  updates: "updates",
  post_job: "post-job",
  hired_talents: "hired-talents",
  view_talents: "view-talents/",
  view_talentsID: "view-talents/:jobID/",
  my_jobs: "my-jobs",
  viewJob: "view-job/",
  viewJobID: "view-job/:jobID/",
  offerJobIdApplyId: "view-job/:jobID/:ApplyId",
  rejectJobIdApplyId: "view-job/reject/:jobID/:ApplyId",
  viewTalent: "view-talent/",
  viewTalentID: "view-talent/:talentID/",
  schedule: "schedule",
  viewCompany: "view-company/",
  viewCompanyID: "view-company/:companyID/",
  makePaymentForTalent: "make-payment/",
  makePaymentForTalentID: "make-payment/:jobOfferID/",  
  TestGorillaResult: "test-gorilla-result",
  TestQuestion: "test-question",
  DownloadSkillResult: "download-skill-result",



};

export { TALENT_ROUTE, COMPANY_ROUTE,HOME_ROUTES };
