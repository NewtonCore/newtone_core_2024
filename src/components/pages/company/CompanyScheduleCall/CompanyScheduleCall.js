import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../../organisms/AppRow/AppRow";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import {
  BLACK_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_LIGHT,
  SECONDARY_LIGHT_COLOR,
} from "../../../../constants/AppColors";

import {
  FormatDate,
  FormatToDateFormat,
  JsonToformData,
} from "../../../../constants/utils";
import {
  ScheduleInterview,
  toggleShowMeetingScheduledModal,
} from "../../../../app-redux/features/ScheduleInterview/ScheduleInterviewSlice";
import MeetingConfirmedModal from "../../../organisms/MeetingConfirmedModal/MeetingConfirmedModal";
import { toast } from "react-toastify";
import { COMPANY_ROUTE } from "../../../../routes/RouteLinks";
import { useNavigate } from "react-router-dom";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
function CompanyScheduleCall() {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const ScheduleInterviewNewton = useSelector(
    (state) => state.ScheduleInterviewNewton
  );
  const {
    newtonAvailabilityState,
    showMeetingScheduled,
    ScheduleInterviewState,
  } = ScheduleInterviewNewton;

  const [dayOfWeek, SetDayOfWeek] = useState(new Date().getDay());
  const [dateSelected, SetDateSelected] = useState(new Date());

  const [timeSelected, SelectTime] = useState(undefined);

  const [schedule_times, Setschedule_times] = useState([]);
  const [excludes_time, SetExcludes_times] = useState([]);


  const ScheduleInterviewFn = () => {
    // console.log(dateSelected.toString())
    // return 0

    let timezone = dateSelected.toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1];

    // return 0
    dispatch(
      ScheduleInterview(
        JsonToformData({
          date: FormatToDateFormat(dateSelected, "yyyy-MM-dd"),
          time: timeSelected,
          time_zone: timezone,
        })
      )
    )
      .unwrap()
      .then((res) => {
        dispatch(toggleShowMeetingScheduledModal());
        // toast.success(`Success`, { autoClose: 2000 });
      })

      .catch((error) => {
        // console.log(error)
        // console.error(error)
        toast.warning(`${error}`, { autoClose: 2000 });
      });
  };

  const getNewtonAvailabilityFn = (e) => {
    // console.log(new Date(e))
    SetDayOfWeek(new Date(e).getDay(e));
    SetDateSelected(new Date(e));
  };

  const navigateToDashboard = () => {
    navigate(`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.dashboard}`);
    dispatch(toggleShowMeetingScheduledModal());
  };

  useEffect(() => {
    SelectTime(undefined);
    {
      dayOfWeek !== undefined &&
      newtonAvailabilityState.data.hasOwnProperty("availabilities")
        ? Setschedule_times(
            newtonAvailabilityState.data["availabilities"].filter((data) => {
              return data.week_day === parseInt(dayOfWeek);
            })
          )
        : Setschedule_times([]);
    }
  }, [dayOfWeek, newtonAvailabilityState]);
  useEffect(() => {
    SetDateSelected(new Date());
    SetDayOfWeek(parseInt(new Date().getDay()));
  }, []);

  // console.log(schedule_times);
  return (
    <CompanyLayout pageTitle="Schedule a call with us">
      {ScheduleInterviewState.loading && <LinearProgress />}
      <MeetingConfirmedModal
        actionButtonFn={() => navigateToDashboard()}
        show={showMeetingScheduled}
        onHide={() => dispatch(toggleShowMeetingScheduledModal())}
      />
      <WhiteBgDiv>
        <>
          <AppRow>
            <AppCol size={6} md_size={12} lg_size={8} sm_size={12} xs_size={12}>
              {/* {JSON.stringify(newtonAvailabilityState)} */}

              <div className="border border-2 rounded-3">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    // orientation="landscape"
                    // showDaysOutsideCurrentMonth
                    fixedWeekNumber={6}
                    defaultValue={dayjs(new Date())}
                    onChange={(e) => getNewtonAvailabilityFn(e)}
                    disablePast
                  />
                </LocalizationProvider>
              </div>
            </AppCol>
            <AppCol size={6} md_size={12} lg_size={4} sm_size={12} xs_size={12}>
              {dayOfWeek === undefined ? (
                <>
                  <span className="text-muted">Select a day of the week</span>
                </>
              ) : (
                <>
                  <AppRow className="mb-5 mt-3">
                    {schedule_times.length !== 0 ? (
                      <>
                        <span className="text-muted mb-3">
                          * Select a preferred time for{" "}
                          {FormatDate(dateSelected)}
                        </span>

                        {schedule_times[0].data.map((val) => {
                          return (
                            <AppCol
                              key={val.id}
                              size={4}
                              md_size={4}
                              lg_size={6}
                              sm_size={4}
                              xs_size={6}
                            >
                              <AppButton
                                disabled={ScheduleInterviewState.loading}
                                onClick={() => SelectTime(val.time)}
                                backgroundColor={
                                  timeSelected === val.time
                                    ? PRIMARY_COLOR_LIGHT
                                    : SECONDARY_LIGHT_COLOR
                                }
                                //  color="black"
                                style={{
                                  color:
                                    timeSelected === val.time
                                      ? BLACK_COLOR
                                      : BLACK_COLOR,
                                  borderWidth: 1,
                                  borderColor: PRIMARY_COLOR,
                                  fontSize: 10,
                                }}
                                key={val.id}
                              >
                                {/* {timeSelected === val.time &&
                               <CheckCircle fontSize="10" style={{color:PRIMARY_COLOR}}/>
                               }   */}

                                {val.time}
                              </AppButton>
                            </AppCol>
                          );
                        })}
                        <AppContainerFluid>
                          <AppButton
                            disabled={
                              dateSelected === undefined ||
                              timeSelected === undefined
                            }
                            loading={ScheduleInterviewState.loading}
                            onClick={() => ScheduleInterviewFn()}
                            label="Schedule Call"
                          ></AppButton>
                        </AppContainerFluid>
                      </>
                    ) : (
                      <>
                        <div class="alert alert-warning" role="alert">
                          Sorry. Cannot schedule meeting on{" "}
                          {FormatDate(dateSelected)}
                        </div>
                      </>
                    )}
                  </AppRow>
                </>
              )}
            </AppCol>
          </AppRow>
        </>
      </WhiteBgDiv>
    </CompanyLayout>
  );
}

export default CompanyScheduleCall;
