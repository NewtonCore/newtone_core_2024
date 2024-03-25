import { configureStore } from "@reduxjs/toolkit";
import appDataSlice from "./features/appData/appDataSlice";
import authSlice from "./features/Auth/authSlice";
import companyDebitSlice from "./features/companyDebitInfo/companyDebitSlice";
import editCompanyProfileSlice from "./features/editCompanyProfile/editCompanyProfileSlice";
import TalentProfileSlice from "./features/TalentProfile/TalentProfileSlice";
import jobCompanySlice from "./features/jobCompany/jobCompanySlice";
import questionsSlice from "./features/Questions/questionsSlice";
import skillSlice from "./features/Skill/skillSlice";
import talentSlice from "./features/TalentSlice/talentSlice";
import ScheduleInterviewSlice from "./features/ScheduleInterview/ScheduleInterviewSlice";

const rootStore = configureStore({
  reducer: {
    appData: appDataSlice,
    auth: authSlice,
    skill: skillSlice,
    questions: questionsSlice,
    TalentProfile:TalentProfileSlice,
    talent:talentSlice,
    editCompany:editCompanyProfileSlice,
    jobCompany:jobCompanySlice,
    companyDebit:companyDebitSlice,
    ScheduleInterviewNewton:ScheduleInterviewSlice


  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

export default rootStore;
